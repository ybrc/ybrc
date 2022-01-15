# 接收带有RTL-SDR和LNB的STARLINK信标


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
# 接收带有RTL-SDR和LNB的STARLINK信标

Derek OK9SGC最近发布了一篇关于他们如何[从](https://sgcderek.github.io/posts/starlink-beacons/)SpaceX自2015年起持续发射的通信卫星[Starlink星座接收Ku波段信标信号的文章。](https://sgcderek.github.io/posts/starlink-beacons/)虽然我们[最近报道了](https://www.rtl-sdr.com/receiving-starlink-beacons-with-a-hackrf-supercluster/)用HackRF超级集群捕获的Starlink信标，但德里克指出，接收信标只需要一个LNB，一个低成本的SDR，如RTL-SDR V3和一个向LNB提供12V直流电的动力喷射器。德里克指出，当信标以高功率传输时，甚至不需要盘子。

[![img](https://www.rtl-sdr.com/wp-content/uploads/2021/12/starlink_derek.png?ffccfa&ffccfa)](https://www.rtl-sdr.com/wp-content/uploads/2021/12/starlink_derek.png?ffccfa&ffccfa)Starlink信标接收器设置

由于地球轨道低，因此Starlink星座的旅行速度很快，您将注意到您收到的信号中存在强烈的多普勒效应漂移。德里克指出，使用[无线电观测（strf）软件](https://github.com/cbassa/strf)的[卫星跟踪工具包对](https://github.com/cbassa/strf)卫星进行多普勒分析可能很有趣。他还指出，在他接收的30分钟内，几乎没有时间点没有收到信标，这表明Starlink星座接近100%的天空覆盖。

德里克让这个过程易于理解，并说明了听这些信标信号是多么容易。当然，我们注意到这些只是信标，它们不包含数据。它们仍然是接收的有趣信号，多普勒分析可以揭示有关轨道的有趣信息。

[![img](https://www.rtl-sdr.com/wp-content/uploads/2021/12/starlink_beacons-1024x429.png?ffccfa&ffccfa)](https://www.rtl-sdr.com/wp-content/uploads/2021/12/starlink_beacons.png?ffccfa&ffccfa)星链信标显示在快速FFT（左）和慢FTF（右）中
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/41.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
