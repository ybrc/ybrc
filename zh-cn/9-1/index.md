# 如何让iterm2 在任何界面呼入呼出？


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
# 如何让iterm2 在任何界面呼入呼出？

第一步： 

preference -> keys ->Create a Dedicated Hotkey Window

![img](https://pic3.zhimg.com/50/v2-e6808e55f134772711dd5573ae126e61_720w.jpg?source=1940ef5c)![img](https://pic3.zhimg.com/80/v2-e6808e55f134772711dd5573ae126e61_720w.jpg?source=1940ef5c)

第二步：

设置Hotkey，根据个人喜好来设置（参考：command + space或command + /）；

勾选Floating Window

![img](https://pic1.zhimg.com/50/v2-a1ca587f02d6c1828bc19d87279c865e_720w.jpg?source=1940ef5c)![img](https://pic1.zhimg.com/80/v2-a1ca587f02d6c1828bc19d87279c865e_720w.jpg?source=1940ef5c)

第三步：

重启 iterm2即可，现在你可以在任意界面，按快捷键呼出iterm，再次按即消失。

若没生效，看第四步；

第四步：

preference -> profiles -> Window->space，设置为All Spaces。restart即可。

![img](https://pic3.zhimg.com/80/v2-e3892824e6a330884164c3ebef958556_720w.jpg?source=1940ef5c)

在Preference->Profiles->Window界面，有一个Setting for New Windows的设置，可以对打开的新窗口进行窗口位置，窗口大小等设置。

效果如下：

![img](https://pic3.zhimg.com/50/v2-7e590780cc13f6f00dfe4c6158ec3df5_720w.jpg?source=1940ef5c)![img](https://pic3.zhimg.com/80/v2-7e590780cc13f6f00dfe4c6158ec3df5_720w.jpg?source=1940ef5c)

要在其他全屏应用里（比如全屏的 chrome 页面）呼出，需要设置 space 为 all spaces 。

记得修改后需要重启 iterm。

![img](https://pic3.zhimg.com/50/v2-ed29b8aef10ecb95445313cc06b2a467_720w.jpg?source=1940ef5c)![img](https://pic3.zhimg.com/80/v2-ed29b8aef10ecb95445313cc06b2a467_720w.jpg?source=1940ef5c)



### 全屏 Profiles>Default>Window>Settings for New Windows>Style>Maximized（选择这个即可） 透明 Profiles>Default>Window>Window Appearance>Transparentcy （根据

1. 全屏
   Profiles>Default>Window>Settings for New Windows>Style>Maximized（选择这个即可）
2. 透明
   Profiles>Default>Window>Window Appearance>Transparentcy （根据自己的需求调节即可）
3. 快捷键呼出/隐藏
   Keys>Hotkey>Hotkey>（输入自己的快捷键）


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
