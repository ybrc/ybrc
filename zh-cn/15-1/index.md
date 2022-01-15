# Homekit 家居改造计划


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
# Homekit 家居改造计划

当前版本：1.0

这个智能家居改造计划早在2017年装修的时候就有考虑了，最早只是买了小米的空调伴侣2，实现用手机控制空调，但是它并不支持HomeKit，所以没办法用 Siri 进行语音控制，后来有考虑过买米家的配件然后配合树莓派的 Home Assistant，但这个方案因为网关的问题也就被废弃了。

今年暑假了解到了绿米 Aqara 的解决方案，于是先把空调伴侣换成了 Aqara 的试用了一段时间。

前段时间因为家里的老音响彻底报废了，换上了一个 HomePod，于是智能家居的改造计划正式开始了。

终于在10月31日，我把灯控的开关换成智能开关，实现了 Siri 对电灯的控制。

![Homekit 家居改造计划-Jacky's Blog](https://dl.jackyu.cn/blog/2020/11/2020110108132620.png?x-oss-process=style%2Flarge)家庭

## 配置方案

| 设备                                   | 用途           |
| -------------------------------------- | -------------- |
| HomePod                                | 家庭中枢       |
| 绿米Aqara 墙壁开关D1(ZigBee单火三键版) | 客厅开关       |
| 绿米Aqara 墙壁开关D1(ZigBee单火单键版) | 房间开关       |
| 绿米Aqara 空调伴侣P3                   | 空调控制、网关 |
| 捷径                                   | 快捷指令       |

配置方案

空调伴侣会送温度和湿度传感器，房间里找个不显眼的地方贴上就行。

值得注意的是，在购买开关前需要确认原来的开关布线方式，如果没有零线，则应该买单火线版本，当时因为对家里的开关太过信任，买了两个零火线版本，后来才发现买错了…

因为是 ZigBee 协议，所以智能开关并不需要连接 Wi-Fi，不会干扰本地设备。

## 改造过程

更换开关的过程涉及强电，建议寻找专业人士进行操作。

![Homekit 家居改造计划-Jacky's Blog](https://dl.jackyu.cn/blog/2020/11/2020110108212065-scaled.jpeg?x-oss-process=style%2Flarge)单火单键

![Homekit 家居改造计划-Jacky's Blog](https://dl.jackyu.cn/blog/2020/11/2020110108212725-scaled.jpeg?x-oss-process=style%2Flarge)单火三键

火线接好，打开电闸，按照说明书进行匹配即可，设备会自动从 Aqara 的管理程序中同步到「家庭」。

## 家庭控制

可以直接使用「家庭」或者 Aqara 的程序对开关进行控制

![Homekit 家居改造计划-Jacky's Blog](https://dl.jackyu.cn/blog/2020/11/2020110108220336.png?x-oss-process=style%2Flarge)家庭控制

也可以召唤任意一台设备的 Siri，开或关某个房间的什么灯。

在客厅的时候还能使用 HomePod 的 Siri 进行控制，就是识别的不太准，希望苹果能继续调教调教 Siri。
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@music/9.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
