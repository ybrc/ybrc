# windows 11安装安卓应用程序


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
# windows 11安装安卓应用程序

## 一、目的

在windows 11中通过windows 11自带的子系统功能，实现自由安装安卓应用程序



## 二、实现

### 1、前提

首先，你需要一台windows 11系统的计算机，并且使用的是**预览版系统中的beta或dev渠道**（截止本文创作时，2021-12-07，正式版系统尚未提供安卓子系统），并把系统更新到最新版本，如果这一步做不到，请自行百度

### 2、更新系统后打开Microsoft Store，会在标题旁边出现PREVIEW，如下图

![image-20211207104243956](https://blog.ctftools.com/2021/12/newpost-26/image-20211207104243956.png)

### 3、安装Windows Subsystem for Android

##### 1.系统中搜索`启用或关闭 Windows 功能`并打开，勾选下图中的几个。如果发现没有这几个功能，就要先到BIOS/UEFI 开启「 Virtualization 」和「 Hyper-V 」相关的功能；

![image-20211207104700638](https://blog.ctftools.com/2021/12/newpost-26/image-20211207104700638.png)

##### 2.设置-时间和语言-语言&区域，把windows 显示语言改为`English (United States)`，然后注销账户重新登录，之后还是到这个菜单，把`Country or region`改成`United States`，`Regional format`改成`English (United States)`

##### 3.[点这里](https://www.microsoft.com/en-us/p/windows-subsystem-for-android/9p3395vx91nr?activetab=pivot:overviewtab)跳转Microsoft Store 网页版，在弹出窗口一定要选`保留使用United States – English`，然后点击`GET`，然后浏览器会有弹框，点击允许跳转，之后会跳转到Microsoft Store，点击`install`，就会安装`Amazon Appstore`和`Windows Subsystem for Android`，等待安装完成。之后可以反向操作，把系统语言改成中文。

至此，如果你有美国VPN，已经可以在亚马逊应用商店下载安卓应用程序了，但里边应用程序有限，且需要美国VPN，想自由安装应用程序接着往下看。

### 4、设置安卓子系统的开发者模式

在开始菜单中找到`适用于 Android 的 Windows 子系统设置`，打开开发人员模式

![image-20211207105945711](https://blog.ctftools.com/2021/12/newpost-26/image-20211207105945711.png)

然后点击`开发人员模式`下边的小蓝字`管理开发人员设置`，开启USB调试和无线调试

![image-20211207110121037](https://blog.ctftools.com/2021/12/newpost-26/image-20211207110121037.png)

至此，有adb调试经验的朋友已经知道怎么做了，对于不太有经验的朋友，可以去`Microsoft Store`下载`WSATools`，第一次打开需要找个文件夹安装ADB，然后就能通过这个软件自由安装apk了。

![image-20211207110602464](https://blog.ctftools.com/2021/12/newpost-26/image-20211207110602464.png)

安装后会在开始菜单展示应用程序，部分app可能不适配，还经常出现闪退，总之目前这安卓子系统不够稳定（不排除是我电脑的问题）。

![image-20211207111409339](https://blog.ctftools.com/2021/12/newpost-26/image-20211207111409339.png) ![image-20211207111418981](https://blog.ctftools.com/2021/12/newpost-26/image-20211207111418981.png)



- [经验](javascript:void(0))
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/99.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
