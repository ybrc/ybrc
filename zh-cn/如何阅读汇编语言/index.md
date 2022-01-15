# 如何阅读汇编语言

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
# 如何阅读汇编语言

更新：本文现在有一个[ARM64端口](https://ybrc.github.io/zh-cn/how-to-read-arm64-assembly-language)。

为什么在2021年，有人需要学习汇编语言？首先，阅读汇编语言是*准确*了解程序正在做什么的方法。*确切地说*，为什么C++程序是1 MiB（比如）而不是100 KiB？有可能从那个一直被调用的函数中挤出更多性能吗？

特别是对于C++，很容易忘记或只是没有注意到源代码和语言语义所暗示但未显式拼写的某些操作（例如隐式转换或对副本构造函数或析构函数的调用）。看着编译器生成的程序集，一切都清晰可见。

其次，更实际的原因：到目前为止，尽管不断链接到[编译器资源管理器](https://godbolt.org/)，但此博客上的帖子不需要了解汇编语言。然而，根据[大众需求](https://twitter.com/ScottWolchok/status/1361022423399755776)，我们的下一个主题将是参数传递，为此，我们需要对汇编语言有一个基本的理解。我们只会专注于*阅读*汇编语言，而不是写作。

# 说明

汇编语言的基本单元是**指令**。每个机器指令都是一个小操作，例如添加两个数字，从内存加载一些数据，跳转到另一个内存位置（如可怕的[goto](https://en.wikipedia.org/wiki/Goto)语句），或从函数调用或返回。（x86架构也[有很多不那么小的指令](https://en.wikipedia.org/wiki/Complex_instruction_set_computer)。其中一些是建筑存在40多年积累的[遗留](https://stackoverflow.com/questions/5959890/enter-vs-push-ebp-mov-ebp-esp-sub-esp-imm-and-leave-vs-mov-esp-ebp)的[十字架](https://stackoverflow.com/questions/5959890/enter-vs-push-ebp-mov-ebp-esp-sub-esp-imm-and-leave-vs-mov-esp-ebp)，还有一些是[新奇的添加物](https://en.wikipedia.org/wiki/Advanced_Vector_Extensions)。）

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

这是[通过编译器资源管理器](https://godbolt.org/#z:OYLghAFBqd5QCxAYwPYBMCmBRdBLAF1QCcAaPECAM1QDsCBlZAQwBtMQBGAFlICsupVs1qhkAUgBMAISnTSAZ0ztkBPHUqZa6AMKpWAVwC2tQVvQAZPLUwA5YwCNMxEADZSAB1QLC62nsMTQS8fNTorG3sjJxd3JRUw2gYCZmICAONTTkVlTFU/ZNSCCLtHZzdFFLSMoOyFKuLrUujy1wBKRVQDYmQOAHIpAGZrZEMsAGpxQZ1kevx6KexxAAYAQRXV%2BuIDVXGANTzJSYB2WTXxi/HrAlduAH0CcYAPKbPVy6v6W4fxgE9XjbiY4AEQBaw212%2Bj1oJCMDAAjgZUph0BADsgjgA3NonN4fYiYAjdWjjTEAOie4wAVKSKZMZLTftTGWD1iC%2Bh1WCA%2BgBWPqkUx9Zb81DcnRyOTjBRdHqYemDTj8gjc4VtDoAaxAg0GZO1ev1BvcXL63H5guFpFFfX5ChAy1IyqFHNIcFgSDQRg8eHYZAoEA9Xp9KGEok4nGW2So3oIzltEAcKv5DmsqV%2B3MVpA9Ri0BAA8rRWGmnaQsEYRMB2ImS3gCflMZhbcXME88gYY%2Bn%2BddlB2hHgHMRU3osD2CMQ8EYOx0aPQmGwODx%2BIIQ2IJTJew5bZAOqgPIlGwBaXODcb7uZTYESGRySQW%2BJ5RKabQ1LKkcwlKIxYLeXx0Z9f0J%2BO%2BZQuHUuT5HQhTVPomSCHe4FJA0QEtCBlRFH%2BdSIU0H7lJwHTSt0vRcJy3J8gKVZWk8AAcrj7rc4yjOW4xhmSyxkpw4wQLghAkPK2TjHonres4vE4uKV4yEqiZqqQmrarqBoKdqRrcqaZHFlaNp2g6UkujAiAoKggk%2BuQlABkJLgMaG4aRtGsaUAmxbJrQqY9lmOb5oWValuWlbFvgtZqPWjYWs2rbtn0GZdsaFqsH2A7EL8Q79Bao7jpOpDTowLCVguAiSEI5YoKu8ixRu8DbrufgHkeJ5noMF7FTeNpgQ%2BEDmOhr7aEhn7ZCEP7%2BNBtSeN%2BiTdThOQJAUDQdXBiSQY0kTAbB02DS%2B9RFGNIF4TKhG4UIJFmuR3JUTRdGWcATGcCxbEcVxRDELxpD8YZgbCUMkiicVklOtJsk6opin7Sah3qdymn2o6qrEX0kggxaGnaT9HT1sQPgaNwQA%3D%3D)[：1](https://wolchok.org/posts/how-to-read-assembly-language/#fn:1)从tangg 11生成的x86-64程序集

```asm
        imulq   %rdi, %rdi
        imulq   %rsi, %rsi
        leaq    (%rsi,%rdi), %rax
        retq
```

让我们谈谈第一条说明：`imulq %rdi, %rdi`。此指令[执行有符号整数乘法](https://www.felixcloutier.com/x86/imul)。`q`后缀告诉我们，它正在64位数量上运行。（相比之下，`l`、`w`和`b`分别表示32位、16位和8位。）它将第一个给定寄存器中的值（`rdi`；寄存器名称前缀为`%`符号）乘以第二个寄存器中的值，并将结果存储在第二个寄存器中。这是我们示例C++代码中的平方`v.x`。

第二个指令与`%rsi`中的值相同，该值平方为`v.y`。

接下来，我们有一个奇怪的指令：`leaq (%rsi,%rdi), %rax`.`lea`代表“加载有效地址”，它将第一个操作数的地址存储到第二个操作数中。`(%rsi, %rdi)`的意思是“`%rsi + %rdi`指向的内存位置”，所以这只是添加`%rsi`和`%rdi`，并将结果存储在`%rax`中。`lea`是一个奇怪的x86特定的指令；在ARM64这样的更[RISC](https://en.wikipedia.org/wiki/Reduced_instruction_set_computer)-y架构上，我们希望看到一个普通的旧`add`指令。[2](https://wolchok.org/posts/how-to-read-assembly-language/#fn:2)

最后，`retq`从`normSquared`函数返回。

# 注册

让我们绕一小节，解释我们在示例中看到的寄存器是什么。寄存器是程序集语言的“变量”。与您最喜欢的编程语言（可能）不同，它们的数量有限，它们有标准化的名称，我们将谈论的最多64位大小。其中一些有我们稍后会看到的具体用途。我无法从内存中删除这一点，但[根据维基百科](https://en.wikipedia.org/wiki/X86-64#Architectural_features)，x86_64上16个寄存器的完整列表[3](https://wolchok.org/posts/how-to-read-assembly-language/#fn:3)是`rax`、`rcx`、`rdx`、`rbx`、`rsp`、`rbp`、`rsi`、`rdi`、`r8`、`r9`、`r10`、`r11`、`r12`、`r13`、`r14`和`r15`。

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

再说一遍，让我们看看[生成的程序集](https://godbolt.org/#z:OYLghAFBqd5QCxAYwPYBMCmBRdBLAF1QCcAaPECAM1QDsCBlZAQwBtMQBGAFlICsupVs1qhkAUgBMAISnTSAZ0ztkBPHUqZa6AMKpWAVwC2tEJICcpLegAyeWpgByxgEaZiIAGykADqgWE6rR6hiaCfgFqdHYOzkZuHt5KKlG0DATMxAQhxqYWisqYqkHpmQQxTq7uXooZWTlhnLVlFXEJXgCUiqgGxMgcAORSAMz2yIZYANTiwzrICgT49DPY4gAMAILrGwvEBqqTAGpFktMA7LKbk9eT9gSe3AD6BJMAHjOXGze39A/PkwBPD7bb4AN1QeHQkywLgMwAACsQ7hAOpM0LQFsDNuIzgARLFbTZ3P4vWgkIwMACOBkymHQEGOyFOoNROM%2BYIAdDC4YjkR0Cd9iJgCL1aJNQRzXpMAFTiyXTGRygEypUEnG4gZdVggAYAVgGpFMAzWBtQOp0cjkkwUPT6mAVw04BoIOpNHS6AGsQMNhhyff6A4HvNqBtwDUaTaQzQMDQoQGtSC7jZrSHBYEg0EYfHh2GQKBBM9ncyhhKJOJw1k0qDmCO44xAXK6DS57JkATqnaRM0YtAQAPK0Vjt5OkLBGETAdhN0d4IXFUGYOMjzCvIoGWsdg13ZSboR4FzENt6LC7ghIoybro0ehMNgcHj8QSlsSWmR7lxxyBdVA%2BVJLgC0fbDJM/4LOgMy4hIMhyJIkbJEUqSaNoDSmE01itFUHhNBEgR0Ch4T%2BLhtAYfE1RNPBxR0KU9T6LkggUak1HlPYlSkVhzQ0aEqEccxsSYVwXQ2r0/QCUIOr6oa07Rq8AAcnj/g8aLPpM5YcmsHKcJMEC4IQJAOk0kx6FmObuPpqIWtBMjOk27qkF6Pp%2BoGTk%2BsGOphpJI7RrG8aJjZqYwIgKCoMZubkJQhYmR44wTuWlakNWrC1sQ9aNiOLa0G2u7dr2A5DtOY4TlOI74HOagLkukYrmuG4DJ224hpGrD7oexAAsegyRmeeAXrVKbXowLBTg%2BAiSEIE4oK%2B8hNR%2B8Dfr%2BQQAUBIFgRBUGyDIsGxoUlGmBA1j4Zwo3oSxbRkcMviEakB2jThqQke0nDnQxJR1NktGNKNz1Ua991nTx108b9WHDIJtoiZwWrieGUk6rJ8mKdFogqZwakaVpOlEMQ%2BmkIZwVFqZIySOZk3Wcmtn2b6znOWJobQ55OreQmSZupDAySHTkZeb5ZNdAuyVBCA3BAA)：

```asm
        subq    $24, %rsp
        movq    %rdi, 8(%rsp)
        movq    %rsi, 16(%rsp)
        leaq    8(%rsp), %rdi
        callq   Vec2::debugPrint() const
        movq    8(%rsp), %rcx
        movq    16(%rsp), %rax
        imulq   %rcx, %rcx
        imulq   %rax, %rax
        addq    %rcx, %rax
        addq    $24, %rsp
        retq
```

In addition to the obvious call to `Vec2::debugPrint() const`, we have some other new instructions and registers! `%rsp` is special: it is the “stack pointer”, used to maintain the [function call stack](https://en.wikipedia.org/wiki/Call_stack). It points to the bottom of the stack, which grows “down” (toward lower addresses) on x86. So, our `subq $24, %rsp` instruction is making space for three 64-bit integers on the stack. (In general, setting up the stack and registers at the start of your function is called the [function prologue](https://en.wikipedia.org/wiki/Function_prologue).) Then, the following two `mov`instructions store the first and second arguments to `normSquared`, which are `v.x` and `v.y` (more about how parameter passing words in the next blog post!) to the stack, effectively creating a copy of `v` in memory at the address `%rsp + 8`. Next, we load the address of our copy of `v` into `%rdi` with `leaq 8(%rsp), %rdi` and then call `Vec2::debugPrint() const`.

`debugPrint`返回后，我们将`v.x`和`v.y`加载回`%rcx`和`%rax`。我们有和以前一样的`imulq`和`addq`说明。最后，我们`addq $24, %rsp`来清理我们在函数开始时分配的24字节[4个](https://wolchok.org/posts/how-to-read-assembly-language/#fn:4)堆栈空间（称为[函数结尾](https://en.wikipedia.org/wiki/Function_prologue#Epilogue)），然后用`retq`返回给我们的调用方。

# 示例3：框架指针和控制流程

现在，让我们看看另一个例子。假设我们想打印一个大写C字符串，并希望避免对小字符串进行堆分配。[5](https://wolchok.org/posts/how-to-read-assembly-language/#fn:5)我们可能会写以下内容：

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

这是[生成的程序集](https://godbolt.org/#z:OYLghAFBqd5QCxAYwPYBMCmBRdBLAF1QCcAaPECAM1QDsCBlZAQwBtMQBGAFlICsupVs1qhkAUgBMAISnTSAZ0ztkBPHUqZa6AMKpWAVwC2tEAHZeW9ABk8tTADljAI0zEuANlIAHVAsLqtHqGJua8vv5qdLb2Tkau7pxeSipRtAwEzMQEwcamForKmKqBGVkEMY4ubp6Kmdm5oQUK9RV2VfE1SQCUiqgGxMgcAORSAMx2yIZYANTiYzrILfio89jiAAwAguOT05hzC0sExHbAa5s7khO0Uwaz8zpGmEYkAJ4X25cAbqh46DM0N43gBVbzeNwsJQQZAILIzABUWBapEBdBagLhxERCkG3Xmsi%2B2zQtBamAAHt5sf4AF6YAD6BBmAFktgANekMAAqWx0AGl6VsAEpCrYATU5AEkAFrYQ4AERmnA2km4BMuPz%2BAKpdgIYIhxB0zGhJIxsPhCIU3TmZkJWxmDpmzAMRBmCgYeDpCrdJ3YtAgVvV20dMzwVBmAY9Xse80VrI53N5AuFoolDBl2Gt4ltlxDIfN2IIL284gArNJ3Z6DnIlWX5UH7XmHUDQeDIcbMBAi0ZvKjA2M7U2Hd4XQou8X8QPc47s4rlEobYOhwB6Zc%2B9AgEBGZgAawZBloeAAjgYGTRiPTUN83AB3U5F0MKGZGPAKfyiGZ0GZ6Ht4djY7BKVYEg3AAOmnJtlk3A9j1PelvBOR4CzLWRS3rMY5W7bwIHsG9MSyFDK2jGRazQyclybFt9XbaEsNA4BMAICBejdciILzEcCDHOiGKY7o2ODGczHrL5hOGXpWBAYZS2GUhTGGDZZNQKSdDkGsFH6QZq2uThZIIKTFP40gdxAbgxlAsZlTGABOMxS1LMZSySAAOSQhCk7hZPkxTSGU4ZZIUEANlIfSFPE0g4FgJA0F/f9yEoGLvD/GophEYBOGVThSCoP8i2IQKIGcAzZOcOwsjeKTdNIGLnnoAB5WhWAqsLSCwbdRHYYrWrwYhijUa9ApailihdEYqt1ZRKtk1g8GcYhyr0LAppC04jCm3oaHoJg2A4Hh%2BEEYRRBQNSZCEWbAsgXpUAQwJBoAWjqsYZju5ZYwkGQ5EkDZnqoWhUDu69VBIKsfr%2Bu6D2IfRWDu4DrqfO7fv%2Bikhhu9EAqKEoNAgKxGlMLKrEqOIEkECIAjoXGSb8MnaEJ6pEkKVJSlaCmspSPqmfKWnOnplpyhZupOfaImul6DSBiGLgJKkmS5K6vzyWcjw7o8bhAUO4AlU4UCNlAzgI1wQgSDmHTUR/JL/2NyzrVUj6ZD04qjJMsZzMkUszNLMxrI2MxnIc653OGTzZZavyAqCkKHYimBEBQVBYrceKYTj82UvVjKNiynLWDygqipa0raHK5aaq0AgGqarq2rSzqWvwXqSgGrrhuQUblomySWpmuaFowEYfJOPA1uGXSNroRgWE6vaBDc9Xjtt%2BQu4u5jfNR0kpIep6XoIdA3pO6QvtB/7AaIU4vQRsGIahmHUDhw%2B7uRzBV4UdHGaxnH9DyQQCaFunKciQJ%2BakzSFzYmrMMZpDKA0D%2BoQwGv3SK0EBXQBZQJCHjZBbRYi/04KLTSEtsEBxlt5JSUkFZKxVmrNKmtta631vgE%2BlssrfmTslbE4xJDWz3vbMKjsQDXFAu7VU3AHKK0kNZaypYZ4eS8nLKSYdgqhUMlLYYkhpEh1kRHbhvRrz5UCKZIAA%3D)：[6](https://wolchok.org/posts/how-to-read-assembly-language/#fn:6)

```asm
printUpperCase(char const*):                  # @printUpperCase(char const*)
        pushq   %rbp
        movq    %rsp, %rbp
        pushq   %r15
        pushq   %r14
        pushq   %rbx
        pushq   %rax
        movq    %rdi, %r14
        callq   strlen
        leaq    1(%rax), %rdi
        cmpq    $1024, %rax                     # imm = 0x400
        ja      .LBB0_2
        movq    %rsp, %r15
        movq    %rsp, %rbx
        addq    $15, %rdi
        andq    $-16, %rdi
        subq    %rdi, %rbx
        movq    %rbx, %rsp
        movq    %rbx, %rdi
        movq    %r14, %rsi
        callq   copyUppercase(char*, char const*)
        movq    %rbx, %rdi
        callq   puts
        movq    %r15, %rsp
        leaq    -24(%rbp), %rsp
        popq    %rbx
        popq    %r14
        popq    %r15
        popq    %rbp
        retq
.LBB0_2:
        callq   operator new[](unsigned long)
        movq    %rax, %rbx
        movq    %rax, %rdi
        movq    %r14, %rsi
        callq   copyUppercase(char*, char const*)
        movq    %rbx, %rdi
        callq   puts
        movq    %rbx, %rdi
        leaq    -24(%rbp), %rsp
        popq    %rbx
        popq    %r14
        popq    %r15
        popq    %rbp
        jmp     operator delete[](void*)                          # TAILCALL
```

我们的函数序言要长得多，我们还有一些新的控制流程指令。让我们仔细看看序言：

```asm
        pushq   %rbp
        movq    %rsp, %rbp
        pushq   %r15
        pushq   %r14
        pushq   %rbx
        pushq   %rax
        movq    %rdi, %r14
```

`pushq %rbp; movq %rsp, %rbp`序列非常常见：它将存储在`%rbp`中的[帧指针](https://en.wikipedia.org/wiki/Call_stack#FRAME-POINTER)推送到堆栈，并将旧堆栈指针（即新的帧指针）保存在`%rbp`中。以下四个`pushq`说明存储[我们在使用前需要保存](https://en.wikipedia.org/wiki/X86_calling_conventions#System_V_AMD64_ABI)的寄存器。[7](https://wolchok.org/posts/how-to-read-assembly-language/#fn:7)

进入功能主体。我们把第一个参数（`%rdi`）保存在`%r14`中，因为我们即将调用`strlen`，它像任何其他函数一样，可能会覆盖`%rdi`（我们说`%rdi`是“调用者保存”），而不是`%r14`（我们说`%r14`是“调用者保存”）。我们使用`callq strlen`调用`strlen(s)`并将`sSize + 1``lea 1(%rax), %rdi`一起存储在`%rdi`中。

Next, we finally see our first `if` statement! `cmpq $1024, %rax` sets the [flags register](https://en.wikipedia.org/wiki/FLAGS_register) according to the result of `%rax - $1024`, and then `ja .LBB0_2` (“jump if above”) transfers control to the location labeled `.LBB0_2` if the flags indicate that `%rax > 1024`. In general, higher-level control-flow primitives like `if`/`else` statements and loops are implemented in assembly using conditional jump instructions.

让我们首先看看`%rax <= 1024`的路径，然后分支到`.LBB0_2`没有被拿走。我们有一个在堆栈上创建`char temp[sSize + 1]`的说明：

```asm
        movq    %rsp, %r15
        movq    %rsp, %rbx
        addq    $15, %rdi
        andq    $-16, %rdi
        subq    %rdi, %rbx
        movq    %rbx, %rsp
```

我们将`%rsp`保存到`%r15`和`%rbx`供以后使用。[8](https://wolchok.org/posts/how-to-read-assembly-language/#fn:8)然后，我们将15添加到`%rdi`（记住，它包含我们数组的大小），用`andq $-16, %rdi`掩码下4位，然后从`%rbx`中减去结果，然后将其放回`%rsp`。简而言之，这四舍五入数组大小，直到16字节的下一个倍数，并在堆栈上为其留出空间。

以下块只需调用`copyUppercase`，并按代码中的书写形式`puts`：

```asm
        movq    %rbx, %rdi
        movq    %r14, %rsi
        callq   copyUppercase(char*, char const*)
        movq    %rbx, %rdi
        callq   puts
```

最后，我们有功能结语：

```asm
        movq    %r15, %rsp
        leaq    -24(%rbp), %rsp
        popq    %rbx
        popq    %r14
        popq    %r15
        popq    %rbp
        retq
```

我们恢复堆栈指针，以使用`leaq`分配我们的可变长度数组。然后，我们`popq`我们在函数序言期间保存的寄存器，并将控件返回给我们的调用者，我们就完成了。

接下来，让我们看看`%rax > 1024`的路径，然后我们分支到`.LBB0_2`。这条路更简单。我们调用`operator new[]`，将结果（以`%rax`返回）保存到`%rbx`，并调用`copyUppercase`和`puts`。我们为这个案例有一个单独的函数结尾，它看起来有点不同：

```asm
        movq    %rbx, %rdi
        leaq    -24(%rbp), %rsp
        popq    %rbx
        popq    %r14
        popq    %r15
        popq    %rbp
        jmp     operator delete[](void*)                          # TAILCALL
```

第一个`mov`设置了`%rdi`，并带有指向我们之前保存的堆分配数组的指针。与其他函数结尾一样，我们然后恢复堆栈指针并弹出保存的寄存器。最后，我们有一条新指令：`jmp operator delete[](void *)``jmp`就像`goto`一样：它将控件传输到给定的标签或函数。与`callq`，它不会将返回地址推送到堆栈上。因此，当`operator delete[]`返回时，它将把控制权传输给`printUpperCase`的调用方。本质上，我们已经将`operator delete[]`的`callq`与我们自己的`retq`相结合。这被称为[尾部调用优化](https://en.wikipedia.org/wiki/Tail_call)，因此编译器有益地发出了`# TAILCALL`注释。

# 实际应用：捕捉令人惊讶的转换

我在导言中说，读取程序集使隐式复制和销毁操作非常清晰。我们在前面的例子中看到了其中一些，但我想通过查看一个常见的C++移动语义辩论来结束。为了避免lvalue引用有一个重载和rvalue引用重载，按值取参数可以吗？有一种思想流派说：“是的，因为无论如何，在lvalue情况下，你都会复制一份，在rvalue的情况下，只要你的类型移动起来便宜，就可以。”如果我们看看rvalue情况的一个例子，我们将看到“移动便宜”并不意味着“自由移动”，就像我们可能更喜欢的那样。如果我们想要最大的性能，我们可以证明重载解决方案将带我们到达那里，而副值解决方案不会。（当然，如果我们不愿意编写额外的代码来提高性能，那么“移动便宜”可能足够便宜。）

```c++
#include <string>

class MyString {
 std::string str;
 public:
  explicit MyString(const std::string& s);
  explicit MyString(std::string&& s);
};

class MyOtherString {
  std::string str;
 public:
  explicit MyOtherString(std::string s);
};

void createRvalue1(std::string&& s) {
    MyString s2(std::move(s));
};

void createRvalue2(std::string&& s) {
    MyOtherString s2(std::move(s));
};
```

如果我们查看[生成的程序集](https://godbolt.org/#z:OYLghAFBqd5QCxAYwPYBMCmBRdBLAF1QCcAaPECAM1QDsCBlZAQwBtMQBGAFlICsupVs1qhkAUgBMAISnTSAZ0ztkBPHUqZa6AMKpWAVwC2tEJIDspLegAyeWpgByxgEaZiIAGykADqgWE6rR6hiZmln4BanR2Ds5Gbh7eSirRtAwEzMQEIcamForKmKpBGVkEsU6u7l6Kmdm5YQUK9RX2VQk1ngCUiqgGxMgcAORSAMz2yIZYANTiYzotxPbA89jiAAwAgptbU8wKCjMAsgCeGcuic%2Bay2zMt6CAgSyv3BMTzt1szPgYurHhkCBdjMZpgAB4%2BAHIQgnc7vFYQNC0FpvR7PBGiKSee7dT4gsGQ6Gws4XREPJ4vLGSTzY3H47bicwAEQZO22%2B0OcIA8gQEO4yVcmV9QRSMZdgG8PmMRb9/oDgXdCVDASTTrz%2BcRBcAIGKqZKFHiZbsmazjYztgA3VB4dAzZDETDMAiYABKlrYBkwnF1BHR%2BuxdMN1xFoLh2vukl96KMqEtmF13SNX1NbN21tt9sdzrdHsMmCjesxqxpQe6IYJoLOGoFxcj0aesfjieTJpZn2GvVYIGGAFZhqRTMMNgPUD2dHI5Pd%2BoNMHNJGNOAOCD2R0nSABrMwATgAdJwNr2xp4D54ABxnxdjbeSIQ97gDocj0hj4YDhQgDakFfDzukOCwEgaBGD4eDsGQFBIqgIFgTU%2ByiJwB6cKQVBgS6xAfhALirgOLj2Fkpw9kupDAUYWgENytCsIRv6kFgRgiMA7A4XReCOiU8YfrRELFAYLpEQO9gut2wzEQCLjEARehYAJ37LEYAm9DQ9BMGwHA8PwgjCKIKCTjIQh4C4H6QL0qA%2BGkXEALTcmMMyWQ88zMhIMhyJIGx2VQtCoJZEJDOZQQKO%2BRQlBoEDWI0pjIdYlTxIkgiRIEdARfF/iJbQMXVB4yEpMUaRlA0%2Bh5IIOUhekrQZZ0WV1OUyXZeV7SxTUnC9AoM5DFwXY9v2g4sa%2B4Jnp4lmeNw9raZKiG7hs%2B4zBAuCECQ86LqQMx6DB4GLc1K16dIy44euW5jOYu69ieYyHr227mJevaSANd7DA%2BPW0a%2B76ft%2Be3/jAiAoNBoHgeQlDAX9cFjYhGzIahrDoZh2G0XhtAEbJpHkZR1EsfRjHMbR%2BDsWonEsTxyB8SMxFCcoLHiZJxCnNJIzPgiCmiX%2BymMCwzEaQIt5jbpLn6eJxkQKZ/l0FZNl2Q5YxOdtbkeV5Pngn5FlBakQSaNoyWSFF2gVXFbm%2BKlaQa8hCVpDrNR6yVeWtEbhQq3Q%2BVtHEmVmF%2BLQ1YVTR1eUZseG5LVtepnV9o%2BvU9v1g3DaNjEzBNU2cDNc1EMQG3LatwPJ%2BMkjlhOvM7e9v77SAYxjLuxdl%2BXFf3Y9T6jj2r1fj%2Ba5B5IIfPXX%2BdN6Q8YYar3BAA%3D)[9](https://wolchok.org/posts/how-to-read-assembly-language/#fn:9)（即使我故意勾勒了[10个](https://wolchok.org/posts/how-to-read-assembly-language/#fn:10)相关构造函数，它太长而无法包含），我们可以看到`createRvalue1`执行1个移动操作（在`MyString::MyString(std::string&&)`的正文中）和1 `std::string::~string()`调用（返回前`operator delete`）。相比之下，`createRvalue2`要长得多：它总共执行2个移动操作（1个内联，进入`MyOtherString::MyOtherString(std::string s)``s`参数，1个在同一构造函数的正文中），2个`std::string::~string`调用（1个用于上述`s`参数，`MyOtherString::str`成员1个）。公平地说，移动`std::string`很便宜，摧毁从`std::string`移动也是便宜的，但它在CPU时间或代码大小方面都不是免费的。

# 进一步阅读

汇编语言[可以追溯到1940年代末](https://hackaday.com/2018/08/21/kathleen-booth-assembling-early-computers-while-inventing-assembly/)，因此有很多资源可以学习它。就我个人而言，我第一次介绍汇编语言是在母校密歇根大学举行的[EECS 370：计算机组织入门](https://eecs370.github.io/)初级课程。不幸的是，该网站上链接的大多数课程材料都不公开。以下是[伯克利（CS 61C）、](https://www2.eecs.berkeley.edu/Courses/CS61C/)[卡内基梅隆（15-213）、](https://www.cs.cmu.edu/~213/)[斯坦福大学（CS107）](https://web.stanford.edu/class/cs107/index.html)和[麻省理工学院（6.004）](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-004-computation-structures-spring-2017/)的相应“计算机如何真正工作”课程。（如果我为这些学校推荐了错误的课程，请告诉我！）[Nand to Tetris](https://www.nand2tetris.org/)似乎也涵盖了类似的材料，项目和书籍章节是[免费的](https://www.nand2tetris.org/course)。

我第一次实际接触x86程序集，特别是在安全漏洞的背景下，或者像孩子们过去常说的那样，学习成为“l33t h4x0r”。如果这让你觉得是学习组装的更有趣的理由，那就太好了！空间中的经典作品是[《粉碎堆栈以获得乐趣和利润](https://insecure.org/stf/smashstack.html)》。不幸的是，现代安全缓解使您自己运行该文章中的示例变得复杂，因此我建议您找到一个更现代的实践环境。[微腐败](https://microcorruption.com/login)是一个行业创建的例子，或者您可以尝试从大学安全课程中找到应用程序安全项目来跟进（例如，伯克利[CS 161](https://cs161.org/)的项目1，该项目目前似乎公开提供）。

最后，总是有谷歌和黑客新闻。[Pat Shaughnessy的《](http://patshaughnessy.net/2016/11/26/learning-to-read-x86-assembly-language)2016年开始[学习阅读x86 AssemblyLanguage](http://patshaughnessy.net/2016/11/26/learning-to-read-x86-assembly-language)》从Ruby和Crystal的角度涵盖了该主题，[最近（2020年）](https://news.ycombinator.com/item?id=22279051)还[讨论了如何学习x86_64程序集](https://news.ycombinator.com/item?id=22279051)。

祝你好运，黑客攻击快乐！

------

1. 我使用AT&T语法，因为它是Linux工具中的默认语法。如果您更喜欢英特尔语法，切换在编译器资源管理器的“输出”下。本文中的编译器资源管理器链接将同时显示两者，左侧是AT&T，右侧是英特尔。差异指南[简短且随时可用](http://staffwww.fullcoll.edu/aclifton/courses/cs241/syntax.html)；简而言之，英特尔语法对内存引用更明确，删除了`b`/`w`/`l`/`q`后缀，并将目标操作数放在第一位而不是最后。[↩︎](https://wolchok.org/posts/how-to-read-assembly-language/#fnref:1)
2. 如果您实际查看此示例[的ARM64程序集](https://godbolt.org/#g:!((g:!((g:!((h:codeEditor,i:(fontScale:14,j:1,lang:c%2B%2B,selection:(endColumn:2,endLineNumber:10,positionColumn:2,positionLineNumber:10,selectionStartColumn:2,selectionStartLineNumber:10,startColumn:2,startLineNumber:10),source:'%23include+ struct+Vec2+{ ++++int64_t+x%3B ++++int64_t+y%3B }%3B int64_t+normSquared(Vec2+v)+{ ++++return+v.x+*+v.x+%2B+v.y+*+v.y%3B }'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:armv8-clang1101,filters:(b:'0',binary:'1',commentOnly:'0',demangle:'0',directives:'0',execute:'1',intel:'1',libraryCode:'1',trim:'1'),fontScale:14,j:1,lang:c%2B%2B,libs:!((name:boost,ver:'175')),options:'-O3+-std%3Dc%2B%2B20',selection:(endColumn:1,endLineNumber:1,positionColumn:1,positionLineNumber:1,selectionStartColumn:1,selectionStartLineNumber:1,startColumn:1,startLineNumber:1),source:1),l:'5',n:'0',o:'armv8-a+clang+11.0.1+(Editor+%231,+Compiler+%231)+C%2B%2B',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4)，您将看到一个`madd`指令被使用，而不是：`madd x0, x0, x0, x8`。这是一个乘法+添加在一条指令中：它正在做`x0 = x0 * x0 + x8`。[↩︎](https://wolchok.org/posts/how-to-read-assembly-language/#fnref:2)
3. 这些只是大多数整数指令使用的64位寄存器。浮动点和指令集扩展附带[的注册器](https://en.wikipedia.org/wiki/X86#/media/File:Table_of_x86_Registers_svg.svg)实际上[更多](https://en.wikipedia.org/wiki/X86#/media/File:Table_of_x86_Registers_svg.svg)。[↩︎](https://wolchok.org/posts/how-to-read-assembly-language/#fnref:3)
4. ~~您可能已经注意到，尽管分配了24个字节，但我们只使用了16字节的堆栈空间。据我所知，代码中还剩下额外的8个字节，用于设置和恢复经过优化的[帧指针](https://en.wikipedia.org/wiki/Call_stack#FRAME-POINTER)。Clang、gcc和icc似乎都留下了额外的8个字节，msvc似乎浪费了16个字节，而不是8个字节。如果我们[使用-fno-omit-frame-pointer构建](https://godbolt.org/#g:!((g:!((g:!((h:codeEditor,i:(fontScale:14,j:1,lang:c%2B%2B,selection:(endColumn:1,endLineNumber:6,positionColumn:1,positionLineNumber:6,selectionStartColumn:1,selectionStartLineNumber:5,startColumn:1,startLineNumber:5),source:'%23include+ struct+Vec2+{ ++++int64_t+x%3B ++++int64_t+y%3B ++++void+debugPrint()+const%3B }%3B int64_t+normSquared(Vec2+v)+{ ++++v.debugPrint()%3B ++++return+v.x+*+v.x+%2B+v.y+*+v.y%3B }'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:clang1101,filters:(b:'0',binary:'1',commentOnly:'0',demangle:'0',directives:'0',execute:'1',intel:'1',libraryCode:'1',trim:'1'),fontScale:14,j:1,lang:c%2B%2B,libs:!(),options:'-O3+-std%3Dc%2B%2B20+-fno-omit-frame-pointer',selection:(endColumn:1,endLineNumber:1,positionColumn:1,positionLineNumber:1,selectionStartColumn:1,selectionStartLineNumber:1,startColumn:1,startLineNumber:1),source:1),l:'5',n:'0',o:'x86-64+clang+11.0.1+(Editor+%231,+Compiler+%231)+C%2B%2B',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4)，我们可以看到其他8个字节用于在函数开始时`pushq %rbp`，然后在末尾用于推送`popq %rbp`。编译器并不完美；如果您经常阅读程序集，您会不时看到这种小的错过优化。有时事情真的错过了优化机会，但也有很多不幸的ABI约束，由于使用不同编译器（甚至同一编译器的不同版本）构建的代码块之间的兼容性，迫使次优代码生成。~~更新：额外的8字节堆栈空间是因为[System V x86_64 ABI](https://uclibc.org/docs/psABI-x86_64.pdf)的第3.2.2.2节要求在调用函数时，堆栈帧必须与16字节边界对齐。换句话说，每个编译器都犯了这个“错误”，因为它是必需的！[↩︎](https://wolchok.org/posts/how-to-read-assembly-language/#fnref:4)
5. 还假设我们没有像[absl::FixedArray](https://github.com/abseil/abseil-cpp/blob/master/absl/container/fixed_array.h)这样的东西可用。我不想让这个例子进一步复杂化。[↩︎](https://wolchok.org/posts/how-to-read-assembly-language/#fnref:5)
6. 我用`-fno-exceptions`构建，通过删除异常清理路径来简化示例。它出现在尾声之后，我想这可能会令人困惑。[↩︎](https://wolchok.org/posts/how-to-read-assembly-language/#fnref:6)
7. ~~Another possible missed optimization: I don’t see a need to `pushq %rax` here; it’s not callee-saved and we don’t care about the value on entry to `printUpperCase`. Get in touch if you know whether this is a missed optimization or there’s actually a reason to do it!~~ UPDATE: this is likely because pushing a register is smaller and/or faster than issuing a `sub 8, %rsp` instruction. [↩︎](https://wolchok.org/posts/how-to-read-assembly-language/#fnref:7)
8. 然而，我认为不需要这个`movq %rsp, %r15`。在我们`movq %r15, %rsp`之前，`%r15`不会再次使用，但该指令之后立即遵循`leaq -24(%rbp), %rsp`，立即覆盖`%rsp`。我认为我们可以通过删除两个`movq %rsp, %r15`和`movq %r15, %rsp`指令来改进代码。另一方面，鉴于此代码，英特尔的icc编译器[也做了看似愚蠢的事情来恢复`%rsp`](https://godbolt.org/#g:!((g:!((g:!((h:codeEditor,i:(fontScale:14,j:1,lang:c%2B%2B,selection:(endColumn:74,endLineNumber:16,positionColumn:74,positionLineNumber:16,selectionStartColumn:74,selectionStartLineNumber:16,startColumn:74,startLineNumber:16),source:'%23include+ %23include+ %23include+ void+copyUppercase(char+*dest,+const+char+*src)%3B constexpr+size_t+MAX_STACK_ARRAY_SIZE+%3D+1024%3B void+printUpperCase(const+char+*s)+{ ++++auto+sSize+%3D+strlen(s)%3B ++++if+(sSize+<%3D+MAX_STACK_ARRAY_SIZE)+{ ++++++++char+temp[sSize+%2B+1]%3B ++++++++copyUppercase(temp,+s)%3B ++++++++puts(temp)%3B ++++}+else+{ ++++++++//+std::make_unique_for_overwrite+is+missing+on+Compiler+Explorer. ++++++++std::unique_ptr+temp(new+char[sSize+%2B+1])%3B ++++++++copyUppercase(temp.get(),+s)%3B ++++++++puts(temp.get())%3B ++++} }'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:43.31039755351682,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:clang1101,filters:(b:'0',binary:'1',commentOnly:'0',demangle:'0',directives:'0',execute:'1',intel:'1',libraryCode:'1',trim:'1'),fontScale:14,j:1,lang:c%2B%2B,libs:!(),options:'-O3+-std%3Dc%2B%2B20+-fno-vectorize+-fno-unroll-loops+-fno-exceptions',selection:(endColumn:27,endLineNumber:18,positionColumn:1,positionLineNumber:13,selectionStartColumn:27,selectionStartLineNumber:18,startColumn:1,startLineNumber:13),source:1),l:'5',n:'0',o:'x86-64+clang+11.0.1+(Editor+%231,+Compiler+%231)+C%2B%2B',t:'0')),k:24.794543292249717,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:icc202119,filters:(b:'0',binary:'1',commentOnly:'0',demangle:'0',directives:'0',execute:'1',intel:'1',libraryCode:'0',trim:'1'),fontScale:14,j:2,lang:c%2B%2B,libs:!(),options:'-O3+-std%3Dc%2B%2B20+-fno-vectorize+-fno-unroll-loops+-fno-exceptions',selection:(endColumn:19,endLineNumber:28,positionColumn:19,positionLineNumber:28,selectionStartColumn:19,selectionStartLineNumber:28,startColumn:19,startLineNumber:28),source:1),l:'5',n:'0',o:'x86-64+icc+21.1.9+(Editor+%231,+Compiler+%232)+C%2B%2B',t:'0')),k:31.895059154233465,l:'4',n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4)，因此要么有充分的理由这样做，要么在存在可变长度数组的情况下清理堆栈指针操作，这只是编译器中一个困难或被忽视的问题。同样，如果您知道是哪个，请随时联系我们！[↩︎](https://wolchok.org/posts/how-to-read-assembly-language/#fnref:8)
9. 同样，我使用`-fno-exceptions`构建，以避免使事情复杂化，但清理路径除外。[↩︎](https://wolchok.org/posts/how-to-read-assembly-language/#fnref:9)
10. 如果我们[内联`MyString`和`MyOtherString`的构造函数](https://godbolt.org/#g:!((g:!((g:!((h:codeEditor,i:(fontScale:14,j:1,lang:c%2B%2B,selection:(endColumn:40,endLineNumber:12,positionColumn:40,positionLineNumber:12,selectionStartColumn:40,selectionStartLineNumber:12,startColumn:40,startLineNumber:12),source:'%23include+ class+MyString+{ +std::string+str%3B +public: ++explicit+MyString(std::string%26%26+s)+:+str(std::move(s))+{} }%3B class+MyOtherString+{ ++std::string+str%3B +public: ++explicit+MyOtherString(std::string+s):+str(std::move(s))+{} }%3B void+createRvalue1(std::string%26%26+s)+{ ++++MyString+s2(std::move(s))%3B }%3B void+createRvalue2(std::string%26%26+s)+{ ++++MyOtherString+s2(std::move(s))%3B }%3B'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:40.48706240487063,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:clang1101,filters:(b:'0',binary:'1',commentOnly:'0',demangle:'0',directives:'0',execute:'1',intel:'1',libraryCode:'1',trim:'1'),fontScale:14,j:1,lang:c%2B%2B,libs:!(),options:'-O3+-std%3Dc%2B%2B20+-fno-exceptions',selection:(endColumn:1,endLineNumber:1,positionColumn:1,positionLineNumber:1,selectionStartColumn:1,selectionStartLineNumber:1,startColumn:1,startLineNumber:1),source:1),l:'5',n:'0',o:'x86-64+clang+11.0.1+(Editor+%231,+Compiler+%231)+C%2B%2B',t:'0')),k:59.51293759512938,l:'4',n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4)，我们确实可以节省一些`createRvalue2`：我们最多调用一次`operator delete`。然而，我们仍然进行2个移动操作，我们需要32个额外的堆栈空间字节。[↩︎](https://wolchok.org/posts/how-to-read-assembly-language/#fnref:10)
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/4.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
