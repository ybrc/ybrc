# 如何阅读ARM64汇编语言

**此文为加密收费内容添加我微信支付后可看:**
<!--more-->
<img src="https://tool.lu/netcard/">
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
# 如何阅读ARM64汇编语言

[ARM64](https://en.wikipedia.org/wiki/AArch64)是一种[计算机架构](https://en.wikipedia.org/wiki/Instruction_set_architecture)，与流行的英特尔[x86-64](https://en.wikipedia.org/wiki/X86-64)架构竞争，用于台式机、笔记本电脑等中的CPU。ARM64在手机[1](https://wolchok.org/posts/how-to-read-arm64-assembly-language/#fn:1)以及基于[Graviton](https://aws.amazon.com/ec2/graviton/)的[亚马逊EC2](https://aws.amazon.com/ec2/)实例、[树莓派](https://www.raspberrypi.org/)3和4以及备受[吹嘘的](https://debugger.medium.com/why-is-apples-m1-chip-so-fast-3262b158cba2)[苹果M1](https://en.wikipedia.org/wiki/Apple_M1)芯片中很常见，所以了解它可能会有用！事实上，由于iPhone，我几乎可以肯定花在ARM64上的时间比x86-64*多*。

本帖是我[之前关于如何阅读汇编语言的帖子的](https://ybrc.github.io/zh-cn/how-to-read-assembly-language/)替代版本。它浏览了相同的示例，而是显示了ARM64组件。为了方便您阅读，说明和寄存器的解释等背景内容也会被重审。

# 说明

汇编语言的基本单元是**指令**。每个机器指令都是一个小操作，例如添加两个数字，从内存加载一些数据，跳转到另一个内存位置（如可怕的[goto](https://en.wikipedia.org/wiki/Goto)语句），或从函数调用或返回。与x86-64不同，每个ARM64指令正好有4字节长，因此您只需计算指令即可判断一段ARM64代码占用了多少内存。

# 示例1：矢量规范

我们的第一个玩具示例将让我们熟悉简单的说明。它只是计算2D矢量的[正方形](https://en.wikipedia.org/wiki/Norm_(mathematics)#Euclidean_norm)：

```c++
#include <cstdint>

struct Vec2 {
    int64_t x;
    int64_t y;
};

int64_t normSquared(Vec2 v) {
    return v.x * v.x + v.y * v.y;
}
```

以下是从第11条带[产生的ARM64组件](https://godbolt.org/#z:OYLghAFBqd5QCxAYwPYBMCmBRdBLAF1QCcAaPECAM1QDsCBlZAQwBtMQBGAFlICsupVs1qhkAUgBMAISnTSAZ0ztkBPHUqZa6AMKpWAVwC2tQVvQAZPLUwA5YwCNMxEADZSAB1QLC62nsMTQS8fNTorG3sjJxd3JRUw2gYCZmICAONTTkVlTFU/ZNSCCLtHZzdFFLSMoOyFKuLrUujy1wBKRVQDYmQOAHIpAGZrZEMsAGpxQZ1kevx6KexxAAYAQRXV%2BuIDVXGANTzJSYB2WTXxi/HrAlduAH0CcYAPKbPVy6v6W4fxgE9XjbiY4AEQBaw212%2Bj1oJCMDAAjgZUph0BADsgjgA3NonN4fYiYAjdWjjTEAOie4wAVKSKZMZLTftTGWD1iC%2Bh1WCA%2BgBWPqkUx9Zb81DcnRyOTjBRdHqYemDTj8gjc4VtDoAaxAg0GZO1ev1BvcXL63H5guFpFFfX5ChAy1IyqFHNIcFgSDQRg8eHYZAoEA9Xp9IFSRkxAA4ALSjETATicZbZKjegjOW0QBwq/kOaypX7cxWkD1GLQEADytFYeadpCwRhj7EzNbwBPymMwturmCeeQMKfz/Ouyn7QjwDmIub0WGHBGIeCM/Y6NHoTDYHB4/EEwlEKAlMhHDltkA6qA8iQ7EdLg3GEbmU2BEhkckkFvieUSmm0NSypHMJSiMWCbxfDoL9ANCPw/zKFw6lyfI6EKap9EyQRXzgpIGkglpoMqIpQLqDCmn/cpOA6aVul6LhOW5PkBUbK0Q3DCNmHGaNRHGOMyWWMlOHGCBcEIEh5WycY9E9b1nCEnFxUfGQlUzNVSE1bVdQNVTtSNblTVo6srRtO0HXkl0YEQFBUDEn1yEoANxJcVjY3jRNk1TSgM2rbNaFzYcixLctK0bWt636C18BbNQ2w7C0ux7Ps%2BgLQdjQLVhR3HYhfknIKlVnedYudJdGBYBt1wESQhBjHcZPkJKD3gY9Tz8c9L2vW9BnvXdpGfG1YPfCBzDwn9tEwgDshCYD/CQ2pPCAxJBuInIEgKBo%2BtQxIEMaSIoJQxbxu/eoihm6DSJlCiSKEaizTo7knjDVwI1uFit2AdjOE47jeP4ohiCE0gRLMwMJKGSQpLauSnQUpSdTUtTTpNc6dO5PT7UdVUqL6SRYYtXSDNBjo22IHwNG4IA%3D%3D%3D)：

```asm
        mul     x8, x1, x1
        madd    x0, x0, x0, x8
        ret
```

第一条指令，`mul x8, x1, x1`，[执行乘法](https://developer.arm.com/documentation/100076/0100/a64-instruction-set-reference/a64-general-instructions/mul?lang=en)。与我们之前使用的x86-64程序集语法不同，目标操作数在左侧。本`mul`指令将`x1`的内容平方，并将结果存储到`x8`。

接下来，我们有`madd x0, x0, x0, x8`。[`madd`](https://developer.arm.com/documentation/100076/0100/a64-instruction-set-reference/a64-general-instructions/madd?lang=en)代表“乘法添加”：它平方`x0`，添加`x8`，并将结果存储在`x0`中。

最后，`ret`从`normSquared`返回。

# 登记册

让我们绕个简短的绕道，解释一下我们在示例中看到的寄存器是什么。寄存器是装配语言的“变量”。与您最喜欢的编程语言中的变量（可能）不同，它们数量有限，它们具有标准化的名称，我们将谈论的变量最多64位大小。ARM64有31个名为`x0`到`x30`的通用寄存器。要引用它们的下32位，而不是完整的64位，我们可以写`w0`到`w30`。还有一个[专用](https://developer.arm.com/documentation/100076/0100/instruction-set-overview/overview-of-aarch64-state/stack-pointer-register)的[`sp`（堆栈指针）寄存器](https://developer.arm.com/documentation/100076/0100/instruction-set-overview/overview-of-aarch64-state/stack-pointer-register)。核心注册名称的完整文档可在ARM[网站上找到](https://developer.arm.com/documentation/100076/0100/instruction-set-overview/overview-of-aarch64-state/predeclared-core-register-names-in-aarch64-state)。

# 示例2：堆栈

现在，让我们扩展我们的示例，在`normSquared`中调试打印`Vec2`：

```c++
#include <cstdint>

struct Vec2 {
    int64_t x;
    int64_t y;
    void debugPrint() const;
};

int64_t normSquared(Vec2 v) {
    v.debugPrint();
    return v.x * v.x + v.y * v.y;
}
```

同样，让我们看看[生成的程序集](https://godbolt.org/#z:OYLghAFBqd5QCxAYwPYBMCmBRdBLAF1QCcAaPECAM1QDsCBlZAQwBtMQBGAFlICsupVs1qhkAUgBMAISnTSAZ0ztkBPHUqZa6AMKpWAVwC2tEJICcpLegAyeWpgByxgEaZiIAGykADqgWE6rR6hiaCfgFqdHYOzkZuHt5KKlG0DATMxAQhxqYWisqYqkHpmQQxTq7uXooZWTlhnLVlFXEJXgCUiqgGxMgcAORSAMz2yIZYANTiwzrICgT49DPY4gAMAILrGwvEBqqTAGpFktMA7LKbk9eT9gSe3AD6BJMAHjOXGze39A/PkwBPD7bb4AN1QeHQkywLgMwAACsQ7hAOpM0LQFsDNuIzgARLFbTZ3P4vWgkIwMACOBkymHQEGOyFOoNROM%2BYIAdDC4YjkR0Cd9iJgCL1aJNQRzXpMAFTiyXTGRygEypUEnG4gZdVggAYAVgGpFMAzWBtQOp0cjkkwUPT6mAVw04BoIOpNHS6AGsQMNhhyff6A4HvNqBtwDUaTaQzQMDQoQGtSC7jZrSHBYEg0EYfHh2GQKBBM9ncyBMkZQQAOAC04xEwE4nDWTSoOYI7jjEBcroNLnsmQBOqdpEzRi0BAA8rRWP3k6QsEZa%2Bwu7O8ELiqDMHGZ5hXkUDK2Bwa7soD0I8C5iH29FgTwQkUYD10aPQmGwODx%2BIJhKIUJaZKeXHGkBdKgPipJulZjsMkyVgs6AzLiEgyHIkiRskRSpJo2gNKYTTWK0VQeE0ESBHQ2HhP4JG0Ph8TVE0aHFHQpT1PouSCPRqRMeU9iVDRhHNMxoQ4fxXGxARXBdDavT9OJQg6vqhpLtGpYVpWzBol%2BwCTPWHJrBynCTBAuCECQDpNJMehZjm7imaiFpITIzpdu6pBej6fqBh5PrBjqYYKTO0axvGiZOamMCICgqCWbm5CUIWVkeDWoj1o2pDNqwrbEO2nYzj2tB9iew6jhOU5LnOC6DJG%2BCrmo66bpG267vuAyDkeIaDqwZ4XsQAJXhVzp3g%2BqV0IwLCLu%2BAiSEItY/vZ8gdQB8DAaBQTgZB0GwfBiGyDIKGxoUDGmBA1hkbh2jUe0REUakJ2%2BFdQTnbRBQpCUdTZCxjRPehL0tNxbSPQsZQ3QDWQPYREm2tJnBanJ4aKTqrzlp4lYPOptZaZwOl6QZRlEMQpmkOZkVFtZIySLZv7SI5ybOa5vqeZ5smhrD/k6oFCZJm60MDJIzORgFwXU1066ZUEIDcEAA%3D%3D%3D)：

```asm
        sub     sp, sp, #32
        stp     x29, x30, [sp, #16]
        add     x29, sp, #16
        stp     x0, x1, [sp]
        mov     x0, sp
        bl      Vec2::debugPrint() const
        ldp     x8, x9, [sp]
        ldp     x29, x30, [sp, #16]
        mul     x8, x8, x8
        madd    x0, x9, x9, x8
        add     sp, sp, #32
        ret
```

我们从一个新的寄存器开始：`sp`。与x86-64上的`%rsp`，它是“堆栈指针”，用于维护[函数调用堆栈](https://en.wikipedia.org/wiki/Call_stack)。它指向堆栈的底部，该堆栈在ARM64上“向下”（向下）增长。因此，我们的`sub sp, sp, #32`指令正在通过从堆栈指针中[提取](https://developer.arm.com/documentation/100076/0100/a64-instruction-set-reference/a64-general-instructions/sub--immediate-?lang=en)，为堆栈上的四个64位整数腾出空间。接下来，`stp x29, x30, [sp, #16]`正在[修复一对](https://developer.arm.com/documentation/100076/0100/a64-instruction-set-reference/a64-data-transfer-instructions/stp?lang=en)寄存器：它正在从地址`sp + 16`开始在堆栈上保存旧帧指针（`x29`）和链接寄存器（`x30`-它包含返回地址，我们将在下面看到）。（方括号表示内存访问。）我们使用`add x29, sp, #16`计算新的帧指针；它需要指向之前保存的帧指针和堆栈指针。这结束了3个指令[功能的序幕](https://en.wikipedia.org/wiki/Function_prologue)。

Then, the following `stp x0, x1, [sp]` instruction stores the first and second arguments to `normSquared`, which are `v.x` and `v.y`, to the stack, effectively creating a copy of `v` in memory at the address in `sp`. Next, we put a pointer to that copy of `v` in `x0` with `mov x0, sp` and call `Vec2::debugPrint() const` with `bl`. `bl` is a mnemonic for [“branch with link”](https://developer.arm.com/documentation/100076/0100/a64-instruction-set-reference/a64-general-instructions/bl?lang=en), and it works slightly differently from the x86-64 `call` instruction: rather than pushing the return address onto the stack, it saves it in register `x30`, also known as the link register or `lr`.

After `debugPrint` has returned, we [LoaD the Pair](https://developer.arm.com/documentation/100076/0100/a64-instruction-set-reference/a64-general-instructions/ldp) of registers `r8` and `r9` with `v.x` and `v.y` from the stack. We also restore the old values of the frame pointer and stack pointer. Then, we have the same `mul`and `madd` instructions as in the previous example. Finally , we `add sp, sp, #32` to clean up the 32 bytes of stack space we allocated at the start of our function (called the [function epilogue](https://en.wikipedia.org/wiki/Function_prologue#Epilogue); I would include the load of the old frame pointer and stack pointer even though it happened to come before the `mul` & `madd`) and then return to our caller with `ret`.

# 示例3：控制流程

现在，让我们看看另一个例子。假设我们想打印一个大写C字符串，并且我们希望避免为小字符串进行堆分配。[2](https://wolchok.org/posts/how-to-read-arm64-assembly-language/#fn:2)我们可能会写以下内容：

```c++
#include <cstdio>
#include <cstring>
#include <memory>

void copyUppercase(char *dest, const char *src);

constexpr size_t MAX_STACK_ARRAY_SIZE = 1024;

void printUpperCase(const char *s) {
    auto sSize = strlen(s);
    if (sSize <= MAX_STACK_ARRAY_SIZE) {
        char temp[sSize + 1];
        copyUppercase(temp, s);
        puts(temp);
    } else {
        // std::make_unique_for_overwrite is missing on Godbolt.
        std::unique_ptr<char[]> temp(new char[sSize + 1]);
        copyUppercase(temp.get(), s);
        puts(temp.get());
    }
}
```

这是[生成的程序集](https://godbolt.org/#g:!((g:!((g:!((h:codeEditor,i:(fontScale:14,j:1,lang:c%2B%2B,selection:(endColumn:74,endLineNumber:16,positionColumn:74,positionLineNumber:16,selectionStartColumn:74,selectionStartLineNumber:16,startColumn:74,startLineNumber:16),source:'%23include+ %23include+ %23include+ void+copyUppercase(char+*dest,+const+char+*src)%3B constexpr+size_t+MAX_STACK_ARRAY_SIZE+%3D+1024%3B void+printUpperCase(const+char+*s)+{ ++++auto+sSize+%3D+strlen(s)%3B ++++if+(sSize+<%3D+MAX_STACK_ARRAY_SIZE)+{ ++++++++char+temp[sSize+%2B+1]%3B ++++++++copyUppercase(temp,+s)%3B ++++++++puts(temp)%3B ++++}+else+{ ++++++++//+std::make_unique_for_overwrite+is+missing+on+Compiler+Explorer. ++++++++std::unique_ptr+temp(new+char[sSize+%2B+1])%3B ++++++++copyUppercase(temp.get(),+s)%3B ++++++++puts(temp.get())%3B ++++} }'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:43.31039755351682,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:armv8-clang1101,filters:(b:'0',binary:'1',commentOnly:'0',demangle:'0',directives:'0',execute:'1',intel:'1',libraryCode:'1',trim:'1'),fontScale:14,j:1,lang:c%2B%2B,libs:!(),options:'-O3+-std%3Dc%2B%2B20+-fno-vectorize+-fno-unroll-loops+-fno-exceptions',selection:(endColumn:23,endLineNumber:15,positionColumn:23,positionLineNumber:15,selectionStartColumn:23,selectionStartLineNumber:15,startColumn:23,startLineNumber:15),source:1),l:'5',n:'0',o:'armv8-a+clang+11.0.1+(Editor+%231,+Compiler+%231)+C%2B%2B',t:'0')),k:33.25435790785323,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:clang1101,filters:(b:'0',binary:'1',commentOnly:'0',demangle:'0',directives:'0',execute:'1',intel:'1',libraryCode:'0',trim:'1'),fontScale:14,j:2,lang:c%2B%2B,libs:!(),options:'-O3+-std%3Dc%2B%2B20+-fno-vectorize+-fno-unroll-loops+-fno-exceptions',selection:(endColumn:1,endLineNumber:1,positionColumn:1,positionLineNumber:1,selectionStartColumn:1,selectionStartLineNumber:1,startColumn:1,startLineNumber:1),source:1),l:'5',n:'0',o:'x86-64+clang+11.0.1+(Editor+%231,+Compiler+%232)+C%2B%2B',t:'0')),k:23.435244538629952,l:'4',n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4)[：3](https://wolchok.org/posts/how-to-read-arm64-assembly-language/#fn:3)

```asm
        stp     x29, x30, [sp, #-48]!           // 16-byte Folded Spill
        str     x21, [sp, #16]                  // 8-byte Folded Spill
        stp     x20, x19, [sp, #32]             // 16-byte Folded Spill
        mov     x29, sp
        mov     x19, x0
        bl      strlen
        cmp     x0, #1024                       // =1024
        add     x0, x0, #1                      // =1
        b.hi    .LBB0_2
        add     x9, x0, #15                     // =15
        mov     x8, sp
        and     x9, x9, #0xfffffffffffffff0
        sub     x20, x8, x9
        mov     x21, sp
        mov     sp, x20
        mov     x0, x20
        mov     x1, x19
        bl      copyUppercase(char*, char const*)
        mov     x0, x20
        bl      puts
        mov     sp, x21
        mov     sp, x29
        ldp     x20, x19, [sp, #32]             // 16-byte Folded Reload
        ldr     x21, [sp, #16]                  // 8-byte Folded Reload
        ldp     x29, x30, [sp], #48             // 16-byte Folded Reload
        ret
.LBB0_2:
        bl      operator new[](unsigned long)
        mov     x1, x19
        mov     x20, x0
        bl      copyUppercase(char*, char const*)
        mov     x0, x20
        bl      puts
        mov     x0, x20
        mov     sp, x29
        ldp     x20, x19, [sp, #32]             // 16-byte Folded Reload
        ldr     x21, [sp, #16]                  // 8-byte Folded Reload
        ldp     x29, x30, [sp], #48             // 16-byte Folded Reload
        b       operator delete[](void*)
```

我们的函数序言要长得多，我们还有一些新的控制流程指令。让我们仔细看看序言：

```asm
        stp     x29, x30, [sp, #-48]!           // 16-byte Folded Spill
        str     x21, [sp, #16]                  // 8-byte Folded Spill
        stp     x20, x19, [sp, #32]             // 16-byte Folded Spill
        mov     x29, sp
```

正如我们之前看到的，我们正在将旧的帧指针和堆栈指针保存到堆栈。然而，我们正在使用更复杂的商店说明：`stp x29, x30, [sp, #-48]!`做两件事。首先，它将`x29`和`x30`存储到地址`sp - 48`其次，它用相同的`sp - 48`值更新堆栈指针（这就是感叹号的目的；它是[ARM文档中](https://developer.arm.com/documentation/102374/0101/Loads-and-stores---addressing)描述[的](https://developer.arm.com/documentation/102374/0101/Loads-and-stores---addressing)“索引前寻址模式”）。

接下来，我们将`x21`、`x20`和`x19`保存到堆栈中；稍后我们将使用它们，并要求保留它们的当前值（换句话说，它们是“被调用者保存”的寄存器）。最后，我们在`x29`中设置了新的帧指针。

（顺便说一句，编译器生成的注释中的“溢出”一词只是意味着我们正在将寄存器保存到堆栈中。）

打开功能主体：

```asm
        mov     x19, x0
        bl      strlen
        cmp     x0, #1024                       // =1024
        add     x0, x0, #1                      // =1
        b.hi    .LBB0_2
```

We save our argument, `s` (stored in `x0`) in `x19` and call `strlen` with `bl`, as we saw before. When `strlen`returns, we [CoMPare](https://developer.arm.com/documentation/100076/0100/a64-instruction-set-reference/a64-general-instructions/cmp--immediate-?lang=en) its result against 1024 as the first step in our `if` statement. This sets the [NZCV register](https://developer.arm.com/documentation/dui0801/a/Overview-of-AArch64-state/Conditional-execution-in-AArch64-state) according to the result of the comparsion, and then `b.hi .LBB0_2` [Branches](https://developer.arm.com/documentation/100076/0100/a64-instruction-set-reference/a64-general-instructions/b-cond?lang=en) to `.LBB0_2` if it turns out that `x0` was in fact more than 1024. Because both branches of our `if` statement care about`sSize + 1` and not `sSize`, we add 1 to `x0` (which stores `sSize`) *before* the branch. In general, higher-level control-flow primitives like `if`/`else` statements and loops are implemented in assembly using conditional jump instructions.

让我们先看看`x0 <= 1024`的路径，然后分支到`.LBB0_2`没有被拿走。我们有一个在堆栈上创建`char temp[sSize + 1]`的说明：

```asm
        add     x9, x0, #15                     // =15
        mov     x8, sp
        and     x9, x9, #0xfffffffffffffff0
        sub     x20, x8, x9
        mov     x21, sp
        mov     sp, x20
```

我们将15添加到`x0`中，并将结果放在`x9`中。然后，我们屏蔽了`x9`的下4位。这两个操作一起将目标阵列大小四舍五入到下一个16的倍数到`x9`中。然后，我们从堆栈指针中减去数组大小，将旧的堆栈指针值保存到`x21`中，并设置新的堆栈指针值。

以下块只需调用`copyUppercase`，并`puts`代码写入：

```asm
        mov     x0, x20
        mov     x1, x19
        bl      copyUppercase(char*, char const*)
        mov     x0, x20
        bl      puts
```

最后，我们有功能结语：

```asm
        mov     sp, x21
        mov     sp, x29
        ldp     x20, x19, [sp, #32]             // 16-byte Folded Reload
        ldr     x21, [sp, #16]                  // 8-byte Folded Reload
        ldp     x29, x30, [sp], #48             // 16-byte Folded Reload
        ret
```

我们使用帧指针的值恢复堆栈指针。然后，我们将之前保存的寄存器加载到堆栈中。在这里，我们看到了一种新的“后索引”添加模式：`ldp x29, x30, [sp], #48`意味着从堆栈指针的当前值加载`x29`和`x30`，然后在添加48。最后，我们将控制权退还给来电者，我们就完成了。

接下来，让我们看看`x0 > 1024`的路径，然后我们分支到`.LBB0_2`在堆上分配我们的数组。这条路更直截了当。我们调用`operator new[]`，将结果（以`x0`返回）保存到`x20`，并调用`copyUppercase`并像以前一样`puts`。我们为这个案例有一个单独的函数结尾，它看起来有点不同：

```asm
        mov     x0, x20
        mov     sp, x29
        ldp     x20, x19, [sp, #32]             // 16-byte Folded Reload
        ldr     x21, [sp, #16]                  // 8-byte Folded Reload
        ldp     x29, x30, [sp], #48             // 16-byte Folded Reload
        b       operator delete[](void*)
```

The forst `mov` sets up `x0` with a pointer to our heap-allocated array that we saved earlier. As with the other function epilogue, we then restore the stack pointer, load our saved registers, and update it by adding 48 bytes back. Finally, we have a new instruction: `b operator delete[](void*)`. `b` (for “branch”) is just like `goto`: it transfers control to the given label or function. Unlike `bl`, it does not save the return address for a future `ret`. So, when `operator delete[]` returns, it will instead transfer control to `printUpperCase`’s caller. In essence, we’ve combined a `bl` to `opreator delete[]` with our own `ret`. This is called [tail call optimization](https://en.wikipedia.org/wiki/Tail_call).

# 进一步阅读

汇编语言[可以追溯到1940年代末](https://hackaday.com/2018/08/21/kathleen-booth-assembling-early-computers-while-inventing-assembly/)，因此有很多资源可以学习它。就我个人而言，我第一次介绍汇编语言是在母校密歇根大学举行的[EECS 370：计算机组织入门](https://eecs370.github.io/)初级课程。不幸的是，该网站上链接的大多数课程材料都不公开。以下是[伯克利（CS 61C）、](https://www2.eecs.berkeley.edu/Courses/CS61C/)[卡内基梅隆（15-213）、](https://www.cs.cmu.edu/~213/)[斯坦福（CS107）](https://web.stanford.edu/class/cs107/index.html)和[麻省理工学院（6.004）的](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-004-computation-structures-spring-2017/)相应“计算机如何真正工作”课程。（如果我为这些学校推荐了错误的课程，请告诉我！）[Nand to Tetris](https://www.nand2tetris.org/)似乎也涵盖了类似的材料，项目和书籍章节是[免费的](https://www.nand2tetris.org/course)。

我第一次实际接触ARM64组件，特别是通过iPhone开发。我从大学之前接触到组装的一般方法就知道了，所以我每次都只是谷歌搜索“ARM64 ldp指令”（或任何其他指令），并阅读它的作用。随着时间的推移，我记住了我学到的东西，不必再用谷歌了。

如果您想对ARM64汇编语言进行更技术性的演练，[ARM网站上](https://developer.arm.com/documentation/102374/0101)还有一个“学习架构”指南。这可能会帮助你知道架构的官方名称实际上是AArch64，但“ARM64”似乎更常见。

------

1. 具体而言，自iPhone 5s以来，iPhone一直使用ARM64，显然[绝大多数Android手机也使用](https://www.arm.com/blogs/blueprint/android-64bit-future-mobile)ARM64。[↩︎](https://wolchok.org/posts/how-to-read-arm64-assembly-language/#fnref:1)
2. 还假设我们没有像[absl::FixedArray](https://github.com/abseil/abseil-cpp/blob/master/absl/container/fixed_array.h)这样的东西可用。我不想让这个例子进一步复杂化。[↩︎](https://wolchok.org/posts/how-to-read-arm64-assembly-language/#fnref:2)
3. 我用`-fno-exceptions`构建了，通过删除异常清理路径来简化示例。它出现在尾声之后，我认为这可能会令人困惑。[↩︎](https://wolchok.org/posts/how-to-read-arm64-assembly-language/#fnref:3)
4. 正如我们在本文的x86-64版本中[看到的](https://wolchok.org/posts/how-to-read-assembly-language/#fn:8)，我认为不需要这个`mov x21, sp`。`x21`直到我们`mov sp, x21`才会再次使用，但该指令之后立即伴随着`mov sp, x19`，它覆盖了`sp`。我认为我们可以通过删除`x21`的移动来改进代码。[↩︎](https://wolchok.org/posts/how-to-read-arm64-assembly-language/#fnref:4)
</div>




{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/5.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
