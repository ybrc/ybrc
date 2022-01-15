# 一个多学科高质量开放教科书库


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
## 一个多学科高质量开放教科书库

开放教科书库(Open Textbook Library)由明尼苏达大学开放教育中心和开放教科书网络(Open Textbook Network)提供支持。由于普通学生每年为书籍预算支出上千美元，开放教科书库的建立旨在为师生找到优质教科书，此库拥有多学科领域的免费教科书资源，“开放教科书库”是一个全面的参考资料库，通过链接方式集合了多家教科书资源，包括 OpenStax，Saylor 等。所有开放教科书保障必须支持一个学期的课程。你可以在线阅读，也可以下载 PDF 格式，或 EPUB 和 HTML 等阅读。开放式教科书库为学生节省了一笔不小的书籍开支。所有开放教科书是经过资助，出版和许可的教科书，可以自由使用，改编和分发，通过各领域专业人士协作完成电子书制作并不断丰富书籍内容，这些书籍由具有学科领域专业知识的教师专家使用评估标准进行严格审查，书库中大约60%的书籍已经过各种学院和大学的教师评估，确保了书籍质量。

目前开放教科书库流量每天都在增长，越来越多的人访问该库，并在课程中使用这些教科书。
访问 https://open.umn.edu/opentextbooks/subjects
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
