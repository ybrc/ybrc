# DeepFaceLab3：AMP模型的训练和应用


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
# DeepFaceLab3：AMP模型的训练和应用

 今天直入主题，主要讲一讲如何训练AMP模型以及如何应用到DeepFaceLive之中。

![0](https://img-blog.csdnimg.cn/img_convert/15ae28ad17a2971405d1b2c3904e1a0f.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

## 模型的训练

训练主要可以分两种方式：常规训练和复用训练

### 常规训练

常规训练流程如下：

![0](https://img-blog.csdnimg.cn/img_convert/6a13690c30f1aa04f8c449c162163af0.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

这个流程就是我们之前讲的常规流程，只是训练的模型换成了AMP，并且还少了一些步骤。因为最终我们将要应用到DeepFaceLive中，所以常规流程中的应用模型和合成视频就不需要了。

这种训练方式就单次应用来说会省很多时间。但是如果需要训练不同的对象，那么每次重新开始就会比较费时间。 所以从长期使用的角度来说，使用复用训练会更好。大量素材训练的复用模型合成效果也会比较好。

### 复用训练

复用训练流程如下：

![0](https://img-blog.csdnimg.cn/img_convert/3127ab9bdc98a1a43191dcd3ce24e57b.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

这个流程的操作思路是先对大量人脸进行训练，然后再训练具体的人。为了实现这个操作需要如下步骤。

\1. 将软件自带RTM WF faceset数据集放到源目录的aligned下面。

\2. 点击“ 6) 训练AMP模型 源对源 train AMP SRC-SRC.bat ” 开始训练，训练个几百万次。

\3. 删除模型文件夹中的_AMP_inter_dst.npy文件

\4. 然后按执行上图中的2-8步骤。

![0](https://img-blog.csdnimg.cn/img_convert/3286d5c91418d98e482a8a344aa5f42a.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

注意和常规步骤相比，这里多了Xseg泛型和SRC-SRC的处理。应用Xseg泛型是为了使用默认的遮罩模型给src和dst应用遮罩，SRC-SRC是给模型打基础。

## 模型的应用

训练的差不多了，就可以使用这个模型了。训练的环节主要由DeepFaceLab完成，而应用主要是在DeepFaceLive上。DeepFaceLive可以笼统的称为直播换脸软件，本质上这个软件只是实现了实时换脸的功能，真正直播推流还需要其他软件配合。所以说这个Live理解为实时比较合适。DeepFaceLive我们可以称之为实时换脸软件。

模型的应用可以分为两部分：导出和导入。

### 模型导出

导出的过程其实就做了tf2onnx的转换，具体操作是：

\1. 先点击 6) 导出AMP模型 export AMP as dfm.bat 批处理文件

\2. 选择需要导出的模型，回车，回车，等待片刻。

![0](https://img-blog.csdnimg.cn/img_convert/da50047a7877645e51eb19b82cd8dddd.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

\3. 找到模型

![0](https://img-blog.csdnimg.cn/img_convert/bf62ec390b7dd41f9bf60924a065ab70.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

成功导出的模型，放在model文件夹下面，后缀为.dfm 。

### 模型导入

导入模型也非常简，就是拷贝“amp_AMP_model.dfm” 文件到DeepFaceLive相应的文件夹即可。

具体路径为：DeepFaceLive\userdata\dfm_models

![0](https://img-blog.csdnimg.cn/img_convert/06e29cf3751b58e7164cad89d9649c50.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

模型导入成功之后就可以启用实时换脸软件了

![0](https://img-blog.csdnimg.cn/img_convert/81d226bc1a51cfd624fd0f7610ffdcde.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

软件启动，稍作设置就是这个样子了。

![0](https://img-blog.csdnimg.cn/img_convert/91f96f164b7796556c1ca3e6a64c507b.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

这是使用软件自带的模型的效果，使用我们自己训练的模型，只需要修改Face Swapper 下面的Model即可。

DeepFaceLive已经是高度集成的可视化软件了，操作基本没啥难度，所以功夫主要还是在DeepFaceLab这一边。

 

下一篇介绍一下DeepFaceLive的具体操作。

 

文中提到的复用模型，我的素材和遮罩已经优化完了，训练到200万后会放到[tonyhub](http://mp.weixin.qq.com/s?__biz=MzIzODA3NDAxMg==&mid=2247485322&idx=2&sn=026b68cabe54f4c46096f18fc949c1c4&chksm=e93fa679de482f6fe13dbbda3e8b0a97817131271efa0824592322cde5175efa5b7cdf6eb301&scene=21#wechat_redirect)中，因为素材比较多200万只是起步，我会继续练，继续更新。大家也可以自己在公共素材的基础上去优化，然后慢慢训练。

------

DeepFaceLab3系列

[DeepFaceLab3：软硬件以及系统要求](http://ybrc.github.io/zh-cn/13)

[DeepFaceLab3：工作目录和基本概念](http://ybrc.github.io/zh-cn/13-1.md)

[DeepFaceLab3：视频换脸完整流程详解！](http://ybrc.github.io/zh-cn/13-2)

[DeepFaceLab3：模型的异同，选择，基础操作！](http://ybrc.github.io/zh-cn/13-3)

 



  
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/110.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
