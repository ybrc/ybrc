# DeepFaceLab3：软硬件以及系统要求


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
# DeepFaceLab3：软硬件以及系统要求

好久不见，近来半年都在挖矿，种田，搞区块链。这段时间DeepFaceLab也有了不少更新，最大的更新是新出了AMP模型和实时换脸软件DeepFaceLive。所以准备详细的写一个新的系列教程。从0开始，一直写到实时换脸。

DeepFaceLab并没有内置版本号，我们通常都是用发布日期来做版本区别。为了看起来更加直观，我就把2021发布的支持3000系列显卡的版本称为DeepFaceLab3.0，这个教程里面用的版本为DeepFacelab20210801中文版。

工欲善其事必先利其器，想要玩转换脸，硬件，软件，系统必须跟上！先从准备工作说起。

- 硬件
- 软件
- 系统
- 驱动

## 

## 硬件

换脸软件出来也好几年了，但是目前依旧对硬件依赖比较大。想要在自己电脑上跑换脸软件就必须要一张显卡，想要轻松点，就必须要一张好显卡（今年搞一张好显卡不容易）。 显卡主要分N卡（英伟达）和A卡（AMD），一般来说是推荐N卡，N卡的支持会更好，使用场景更广泛。 在DeepFaceLab的历史版本中，曾经有支持A卡的opencl版本，中途放弃了对A卡的支持，2021终于有了支持A卡的DirectX12版本。总的来说，买一张中上水平的N卡，肯定可以玩，如果是A卡就需要确认支持DirectX12。

常见的N卡有10系列，20系列，30系列。还有丽台，泰坦，特斯拉，安倍。几乎所有显存大于2G的N卡都支持。 rtx3060 12G 因为显存大，对于跑模型有优势，性价比较高。所有60结尾的卡，都是性价比比较高，功耗比较低，显存还可以。而50结尾的卡么….。如果你只在乎性能，那么可以上目前最强的游戏卡RTX3090，指导价一万出头，市场价可能两万多。除了3090，上一代的2080ti，和上上代的1080ti 也是一个不错的选择，这两张卡显存比较给力，速度也比较快，提取头像比3000系列还有优势。

除了显卡之外，其实CPU最好也跟上。显卡特别快，处理器跟不上，整体速度就会下来。显卡和cpu的比较强的情况下，电源供电一定要有保障。电源不够的话，烧卡不至于，但是可能会重启，不稳定。

关于硬盘，使用普通HDD完全没有问题，用SSD的话在某些情况下会更好。比如加载，写入的时候，还有大量素材图片拷贝，黏贴，删除的时候。

总而言之，想要玩基于深度学习的软件，都需要中高端配置。其中显卡和显存是核心指标。

除了使用本地显卡之外，也可以在云平台租用显卡，这种平台很多，比如阿里云，腾讯云，百度云，滴滴云，矩池云。这种方式好处是随时随地都可以用，不用关心散热和噪音，不用管电费，也不用本地挂机。一启动就可以让它自己修炼去，时间到了我们去摘果子就好了。通过远程桌面可以像本地电脑一样操作，非常便捷。唯一的缺点就是“贵” ，没有任何残值可言。

在云端方案中google推出的Colab是极具性价比的一种方案。首选，免费用户也可以使用，只是分配到的设备比较差，一般是k80。其次，会员很便宜，9.9刀就能用上V100,P100。现在好像推出了更贵套餐。缺点是需要科学上网，需要了解脚本，脚本有执行时长限制，需要有一台电脑挂机。 这种方案是基于浏览器的，所以理论上任何有浏览器的设备都可以使用，但是还是推荐用电脑。

我有在GitHub创建了一个叫DeepFaceLab_colab的项目，使用定制的脚本通过点点点就能使用colab来炼丹了，目前脚本已经更新到V5，支持最新版本。近期我会针对V5写一个详细的教程（如果不鸽~~~）

## 软件

软件方面，DeepFaceLab相比之前的一些换脸软件，最大的优势就是“集成” 。如果你使用DeepFaceLab，千万不要去装什么CUDA，CUDN，除非你知道自己在干什么。

软件方面主要是注意版本的问题。

DeepFaceLab最早的版本可以追溯到2018年，目前比较推荐的是2020年8月份的版本，以及2021年8月份的版本。选择版本需要注意几个点。

- A卡还是N卡？ A卡只能用2019年opencl版和2021的DirectX12版。
- RTX3000系列么？3000系列推荐最新的版本，20系列和更早的卡推荐20200802版本。
- AMP模型和DeepFaceLive 需要使用最新版20210801,老版本没有导出模型的功能

目前发布的软件中，往往都包含三个版本，每个版本都针对不同的设备。

- RTX2080ti：针对2080ti以及以下版本
- RTX3000：针对3000系列显卡
- DirectX12：针对支持DirectX12

需要注意的是，2080ti版肯定不能用在30系列显卡上，而rtx3000可以支持老显卡。DirectX12并不针对A卡或者N卡，而是针对支持DirectX12的显卡设备。言下之意不支持DirectX12的显卡，不管你姓黄还是姓苏，都没用。大部分新卡都支持！

## 系统

从大的的范畴来说，除了MacOS支持不好之外，window和linux全部可以使用。

敢用Linux的反正的自己都有几把刷子，可以自己去研究。想要省点时间的可以参考我在deepfaker.xyz上面写的文章，阿里云，滴滴云，矩池云我都专门写过非常详细的文章，虽然版本升级了，但是依旧是那些套路。

Window方面，主要是支持win10和win7。但是随着30系列新显卡的推出，WIN7不推荐了。使用30系列显卡的朋友需确保三件事情：

- 操作系统版本Win10 20h2+
- 驱动去官方下载更新到最新
- 启用操作系统的GPU加速计划

驱动不够新，提取这一步就过不了。

系统不够新，没有GPU加速选项

没有GPU加速选项，可能导致训练卡死。

新版驱动似乎对GPU加速没有要求，但是保险起见，还是先把上面几点做好。

最后提示一下，XP和32位系统请自觉回避。

## 驱动

DeepFaceLab唯一的依赖就是驱动。驱动最大的问题就是不够新，因为DFL一直在更新，往往都是针对最新的版本。所以驱动一定要跟上。用鲁大师和驱动精灵的需要注意一下，这些第三方软件安装的驱动有可能不是最新的，会出现问题。

关于如何查看驱动版本，如何安装官方驱动，以及驱动的官方下载地址，我在之前的文章中都有提过，在deepfaker.xyz搜驱动就可以找到。

 

DeepFaceLab3系列

[DeepFaceLab3：软硬件以及系统要求](https://ybrc.github.io/zh-cn/13)

[DeepFaceLab3：工作目录和基本概念](https://ybrc.github.io/zh-cn/13-1)

[DeepFaceLab3：视频换脸完整流程详解！](https://ybrc.github.io/zh-cn/13-2)

[DeepFaceLab3：模型的异同，选择，基础操作！](https://ybrc.github.io/zh-cn/13-3)

  
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/80.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
