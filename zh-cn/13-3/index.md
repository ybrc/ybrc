# DeeFaceLab3：模型的异同，选择，基础操作！


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
# DeeFaceLab3：模型的异同，选择，基础操作！

关于视频换脸软件DeepFaceLab3.0的完整使用流程已经在上一篇介绍过，为了演示方便，当时使用的是Quick96模型，而实际应用中使用最多的是SAEHD模型，后面又推出了AMP模型。那么问题来了，这么多模型，他们有什么差别，如何选择，以及模型相关的操作有哪些？今天就来讲一讲这些模型的差别，如何选择，以及如何操作。

## **1.有什么差别？**

### 硬件要求不一样。

默认情况下对硬件资源的需求是：AMP>SAEHD>Quick96！这个意思就是，越是左边对硬件要求越高，硬件主要指显卡（GPU）和显存（VRAM）以及处理器(CPU)

### 应用场景不一样。

Quick96适合入门，适合快速合成的项目。特点就是快，缺点就是质量一般般。

SAEHD用于高质量的视频合成，相应的学习和训练的时间也会被拉长。

AMP为了实时换脸而打造，为了这个目的而做了一些优化。

### 参数不一样。

Quick96几乎不需要设置参数，打开就用。

SAEHD 有很多参数，可以设置模型像素，模型结构，人脸类型等。

AMP在SAEHD的基础上删减和引入了新的参数，使其更加适合于实时换脸的场景。

SAEHD参数：

![0](https://img-blog.csdnimg.cn/img_convert/708ba9799c3b69af23cf0f3cb5124ee4.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

AMP参数：

![0](https://img-blog.csdnimg.cn/img_convert/63201b2c9f10e4f2fea9619e24e52231.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

AMP引入的主要参数是变形因子，遮罩训练和模型结构已经变成默认选项。

训练预览图也不一样。

SAEHD预览图：

![0](https://img-blog.csdnimg.cn/img_convert/f6d765bbb4b4df4da9b718816a88dda4.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

AMP预览图：

![0](https://img-blog.csdnimg.cn/img_convert/66e2d6392c898c052a8eb4e580d3b263.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

SAEHD的预览图代表什么含义之前有聊过，AMP默认模型的预览图变成了两行三列，第一行为原图，第二行为算法生成图。第一列为src,第二列为dst，第三列为生成图。

## 2. 如何选择？

其实知道了差别，就应该大概明白怎么选了。核心原则就是根据自身情况和应用场景选择。比如你的显卡显存只有2G，那么你就直接选择Quick96好了，其他基本没得选了。如果你需要能灵活设置参数，实现高质量的视频换脸，那么肯定用SAEHD。如果你训练模型是为了应用在DeepFaceLive中实现实时换脸，那么推荐AMP。当然，SAEHD其实也是可以用于DeepFaceLvie。

## 3. 如何操作？

模型相关的操作，简单来说来说就只有两种，训练和应用（合成），这两个操作在上一篇文章中已经演示过了，只要点击训练和应用BAT文件即可。今天就来讲讲更加细化的一些操作。开始具体介绍前，强调两个点：1. 回车代表确认，代表应用默认参数，会用到很多次，遇事不决就按回车。2. 所有快捷键必须先选中预览窗口，输入法切换成英文模式，才有用。

#### 如何设置模型参数？

在之前的教程中，我们都是采用一路回车的方式，全部使用默认参数。今天就来说一下如何设置参数。

![0](https://img-blog.csdnimg.cn/img_convert/7f9923a6063ebd55d3110cbccd0c0e29.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

这里以SAEHD为例，先双击BAT文件。打开后可以输入一个模型名字test回车，然后会让你选择设备。按一下回车，默认选中显卡。

![0](https://img-blog.csdnimg.cn/img_convert/c48ea9365471a8ae08b682dd00a1dc24.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

选完设备之后就可以开始设置参数，参数设置的具体操作是输入参数值然后按回车即可。参数大致可以分为几种类型：数字，是否，字符串。

比如目标迭代数后面就是跟一个数字。像素后面也是设置一个数字，但是这个数字有范围限制64-640。人脸替换类型后面需要输入类型缩写，wf代表整脸。随机翻转后面需要输入y或者n，表示启用或者不起用。

如果不知道参数如何设置，可以查看右边的（），里面给出了参考值和取值区间。还可以输入?回车，然后会有参数的详细说明。

不需要修改的参数直接回车就好！

### 如何修改模型参数？

模型生成后，可以调整参数，获取更好的效果。但是并非所有参数都可以修改，比如像素，模型结构无法中途修改。

![0](https://img-blog.csdnimg.cn/img_convert/f6ae05fe702bc6f1f48a4872a9e1b565.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

具体的修改方式如上图，点击训练重量级模型.bat。1. 输入序号选中test模型，2. 直接回车选中显卡，3. 当跳出“两秒内…”提示的时候快速按回车进入修改模式。4. 按回车找到需要修改的参数，然后输入新的参数值，按回车确认即可。SAEHD能中途修改的参数如上图。

#### 如何查看模型效果？

![0](https://img-blog.csdnimg.cn/img_convert/f6d765bbb4b4df4da9b718816a88dda4.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

模型训练的过程会实时显示训练的进度。

这个窗口顶部是一些快捷键的提示。

中间有显示一个黄色和蓝色的曲线。这是loss值连成的线。一般都是左边高右边低。如果高高低低就是模型训练过程中换了很多素材。蓝色和黄色分别代表src和dst。

下面显示模型训练效果。

这个图只需重点关注第二列，第四列，第五列。二四列清晰即可，五列的表情能跟上第四例即可。

#### 如何关闭训练？

直接点击右上角X关闭，注意关闭预览窗口并不会停止训练。关闭黑色的命令行窗口才会结束。推荐的关闭方式是按回车Enter，这样可以保存进度并结束。直接叉掉会丢失一点点进度。

#### 如何保存进度？

按键盘上的S会保存进度，按Enter会保存进度并立马结束训练。

#### 如何创建备份？

按B可直接备份当前模型，备份的模型会单独保存在_autobackups文件夹下面，按一次保存一个备份。

#### 如何继续训练？

再次点击训练的Bat文件，选择模型，选择设备，就可以继续训练了。训练的过程要避免意外中断，如果刚好在自动保存模型的时候突然关机了会损坏模型。

#### 如何修改模型名称？

启动训练后输入r (rename) 回车，然后输入老的模型名称回车，然后输入新的模型名称回车即可。

#### 如何选择模型？

如果你只有一个模型，直接回车就会加载模型。如果你有两个模型，你需要选择载入的模型。当启动训练后会列出所有模型，列表左侧有序号，输入相应的序号回车即可。

#### 如何复用模型？

DeepFaceLab的模型并不是训练一次，就可以应用于任何素材。他是属于一对一的模型。一个源素材一个目标素材，对应一个模型。训练一次少则几天多则几十天，这一点显然很要命。好在模型可以进行一定的复用，可以节省大量时间，也能提升合成效果。这样就可以把炼丹和应用区分开了。有些人专门炼丹，有些人直接拿来用就好了。把自己或者别人的模型直接拿来用就是“模型复用”了

模型复用的操作其实很简单。

\1. 准备好自己的素材，把人脸提取好。

\2. 把复用模型的文件放到自己的model目录下面。

\3. 训练一段时间，几十分钟或者几个小时。

\4. 应用模型 ，合成视频。

其实和常规的训练合成流程没啥差别，只是复用的时候是用的别人的模型文件或者你自己之前训练好的模型。

值得注意的是，复用也不是放之四海而皆准。复用丹没练好，可能会影响后面制作的效果，也可能有些场景很好用，有些场景不好用，这都很常见。

模型相关的点基本都提到了， 下一篇我们就专门来说AMP模型（实时换脸/直播模型）的两种训练方式和具体的训练步骤。

——————-

 

 



DeepFaceLab3系列

[DeepFaceLab3：软硬件以及系统要求](https://ybrc.github..io/zh-cn/13)

[DeepFaceLab3：工作目录和基本概念](https://ybrc.github.io/zh-cn/13-1)

[DeepFaceLab3：视频换脸完整流程详解！](https://ybrc.githbu.io/zh-cn/13-2)

[DeepFaceLab3：模型的异同，选择，基础操作！](https://ybrc.github.io/zh-cn/13-3)

  
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/82.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
