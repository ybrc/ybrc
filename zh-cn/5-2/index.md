# 包含八个黑客RF的SDR超级集群的技术细节

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
# [包含八个黑客RF的SDR超级集群的技术细节](https://ybrc.github.io/zh-cn/5-2/)

几周前[，我们发布了](https://www.rtl-sdr.com/receiving-starlink-beacons-with-a-hackrf-supercluster/)关于Reddit成员u/OlegKutkov的信息，他使用他的HackRF超级集群接收Starlink信标，但关于HackRF超级集群项目本身的细节有点稀少。现在，Oleg[发布了关于HackRF超级集群的完整描述](https://www.reddit.com/r/RTLSDR/comments/r3p9sk/hackrf_supercluster_technical_details/)，指出系统中的8个HackRF可以提供高达160兆赫的实时监控带宽。

Oleg展示了每个板子如何连接到同一GPS纪律严明的10兆赫时钟源，它如何将射频拆分器与LNA一起使用，以及它如何需要8个独立的主机控制器连接到计算机系统中的单个PCIe线路，以克服USB2.0数据带宽限制。他还展示了他创建的GNU Radio脚本，该脚本将8个来源合二为一。

Oleg写道，他如何使用HackRF超级集群以及电视Ku-Band LNB和卫星天线进行宽带卫星监控。

[![img](https://www.rtl-sdr.com/wp-content/uploads/2021/12/hackrf_supercluster-1024x545.png?ffccfa&ffccfa)](https://www.rtl-sdr.com/wp-content/uploads/2021/12/hackrf_supercluster.png?ffccfa&ffccfa)HackRF超集群块图

[![img](https://www.rtl-sdr.com/wp-content/uploads/2021/12/hackrf_supercluster_real.jpg?ffccfa&ffccfa)](https://www.rtl-sdr.com/wp-content/uploads/2021/12/hackrf_supercluster_real.jpg?ffccfa&ffccfa)HackRF超级集群
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/37.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
