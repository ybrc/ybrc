# 如何在 VMware Fusion 中运行 macOS Monterey （12） Beta

**此文为加密收费内容添加我微信支付后可看:**
<!--more-->
![IP定位](https://tool.lu/netcard/)
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript">$(document).ready(function() {$("#begin_speak").click(function () {
                let content = $("#text").text();
                let msg = new SpeechSynthesisUtterance(content);
                window.speechSynthesis.speak(msg);$("#pause_speak").show();$("#cancel_speak").show();});$("#cancel_speak").click(function () {
                window.speechSynthesis.cancel();$("#pause_speak").hide();$("#resume_speak").hide();$(this).hide();
});$("#pause_speak").click(function () {
                window.speechSynthesis.pause();$("#resume_speak").show();
            });$("#resume_speak").click(function () {
                window.speechSynthesis.resume();$(this).hide();
            });
        });
</script>
   <body>
      <div>
         <input type="button" id="begin_speak"  value="朗读本文">
         <input type="button" id="pause_speak"  style="display:none" value="暂停朗读">
         <input type="button" id="cancel_speak" style="display:none" value="停止朗读">
         <input type="button" id="resume_speak" style="display:none" value="继续朗读">
      </div>
      <div id="text">

![img](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1280,h_712/https://blog.eucse.com/wp-content/uploads/2021/06/42434-82358-888-macOS-Monterey-xl.jpeg)

# 如何在 VMware Fusion 中运行 macOS Monterey （12） Beta

macOS Monterey于6月7日宣布，当然，就像优秀的数字工作空间人员一样，我们进入了测试模式！在最初的Fusion测试期间，我们遇到了一些有趣的错误/延迟，我们已经在这里制定并记录了这些错误/延迟。因此，如果您试图让 Monterey 在 VMware Fusion 中工作并遇到一些问题，请继续阅读！



下载安装macOS 12 Beta.app 后，我发现在Fusion中加载之前将其转换为ISO很有用。我还必须从虚拟机执行此操作，因为我的工作托管Mac会阻止我安装Beta，并且复制ISO比.app文件夹更可靠。

给 Frederik Abeloos 的帽子提示 – 旅行技术专家[。 https://travellingtechguy.blog/macos-big-sur-on-vmware-fusion-12/](https://travellingtechguy.blog/macos-big-sur-on-vmware-fusion-12/)整个过程在 Big Sur VM 中花费了大约 5 分钟，我的终端输出看起来像这样。

![img](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1187,h_763/https://blog.eucse.com/wp-content/uploads/2021/06/image.png)我们最终获得了17.83GB的ISO。经过反复试验，这可以归结为略高于13GB。

安装 macOS 12 Beta 应用后，请逐个执行以下步骤。

```
hdiutil create -o /tmp/Monterey -size 13350m -volname Monterey -layout SPUD -fs HFS+J

hdiutil attach /tmp/Monterey.dmg -noverify -mountpoint /Volumes/Monterey

sudo /Applications/Install\ macOS\ 12\ Beta.app/Contents/Resources/createinstallmedia --volume /Volumes/Monterey --nointeraction 

sudo hdiutil detach /Volumes/Install\ macOS\ 12\ Beta (-force if needed)

hdiutil convert /tmp/Monterey.dmg -format UDTO -o ~/Desktop/Monterey.cdr 

mv ~/Desktop/Monterey.cdr ~/Desktop/Monterey.iso

Optional (to free up space): 
rm /tmp/Monterey.dmg
```

如果从 createinstallmedia 命令收到任何大小错误，要求更多空间，请删除初始 DMG 并相应地增加 13350m 大小。

完成此操作后，即可开始在 Fusion 中构建 VM。

## 步骤 1 – 生成 VM

我在 VMware Fusion Professional Version 12.1.2 （17964953） 中完成了所有测试。

加载 ISO，然后选择您的操作系统。选择 macOS 11。

![Choose Operating System  Select the operating system to be used in this virtual machine.  Choose Disc  or Image  Configuration  Select the operating system for this virtual machine:  Microsoft Windows  >  Linux  Apple OS X  VMware ESX  Other  >  >  >  >  macOS 11.0  macOS 10.15  macOS 10.14  macOS 10.13  macOS 10.12  os x 10.11  os x 10.10  os x 10.9  os x 10.8  Mac OS X 10.7  Mac OS X 10.7 32-bit  Mac OS X Server 10.6 ](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_752,h_645/https://blog.eucse.com/wp-content/uploads/2021/06/image-3.png)

当您到达"完成"页面时。不要单击"完成"。单击"**自定义设置**"。

![完成 虚拟机的配置现已完成。选择"光盘或映像配置虚拟机摘要"来宾操作系统 macOS 11.0 新硬盘容量 80 GB 内存 4 GB 网络与我的 Mac （NAT） 设备共享 设备摘要 2 个 CPU 内核、CD/DVD、USB Cor 声卡 要更改默认虚拟机设置，请单击"自定设置"。](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_752,h_645/https://blog.eucse.com/wp-content/uploads/2021/06/image-4.png)需要 VM 磁盘上大约 80GB 的空间，以便进行升级等。

设置 VM 的文件名。它将默认为macOS 11.0，我将我的更改为12.0 Beta。

![Finish  The configuration of the virtual machine is now complete.  Save As:  Tags:  macOS 12.0 Beta  Where: Virtual Machines  — Share this virtual machine with other users on this Mac  Some features will be limited when sharing a virtual machine.  Sharing is only available when the virtual machine is saved in a  shared folder.  (15 Save  To change the default virtual machine settings, click Customize Settings. ](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_752,h_645/https://blog.eucse.com/wp-content/uploads/2021/06/image-5.png)

接下来，在"设置"中，将"网络适配器"更改为"已禁用"，并将"桥接模式网络"设置为"自动检测"。

![C) Show All  macOS 12.0 Beta: Network Adapter  Connect Network Adapter  This network adapter is configured to use:  Internet Sharing  Share with my Mac  Bridged Networking  • Autodetect  • Wi-Fi  Thunderbolt Ethernet Slot 1  Custom  • Private to my Mac  The virtual machine appears as an  computer on the same physical net  as your Mac. ](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_752,h_536/https://blog.eucse.com/wp-content/uploads/2021/06/image-6.png)

关闭这些选项，将留下一个已关闭电源的 VM。**不要打开电源！**

## 步骤 2 – 设置 VMX 设置

首先，我们需要更改一个选项，并设置一些新的选项。

从虚拟机资源库中，找到新的 macOS 12 Beta 虚拟机。按住 Option 键，然后右键单击 VM。

![img](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_379,h_502/https://blog.eucse.com/wp-content/uploads/2021/06/VMXChange-opt-1.gif)

首先，搜索"board-id.reflectHost"并将其从"真"设置为"假"。

```
board-id.reflectHost = "FALSE"
```

接下来，我们需要根据要反射到 VM 的设备设置主板 ID 和硬件型号。您可以在此处找到主板 ID 和硬件型号的列表。https://mrmacintosh.com/list-of-mac-boardid-deviceid-model-identifiers-machine-models/.如果要 MDM 注册 VM，这些非常重要，这有助于 VM 提供"正确"的版本信息。

```
board-id = "Mac-551B86E5744E2388"
hw.model.reflectHost = "FALSE"
hw.model = "MacBookPro14,3"
```

接下来，我们需要设置序列号。这可以是 Apple 商务管理中用于测试自动注册流程的 Mac 的序列号。或者，它可以是您正在使用的 Mac 的序列号。或者，它可能是一堆乱七八糟的角色！

```
serialNumber.reflectHost = "FALSE"
serialNumber = "C00000000000"
```

接下来，我们需要添加2个选项来处理一些显示问题。非常感谢[斯科特·奈特在这里](https://twitter.com/sdotknight)的小费！如果需要，这可以让您访问登录窗口（我仍然建议稍后进行自动登录更改！

**注意**：有些人报告说，如果您在运行设置助理之前添加这些问题，可能会导致问题。如果您有模糊的屏幕/崩溃与这些，请删除并重新启动。

```
svga.present="FALSE"
appleGPU0.present="TRUE"
```

#### 最后，一个非常重要的不寻常的步骤

在此版本中，如果我们不使用 NIC 类型"vmxnet3"，则在获取 VM 中的 IP 地址时会出现问题。找到下面的（搜索"virtualDev"或"e1000e"）。

```
ethernet0.virtualDev = "e1000e"
```

将"e1000e"替换为"vmxnet3"。

```
ethernet0.virtualDev = "vmxnet3"
```

现在，您可以保存并退出该文件。为了更好地衡量，我退出并重新启动了Fusion。

感谢此讨论线程提供有关 NIC 更改的一些建议。并感谢迈克尔·罗伊（Michael Roy）的内部推动！https://communities.vmware.com/t5/VMware-Fusion-Discussions/How-do-I-specify-Network-Adapter-to-be-vmxnet3-in-Fusion/td-p/2667194

## 步骤 3 – 安装操作系统

现在，可以启动 VM 并运行安装步骤。

![• •e 00 语言选择器 macO 语言 英语（英国） 英语（澳大利亚） 英语（印度） Espaöol Espaöol （拉丁美洲） Franpis](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1136,h_918/https://blog.eucse.com/wp-content/uploads/2021/06/image-7.png)选择您的语言

![•e 00 恢复文件 macO 编辑实用程序窗口 os 从时间机器还原 您有要还原的系统备份。安装 macOS 12 Beta 使用附加的安装程序升级或安装 macOS。Safari 浏览器浏览 Apple 支持以获取有关 Mac 的帮助。 磁盘工具 使用"磁盘工具"修复或抹掉磁盘。](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1136,h_918/https://blog.eucse.com/wp-content/uploads/2021/06/image-8.png)
选择安装 macOS 测试版。无需在磁盘实用程序中执行任何操作

![• •e 00 安装 macOS 12 Beta macO 编辑窗口 mac macOS 12 Beta 要设置 macOS 12 Beta 的安装，请单击"继续"。](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1136,h_918/https://blog.eucse.com/wp-content/uploads/2021/06/image-9.png)

![• •e 00  Install macOS 12 Beta  macO  Edit Window  macOS 12 Beta  macOS 12 Beta will be installed on the disk "Macintosh HD".  Macintosh HD  About 17 minutes remaining ](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1136,h_918/https://blog.eucse.com/wp-content/uploads/2021/06/image-10.png)

## 步骤 4 – 设置助理

现在，当您登陆设置助理时。**关闭 VM**，然后拍摄快照。这是您的预设置快照，如果您需要更改序列号或重新设置，可以返回该快照。

然后，可以启动 VM 并开始使用。我在这里的第一条建议是，耐心！至少对我来说，这是非常缓慢的。坚持下去，你就会到达那里。

完成所有步骤，您应该进入帐户创建屏幕，然后登陆桌面。

**!!!重要步骤!!!**– 当您点击桌面时，请按照以下过程操作 – 不要关机或执行任何其他操作：

前往"系统偏好设置"/"用户与群组"。单击"登录选项"，然后单击挂锁。使用您的新密码进行身份验证。

将"自动登录"设置为您的用户名。

![img](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_678,h_507/https://blog.eucse.com/wp-content/uploads/2021/06/image-11.png)

这样做的原因是登录窗口似乎存在问题，使您陷入登录循环/黑屏。

## 第5步 - 去喝杯啤酒，你完成了。

现在可以安装 VMtools（接受所有安全和隐私提示，重新启动）、**关闭，并在安装后点拍摄另一个快照**，以便返回到干净的 VM。

请关机并拍摄另一张快照！然后，如果您注册了MDM，**请在注册后拍摄另一张快照**。我让 VM 进入睡眠状态，但无法将其唤醒，即使在重新启动后也是如此！我的"全新安装 + VMtools"快照为我节省了大量时间。

感谢[霍华德·布利斯](https://twitter.com/howardblissuk)为登录窗口提供提示！

如果有任何更改，我们将尝试更新指南，如果您有任何问题，请与我联系！[@adampmatthews](https://twitter.com/AdamPMatthews)和@adammatthews MacAdmins松弛。

## 故障 排除

如果您看到以下内容，则表示您尚未将 NIC 更改为 vmxnet3。

![img](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_824,h_638/https://blog.eucse.com/wp-content/uploads/2021/06/image-1.png)

![img](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_309,h_292/https://blog.eucse.com/wp-content/uploads/2021/06/image-2.png)

如果您重新启动并且屏幕模糊，并且某些内核崩溃重新启动，如下所示：

![img](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1136,h_918/https://blog.eucse.com/wp-content/uploads/2021/06/Untitled-picture.jpg)

只要继续重新启动，它应该会自行清除。如果您在登陆"设置助理"（或崩溃屏幕）之前看到此屏幕，请从 VMX 中删除 GPU 选项。
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/112.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
<script type='text/javascript' src="//libs.cdnjs.net/jquery.qrcode/1.0/jquery.qrcode.min.js"></script>
<div id="qrcode"></div> 
<a id="download" download="qrcode.jpg"></a>
<div id="btn" style="margin: 0 auto; text-align: center;">
<button id="save"><b>手机扫一扫</b></button>
</div>
<script type="text/javascript">
    jQuery('#qrcode').qrcode({ width: 96, height: 96, colorDark : "#000000",
	colorLight : "#ffffff", text: window.location.href });$("#save").click(function () {
        var canvas = $('#qrcode').find("canvas").get(0);
        var url = canvas.toDataURL('image/jpeg');$("#download").attr('href', url).get(0).click();
        return false;
    });
</script>
