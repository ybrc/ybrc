# 推荐一个由波音737飞行员和工程师维护的技术站


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
      <div onselectstart="return false">
      <div id="text">
## 推荐一个由波音737飞行员和工程师维护的技术站

**波音 737 技术站: [http://www.b737.org.uk](http://www.b737.org.uk/)**

这是一个由来自世界的波音 737 飞行员和工程师维护的网站，该网站主要维护者克里斯·布雷迪，毕业于利物浦大学。主要对 737 进行了后期维护和客户演示测试飞行，积累了 18 年的经验。该网站提供了波音 737 各方面技术资料，在这里你可以找到737相关技术、操作及培训笔记及技术图片资源。网站维护者汇集整理一个包含成千上万张高分辨率技术图像库。个人可以随意使用网站里呈现的内容，如果你是一个组织，那么需要获得这些图片的使用许可。注:本网站和波音公司无任何关系，是由个体维护的一个技术站。

简单介绍一下网站涵盖的内容类别，该网站主要是介绍 737 各方面的技术内容，如：飞行系统详解；系统问题测试；飞行员笔记；技术指标；小翼详解；有关 737- MAX 的详细信息；737系列生产销售情况以及历史发展及变体；还包括了很多技术图片以及飞行甲板照片以及关于严重事件的新闻报道等。

**飞行系统**-可以了解到飞行系统各部分的使用解读及图示说明。

**系统测试**-本部分包含 800 多个 737 系统问题选择题。这些题目有助于更好的解决遇到的系统问题。该测验基于 737NG，但通常在未明确指定的情况下适用于所有机型系列。

**飞行员笔记**-737 系列的飞行员和工程师笔记汇编，以帮助读者深入理解飞机。

**技术图片**-包含约 400 张照片，详细介绍了 737 的各个组件和功能。

**飞行甲板照片**-737 每一代飞机的总体飞行甲板视图。有助于了解不同系列之间的差异。

**小翼详解**-详细说明了 737 不同类型的小翼及益处。

**技术指标**-包括了各机型的生产单位、发电系统、机身、机翼高举设备、起落架、远程巡航、最大有效载荷范围设计参数等数据指标，由工程师更新数据来自多方来源。
</div>
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/136.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
