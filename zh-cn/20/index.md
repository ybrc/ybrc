# Mac终端命令汇总


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
# Mac终端命令汇总

最近经常看到与终端命令有关的Mac小技巧，发现使用终端命令可以实现很多Mac隐藏功能。可是使用的时候总是会忘记一些功能怎么写，所以本篇文章中就为大家做相关汇总。

[![img](https://macjpeg.macsc.com/macdown/pic/201911/13160659_99b3176282.jpeg)](https://macjpeg.macsc.com/macdown/pic/201911/13160659_99b3176282.jpeg)

### Finder显示隐藏文件

显示隐藏文件，在“终端”中输入下面的命令：

> *defaults write com.apple.finder AppleShowAllFiles TRUE（回车）*
>
> *killall Finder（回车）*

恢复隐藏文件，在“终端”中输入下面的命令：

> *defaults write com.apple.finder AppleShowAllFiles -bool false（回车）*
>
> *killall Finder（回车）*

*
*

### 去掉窗口截屏的阴影

窗口进行截屏的时候(*快捷键Command Shift 4，然后空格*)，得到的图片周围会自动被加上一圈阴影。

如果你不喜欢，可以把它去掉，在“终端”中输入下面的命令：

> *defaults write com.apple.screencapture disable-shadow -bool true（回车）*
>
> *killall SystemUIServer（回车）*

恢复窗口阴影，在“终端”中输入下面的命令：

> *defaults write com.apple.screencapture disable-shadow -bool false（回车）*
>
> *killall SystemUIServer（回车）*

*
*

### 改变截屏图片的保存位置

Mac提供了非常方便的截屏快捷键，可以让我们非常快速的对整个屏幕、部分屏幕或者应用程序窗口进行截屏。不过系统默认把截屏图片保存到桌面。如果我们截取的图片特别多，就会让桌面显得特别凌乱。想要修改截图的保存位置，只要在“终端” 中输入下面的命令：

> *defaults write com.apple.screencapture location 存放位置（回车）*
>
> *killall SystemUIServer（回车）*

在输入命令的时候，将“存放位置”替换成真正的文件夹就可以了。

### 目录操作 [![img](https://macjpeg.macsc.com/macdown/pic/201911/13160537_2d24312dba.jpeg)](https://macjpeg.macsc.com/macdown/pic/201911/13160537_2d24312dba.jpeg)

### 文件操作

### [![img](https://macjpeg.macsc.com/macdown/pic/201911/13160558_85808967f3.jpeg)](https://macjpeg.macsc.com/macdown/pic/201911/13160558_85808967f3.jpeg)

### 安全操作

### [![img](https://macjpeg.macsc.com/macdown/pic/201911/13160612_8396609e68.jpeg)](https://macjpeg.macsc.com/macdown/pic/201911/13160612_8396609e68.jpeg)

### 时间操作

### [![img](https://macjpeg.macsc.com/macdown/pic/201911/13160621_f7b10ed5c3.jpeg)](https://macjpeg.macsc.com/macdown/pic/201911/13160621_f7b10ed5c3.jpeg)

### 其他操作

[![img](https://macjpeg.macsc.com/macdown/pic/201911/13160642_882452d19c.jpeg)](https://macjpeg.macsc.com/macdown/pic/201911/13160642_882452d19c.jpeg)
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
