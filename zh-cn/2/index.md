# 在线获取航空航天领域技术报告


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
## 在线获取航空航天领域技术报告

NASA 技术报告服务器（NTRS-NASA Technical Reports Server ）提供对航空航天相关引文，全文在线文档，图像和视频的访问。所包含的信息类型有：学术会议论文，期刊文章，会议记录，专利，研究报告，图像，电影和技术视频 - 由 NASA 创建或资助的科技信息。

NTRS 美国航空航天局技术报告系统报道 NASA 报告及其它有关航天科技文献（不包括期刊）的文摘刊物、NASA 合同用户提供的科技报告；美国其他政府机构、国内外学术机构、大学及私营公司发表的科技报告；NASA 所拥有的专利、学位论文和专著；外国公开发表的科技报告。全文文献 28 万多篇，影音图像 51 万多，其他来源文献 17 万多篇。学科范围包括 10 大类，76 小类，10 大类分别为：航空学、宇航学、化学和材料、工程学、地球科学、生命科学、数学和计算机科学、物理、社会科学和空间科学。

**资源情况**

> - 在线 NTRS 全文 （282661）
> - 链接到外部全文来源 （81502）
> - 电影/视频 （1322）
> - 照片/图像 （465841）
> - 可根据要求提供 （33752）
> - 从其他来源获取 （169248）

NTRS 由三部分组成：NACA 数据库、NASA 数据库和 NIX 数据库。

NACA(National Advisory Committee for Aeronautics)是 NASA 的前身，数据集包含了自 1915 年至 1958 年航空领域的文献索引和技术报告。

NASA 数据集收录了 1958 年至今由 NASA 赞助项目产生的科研文献索引和文档。

NIX(NASA Image eXchange)数据集则包含了有关图像、照片、影片、视频等资料的索引和链接。

这些数据集涵盖了丰富的科技报告资源，包括 50 余万条索引、超过 300 万个全文文档、50 余万条图像和视频资料以及来自 NACA 的超过 1.3 万篇早期的全文文献。值得一提的是，在美国政府三大技术报告生产机构(NASA、DOE 和 DoD)中，NASA 的 NTRS 是第一个提供技术报告文献中图像资料线上获取的。

访问 [https://ntrs.nasa.gov](https://ntrs.nasa.gov/)
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
