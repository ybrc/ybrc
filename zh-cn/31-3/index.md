# 从ASM练习中编写C（while/循环）

**此文为加密收费内容添加我微信支付后可看:**
<!--more-->
![IP定位](https://tool.lu/netcard/)

# 从ASM练习中编写C（while/循环）

![ASM到C练习（while/循环）](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/30170608/blog_asm_to_c_while_loop.png)

在这个挑战中，我将使用英特尔和AT&T语法查看程序（*while/loop*）的ASM指令。在尽我所能弄清楚每个指令的作用后，我将编写一个C程序，以反映我认为ASM指令中正在发生的事情。这些挑战纯粹是为了实践，将帮助您了解逆向工程以及C和ASM的基础知识。



## 挑战

下面您将看到C程序（*while/循环*）的ASM说明，挑战是在查看下面的ASM说明后编写C程序。左侧是**英特尔**语法，右侧是**AT&T**语法。

```
注：我建议学习英特尔和AT&T语法，如下所示
```
<script nonce="strict-dynamic" src="https://pym.nprapps.org/pym.v1.min.js"></script>
<script nonce="strict-dynamic" src="https://cdn.knightlab.com/libs/juxtapose/latest/js/juxtapose.min.js"></script>
<link rel="stylesheet" href="https://cdn.knightlab.com/libs/juxtapose/latest/css/juxtapose.css">
<div id="foo"></div>
<script>
slider = new juxtapose.JXSlider('#foo',
    [
        {
            src: 'https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/29194128/carbon-23.png',
            label: '2021',
            credit: 'Mr·Yang'
        },
        {
            src: 'https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/29194134/carbon-22.png',
            label: '2021',
            credit: "Mr·Yang"
        }
    ],
    {
        animate: false,
        showLabels: true,
        showCredits: true,
        startingPosition: "50%",
        makeResponsive: false
    });
</script>

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/29194128/carbon-23.png)

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/29194134/carbon-22.png)

注：请注意上述英特尔和AT&T语法之间的区别。通过这个较小的程序，你可以开始看到两者之间的区别（*即mov与movl等...*）



## 笔记

这些是我检查上述代码时记的一些笔记，从第9行（*值标签*）开始。

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/30134405/carbon-25-824x1024.png)

在上述说明中，我可以看到第9-11行似乎是名称*值*的全局变量，并在4字节数据类型中设置了小数点后10，如下所示。

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/30135551/while-loop-global-var-1024x96.png)

下一组引起我注意的说明是第26-27行的说明，其中0的值被传递到指针位置进行存储，然后下一个指令无条件跳转到标记*L2*。这通常意味着*DWORD PTR -4[rbp]*的值将是某种计数器，或用于跟踪迭代的占位符，我们可以在以后的步骤中证明或反驳这些迭代，但边走边记住这些想法是件好事。

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/30140337/while-loop-global-value-1024x66.png)

无条件跳转到标签*L2*有以下说明。

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/30141319/while-loop-l2-1024x251.png)

第36-42行似乎将全局变量的值（*小数点后10*）移动到EAX寄存器，然后下一个指令是将我们的*DWORD PTR-4[rbp]*迭代占位符与EAX中存储的值进行比较。如果存储在EAX中的值小于全局变量中存储的值（*小数点后10*），下一个指令是跳转。如果值不小于全局变量，则主函数清理EAX寄存器，然后离开并返回到以前的堆栈帧。因此，这意味着如果值小于全局变量，则应跳转到标签*L3*以发生更多逻辑，否则程序将成功结束。因此，让我们看看标签L3的逻辑，看看这如何适合程序的其余部分。

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/30142245/while-loop-l3-1024x216.png)

因此，按照*L3*之前的逻辑，我们似乎有一个位于*DWORD PTR值[rip]的*全局静态值，小数为10。我们还在*DWORD PTR -4[rbp]上*还有一个值，该值似乎持有一个临时数字，最终与上面列出的全局静态值进行比较。

我们在上面的第29行可以看到，1的值正在添加到*DWORD PTR-4[rbp]*的值中，然后在将同一值移动到EAX寄存器后立即添加。第31-34行的以下4行正在通过从标签LC0[rip]添加格式字符串来设置*printf*函数，然后将格式字符串（*DWORD PTR-4[rbp]*）的一部分参数移动到ESI寄存器中。接下来，根据*printf*函数的x64 ABI，0将移入EAX寄存器。

因此，尽管如此，还是在谈论这些话中，这个项目实际上做了什么？



## 解决方案

在解析了上述代码中的每个指令后，我编写了以下C程序来重建ASM指令。

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/30154040/carbon-27-1024x522.png)

接下来是编译代码，看看它是否有效，然后在二进制文件上运行*objdump*，看看我们的拆卸离我们开始的指令有多近。

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/30154340/carbon-28-1024x522.png)

太棒了！它没有出错，所以让我们用*objdump*仔细检查我们的准确性，如下所示。

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/30154428/carbon-26-1024x942.png)

结果很好，因为我可以看到说明与上面的原始ASM说明非常相似，但没有标签。您可以看到有一个*cmp*指令，然后是*jmp*指令，该指令在代码中向后跳，添加1，就像在本帖顶部的ASM指令中所做的那样。当您在野外看到这样的模式时，或者在反向工程时，您应该开始注意它可能是一个循环，在这个特定的例子中，它是一个正在使用的while循环。

我希望你学到了一些你以前不知道的新东西。

{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/23.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">
