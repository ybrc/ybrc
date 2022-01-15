# Win11安装跳过TPM的方法


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
# Win11安装跳过TPM的方法

微软新一代操作系统Windows11已经公布了，目前Win11预览版也已经向公众推送，新的操作系统在带来全新的界面和更多功能升级的同时，对于硬件的要求也有一定的提升，其中最令大家困扰的就是新系统需要支持TPM2.0的问题，下面就为大家带来Win11安装跳过TPM的详细教程吧。

![https://www.xitongzhijia.net/uploads/allimg/210713/136-210G30Z328.png](https://www.xitongzhijia.net/uploads/allimg/210713/136-210G30Z328.png)

　　虽然微软一直都在强调 TPM 2.0 芯片是 Windows 11 的最基础需求，但事实证明，各大 PC 厂商依然有很大的自主权，甚至可以灵活地决定其 Win11 电脑是否出厂配备 TPM 模块。

　　从目前的情况来看，即使电脑不支持 TPM 2.0 也是可以安装使用 Windows 11 的。本文给大家总结目前已知的绕过 TPM 2.0 方法。

　　**方法一、替换 appraiserres.dll 文件**

　　找到 Win10 ISO 的 sources 文件夹下的appraiserres.dll 文件，替换 Win11 ISO 同位置的同名文件。（文件我已经单独提取出来了，放在 Win11 的镜像下载链接里，后台回复“win11”即可获取。）

　　完成后，需要使用第三方工具（如 Rufus或 AnyBurn）重新创建 ISO 镜像，然后再次运行安装文件。或者先制作启动盘后再替换也可以。

![https://www.xitongzhijia.net/uploads/allimg/210713/136-210G30Z328-50.png](https://www.xitongzhijia.net/uploads/allimg/210713/136-210G30Z328-50.png)

　　**二、修改[注册表](http://www.xitongzhijia.net/zt/zcbbjq/)**

　　1、如果是直接运行 Setup.exe 来直接更新到 Windows 11 系统，可以修改当前系统的注册表，来屏蔽 “The PC must support TPM 2.0” 提示。

　　快捷键 Win+R，输入 regedit，然后定位到如下的位置：

　　HKEY_LOCAL_MACHINE\SYSTEM\Setup

　　接着新建 LabConfig 的项，在 LabConfig 下创建两个 DWORD 值：

　　BypassTPMCheck，值：00000001

　　BypassSecureBootCheck，值：00000001

![https://www.xitongzhijia.net/uploads/allimg/210713/136-210G30Z329.png](https://www.xitongzhijia.net/uploads/allimg/210713/136-210G30Z329.png)

　　2、如果是从U盘或其它介质启动，在进行镜像安装时，Win11 会提示“该电脑无法运行 Win11”。

![https://www.xitongzhijia.net/uploads/allimg/210713/136-210G30Z329.jpg](https://www.xitongzhijia.net/uploads/allimg/210713/136-210G30Z329.jpg)

　　不要慌，在这个界面按 Shift+F10，打开命令行界面，输入 regedit 打开注册表，后面的操作和上面相同，也是定位到同样的注册表位置：

　　HKEY_LOCAL_MACHINE\SYSTEM\Setup

　　创建一个名为“LabConfig”的项，接着在“LabConfig”下创建两个 DWORD 值：

　　键为“BypassTPMCheck”，值为“00000001”

　　键为“BypassSecureBootCheck”，值为“00000001”

　　保存退出后，上图的提示就消失了，大家就可以正常安装 Win11。

　　**方法三、强制升级（开启安全启动）**

　　升级之前你需要使用 UEFI + GPT 的方式安装系统（基本上预装 Win8、Win10 的电脑都是这种方式），在 BIOS 里打开安全启动（Secure Boot），即可用 ISO 文件直接升级。

　　**附：强制开启DEV通道的方法**

　　没有达到 Windows 11 的硬件要求，可能无法顺利加入 Insider 计划，也就是无法获得 Windows 11 测试版的推送。下面给大家提供修改注册表的方式，强制加入 DEV 通道，这样也能获得推送了。

　　快捷键 Win+R，输入 regedit，然后定位到如下的位置：

　　HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsSelfHost\UI\Selection

　　把 UIBranch 的值更改为 Dev

　　把 ContentType 的值更改为 Mainline

　　把 Ring 的文本更改为 External

　　接着注册表定位到如下的位置：

　　HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsSelfHost\Applicability

　　把 BranchName 的值更改为 Dev

　　把 ContentType 的值更改为 Mainline

　　把 Ring 的值更改为 External

　　注册表修改好后，重启系统然后进入设置应用 - 系统更新，点击左侧的 Windows Insider 选项检查所处通道，显示为 Dev 就是成功了。

　　最后再为大家介绍一种最简单直接的安装方法，使用PE安装Win11 ISO镜像，因为PE安装时直接会读取win11系统iso镜像，这样就可以直接跳过TPM2.0的检测了。

![img](https://tool.lu/netcard/)
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/97.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
