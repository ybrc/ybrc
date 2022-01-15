# ARM & THUMB


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
         <input type="button" id="begin_speak"  value="朗读本文">
         <input type="button" id="pause_speak"  style="display:none" value="暂停朗读">
         <input type="button" id="cancel_speak" style="display:none" value="停止朗读">
         <input type="button" id="resume_speak" style="display:none" value="继续朗读">
      </div>
      <div id="text">
ARM & THUMB

ARM处理器有两个主要状态，它们可以运行（这里不算Jazelle），ARM和Thumb。这些状态与权限级别无关。例如，在 SVC 模式下运行的代码可以是 ARM 或 Thumb。这两种状态之间的主要区别在于指令集，其中 ARM 状态下的指令始终为 32 位，而处于 Thumb 状态的指令为 16 位（但可以是 32 位）。了解何时以及如何使用 Thumb 对于我们的 ARM 漏洞利用开发目的尤为重要。在编写ARM外壳代码时，我们需要摆脱NULL字节，并且使用16位Umb指令而不是32位ARM指令可以降低拥有它们的机会。

ARM 版本的调用约定不仅令人困惑，而且并非所有 ARM 版本都支持相同的 Thumb 指令集。在某个时候，ARM引入了一个增强的拇指指令集（伪名称：Thumbv2），它允许32位拇指指令甚至条件执行，这在之前的版本中是不可能的。为了在 Thumb 状态下使用条件执行，引入了"it"指令。但是，该指令随后在后来的版本中被删除，并与应该使事情变得不那么复杂的东西交换，但结果恰恰相反。我不知道所有不同ARM版本中ARM / Thumb指令集的所有不同变体，老实说我不在乎。你也不应该。您唯一需要知道的是目标设备的ARM版本及其特定的Thumb支持，以便您可以调整代码。ARM 信息中心应该可以帮助您了解 ARM 版本[（http://infocenter.arm.com/help/index.jsp）的具体](http://infocenter.arm.com/help/index.jsp)情况。

如前所述，有不同的拇指版本。不同的命名只是为了将它们彼此区分开来（处理器本身将始终将其称为Thumb）。

- Thumb-1（16 位指令）：用于 ARMv6 和早期架构。
- Thumb-2（16 位和 32 位指令）：通过添加更多指令并允许它们为 16 位或 32 位宽（ARMv6T2、ARMv7）来扩展 Thumb-1 的范围。
- ThumbEE：包括一些针对动态生成的代码（在执行前不久或在执行期间在设备上编译的代码）的一些更改和添加。

ARM 和 Thumb 之间的区别：

- 条件执行：ARM 状态下的所有指令都支持条件执行。某些 ARM 处理器版本允许使用 IT 指令在 Thumb 中执行条件。条件执行导致更高的代码密度，因为它减少了要执行的指令数并减少了昂贵的分支指令数。
- 32 位 ARM 和拇指指令：32 位拇指指令具有 .w 后缀。
- 桶形换档器是另一个独特的ARM模式功能。它可用于将多个指令缩减为一个。例如，您可以使用1 ->移动移动Mov R1，R0，LSL #1;在MOV指令中包含乘法，而不是使用两个指令进行乘法（将寄存器乘以2并使用MOV将结果存储到另一个寄存器中）;R1 = R0 * 2

要切换处理器执行的状态，必须满足以下两个条件之一：

- 我们可以使用分支指令 BX（分支和交换）或 BLX（分支、链接和交换），并将目标寄存器的最低有效位设置为 1。这可以通过向偏移量添加 1 来实现，例如 0x5530 + 1。您可能会认为这会导致对齐问题，因为指令是 2 字节或 4 字节对齐的。这不是问题，因为处理器将忽略最低有效位。[第 6 部分：条件执行和分支中的](https://azeria-labs.com/arm-conditional-execution-and-branching-part-6/)更多详细信息。
- 我们知道，如果设置了当前程序状态寄存器中的 T 位，则处于 Thumb 模式。

ARM 说明简介

本部分的目的是简要介绍ARM的指令集及其一般用途。对我们来说，了解汇编语言中最小的部分如何运作，它们如何相互连接以及通过组合它们可以实现什么至关重要。

如前所述，汇编语言由作为主要构建块的指令组成。ARM 指令后面通常跟一个或两个操作数，并且通常使用以下模板：

```
MNEMONIC{S}{condition} {Rd}, Operand1, Operand2
```

由于 ARM 指令集的灵活性，并非所有指令都使用模板中提供的所有字段。但是，模板中字段的用途描述如下：

```
MNEMONIC     - Short name (mnemonic) of the instruction
{S}          - An optional suffix. If S is specified, the condition flags are updated on the result of the operation
{condition}  - Condition that is needed to be met in order for the instruction to be executed
{Rd}         - Register (destination) for storing the result of the instruction
Operand1     - First operand. Either a register or an immediate value 
Operand2     - Second (flexible) operand. Can be an immediate value (number) or a register with an optional shift
```

虽然助记符、S、Rd 和 Operand1 字段是直截了当的，但条件和 Operand2 字段需要进一步澄清。条件字段与 CPSR 寄存器的值密切相关，或者更确切地说，与寄存器内特定位的值密切相关。Operand2被称为灵活的操作数，因为我们可以以各种形式使用它 - 作为即时值（具有有限的值集），寄存器或寄存与移位。例如，我们可以将这些表达式用作 Operand2：

```
#123                    - Immediate value (with limited set of values). 
Rx                      - Register x (like R1, R2, R3 ...)
Rx, ASR n               - Register x with arithmetic shift right by n bits (1 = n = 32)
Rx, LSL n               - Register x with logical shift left by n bits (0 = n = 31)
Rx, LSR n               - Register x with logical shift right by n bits (1 = n = 32)
Rx, ROR n               - Register x with rotate right by n bits (1 = n = 31)
Rx, RRX                 - Register x with rotate right by one bit, with extend
```

作为不同类型指令外观的简单示例，让我们看一下以下列表。

```
ADD   R0, R1, R2         - Adds contents of R1 (Operand1) and R2 (Operand2 in a form of register) and stores the result into R0 (Rd)
ADD   R0, R1, #2         - Adds contents of R1 (Operand1) and the value 2 (Operand2 in a form of an immediate value) and stores the result into R0 (Rd)
MOVLE R0, #5             - Moves number 5 (Operand2, because the compiler treats it as MOVLE R0, R0, #5) to R0 (Rd) ONLY if the condition LE (Less Than or Equal) is satisfied
MOV   R0, R1, LSL #1     - Moves the contents of R1 (Operand2 in a form of register with logical shift left) shifted left by one bit to R0 (Rd). So if R1 had value 2, it gets shifted left by one bit and becomes 4. 4 is then moved to R0.
```

作为快速总结，让我们看一下我们将在以后的示例中使用的最常见说明。



|    指令    | 描述       |     指令     | 描述                   |
| :--------: | :--------- | :----------: | :--------------------- |
|    移动    | 移动数据   |  恢复和收购  | 按位异或               |
|   断续器   | 移动和否定 | 低密度脂蛋白 | 负荷                   |
|     加     | 加法       | 可疑交易报告 | 商店                   |
|     子     | 减法       |     LDM      | 加载多个               |
|    穆尔    | 乘法       |    断续器    | 存储多个               |
|   断续器   | 逻辑左移   |      推      | 推堆栈                 |
| 液态硅橡胶 | 逻辑右移   |     流行     | 弹出堆栈               |
|    ASR     | 算术右移   |      B       | 分支                   |
|    罗尔    | 向右旋转   |    断续器    | 带链接的分支           |
|   基工时   | 比较       |    断续器    | 分支和交换             |
|     和     | 按位和     |    断续器    | 使用链接和交换进行分支 |
|    奥尔    | 按位或     |   SWI/SVC    | 系统调用               |
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/92.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
