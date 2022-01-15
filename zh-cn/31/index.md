# 数据类型


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
# 数据类型
这是 ARM 程序集基础知识教程系列的第二部分，涵盖数据类型和寄存器。
与高级语言类似，ARM 支持对不同数据类型的操作。
我们可以加载（或存储）的数据类型可以是有符号和无符号的单词，半字或字节。这些数据类型的扩展名是：-h 或 -sh 表示半字，-b 或 -sb 表示字节，没有单词的扩展名。有符号数据类型和无符号数据类型之间的区别在于：![img](https://azeria-labs.com/wp-content/uploads/2017/03/data-types-1.png)

- 有符号数据类型可以同时保存正值和负值，因此范围较小。
- 无符号数据类型可以保存较大的正值（包括"零"），但不能保存负值，因此范围更广。

以下是一些示例，说明如何将这些数据类型与加载和存储说明一起使用：

```
ldr = Load Word
ldrh = Load unsigned Half Word
ldrsh = Load signed Half Word
ldrb = Load unsigned Byte
ldrsb = Load signed Bytes

str = Store Word
strh = Store unsigned Half Word
strsh = Store signed Half Word
strb = Store unsigned Byte
strsb = Store signed Byte
```

字节序

有两种查看内存中字节的基本方法：小端字节序 （LE） 或大端字节序 （BE）。不同之处在于对象的每个字节存储在内存中的字节顺序。在像英特尔 x86 这样的小端机器上，**最小**有效字节存储在最低地址（最接近零的地址）。在大端机器上，**最高**有效字节存储在最低地址。ARM架构在版本3之前是小端序，从那时起它是双端序，这意味着它具有允许可切换字节序的设置。例如，在 ARMv6 上，指令是[固定的小端字节序，数据访问](http://infocenter.arm.com/help/index.jsp?topic=/com.arm.doc.ddi0301h/Cdfbbchb.html)可以是小端或大端，由程序状态寄存器 （CPSR） 的位 9（E 位）控制。

![img](https://azeria-labs.com/wp-content/uploads/2017/03/big-little-endian-1.png)

ARM 寄存器

寄存器的数量取决于 ARM 版本。根据ARM参考手册，有[30个通用32位寄存器](http://infocenter.arm.com/help/topic/com.arm.doc.dui0473c/Babdfiih.html)，但基于ARMv6-M和ARMv7-M的处理器除外。前 16 个寄存器可在用户级模式下访问，附加寄存器可在特权软件执行中使用（ARMv6-M 和 ARMv7-M 除外）。在本教程系列中，我们将使用可在任何特权模式下访问的寄存器：r0-15。这16个寄存器可以分为两组：通用寄存器和特殊用途寄存器。



|       #        | 别名         | 目的             |
| :------------: | :----------- | :--------------- |
|     R0 型      | –            | 一般用途         |
|      R1型      | –            | 一般用途         |
|     R2 型      | –            | 一般用途         |
|     R3 型      | –            | 一般用途         |
|     R4 型      | –            | 一般用途         |
|     R5 型      | –            | 一般用途         |
|     R6 型      | –            | 一般用途         |
|     R7 型      | –            | 持有系统调用号码 |
|     R8 型      | –            | 一般用途         |
|     R9 型      | –            | 一般用途         |
|     R10 型     | –            | 一般用途         |
|     R11 型     | 断续器       | 帧指针           |
| 特殊用途寄存器 |              |                  |
|     R12 型     | 断续器       | 程序内调用       |
|     R13 型     | 断续器       | 堆栈指针         |
|     R14 型     | 有限责任公司 | 链接 注册        |
|     R15 型     | 个人电脑     | 程序计数器       |
|     断续器     | –            | 当前计划状态注册 |

下表只是快速浏览了 ARM 寄**存器与**英特尔处理器中的寄存器之间的关系。



|     手臂     |           描述            |             x86             |
| :----------: | :-----------------------: | :-------------------------: |
|    R0 型     |         一般用途          |           断续器            |
|   R1-R5型    |         一般用途          | EBX， ECX， EDX， ESI， EDI |
|   R6-R10型   |         一般用途          |              –              |
|  R11 （FP）  |          帧指针           |           断续器            |
|    R12 型    |        程序内调用         |              –              |
|  R13 （SP）  |         堆栈指针          |          电除尘器           |
|  R14 （LR）  |         链接 注册         |              –              |
| R15 （电脑） | <- 程序计数器/指令指针 -> |         弹性公网IP          |
|    断续器    |  当前程序状态寄存器/标志  |          埃弗拉格           |

**R0-R12：**可以在常见操作期间用于存储临时值，指针（内存的位置）等。例如，R0可以在算术运算期间称为累加器，或者用于存储先前调用的函数的结果。R7在使用系统调用时变得很有用，因为它存储了系统调用号，R11帮助我们跟踪作为帧指针的堆栈上的边界（稍后将介绍）。此外，ARM 上的函数调用约定指定函数的前四个参数存储在寄存器 r0-r3 中。

**R13：SP（**堆栈指针）。堆栈指针指向堆栈的顶部。堆栈是用于特定于函数的存储的内存区域，在函数返回时回收该存储区域。因此，堆栈指针用于在堆栈上分配空间，方法是从堆栈指针中减去我们要分配的值（以字节为单位）。换句话说，如果我们想分配一个 32 位的值，我们从堆栈指针中减去 4。

**R14：LR（**链接寄存器）。进行函数调用时，链接寄存器将使用引用从中启动函数的下一个指令的内存地址进行更新。这样做允许程序返回到在"子"函数完成后启动"子"函数调用的"父"函数。

**R15：PC（**程序计数器）。程序计数器按所执行指令的大小自动递增。此大小在 ARM 状态下始终为 4 个字节，在 THUMB 模式下始终为 2 个字节。当执行分支指令时，PC会保存目标地址。在执行过程中，PC 将当前指令的地址加上 8（两条 ARM 指令）存储在 ARM 状态，并将当前指令加 4（两条 Thumb 指令）的地址存储在 Thumb（v1） 状态。这与x86不同，在x86中，PC始终指向要执行的下一条指令。

让我们看一下电脑在调试器中的行为。我们使用以下程序将pc的地址存储到r0中，并包含两个随机指令。让我们看看会发生什么。

```
.section .text
.global _start

_start:
 mov r0, pc
 mov r1, #2
 add r2, r1, r1
 bkpt
```

在 GDB 中，我们在 _start 处设置了一个断点并运行它：

```
gef> br _start
Breakpoint 1 at 0x8054
gef> run
```

以下是我们首先看到的输出的屏幕截图：

```
$r0 0x00000000   $r1 0x00000000   $r2 0x00000000   $r3 0x00000000 
$r4 0x00000000   $r5 0x00000000   $r6 0x00000000   $r7 0x00000000 
$r8 0x00000000   $r9 0x00000000   $r10 0x00000000  $r11 0x00000000 
$r12 0x00000000  $sp 0xbefff7e0   $lr 0x00000000   $pc 0x00008054 
$cpsr 0x00000010 

0x8054 <_start> mov r0, pc     <- $pc
0x8058 <_start+4> mov r0, #2
0x805c <_start+8> add r1, r0, r0
0x8060 <_start+12> bkpt 0x0000
0x8064 andeq r1, r0, r1, asr #10
0x8068 cmnvs r5, r0, lsl #2
0x806c tsteq r0, r2, ror #18
0x8070 andeq r0, r0, r11
0x8074 tsteq r8, r6, lsl #6
```

我们可以看到PC持有将要执行的下一条指令（mov r0，pc）的地址（0x8054）。现在让我们执行下一条指令，之后R0应该保存PC的地址（0x8054），对吧？

```
$r0 0x0000805c   $r1 0x00000000   $r2 0x00000000   $r3 0x00000000 
$r4 0x00000000   $r5 0x00000000   $r6 0x00000000   $r7 0x00000000 
$r8 0x00000000   $r9 0x00000000   $r10 0x00000000  $r11 0x00000000 
$r12 0x00000000  $sp 0xbefff7e0   $lr 0x00000000   $pc 0x00008058 
$cpsr 0x00000010

0x8058 <_start+4> mov r0, #2       <- $pc
0x805c <_start+8> add r1, r0, r0
0x8060 <_start+12> bkpt 0x0000
0x8064 andeq r1, r0, r1, asr #10
0x8068 cmnvs r5, r0, lsl #2
0x806c tsteq r0, r2, ror #18
0x8070 andeq r0, r0, r11
0x8074 tsteq r8, r6, lsl #6
0x8078 adfcssp f0, f0, #4.0
```

...右？错。查看 R0 中的地址。虽然我们希望R0包含以前读取的PC值（0x8054），但它却保留了我们之前读取的PC（0x805c）前面的两个指令的值。从这个例子中，您可以看到，当我们直接阅读PC时，它遵循PC指向下一个指令的定义;但在调试时，PC在当前PC值之前指向两条指令（0x8054 + 8 = 0x805C）。这是因为较旧的 ARM 处理器总是在当前执行的指令之前获取两条指令。ARM 保留此定义的原因是为了确保与早期处理器的兼容性。

当前计划状态注册

使用 gdb 调试 ARM 二进制文件时，您会看到一个名为 Flags 的内容：

![img](https://azeria-labs.com/wp-content/uploads/2017/03/cpsr.png)

寄存器$cpsr显示当前程序状态寄存器（CPSR）的值，在其下方您可以看到标志拇指，快速，中断，溢出，携带，零和负数。这些标志表示 CPSR 寄存器中的某些位，并根据 CPSR 的值进行设置，并在激活时变**为粗体**。N、Z、C 和 V 位与 x86 上 EFLAG 寄存器中的 SF、ZF、CF 和 OF 位相同。这些位用于在程序集级别支持条件和循环中的条件执行。我们将介绍[第 6 部分：条件执行和分支](https://azeria-labs.com/arm-conditional-execution-and-branching-part-6/)中使用的条件代码。

![img](https://azeria-labs.com/wp-content/uploads/2017/03/CPSR.png)

上图显示了 32 位寄存器 （CPSR） 的布局，其中左侧 （<-） 侧保存最高有效位，右侧 （->） 侧保存最低有效位。每个单元格（除了GE和M部分以及空白单元格）的大小都是一位。这些位部分定义了程序当前状态的各种属性。



| 旗             | 描述                                                         |
| :------------- | :----------------------------------------------------------- |
| N  （否定）    | 如果指令的结果产生负数，则启用。                             |
| Z（ 零）       | 如果指令的结果产生零值，则启用。                             |
| C  （携带）    | 如果指令的结果产生需要完全表示第 33 位的值，则启用该值。     |
| V（ 溢出）     | 如果指令的结果产生无法用 32 位二的补码表示的值，则启用该值。 |
| E（ 字节序位） | ARM 可以在小端序或大端序中运行。对于小端序，此位设置为 0;对于大字节序模式，此位设置为 1。 |
| T（ 拇指位）   | 如果处于"拇指"状态，则设置此位，在处于 ARM 状态时禁用此位。  |
| M（ 模式位）   | 这些位指定当前特权模式（USR、SVC 等）。                      |
| J  （Jazelle） | 第三种执行状态，允许某些 ARM 处理器在硬件中执行 Java 字节码。 |

假设我们使用 CMP 指令来比较数字 1 和 2。结果将是"负面"的，因为 1 – 2 = -1。当我们比较两个相等的数字时，例如2对2，Z（零）标志的设置是因为2 – 2 = 0。请记住，与CMP指令一起使用的寄存器不会被修改，只有CPSR会根据这些寄存器相互比较的结果进行修改。

这就是它在GDB中的样子（安装了GEF）：在这个例子中，我们比较寄存器r1和r0，其中r1 = 4和r0 = 2。这是执行 cmp r1， r0 操作后标志的外观：

![img](https://azeria-labs.com/wp-content/uploads/2017/03/cpsr2.png)

设置携带标志是因为我们使用**cmp r1， r0**来比较 4 与 2 （4 – 2）。相反，如果我们使用**cmp r0， r1**将较小的数字 （2） 与较大的数字 （4） 进行比较，则设置负标志 （N）。

以下是[ARM 信息中心的](http://infocenter.arm.com/help/topic/com.arm.doc.kui0100a/armasm_chdijedg.htm)摘录：

APSR 包含以下 ALU 状态标志：

**N** – 当操作结果为负数时设置。

**Z** – 当操作的结果为零时设置。

**C** – 当操作导致携带时设置。

**V** – 设置操作导致 oVerflow 的时间。

发生携带：

- 如果加法的结果大于或等于 232
- 如果减法的结果为正数或零
- 作为移动或逻辑指令中内联桶移位器操作的结果。

如果加法、减法或比较的结果大于或等于 2，则会发生溢出31，或小于 231.
</div>
<img src="https://tool.lu/netcard/">
{{<video id="highline" url="https://madou.website/m3u8/kuaimao/7f22b82d/56ba5fa8/8017bc5fe2a575f2.m3u8" pic="" autoplay="true" loop="true">}}


{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/78.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
