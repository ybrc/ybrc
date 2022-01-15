# 自己动手实现一个工具将Admin权限提升到System权限


<!--more-->
![IP定位](https://tool.lu/netcard/)



# 自己动手实现一个工具将Admin权限提升到System权限

### 0x00 前言

最近又碰上一种需要提升权限到系统最高权限（System）的情况，于是想搬出以前从网上GET到的一种利用系统服务启动的路子来实现这个需求，然后发现在最新的Win10系统上有点不好使了，所以才有了本文一系列的学习记录。

### 0x01 概念解释

涉及Windows系统权限的话题其实可以展开很多来讲，本文重点是如何从正常用户拥有的管理员权限（Administrator）提升到拥有更高的SYSTEM用户的权限。

注意，与安全漏洞导致的权限提升不同，这里的权限提升操作是系统允许的“合法”操作，从某种角度看有点类似Linux系统的sudo操作，当然前提是用户需要有管理员的权限。

正常Windows系统中会存在很多的用户，根据其所拥有的权限不同会有所分级（组）。比如正常的个人电脑的默认登录账户一般拥有管理员权限，当然也可能会创建多个权限低一些的普通账户。而权限更低一些的有默认不启用的来宾账户，只能访问和操作比较有限的一些资源，权限更高的则有系统运行级别使用的SYSTEM账户等。

系统上运行的每个应用程序，通常都是绑定一个运行账户的，这通常就是该进程对应所能允许的运行权限了。打开任务管理器，查看进程详细信息（Win7系统在进程标签页，需勾选下方的“显示所有用户的进程”，Win10系统的在详细信息标签页），就可以看到系统中运行的每个进程和相应的权限账户，其中多数进程是系统权限级别运行的系统服务进程：

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image1.png)

注意，这里的管理员账户“Administrator”只是一个默认的管理员名称，可以创建其他比如张三或李四的账户，并将其设置为管理员账户，其实就是将普通账户加入到管理员组“Administrators”。

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image2.png)

还需要区分的一点是Windows特有的UAC权限提升操作。这是从Win Vista开始引入的一种特殊的权限控制机制，其本质是加一道防御锁给管理员用户，多数情况用不着打开这道锁，只有需要进行管理员权限及以上的操作时才需要多进行一步解锁的操作（通常就是右键“管理员权限运行”）。这个特殊的控制是利用系统启动桌面界面（explorer.exe）时设置了普通账户权限运行，这样即使当前登录的账户是管理员账户，也可能需要在某些时候右键以管理员权限运行（根据UAC设置级别不同情况不一样），才能真正获得管理员权限。想解出这种限制除了降低UAC级别外，还有一种方便的小技巧，就是先以管理员权限运行一个命令行，然后重启桌面进程。当然关于UAC的话题还有很多，这里不做过多的介绍。

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image3.png)

### 0x02 提升方式

根据上述理解，本文的目的应该是要在具有管理员权限的前提下，将用户的操作权限进一步提升到能够运行系统服务的系统（SYSTEM）权限。这里介绍几种从网上整理的权限提升方式。

1、 创建系统服务，借助服务进程（svchost.exe，运行在SYSTEM账户下，具有系统权限）来运行子进程。

比如可以通过以下命令创建并启动一个名称为system_srv的专用服务，来启动一个cmd命令行窗口

```
sc Create system_srv binPath= "cmd /K start" type= own type= interact
sc start system_srv
```

但是这种方式在最新的Win10系统上会直接失败，在Win7上由于启动的是一个cmd命令行窗口交互程序，会弹出如下提示，需要点击交互窗口的“查看消息”后才能得到一个具有系统权限的cmd进程。

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image4.png)

点击“查看消息”后进入cmd窗口服务专门的界面，此时已获得SYSTEM权限：

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image5.png)

此时再看下进程列表，也显示该进程由SYSTEM账户运行：

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image6.png)

此方式使用完毕后可以用如下命令删除该服务：

```
sc delete system_srv
```

2、 创建计划任务，并指定运行权限为SYSTEM，最终也是由系统服务svchost.exe来启动指定的子进程。

比如可以通过以下命令创建一个名称为system_srv的计划任务，来启动一个记事本程序

```
schtasks /Create /TN system_srv /SC DAILY /ST 12:45 /TR notepad.exe /RU SYSTEM
```

虽然这个方式适用最新的Win10系统，但是运行后发现，虽然通过任务管理器能够在进程列表里找到记事本程序确实以SYSTEM用户和权限启动了，但是奇怪的是桌面上并没有弹出记事本的窗口，这里猜测是因为计划任务创建的进程只能在系统后台运行？？

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image7.png)

同样可以通过如下命令在任务运行结束后查看或删除计划任务：

```
schtasks /Query /TN system_srv
schtasks /Delete /TN system_srv /F
```

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image8.png)

3、 使用第三方工具，如用incognito或TokenManipulation复制token，或者用PowellShell的安装模块“NtObjectManager”指定新建进程的父进程。

这里介绍下NtObjectManager，该模块是可以通过PowerShell命令直接从PowerShell仓库（类似Python仓库）进行安装的项目工具，项目地址如下：

[https://www.powershellgallery.com/packages/NtObjectManager/1.1.1](https://www.powershellgallery.com/packages/NtObjectManager/1.1.1)

Win10系统通过以下PoweShell指令可以直接安装该工具：

```
Install-Module -Name NtObjectManager -RequiredVersion 1.1.1
```

然后就可以使用该工具的指令集来创建一个指定父进程的子进程，新建的子进程将继承父进程的运行账户和权限：

```
$p = Get-NtProcess -Name TrustedInstaller.exe
$proc = New-Win32Process cmd.exe -CreationFlags NewConsole -ParentProcess $p
```

如指定父进程为“TrustedInstaller.exe”创建一个cmd命令行窗口，直接获取系统最高的权限（SYSTEM用户+NT SERVICE TrustedInstaller组）

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image9.png)

### 0x03 动手实现

之所以会想自己动手实现一个工具，是因为觉得使用powershell环境还是不太方便，win7系统无法直接使用Install-Module指令来安装NtObjectManager工具，于是萌生研究其实现原理并动手Copy上述功能的想法。

首先定位研究目标的代码，既然是脚本工具，肯定也是安装在本地的某个目录，果不其然：

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image10.png)

查看NtObjectManager.psd1文件可以找到相关指令和函数“Get-NtProcess”和“New-Win32Process”的声明：

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image11.png)

然后从NtObjectManager.psm1文件的定义中可以看出，具体实现应该是依赖NtApiDotNet.dll中的NtProcess程序集：

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image12.png)

使用dnspy反编译NtApiDotNet.dll，定位NtProcess程序集，找到其中一个关键的方法“GetProcesses”，发现该方法可以用来获取系统上运行过的进程：

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image13.png)

该方法实际上都是调用的同一个ntdll的API函数“NtGetNextProcess”：

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image14.png)

该函数声明如下，通过该API函数可以直接遍历系统上运行过的进程，包括已经终结退出的进程，拿到指定进程的进程句柄，进而获取到该进程的信息如进程ID，token令牌等。

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image15.png)

拿到指定进程的句柄之后，就可以通过设置进程属性中的父进程句柄，来实现指定父进程继承该进程的运行权限。借用下网上的代码，稍作修改，就简单实现了上述功能的工具，可以指定系统任意运行过的进程名来运行任意程序，运行后将继承前者的权限。

```
typedef NTSTATUS (NTAPI* FPNtGetNextProcess)(
    _In_    HANDLE ProcessHandle,
    _In_    DWORD  DesiredAccess,
    _In_    DWORD  HandleAttributes,
    _In_    int Flags,
    _Out_    HANDLE* NewProcessHandle
);
 
HANDLE get_process_handle(char *processName)
{
    HANDLE hGet = NULL;
    HANDLE hResult = NULL;
    HMODULE hNtdll = GetModuleHandleA("ntdll.dll");
    FPNtGetNextProcess fpNtGetNextProcess = (FPNtGetNextProcess)GetProcAddress(hNtdll, "NtGetNextProcess");
    while(fpNtGetNextProcess(hGet, MAXIMUM_ALLOWED, NULL, 0, &hGet) == STATUS_SUCCESS)
    {
        char buf[MAX_PATH] = {0};
        ULONG size = 0;
        GetProcessImageFileNameA(hGet, buf, MAX_PATH); 
        if (strstr(buf, processName) != NULL)
        {
            hResult = hGet;
        }
    }
    return hResult;
}
 
int main(int argc, char* argv[])
{
    EnablePrivilege(SE_DEBUG_NAME); //必须是debug权限
    char* processName = argv[1];
    char* cmdline = argv[2];
    HANDLE hParent = get_process_handle(processName, bPrintInfo);
    PROCESS_INFORMATION pi = {0};
    STARTUPINFOEXA si = {sizeof(STARTUPINFOEXA)};
    SIZE_T cbAListSize = 0;
    InitializeProcThreadAttributeList(NULL, 1, 0, &cbAListSize);
    PPROC_THREAD_ATTRIBUTE_LIST pAList = (PPROC_THREAD_ATTRIBUTE_LIST)HeapAlloc(GetProcessHeap(), 0, cbAListSize);
    InitializeProcThreadAttributeList(pAList, 1, 0, &cbAListSize);
    UpdateProcThreadAttribute(pAList, 0, PROC_THREAD_ATTRIBUTE_PARENT_PROCESS, &hParent, sizeof(HANDLE), NULL, NULL);
    si.lpAttributeList = pAList;
    CreateProcessA(NULL, cmdline, NULL, NULL, FALSE, EXTENDED_STARTUPINFO_PRESENT|CREATE_NEW_CONSOLE, NULL, NULL, &si.StartupInfo, &pi);
    DeleteProcThreadAttributeList(pAList);
    HeapFree(GetProcessHeap(),0,pAList);
    return 0;
}
 
```

如下即为实现效果，以winlogon.exe（系统登录进程）的运行权限启动一个命令行窗口。

![](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/image16.png)

另外，研究过程中发现一个小彩蛋：使用该工具复制进程权限时，即使所指定的进程已经退出，仍然可以成功将新启动的进程指定为该进程的子进程并完全继承其权限，真是所谓的“借尸还魂”！对其感兴趣的可以自动动手实验下。

### 0x04 总结

本文通过笔者对于Windows权限控制认识的角度出发对相关知识内容进行整理和学习，希望能够抛砖引玉，不仅帮助到有相同需求的朋友，也能够引起思考和启发，分享更多的研究知识和成果。

### 0x05 参考链接

1、  [https://cloud.tencent.com/developer/article/1014745](https://cloud.tencent.com/developer/article/1014745)

2、  [https://3gstudent.github.io/3gstudent.github.io/渗透技巧-Token窃取与利用/](https://3gstudent.github.io/3gstudent.github.io/%E6%B8%97%E9%80%8F%E6%8A%80%E5%B7%A7-Token%E7%AA%83%E5%8F%96%E4%B8%8E%E5%88%A9%E7%94%A8/)

3、  [https://blog.csdn.net/whitehack/article/details/6078983](https://blog.csdn.net/whitehack/article/details/6078983)

### 附件:

-   [](https://weiyiling.cn/media/blogs/one/quick-uploads/p46/copy_privilege.zip?mtime=1601804967 "下载文件") [copy_privilege.zip](https://weiyiling.cn/one/copy_privilege_admin_to_system?download=631)  (2.1 MB)


{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/49.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">
