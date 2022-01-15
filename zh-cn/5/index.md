# 一个专门收集空客系列飞机培训学习资源站


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
## 一个专门收集空客系列飞机培训学习资源站

分享了一个波音737技术站：[推荐一个由波音737飞行员和工程师维护的技术站](https://ybrc.github.io/zh-cn/3/)，这个推荐正好满足了一些人的需求，同时也有人回复问有没有空客 320 相关的网站，今天就分享了一个关于空客系列飞机学习培训资源站， [www.airbusdriver.net，](http://www.airbusdriver.net,/) 网站维护人鲍勃·桑福德在美国航空主要从事培训和飞行操作工作，已经退休，但是该网站会继续运营下去，至今网站已运行二十余年。

该网站的培训重点是空客 A319/320/321 系列飞机。包括《模拟器标注和方法简报指南》，《类型评定口头指南》和《 CQ 方案》。也有几种学习辅助工具。网站相关学习资料非常丰富，并不断更新最新的内容。对于那些想在培训前开始准备的人强烈推荐利用airbusdriver网站上的资源学习。希望这个推荐对你有用。
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
