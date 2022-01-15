# DeepFaceLab3：工作目录和基本概念


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
# DeepFaceLab3：工作目录和基本概念

上一篇文章我们已经讲了安装DeepFaceLab所需要的软硬件环境。正常来说就可以进入安装，实操的阶段了。但是，我觉得安装之前还是要先结合workspace来讲一些概念，这样用起来会更加顺畅。workspace这个是软件自带的目录，安装完之后就已经存在了。

### 工作目录里都有啥？

![img](https://deepfakescn.oss-cn-hongkong.aliyuncs.com/2021/09/20210902143912.jpg@!full)

workspace主要包含如下文件：

- data_dst（目标素材）
- data_src （源素材）
- model （模型）
- data_dst.mp4 （目标视频）
- data_src.mp4 （源视频）

DeepFaceLab为了简化操作和规范素材名称，采用惯例的方式。就是把所有素材统一放workspace里面，而且统一命名。所有文件夹，文件名都不能乱改。

### 什么是视频换脸？

所谓视频换脸就是把一个人的脸换到另一个人的脑袋上并保持表情神态的同步。比如将张三的脸换到李四身上。源素材取自张三，我们需要换脸的对象是李四。张三提供脸，李四提供身体，最后的结果是李四看起来变成了张三。而为了实现换脸这个目标我们需要收集两个人的视频。

张三的视频叫data_src.mp4，我们称为源视频，

李四的视频叫data_dst.mp4，我们称为目标视频。

有了视频之后我们需要将视频里的人脸提取出来，让AI去分析学习人脸特征。

data_dst 和data_src 文件夹里放的就是目标视频和源视频中提取出来的图片和人脸。

图片是指把视频转换成一张一张的图片，人脸是指从图片中抠出人脸部分并摆端正，最后放在aligned文件夹里面。在抠图的同时还会用一些点标出人脸的轮廓放在debug文件里面。

### 模型是什么？

DeepFaceLab换脸看是有很多步骤，其实就两大步骤，一个是训练模型，一个是应用模型。model文件夹里面放的就是**模型**文件，是换脸软件的核心所在。

那么模型是个啥东西？ 有人可能会理解为模板，这种比喻并不精确，但是有那么一点意思。模板只能简单的复刻，但是模型可以自动匹配各种表情，要智能一些。

其实在深度学习里面模型这个概念无处不在，我们常用的基于深度学的一些应用，比如美颜，贴图，翻译，语音识别，语音合成，人脸识别，去码，脱衣，背后都有模型。

模型就像是一个学富五车或者特别擅长某种技能的人。所谓训练模型，就像是训练一个小孩子，让他学习增加某一方的能力。

那些“绘画”能力特别强的机器视觉模型，我们可以把它比喻成一个画师。没学习之前，他什么不会。你给他看了很多法外狂徒的视频，他不断临摹之后，就掌握了画出张三的能力。因为他的大脑就是为绘画而生，所以他闭着眼睛也能画出张三，更厉害的是，给他一张李四的脸他也能画出和李四表情一样的张三。当然，要变得这么强，除了天赋之外，学习时间肯定少不了，而且得多看高清视频，记住各种细节才可以。光记住还不行，还得有一定的联想能力。

训练模型也常常被称为“炼丹”，而模型就是仙丹。要搞个仙丹肯定不容易是吧。比如，太上老君练齐天大圣，练了那么多太天，一不小心还是没练成。练好一颗丹，需要很多条件。

- 首先，得有好的原材料（人脸素材）。
- 其次，得有好的丹炉（电脑硬件显卡CPU）
- 再次，得掌握好火候（参数）
- 最后，八八六十四一天不能少。（时间）

初学者，肯定要反复尝试，才能找到最好的方式。

不同仙丹，有不同的效果。有些包治百病（通用模型），有些只有一个功效比如长生不老（专用模型）

说回画师，有的画师稍作学习什么都能画（通用模型），有的画师只会画一个人（专用模型）

### 名字不能随便改

如果不懂workspace的命名规则，可能会出现一些问题。一定记住不要少文件，也不要改文件名。比如提取src的时候一定要有data_src.mp4这个视频，其他名字没用。合成视频的时候一定要有dat_dst.mp4这个视频，没有那就直接报错。比如你自己的视频原先叫“我很帅.mp4” ，你想换脸，就必须把这句话改掉，改成data_src.mp4 。不管多帅都得按规矩来。

### 如何用图片来换脸？

虽然一直建议用视频素材来换脸，但是依旧有很多人问到能不能用图片换脸。能，是肯定能，但是你不要希望在DFL上用一张图片来换出好的效果。用图片换脸，只需要将完整的图片直接放在data_src文件里面，然后用提取脚本提取人脸即可，其他操作和视频换脸一模一样。

概念这个东西吧，理解了很有用，不理解好像也没啥用。不理解也没关系，只要记住workspace这个文件夹，所有相关的素材都放在里面。下一篇，我们就“不讲道理”了，直接一步一步来操作。

 

DeepFaceLab3系列

[DeepFaceLab3：软硬件以及系统要求](https://ybrc.github.io/zh-cn/13)

[DeepFaceLab3：工作目录和基本概念](https://ybrc.github.io/zh-cn/13-1)

[DeepFaceLab3：视频换脸完整流程详解！](https://ybrc.github.io/zh-cn/13-2)

[DeepFaceLab3：模型的异同，选择，基础操作！](https://ybrc.github.io/zh-cn/13-3)

  
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/79.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
