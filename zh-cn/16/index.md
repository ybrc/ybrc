# ARM 组装基础知识简介


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
ARM 组装基础知识简介

欢迎阅读有关 ARM 程序集基础知识的本教程系列。这是关于[ARM 漏洞开发的](https://azeria-labs.com/writing-arm-shellcode/)后续教程系列的准备工作。在深入创建 ARM shellcode 和构建 ROP 链之前，我们需要先介绍一些 ARM Assembly 基础知识。

将逐步介绍以下主题：

ARM Assembly Basics

Basics Tutorial Series：

Part 1： ARM

Assembly 简介 第 2 部分： 数据类型寄存器 第 3 部分： ARM 指令
集 第 4 部分： 内存指令： 加载和存储数据
第 5 部分： 加载和存储多个
第 6 部分： 条件执行和分支
第 7 部分： 堆栈和函数

若要按照示例进行操作，将需要一个基于 ARM 的实验室环境。如果您没有 ARM 设备（如 Raspberry Pi），则可以按照[本教程](https://azeria-labs.com/emulate-raspberry-pi-with-qemu/)使用 QEMU 和 Raspberry Pi 发行版在虚拟机中设置自己的实验室环境。如果您不熟悉使用GDB进行基本调试，则可以[在本教程中获取基础知识](https://azeria-labs.com/debugging-with-gdb-introduction/)。在本教程中，重点将放在 ARM 32 位上，示例在 ARMv6 上编译。

### 为什么选择 ARM？

本教程通常面向想要学习 ARM 组装基础知识的人员。特别是对于那些对ARM平台上的漏洞利用写作感兴趣的人。您可能已经注意到 ARM 处理器无处不在。当我环顾四周时，我可以数出我家里装有ARM处理器的设备比英特尔处理器多得多。这包括手机，路由器，不要忘记这些天似乎在销售中爆炸式增长的物联网设备。也就是说，ARM处理器已成为世界上最广泛的CPU内核之一。这给我们带来了这样一个事实，即与PC一样，物联网设备容易受到不正确的输入验证滥用（例如缓冲区溢出）的影响。鉴于基于ARM的设备的广泛使用和滥用的可能性，对这些设备的攻击变得更加普遍。

然而，与ARM相比，我们有更多的专家专门从事x86安全研究，尽管ARM汇编语言可能是广泛使用的最简单的汇编语言。那么，为什么没有更多的人关注ARM呢？也许是因为与ARM相比，有更多关于英特尔漏洞利用的学习资源。想想[由模糊安全](https://www.fuzzysecurity.com/tutorials/expDev/1.html)或[Corelan 团队](https://www.corelan.be/index.php/2009/07/19/exploit-writing-tutorial-part-1-stack-based-overflows/)撰写的有关英特尔 x86 漏洞利用漏洞的精彩教程 – 此类指南可帮助对此特定领域感兴趣的人获得实用知识和灵感，以学习这些教程中涵盖的内容之外的知识。如果您对 x86 漏洞利用编写感兴趣，Corelan 和 Fuzzysec 教程是您完美的起点。在本教程系列中，我们将重点介绍汇编基础知识和 ARM 漏洞利用编写。

ARM 处理器与英特尔处理器

英特尔和ARM之间有很多区别，但主要区别在于指令集。英特尔是一款 CISC（复杂指令集计算）处理器，具有更大、功能更丰富的指令集，并允许许多复杂指令访问内存。因此，它具有比ARM更多的操作，寻址模式，但寄存器更少。CISC处理器主要用于普通PC，工作站和服务器。

ARM是RISC（精简指令集计算）处理器，因此具有简化的指令集（100条指令或更少）和比CISC更多的通用寄存器。与英特尔不同，ARM 使用仅在寄存器上运行的指令，并使用加载/存储内存模型进行内存访问，这意味着只有加载/存储指令才能访问内存。这意味着在 ARM 上的特定内存地址处递增 32 位值需要三种类型的指令（加载、递增和存储），以便首先将特定地址处的值加载到寄存器中，在寄存器中递增，然后将其存储回寄存器中的内存。

简化的指令集有其优点和缺点。其中一个优点是指令可以更快地执行，从而可能允许更高的速度（RISC系统通过减少每条指令的时钟周期来缩短执行时间）。缺点是，更少的指令意味着更强调使用有限的指令编写软件的高效。同样需要注意的是，ARM 有两种模式，ARM 模式和拇指模式。拇指指令可以是 2 个或 4 个字节（有关第[3 部分：ARM 指令集](https://azeria-labs.com/arm-instruction-set-part-3/)） 中的更多信息）。

ARM 和 x86 之间的更多区别包括：

- 在 ARM 中，大多数指令都可用于条件执行。
- 英特尔 x86 和 x86-64 系列处理器使用**小端**格式
- ARM 架构在版本 3 之前是小端。从那时起，ARM处理器成为**BI-endian，**并具有允许*可切换*字节序的设置。

不仅英特尔和ARM之间存在差异，而且不同ARM版本本身之间也存在差异。本教程系列旨在使其尽可能通用，以便您大致了解 ARM 的工作原理。了解基础知识后，就可以轻松了解所选目标 ARM 版本的细微差别。本教程中的示例是在 32 位 ARMv6（Raspberry Pi 1）上创建的，因此解释与此确切版本相关。

不同 ARM[版本的](https://en.wikipedia.org/wiki/List_of_ARM_microarchitectures)命名也可能令人困惑：

| ARM 系列 | ARM 架构 |
| :------: | :------: |
| 断续器7  |  ARM v4  |
| 断续器9  |  ARM v5  |
| 断续器11 |  ARM v6  |
|  皮质-A  | ARM v7-A |
|  皮质-R  | ARM v7-R |
|  皮质-M  | ARM v7-M |

编写程序集

在我们开始深入研究 ARM 漏洞开发之前，我们首先需要了解汇编语言编程的基础知识，这需要一些背景知识，然后才能开始欣赏它。但是，为什么我们甚至需要ARM Assembly，用"正常"的编程/脚本语言编写我们的漏洞还不够吗？如果我们希望能够进行逆向工程并了解ARM二进制文件的程序流，构建自己的ARM外壳代码，制作ARM ROP链并调试ARM应用程序，则不是。

你不需要知道汇编语言的每一个小细节，就能进行逆向工程和漏洞开发，但其中一些是理解大局所必需的。本教程系列将介绍基础知识。如果您想了解更多信息，可以访问本章末尾列出的链接。

那么，究竟什么是汇编语言呢？汇编语言只是机器代码之上的一个薄语法层，机器代码由指令组成，这些指令以二进制表示（机器代码）编码，这是我们的计算机所理解的。那么，我们为什么不直接编写机器代码呢？好吧，那将是屁股上的痛苦。出于这个原因，我们将编写汇编，ARM汇编，这对人类来说更容易理解。我们的计算机本身无法运行汇编代码，因为它需要机器代码。我们将用于将汇编代码组装成机器代码的工具是来自GNU [Binutils项目的GNU](https://www.gnu.org/software/binutils/)汇编程序***，\***该项目被命名为与具有*.s扩展名的源文件一起使用。

使用扩展名 *.s 编写程序集文件后，需要使用[as](https://sourceware.org/binutils/docs/as/index.html#Top)进行组装，并将其与[ld 链接](https://sourceware.org/binutils/docs/ld/)：

```
$ as program.s -o program.o
$ ld program.o -o program
```

![img](https://azeria-labs.com/wp-content/uploads/2017/03/gif-assembly-to-machine-code.gif.pagespeed.ce.9OfwSzjzT0.gif)

引擎盖下的组装

让我们从最底层开始，一直到汇编语言。在最低级别，我们的电路上有电信号。信号是通过将电压切换到两个电平之一来形成的，例如0伏（"关闭"）或5伏（"开"）。因为仅仅通过观察，我们无法轻易地判断电路处于什么电压，所以我们选择使用视觉表示（数字0和1）来编写开/关电压的模式，不仅表示信号不存在或存在的概念，而且还因为0和1是二进制系统的数字。然后，我们将0和1的序列分组以形成机器码指令，这是计算机处理器的最小工作单元。下面是一个机器语言指令示例：

1110 0001 1010 0000 0010 0000 0000 0001

到目前为止，一切都很好，但我们已经记不清这些模式（0和1）的含义。出于这个原因，我们使用所谓的助记符，缩写来帮助我们记住这些二进制模式，其中每个机器代码指令都有一个名称。这些助记符通常由三个字母组成，但这不是强制性的。我们可以使用这些助记符作为指令编写程序。该程序称为汇编语言程序，用于表示计算机机器代码的助记符集称为该计算机的汇编语言。因此，汇编语言是人类用来对计算机进行编程的最低级别。指令的操作数位于助记符之后。下面是一个示例：

MOV R2, R1

现在我们知道汇编程序是由称为助记符的文本信息组成的，我们需要将其转换为机器代码。如上所述，在ARM汇编的情况下[，GNU Binutils](https://www.gnu.org/software/binutils/)项目为我们提供了**一个名为的工具**。使用汇编**程序（如**从（ARM）汇编语言转换为（ARM）机器代码的过程称为汇编。

总之，我们了解到计算机理解（响应）电压（信号）的存在与否，并且我们可以表示0和1s（位）序列中的多个信号。我们可以使用机器代码（信号序列）使计算机以某种明确定义的方式进行响应。因为我们不记得所有这些序列的含义，所以我们给它们缩写 - 助记符，并用它们来表示指令。这组助记符是计算机的汇编语言，我们使用一个名为Assembler的程序将代码从助记符表示转换为计算机可读的机器代码，就像编译器对高级语言所做的那样。

延伸阅读

\1. ARM组装的旋风之旅。
https://www.coranac.com/tonc/text/asm.htm

\2. 树莓派中的 ARM 汇编器。
http://thinkingeek.com/arm-assembler-raspberry-pi/

\3. 实用逆向工程：x86，x64，ARM，Windows内核，逆转工具和混淆，由Bruce Dang，Alexandre Gazet，Elias Bachaalany和Sebastien Josse制作。

\4. ARM 参考手册。
http://infocenter.arm.com/help/topic/com.arm.doc.dui0068b/index.html

\5. 汇编程序用户指南。
http://www.keil.com/support/man/docs/armasm/default.htm
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/91.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
