# 漫谈逆向工程

**此文为加密收费内容添加我微信支付后可看:**
<!--more-->
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
         <input type="button" id="begin_speak"  value="点击阅读">
         <input type="button" id="pause_speak"  style="display:none" value="暂停朗读">
         <input type="button" id="cancel_speak" style="display:none" value="停止朗读">
         <input type="button" id="resume_speak" style="display:none" value="继续播放">
      </div>
      <div id="text">
谈谈我对逆向工程的一些理解和感悟。

# 引言

逆向工程，原名Reverse Engineering，简称RE。关于其书面介绍我就不复制粘贴百度百科了，简而言之就是从发布的产品中反向分析其程序逻辑和算法——基于各种目的。

准确地说，逆向工程包括软件逆向工程——即本文所讨论的，也包括硬件逆向工程。那么硬件逆向是怎么做的呢？据我所知，我国的芯片设计水平普遍比国外落后10年。当国外厂商已经成功流片量产X纳米的芯片时候，我们还在XX纳米的研发和难点攻关中挣扎。挣扎的过程之一就是芯片逆向。

一般从代理买到量产芯片后，第一步就是溶解外部封层，使用电子显微镜对电路进行拍摄，俗称拍片；第二步是使用特定工具软件（也是国外的）对照片进行切分，通过人力对自动生成的连线进行修复；第三步是将修复的连线还原成数字电路，再由IC逻辑工程师进行进一步修复；最后组合不同模块的门级电路，还原成硬件描述语言VHDL或者Verilog。之后就和正常的流程一样，开发、测试、模拟、仿真、流片……



[![https://img-blog.csdnimg.cn/img_convert/53306e9f42a2f0c0f20201ad98b9e4b5.png](https://img-blog.csdnimg.cn/img_convert/53306e9f42a2f0c0f20201ad98b9e4b5.png)](https://img-blog.csdnimg.cn/img_convert/53306e9f42a2f0c0f20201ad98b9e4b5.png)ALU



扯远了，还是回到主题上来。硬件逆向的成本动辄成百上千万，没有纳税人的支持是玩不起的。但是软件逆向不同，只要一个智力正常的人，研究一两个月，也能上XX破解论坛上分享他们的破解成果了。

这也引出了一个问题，当我们在谈论逆向的时候，我们在谈论的是什么？

# 软件逆向

二进制逆向就是`IDA-Pro + F5`一把梭吗？Java逆向就是`JADX`一把梭吗？很多接触过逆向的新手都知道不是，他们会跳出来反驳，夹杂着一些`X86/ARM/MIPS Assembly`、`Smali`、`XYZ IR`等等让人不明觉厉的词汇。虽然听不懂，但我们也知道他们想表达什么：逆向是一门牵涉甚广的领域。

的确，如果HTML、CSS这些领域是“单关节运动”，那么逆向就是“多关节运动”。前段时间有些使用node写前后端的开发者喜欢自称“全栈工程师”，要按照我的说法，逆向工程师才是当之无愧的全栈。为什么？来看看一个逆向工程师所应该具备的部分技能：

- 一定的软件开发能力，熟悉数据结构、算法
- 了解各种编程语言，熟悉编译原理
- 熟悉计算机基本原理、操作系统、编译器、链接器
- 熟悉对应平台或者虚拟机的汇编语言(机器码)、中间语言(字节码）
- …

一个好的逆向工程师，通常也是个不错的开发者。即便现在有各种收费或免费的反编译器，也需要逆向工程师对代码进行梳理、分析、审计。这就意味着逆向者需要站在比开发者更高的角度去审视，甚至比开发者更加理解他们的代码。……

# 关于初衷

搞逆向这么麻烦，要懂这个，要懂那个，直接劝退了很大一波人。但其实这些只是“术”而已，实际工作中只需要用到一部分子集，甚至只要学会使用商业工具也能干活儿了。在我看来，逆向工程师的核心还是——`强烈的好奇心`。

或者说，这是大部分网络安全人员(黑客)所具备的特质。因为好奇某个商业软件的功能，或者好奇某个病毒蠕虫的行为，才走向了这条逆向之路。

逆向的过程是枯燥的。与其说逆向是技术活，在我看来更多是体力活。尤其是在分析大型软件的时候，每天改变量名，改函数名，分析树状的调用路径，……很容易让人感到厌烦。

但是对于抱有好奇心的人而言，逆向应该是快乐的。每分析出一个软件或者函数的行为，就仿佛侦探找到关键线索或证据一样兴奋。隐藏的路径越深，知道的人就越少，那么被藏起来的东西也就越有价值。

# 关于快乐

逆向应该是快乐的，但很多人不想让你快乐。于是有了各种符号加壳、混淆、加密、解释执行(虚拟机)等应用增强方案，来提高逆向工程的难度。这通常是企业中端安全工程师的杰作，或者是使用了安全公司的通用安全加固方案。

所谓的逆向混淆，只有在别人不知道你的方法时才有价值。对于通用的加固，所面临的挑战者甚多，其内部实现很可能已经被扒了个底朝天；而对于企业自研的方案，又通常因为太low而被简单绕过。所以，想让逆向工程师不快乐的人有时候成功了，但是大部分时候还是在逆向工程师手下败下阵来。用一朋友的话来说就是：“程序在我的设备、我的环境里运行，难道它还能上天？”

# 关于现状

应用程序是不能上天，但是逆向工程师也很难上天。记得柯南里有一句话让我印象深刻——“如果怪盗是富有创造力的艺术家，那么侦探充其量只是吹毛求疵的评论家”。逆向工程做的大部分都是破坏性的工作，而不像开发者那样带来正面价值。

目前社区中做逆向的大多是出于解谜(CTF)、软件破解、游戏外挂等，即便是专门讨论逆向的安全论坛中，对技术细节的探讨也寥寥无几，更多是炫耀和分享自己的“成果”。天下熙熙，皆为利来，天下攘攘，皆为利往，除了闷声发大财地以搞逆向赚钱的工作室外，公开分享的也就只能是为名了。

那么职业做逆向的情况又如何呢？专门做逆向的正经岗位应该是恶意软件分析了，衍生出的团队在商业环境中突出PR宣传安全产品或者情报能力。其他小公司里招聘做逆向的人，要么是分析竞争对手，要么围绕高流量软件的去进行分析、破解、换皮、刷粉养号等等，是在违法犯罪的边缘来回试探。

专门做逆向的情况不多，但是将其作为一门技能去掌握的人也不少。我自己本身也不是专门做逆向的，因为工作需要才去对其进行了解。除了开源软件，也有越来越多闭源软件的漏洞被暴露出来，你不去挖别人自然会去挖。就拿安卓每个月的安全通告来说，带星号的漏洞简直不要太多。



[![https://img-blog.csdnimg.cn/img_convert/14c876ebc1581ec793754a936032b95d.png](https://img-blog.csdnimg.cn/img_convert/14c876ebc1581ec793754a936032b95d.png)](https://img-blog.csdnimg.cn/img_convert/14c876ebc1581ec793754a936032b95d.png)cve



> 图：Android Security Bulletin—March 2020

# 正面价值

逆向也有作为正面案例出现。比如对于一些开发者不再维护的软件，出现各种原因无法使用时，通常就有正义的逆向工程师去尝试解决困难，之前就有这么一个例子：



[![https://img-blog.csdnimg.cn/img_convert/896bf0a1159b92f0569ff015bfa0e778.png](https://img-blog.csdnimg.cn/img_convert/896bf0a1159b92f0569ff015bfa0e778.png)](https://img-blog.csdnimg.cn/img_convert/896bf0a1159b92f0569ff015bfa0e778.png)help



还有比较经典的就是Linux系统中的著名的开源驱动`nouveau`部分功能就是通过逆向英伟达的驱动而开发的，因为英伟达出于各种保护的原因不愿意与开源社区合作而闹了诸多矛盾，这也是下面这张图片的根源。



[![https://img-blog.csdnimg.cn/img_convert/10acf59dd69d486b02467f94d291416e.png](https://img-blog.csdnimg.cn/img_convert/10acf59dd69d486b02467f94d291416e.png)](https://img-blog.csdnimg.cn/img_convert/10acf59dd69d486b02467f94d291416e.png)Fuck Nvidia



总而言之，技术本身无对错好坏之分，关键是看使用的人以及使用的目的。

# 后记

回想起以前在研究高通可信执行环境时，被`laginimaineb`的那篇博客[Exploring Qualcomm’s Secure Execution Environment](http://bits-please.blogspot.com/2016/04/exploring-qualcomms-secure-execution.html)给惊艳到了，大概那就是我心目中逆向大神该有的样子。那篇文章不是逆向某个特定的软件，也不是做了什么复杂的脱壳，而是将一种在未知环境中运行的未知格式程序就那么一字节一字节的分析出来。



[![https://img-blog.csdnimg.cn/img_convert/03c81b1c4e8298fed02c2f7de184099a.png](https://img-blog.csdnimg.cn/img_convert/03c81b1c4e8298fed02c2f7de184099a.png)](https://img-blog.csdnimg.cn/img_convert/03c81b1c4e8298fed02c2f7de184099a.png)qsee



要知道当时TEE尤其是高通的QSEE，在内部是被严密保护的，网上可以说几乎没有相关信息可以参考。甚至作为开发者都要以企业名义签署严格的NDA才能拿到开发工具。要在这种环境去逆向、调试、挖漏洞看似不可能，但`laginimaineb`接下了这个挑战，而且还超额完成了([userspace -> QSEE Kernel](http://bits-please.blogspot.com/2016/06/trustzone-kernel-privilege-escalation.html))。他自己的说法是“For Fun”，我也相信他是“Fun”的。就是这样的人，让安全行业充满激情和热忱。

最后：

Stay Curious, Stay Exploring && Happy Hacking!


</div>

<img src="https://tool.lu/netcard/">
