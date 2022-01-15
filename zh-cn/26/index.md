# 偏移形式：即时值作为偏移量


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
内存说明：加载和存储

ARM 使用负载存储模型进行内存访问，这意味着只有加载/存储（LDR 和 STR）指令才能访问内存。虽然在x86上，大多数指令都允许直接对内存中的数据进行操作，但在ARM上，数据在操作之前必须从内存移动到寄存器中。这意味着在 ARM 上的特定内存地址处递增 32 位值需要三种类型的指令（加载、递增和存储），以便首先将特定地址处的值加载到寄存器中，在寄存器中递增，然后将其存储回寄存器中的内存。

为了解释 ARM 上加载和存储操作的基础知识，我们从一个基本示例开始，然后继续学习三种基本偏移形式，每种偏移形式具有三种不同的地址模式。对于每个示例，我们将使用具有不同 LDR/STR 偏移形式的同一段汇编代码，以保持其简单性。遵循本教程这一部分的最佳方式是在[实验室环境中](https://azeria-labs.com/emulate-raspberry-pi-with-qemu/)的调试器 （GDB） 中运行代码示例。

1. 偏移形式**：作为**偏移量的即时值
   - 寻址模式：偏移
   - 寻址模式：预索引
   - 寻址模式：后索引
2. 偏移形式：**注册**为偏移量
   - 寻址模式：偏移
   - 寻址模式：预索引
   - 寻址模式：后索引
3. 偏移形式：**缩放寄存器**作为偏移量
   - 寻址模式：偏移
   - 寻址模式：预索引
   - 寻址模式：后索引

#### 第一个基本示例

通常，LDR 用于将某些内容从内存加载到寄存器中，而 STR 用于将某些内容从寄存器存储到内存地址。

![img](https://azeria-labs.com/wp-content/uploads/2017/04/ldr1-1.png.pagespeed.ce.ztin0qiri2.png)

```
LDR R2, [R0]   @ [R0] - origin address is the value found in R0.
STR R2, [R1]   @ [R1] - destination address is the value found in R1.
```

LDR 操作：将R0 中地址处的值加载到目标寄存器 R2。

STR 操作：将 R2 中找到的值存储到 R1 中找到的内存地址。

 

这是它在功能汇编程序中的样子：

```
.data          /* the .data section is dynamically created and its addresses cannot be easily predicted */
var1: .word 3  /* variable 1 in memory */
var2: .word 4  /* variable 2 in memory */

.text          /* start of the text (code) section */ 
.global _start

_start:
    ldr r0, adr_var1  @ load the memory address of var1 via label adr_var1 into R0 
    ldr r1, adr_var2  @ load the memory address of var2 via label adr_var2 into R1 
    ldr r2, [r0]      @ load the value (0x03) at memory address found in R0 to register R2  
    str r2, [r1]      @ store the value found in R2 (0x03) to the memory address found in R1 
    bkpt             

adr_var1: .word var1  /* address to var1 stored here */
adr_var2: .word var2  /* address to var2 stored here */
```

在底部，我们有我们的文本池（同一代码部分中的内存区域，用于存储常量，字符串或偏移量，其他人可以以与位置无关的方式引用），其中我们使用标签存储var1和var2（在顶部的数据部分中定义）的内存地址adr_var1和adr_var2。第一个 LDR 将 var1 的地址加载到寄存器 R0 中。第二个 LDR 对 var2 执行相同的操作，并将其加载到 R1。然后，我们将存储在 R0 中找到的内存地址的值加载到 R2，并将在 R2 中找到的值存储到 R1 中找到的内存地址。

当我们将某些内容加载到寄存器中时，括号 （[ ]） 表示：在这些括号之间的寄存器中找到的值是我们要从中加载某些内容的内存地址。

当我们将某些内容存储到内存位置时，括号（[ ]）表示：在这些括号之间的寄存器中找到的值是我们要存储某些内容的内存地址。

这听起来比实际情况更复杂，因此下面是在调试器中执行上述代码时内存和寄存器发生的情况的可视化表示：

![img](https://azeria-labs.com/wp-content/uploads/2017/04/ldr1-gif2.gif.pagespeed.ce.eNac3lwkBh.gif)

让我们看一下调试器中的相同代码。

```
gef> disassemble _start
Dump of assembler code for function _start:
 0x00008074 <+0>:      ldr  r0, [pc, #12]   ; 0x8088 <adr_var1>
 0x00008078 <+4>:      ldr  r1, [pc, #12]   ; 0x808c <adr_var2>
 0x0000807c <+8>:      ldr  r2, [r0]
 0x00008080 <+12>:     str  r2, [r1]
 0x00008084 <+16>:     bx   lr
End of assembler dump.
```

我们在前两个 LDR 操作中指定的标签更改为 [pc， #12]。这称为 PC 相对寻址。由于我们使用了标签，因此编译器计算了文本池 （PC+12） 中指定的值的位置。您可以使用这种确切的方法自行计算位置，也可以使用我们之前所做的标签。唯一的区别是，您需要计算值在文本池中的确切位置，而不是使用标签。在本例中，它距离有效 PC 位置有 3 个跃点 （4+4+4=12）。本章后面将详细介绍 PC 相对寻址。

附注：如果您忘记了为什么有效PC位于当前PC之前的两个说明中，则在第2部分中进行了描述[...在执行期间，PC 将当前指令的地址加上 8（两条 ARM 指令）存储在 ARM 状态，并将当前指令加 4（两条 Thumb 指令）的地址存储在 Thumb 状态。这与x86不同，在x86中，PC始终指向要执行的下一条指令...]。

![img](https://azeria-labs.com/wp-content/uploads/2017/04/pc-relative1-1.png.pagespeed.ce.hWNi5fEpQV.png)

### 1.**偏移形式：**即时值作为偏移量

```
STR    Ra, [Rb, imm]
LDR    Ra, [Rc, imm]
```

在这里，我们使用即时（整数）作为偏移量。从基本寄存器（以下示例中的 R1）中添加或减去此值，以在编译时已知的偏移量访问数据。

```
.data
var1: .word 3
var2: .word 4

.text
.global _start

_start:
    ldr r0, adr_var1  @ load the memory address of var1 via label adr_var1 into R0
    ldr r1, adr_var2  @ load the memory address of var2 via label adr_var2 into R1
    ldr r2, [r0]      @ load the value (0x03) at memory address found in R0 to register R2 
    str r2, [r1, #2]  @ address mode: offset. Store the value found in R2 (0x03) to the memory address found in R1 plus 2. Base register (R1) unmodified. 
    str r2, [r1, #4]! @ address mode: pre-indexed. Store the value found in R2 (0x03) to the memory address found in R1 plus 4. Base register (R1) modified: R1 = R1+4 
    ldr r3, [r1], #4  @ address mode: post-indexed. Load the value at memory address found in R1 to register R3. Base register (R1) modified: R1 = R1+4 
    bkpt

adr_var1: .word var1
adr_var2: .word var2
```

让我们调用这个程序ldr.s，编译它并在GDB中运行它，看看会发生什么。

```
$ as ldr.s -o ldr.o
$ ld ldr.o -o ldr
$ gdb ldr
```

在GDB（使用gef）中，我们在_start处设置一个断点并运行程序。

```
gef> break _start
gef> run
...
gef> nexti 3     /* to run the next 3 instructions */
```

我的系统上的寄存器现在填充了以下值（请记住，这些地址在您的系统上可能不同）：

```
$r0 : 0x00010098 -> 0x00000003
$r1 : 0x0001009c -> 0x00000004
$r2 : 0x00000003
$r3 : 0x00000000
$r4 : 0x00000000
$r5 : 0x00000000
$r6 : 0x00000000
$r7 : 0x00000000
$r8 : 0x00000000
$r9 : 0x00000000
$r10 : 0x00000000
$r11 : 0x00000000
$r12 : 0x00000000
$sp : 0xbefff7e0 -> 0x00000001
$lr : 0x00000000
$pc : 0x00010080 -> <_start+12> str r2, [r1]
$cpsr : 0x00000010
```

下一条指令，将使用**偏移地址模式**执行 STR 操作。它将存储从 R2 （0x00000003） 到 R1 （0x0001009c） + 偏移量 （#2） = 0x1009e 中指定的内存地址的值。

```
gef> nexti
gef> x/w 0x1009e 
0x1009e <var2+2>: 0x3
```

下一个 STR 操作使用**预索引地址模式**。您可以通过感叹号（！）来识别此模式。唯一的区别是，基本寄存器将使用存储 R2 值的最终内存地址进行更新。这意味着，我们将 R2 （0x3） 中找到的值存储到 R1 （0x1009c） + 偏移量 （#4） = 0x100A0 中指定的内存地址，并使用此确切地址更新 R1。

```
gef> nexti
gef> x/w 0x100A0
0x100a0: 0x3
gef> info register r1
r1     0x100a0     65696
```

最后一个 LDR 操作使用**索引后地址模式**。这意味着基寄存器（R1）被用作最终地址，然后使用用R1 + 4计算的偏移量进行更新。换句话说，它获取在 R1（不是 R1+4）中找到的值（该值0x100A0并将其加载到 R3 中，然后将 R1 更新为 R1 （0x100A0） + 偏移量 （#4） = 0x100a4。

```
gef> info register r1
r1      0x100a4   65700
gef> info register r3
r3      0x3       3
```

以下是正在发生的事情的抽象说明：

### ![img](https://azeria-labs.com/wp-content/uploads/2017/04/ldr1-1gif2.gif.pagespeed.ce.XgwHcXX92s.gif)

### 2.**偏移形式：**注册为偏移量。

```
STR    Ra, [Rb, Rc]
LDR    Ra, [Rb, Rc]
```

此偏移形式使用寄存器作为偏移量。此偏移量窗体的一个用法示例是，当代码想要访问在运行时计算索引的数组时。

```
.data
var1: .word 3
var2: .word 4

.text
.global _start

_start:
    ldr r0, adr_var1  @ load the memory address of var1 via label adr_var1 to R0 
    ldr r1, adr_var2  @ load the memory address of var2 via label adr_var2 to R1 
    ldr r2, [r0]      @ load the value (0x03) at memory address found in R0 to R2
    str r2, [r1, r2]  @ address mode: offset. Store the value found in R2 (0x03) to the memory address found in R1 with the offset R2 (0x03). Base register unmodified.   
    str r2, [r1, r2]! @ address mode: pre-indexed. Store value found in R2 (0x03) to the memory address found in R1 with the offset R2 (0x03). Base register modified: R1 = R1+R2. 
    ldr r3, [r1], r2  @ address mode: post-indexed. Load value at memory address found in R1 to register R3. Then modify base register: R1 = R1+R2.
    bx lr

adr_var1: .word var1
adr_var2: .word var2
```

在以**偏移地址模式**执行第一个STR运算后，R2（0x00000003）的值将存储在内存地址0x0001009c + 0x00000003 = 0x0001009F。

```
gef> x/w 0x0001009F
 0x1009f <var2+3>: 0x00000003
```

具有**预索引地址模式**的第二个 STR 操作将执行相同的操作，不同之处在于它将使用计算的内存地址 （R1+R2） 更新基本寄存器 （R1）。

```
gef> info register r1
 r1     0x1009f      65695
```

最后一个 LDR 操作使用**索引后地址模式**，并将 R1 中找到的内存地址处的值加载到寄存器 R2 中，然后更新基本寄存器 R1 （R1+R2 = 0x1009f + 0x3 = 0x100a2）。

```
gef> info register r1
 r1      0x100a2     65698
gef> info register r3
 r3      0x3       3
```

### ![img](https://azeria-labs.com/wp-content/uploads/2017/04/ldr-reg-gif1-1.gif.pagespeed.ce.f4wUX622tc.gif)

### 3.**偏移形式**：缩放寄存器作为偏移量

```
LDR    Ra, [Rb, Rc, <shifter>]
STR    Ra, [Rb, Rc, <shifter>]
```

第三个偏移形式具有缩放的寄存器作为偏移量。在这种情况下，Rb 是基寄存器，Rc 是左/右移位（<shifter>）的即时偏移（或包含即时值的寄存器）以缩放即时。这意味着料筒移位器用于缩放偏移量。此偏移形式的一个示例用法是循环循环迭代数组。下面是一个可以在 GDB 中运行的简单示例：

```
.data
var1: .word 3
var2: .word 4

.text
.global _start

_start:
    ldr r0, adr_var1         @ load the memory address of var1 via label adr_var1 to R0
    ldr r1, adr_var2         @ load the memory address of var2 via label adr_var2 to R1
    ldr r2, [r0]             @ load the value (0x03) at memory address found in R0 to R2
    str r2, [r1, r2, LSL#2]  @ address mode: offset. Store the value found in R2 (0x03) to the memory address found in R1 with the offset R2 left-shifted by 2. Base register (R1) unmodified.
    str r2, [r1, r2, LSL#2]! @ address mode: pre-indexed. Store the value found in R2 (0x03) to the memory address found in R1 with the offset R2 left-shifted by 2. Base register modified: R1 = R1 + R2<<2
    ldr r3, [r1], r2, LSL#2  @ address mode: post-indexed. Load value at memory address found in R1 to the register R3. Then modifiy base register: R1 = R1 + R2<<2
    bkpt

adr_var1: .word var1
adr_var2: .word var2
```

第一个**STR**操作使用**偏移地址模式**，并将在 R2 中找到的值存储在从**[r1， r2， LSL#2]**计算得出的内存位置，这意味着它将 R1 中的值作为基数（在本例中，R1 包含 var2 的内存地址），然后获取 R2 中的值（0x3）， 并将其左移 2。下图尝试可视化如何使用 [r1， r2， LSL#2] 计算内存位置。

![img](https://azeria-labs.com/wp-content/uploads/2017/04/ldr-shift1.png.pagespeed.ce.WTVHlvqN9v.png)

第二个 STR 操作使用**预索引地址模式**。这意味着，它执行与上一个操作相同的操作，不同之处在于它之后使用计算的内存地址更新基本寄存器R1。换句话说，它将首先存储内存地址 R1 （0x1009c） + 偏移量由 #2 （0x03 LSL#2 = 0xC） = 0x100a8 找到的值，并使用 0x100a8 更新 R1。

```
gef> info register r1
r1      0x100a8      65704
```

最后一个 LDR 操作使用**索引后地址模式**。这意味着，它将在 R1 中找到的内存地址（0x100a8）处的值加载到寄存器 R3 中，然后使用用 r2 LSL#2 计算的值更新基本寄存器 R1。换句话说，R1 使用值 R1 （0x100a8） + 偏移量 R2 （0x3） 左移 #2 （0xC） = 0x100b4 进行更新。

```
gef> info register r1
r1      0x100b4      65716
```

### 总结

请记住 LDR/STR 中的三种偏移模式：

1. 偏移模式使用**即时**偏移作为偏移
   - ldr r3， [r1， #4]
2. 偏移模式使用**寄存器**作为偏移
   - ldr r3， [r1， r2]
3. 偏移模式使用**缩放寄存器**作为偏移
   - ldr r3， [r1， r2， LSL#2]

如何记住 LDR/STR 中的不同地址模式：

- 如果有 ！，则为**前缀**地址模式
  - ldr r3， [r1， #4]！
  - ldr r3， [r1， r2]！
  - ldr r3， [r1， r2， LSL#2]！
- 如果基本寄存器本身位于括号中，则它是**后缀**地址模式
  - ldr r3， [r1]， #4
  - ldr r3， [r1]， r2
  - ldr r3， [r1]， r2， LSL#2
- 其他任何内容都是**偏移**地址模式。
  - ldr r3， [r1， #4]
  - ldr r3， [r1， r2]
  - ldr r3， [r1， r2， LSL#2]

用于 PC 相对寻址的 LDR

LDR 不仅用于将数据从存储器加载到寄存器中。有时你会看到这样的语法：

```
.section .text
.global _start

_start:
   ldr r0, =jump        /* load the address of the function label jump into R0 */
   ldr r1, =0x68DB00AD  /* load the value 0x68DB00AD into R1 */
jump:
   ldr r2, =511         /* load the value 511 into R2 */ 
   bkpt
```

这些指令在技术上称为伪指令。我们可以使用此语法来引用文本池中的数据。文本池是同一部分中的内存区域（因为文本池是代码的一部分），用于存储常量、字符串或偏移量。在上面的示例中，我们使用这些伪指令来引用函数的偏移量，并在一条指令中将32位常量移动到寄存器中。我们有时需要使用此语法在一条指令中将32位常量移动到寄存器中的原因是，ARM只能一次性加载8位值。什么？要了解原因，您需要知道 ARM 上如何处理即时值。

在 ARM 上使用即时值

在 ARM 上的寄存器中加载即时值并不像在 x86 上那样简单。对可以使用哪些即时值有限制。这些限制是什么以及如何处理它们并不是ARM组装中最令人兴奋的部分，但请耐心等待，这只是为了您的理解，您可以使用一些技巧来绕过这些限制（提示：LDR）。

我们知道每个ARM指令的长度都是32位的，所有指令都是有条件的。我们可以使用16个条件代码，其中一个条件代码占用指令的4位。然后，我们需要 2 位用于目标寄存器。第一个操作数寄存器为 2 位，设置状态标志为 1 位，另外还有用于实际操作码等其他事项的各种位数。这里的要点是，在将位分配给指令类型，寄存器和其他字段之后，只剩下12位用于即时值，这将只允许4096个不同的值。

这意味着 ARM 指令只能直接对 MOV 使用有限范围的即时值。如果一个数字不能直接使用，则必须将其拆分为多个部分，并从多个较小的数字拼凑在一起。

但还有更多。这12位不是将12位作为单个整数，而是拆分为一个8位数（n），能够加载0-255范围内的任何8位值，而4位旋转字段（r）是0到30之间以2步长向右旋转。这意味着完整的即时值 v 由公式给出：v = n ror 2*r。换句话说，唯一有效的即时值是旋转字节（可以减少到一个字节并旋转一个偶数的值）。

以下是有效和无效即时值的一些示例：

```
Valid values:
#256        // 1 ror 24 --> 256
#384        // 6 ror 26 --> 384
#484        // 121 ror 30 --> 484
#16384      // 1 ror 18 --> 16384
#2030043136 // 121 ror 8 --> 2030043136
#0x06000000 // 6 ror 8 --> 100663296 (0x06000000 in hex)

Invalid values:
#370        // 185 ror 31 --> 31 is not in range (0 – 30)
#511        // 1 1111 1111 --> bit-pattern can’t fit into one byte
#0x06010000 // 1 1000 0001.. --> bit-pattern can’t fit into one byte
```

这样做的结果是无法一次性加载完整的32位地址。我们可以通过使用以下两个选项之一来绕过此限制：

1. 从较小的零件中构造更大的值
   1. 而不是使用MOV r0，#511
   2. 将 511 分为两部分：MOV r0、#256 和 ADD r0（#255）
2. 使用负载构造'ldr r1，=*值*'，汇编程序将很乐意将其转换为MOV，或者如果不可能，则转换为PC相对负载。
   1. LDR r1， =511

如果您尝试加载无效的即时值，汇编程序将抱怨并输出错误，指出：错误：无效常量。如果遇到此错误，您现在知道它的含义以及如何处理它。
假设您要将 #511 加载到 R0 中。

```
.section .text
.global _start

_start:
    mov     r0, #511
    bkpt
```

如果尝试组装此代码，汇编程序将引发错误：

```
azeria@labs:~$ as test.s -o test.o
test.s: Assembler messages:
test.s:5: Error: invalid constant (1ff) after fixup
```

您需要将 511 拆分为多个部分，或者按照我之前描述的那样使用 LDR。

```
.section .text
.global _start

_start:
 mov r0, #256   /* 1 ror 24 = 256, so it's valid */
 add r0, #255   /* 255 ror 0 = 255, valid. r0 = 256 + 255 = 511 */
 ldr r1, =511   /* load 511 from the literal pool using LDR */
 bkpt
```

如果您需要确定某个数字是否可以用作有效的即时值，则无需自己计算。你可以使用我的小python脚本[rotator.py](https://raw.githubusercontent.com/azeria-labs/rotator/master/rotator.py)它把你的号码作为输入，并告诉你它是否可以用作有效的即时号码。

```
azeria@labs:~$ python rotator.py
Enter the value you want to check: 511

Sorry, 511 cannot be used as an immediate number and has to be split.

azeria@labs:~$ python rotator.py
Enter the value you want to check: 256

The number 256 can be used as a valid immediate number.
1 ror 24 --> 256
```
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/26.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
