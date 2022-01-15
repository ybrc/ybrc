# Windows 强制刷新打印机状态


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
# Windows 强制刷新打印机状态

![Windows 强制刷新打印机状态-Jacky's Blog](https://dl.jackyu.cn/blog/2020/06/2020073110340352.png)打印机卡纸

五月份返校之后在宿舍办了个打印店，因为打印的东西比较多，偶尔打印机会假卡纸。

Windows 直接就拉闸了根本没法打印，宿舍三台 PC 都没办法操作，只有我的 Mac 能让他继续印。那么解决问题的思路就是要刷新 Windows 下打印机的状态。

在网上逛了一圈，找到了个重启进程的方法，经过我的一波调试，发现要重启两个进程，即 Spooler 和 PrintNotify。

下面给出批处理脚本的代码

```
@echo off
echo 修复尼玛打印机卡纸
echo 请在使用前确定自己用的管理员权限运行的这个脚本
echo by 0xJacky
@pause
 
net.exe session 1>NUL 2>NUL && (
    goto is_admin
) || (
    goto not_admin
)
 
:is_admin
echo 正在停止相关服务
sc stop Spooler
sc stop PrintNotify
 
echo 正在启动相关服务
sc start Spooler
sc start PrintNotify
 
echo 应该修好了
goto end
 
:not_admin
echo 请用管理员权限运行这个脚本
 
:end
pause
```

以管理员权限运行即可刷新 Windows 下打印机的状态。
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@/music/6.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
