# ASM实践中的写作C（如果/然后）

**此文为加密收费内容添加我微信支付后可看:**
<!--more-->
![IP定位](https://tool.lu/netcard/)


# ASM实践中的写作C（如果/然后）
![ASM到C练习（如果/然后）](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/30170715/blog_asm_to_c.png)

<script nonce="strict-dynamic" src="https://pym.nprapps.org/pym.v1.min.js"></script>
<script nonce="strict-dynamic" src="https://cdn.knightlab.com/libs/juxtapose/latest/js/juxtapose.min.js"></script>
<link rel="stylesheet" href="https://cdn.knightlab.com/libs/juxtapose/latest/css/juxtapose.css">
<div id="juxtapose-wrapper" class="juxtapose" data-startingposition="35%" data-showlabels="false" data-showcredits="false" data-animate="false" data-mode="horizontal">
    <img src="https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/28123037/carbon-5.png" data-label="2021" data-credit="Mr·Yang" />
    <img src="https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/28123136/carbon-6.png" data-label="2021" data-credit="Mr·Yang" />
</div>
<script src="https://cdn.knightlab.com/libs/juxtapose/latest/js/juxtapose.min.js"></script>
<link rel="stylesheet" href="https://cdn.knightlab.com/libs/juxtapose/latest/css/juxtapose.css">


在这个挑战中，我将使用英特尔和AT&T语法查看64位ELF可执行文件（*如果/然后*）的ASM指令。在尽我所能弄清楚每个指令的作用后，我将编写一个C程序，以反映我认为ASM指令中正在发生的事情。这些挑战纯粹是为了实践，将帮助您了解逆向工程以及C和ASM的基础知识。



## 挑战

下面您将看到C程序的ASM说明（*如果/然后*），挑战是在查看下面的ASM说明后编写C程序。左侧是**英特尔**语法，右侧是**AT&T**语法。

```
注：我建议同时学习英特尔和AT&T语法，如下所示
```

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/28123037/carbon-5.png)

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/28123136/carbon-6.png)

```
注：请注意上述英特尔和AT&T语法之间的区别。通过这个较小的程序，你可以开始看到两者之间的区别（即mov与movl等...）
```



## 笔记

这些是我检查上述代码时记下的一些笔记，从第14行（*主*）开始。

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/28130925/carbon-7-887x1024.png)

在上述说明中，我可以看到主值（10，20）内有2个值设置为固定值。每个值的大小看起来是4个字节，由于我可以看到正在设置的值，我知道这2个值既是整数，也不是指针。

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/29120306/vars-1024x66.png)

您还可以在上述说明中看到，对*printf*的调用使用PLT（*程序链接表*），该表在使用函数名称后由@PLT后缀表示。对*printf*的调用在64位编程ABI中设置如下（*如第31-34行和第40-43行所示*）。

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/29114713/printf_1-1024x128.png)

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/29114723/printf_2-1024x123.png)

如帖子顶部的ASM说明所示，*LC0*和*LC1*标签列在*主标签*之前，其值如下所示，以供参考。

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/29115330/carbon-17-1024x341.png)

根据提供给*printf*的参数，ASM指令可能会使用更多的寄存器进行整数/指针或作为参数传递的浮点/双值。



## 解决方案

在解析了上述代码中主指令后，我编写了以下C程序来重建ASM指令。

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/28131537/carbon-8-1024x582.png)

接下来是编译代码，看看它是否有效，然后在二进制文件上运行*objdump*，看看我们的拆卸离我们开始的指令有多近。

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/29123242/carbon-19-1024x251.png)

太棒了！它没有出错，所以让我们用*objdump*再次检查我们的准确性，如下所示。

![img](https://s3.amazonaws.com/malicious.beta/wp-content/uploads/2021/03/29142633/carbon-21-887x1024.png)

如您所见，这些说明与我们一开始的情况并不相同，但您可以看到它们离我们很近......我会称之为成功，我希望你也学到了很多。

{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/33.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">
