# Mac下一款能够实时显示键盘按键软件


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
# mac下一款能够实时显示键盘按键软件
今天给大家介绍一款在电脑屏幕事实显示键盘操作的软件——**keycastr**，这款软件可以说是一款**录屏的利器**。

[![img](http://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/22/16323160107136.jpg)](http://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/22/16323160107136.jpg)

当你在录屏的过程中使用了键盘，无论是使用输入法输入内容，还是使用了快捷键，它都会在屏幕上实时显示当前按下的按键。

[![img](http://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/22/16323176135433.jpg)](http://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/22/16323176135433.jpg)

首次运行 keycastr，它默认会在**屏幕的左下角**显示键盘操作，如果你想更改键盘操作显示的位置，将鼠标移动到实时显示的键盘操作上方，直接拖拽到自己想要的位置即可。

[![img](http://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/22/16323179338129.jpg)](http://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/22/16323179338129.jpg)

这款软件的设置面板也非常简单，Display KeyCastr icon 可设置在哪显示软件图标，默认是在屏幕顶部的**菜单栏**和底部的 **Dock 栏**，都会显示软件图标。

[![img](http://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/22/16323180532850.jpg)](http://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/22/16323180532850.jpg)

设置面板的第二个选项卡 Display，则可以调整：在屏幕上显示的字体大小、一行可显示的文本长度、上一个文本消失所用的时间、设置背景色和文本的颜色。

[![img](http://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/22/16323186839917.jpg)](http://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/22/16323186839917.jpg)

在使用输入法输入文本的时候，如果同时开启了这个软件，在你噼里啪啦、尽情码字的同时，它会在屏幕上显示一长串的字母，有点会分散我们的注意力。

[![img](http://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/22/16323189341352.jpg)](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/22/16323189341352.jpg)

对于这个问题，你可以右击菜单栏的软件图标，选择 **Stop Casting**，暂时停用这个软件。

[![img](http://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/22/16323186392291.jpg)](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/22/16323186392291.jpg)

[keycastr 下载地址：](https://github.com/keycastr/keycastr/releases)

如果你无法打开 GitHub 下载这款软件，可以点击下方的卡片，在后台回复「**屏幕快捷键**」，即可获取软件的安装包。

这款软件目前仅支持苹果的 macOS 系统，使用 Windows 系统的朋友，如果想在录屏的时候实现类似的效果，可以使用另外一款软件——Carnac。

Windows：Carnac

MacOS：KeyCastr

Linux：Screenkey
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/013694.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
