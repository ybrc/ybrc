# iOS逆向学习（一）基础

**此文为加密收费内容添加我微信支付后可看:**
<!--more-->
![IP定位](https://tool.lu/netcard/)

# iOS逆向学习（一）基础

因为工作原因，最近开始接触iOS逆向这块，所以在这里记录、总结一下。这一篇主要是基本知识、常用工具。

# 一、基本知识

首先，逆向一款APP，我们需要什么环境？那当然是一部越狱手机。手机越狱的方法这里不讨论，总之我们需要一部越狱的手机，来获取APP的ipa包，以及后面的动态debug等逆向操作。

```
Tips: 越狱手机的系统版本不限，只要能装上并运行我们想要逆向的APP就好。例如我们想要逆向的APP最低支持iOS8，那么越狱手机的系统版本，只要大于等于8就行。
```

有了越狱手机以后，我们就可以正式开始逆向了。常见的逆向操作，大致分成下面这几步：

```
应用砸壳` -> `静态/动态分析` -> `代码注入` -> `打包重签名
```

后面的内容，我们也按照这样的顺序来展开。

# 二、砸壳

之所以需要砸壳这一步，是因为苹果会对发布包的ipa进行加密。常见的砸壳工具，有下面这三种：

- [Clutch](https://github.com/KJCracks/Clutch)
- [dumpdecrypted](https://github.com/stefanesser/dumpdecrypted)
- [frida-ios-dump](https://github.com/AloneMonkey/frida-ios-dump)

这三种砸壳工具的使用，可以点进链接看说明，或者网上随便搜索一下就能找到一大堆帖子教你怎么用。所以，这里就不重复使用方法了。但有两个很重要的点需要注意：

- 砸壳后的包，必须在越狱机、非越狱机上都能安装、启动成功，才能算得上是砸壳成功
- 因为部分APP可能做了反逆向处理，所以砸壳成功的包，虽然能安装、启动，但却无法正常运行，甚至启动就闪退。对于反逆向的应对，砸壳阶段不用关注

# 三、静态/动态分析

这一步的目的，在于通过静态/动态分析的方法，了解并找到我们感兴趣的代码块、逻辑点。但是因为我们目前只有一个砸壳后的ipa包，所以我们就需要一些工具的辅助。

- class-dump: 导出所有类的头文件，可以在其中看到类名、公有属性、公有方法的定义，这一步有助于我们大致了解代码块的组成
- IDA: 反编译工具，可以把机器代码反编译成汇编代码，甚至可以把部分汇编代码块进一步反编译为OC之类的高级语言，当然还有其他例如调用关系图之类的高级功能
- hopper: 和IDA一样的反编译工具，功能虽然没有IDA强大，但其实对于我这种初学者来说也够用了
- Reveal: UI层级解析工具，可以像Xcode一样，解析展示APP的UI层级结构，帮助我们理解APP内window、viewController、view之间的关联
- cycript: 强大的动态调试工具，可以在APP运行的时候，对APP执行查看、改动操作，详细的使用方法可以参照[官网](http://www.cycript.org/)。此外虽然常见的用法是在越狱环境下，但我们也可以通过framework集成的方式，在非越狱环境使用。同样的，操作方法自行搜索
- LLDB: 苹果自己提供的动态调试工具，虽然常规情况下只能debug自己的APP，但我们现在可是在越狱环境啊，debug第三方APP？那都不是事儿！第三方APP的debug方法网上搜索可以找到一大把

# 四、代码注入

那么通过静态/动态的分析之后，我们虽然分析了大致的代码结构，定位了关键目标代码块。但如果我们想不仅仅是观察，更想对原代码原APP进行改动，这时就需要使用代码注入。常见的代码注入，基本都是通过hook的原理去做的。常见的hook工具有下面这几种：

- Logos Tweak: 使用logos语法（不要怕，语法很简单，看一眼就会），objc、C方法都可以hook。使用方法网上一大把，不过对于logos语法，最好先看一下[iPhoneDevWiki上的介绍](https://iphonedevwiki.net/index.php/Logos)
- CaptainHook: 可以用来hook objc方法
- fishhook: 可以用来hook C方法

这三种工具当中，最常用的是logos。需要注意的是，这三种代码注入的方式，都是利用dyld机制实现的。所以无论是在越狱机，还是在非越狱机上都可以执行。而其他的例如怎么hook block之类的，基本也都大同小异，可以自己搜索一下。

当然除了代码注入以外，如果有需要，我们也可以通过直接修改可执行文件的方式，对APP进行修改。工具方面可以使用IDA的keyPatch功能，至于怎么修改，反正我暂时还不会。

# 五、打包重签名

经过砸壳、分析、注入三步以后，我们已经得到了一份修改后的代码了。但是想要把这份代码打包成新的ipa包进行发布，就还需要进行重签名操作。开源的重签名脚本、工具很多，例如可以直接用[ios-app-signer](https://github.com/DanTheMan827/ios-app-signer)。

# 六、进一步深入

虽然因为逆向工具的丰富、自动化，砸壳、代码注入、重签名这些工作的技术难度不高了。但是要想不局限于浅层面的玩一玩，而是更进一步的深入学习，下面这几方面的能力很重要：

- iOS开发经验: 丰富的iOS开发经验真的很重要，特别是在代码的静态/动态分析阶段，有经验的开发朋友，根据类名、方法名、汇编代码，甚至字符串内容、UI层级结构这些少量细节，就能推断出大致的代码结构、逻辑
- 底层知识: 这部分的底层知识，包括OC语言、iOS操作系统、编译器、汇编等等等等，这种平时业务开发基本用不上的底层知识，在这里却意外的很重要

# 七、资料工具推荐

- iOS逆向论坛: [http://iosre.com](http://iosre.com/)
- MonkeyDev: 基于iOSOpenDev的一键逆向开发集成工具，https://github.com/AloneMonkey/MonkeyDev
- 《iOS应用逆向工程》: 我看完感觉内容有点乱，不过依旧是本好书，亚马逊上可以搜到，作者沙梓社、吴航
- 《iOS应用逆向与安全》: MonkeyDev作者出的书，https://www.amazon.cn/dp/B07D5952BR/

{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/59.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">