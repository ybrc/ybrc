# 360ARP防火墙“智能追踪”原理探究


<!--more-->
![IP定位](https://tool.lu/netcard/)

# 360ARP防火墙“智能追踪”原理探究

### 0x00关于本文

### 

很早就知道360有个ARP防火墙，中学的微机课上还装个攻击程序来让老师电脑上的360报警，现在课上做ARP实验装了个靶机，忽然就想拿下来调戏一番，结果一调戏就发现一些问题了。

  

### 0x01360 ARP防火墙的功能

这个ARP防护功能在360的流量防火墙中的局域网防护中

[![](https://lh3.googleusercontent.com/-oVNuc3AUntQ/X-xmbNU5qVI/AAAAAAAAAoY/MW0xX5LUV3sgednnkh7NE0uailwMsDJ9QCLcBGAsYHQ/w400-h286/image.png)](https://lh3.googleusercontent.com/-oVNuc3AUntQ/X-xmbNU5qVI/AAAAAAAAAoY/MW0xX5LUV3sgednnkh7NE0uailwMsDJ9QCLcBGAsYHQ/image.png)


一旦捕获到了攻击还能“智能追踪”

[![](https://lh3.googleusercontent.com/-Hsz26scX6KU/X-xmy7Xm7DI/AAAAAAAAAog/DkhmdbSNJe8y5UYdexQfDJ7iOolbqbQbwCLcBGAsYHQ/image.png)](https://lh3.googleusercontent.com/-Hsz26scX6KU/X-xmy7Xm7DI/AAAAAAAAAog/DkhmdbSNJe8y5UYdexQfDJ7iOolbqbQbwCLcBGAsYHQ/image.png)

  

[![](https://lh3.googleusercontent.com/-Zvoy7YCdWhs/X-xm4LthdGI/AAAAAAAAAok/WzqXP2FkW3gI0NsH1r6Wcgp0nyRbRNRmwCLcBGAsYHQ/image.png)](https://lh3.googleusercontent.com/-Zvoy7YCdWhs/X-xm4LthdGI/AAAAAAAAAok/WzqXP2FkW3gI0NsH1r6Wcgp0nyRbRNRmwCLcBGAsYHQ/image.png)

MAC地址懒得打码了

  


### 0x01360 智能追踪功能实现原理

最开始，我的猜想是，这个追踪功能靠的是ARP包里面所声称的地址来实现的，因为欺骗者总是想要自己声称自己的MAC地址对应网关的地址，以此来欺骗受害者。

但是测了一下发现并不是这样。

用scapy命令send(ARP(op=1,hwsrc='11:45:14:19:19:81',hwdst='00:0C:29:AC:46:B5',psrc='192.168.1.1',pdst='192.168.1.235'))

构造一个非攻击者的地址发过去，但还是被360找到了真实的地址

这是怎么回事呢？那只能抓包看看了。

  

[![](https://lh3.googleusercontent.com/-N2bW-8Jkk6g/X-xslirVKVI/AAAAAAAAApA/4-_l-G-pa_YxLjzRUOTt0ejX9JdFvkcbwCLcBGAsYHQ/w640-h432/image.png)](https://lh3.googleusercontent.com/-N2bW-8Jkk6g/X-xslirVKVI/AAAAAAAAApA/4-_l-G-pa_YxLjzRUOTt0ejX9JdFvkcbwCLcBGAsYHQ/image.png)

  


一看wireshark就找到问题了，原来以太帧里面就会有这个MAC地址

那么要是把以太帧上的源地址换掉会怎么样呢？

通过scapy可以轻易伪造源地址

sendp(Ether(src='11:45:14:19:38:6F')/ARP(op=1,hwsrc='11:45:14:19:19:81',hwdst='00:0C:29:AC:46:B5',psrc='192.168.1.1',pdst='192.168.1.235'))

结果360就只能看到错误的地址了

[![](https://lh3.googleusercontent.com/-Xj3MJpO-Amw/X-xtDlIiD3I/AAAAAAAAApI/UY1KkR_RpRogkbISB4QnEpv_sfuP2nUDwCLcBGAsYHQ/image.png)](https://lh3.googleusercontent.com/-Xj3MJpO-Amw/X-xtDlIiD3I/AAAAAAAAApI/UY1KkR_RpRogkbISB4QnEpv_sfuP2nUDwCLcBGAsYHQ/image.png)


而360的“追踪”是怎么回事呢，抓包发现360是执行了一次局域网内的ARP扫描，尝试找到攻击者的MAC地址对应的IP地址

[![](https://lh3.googleusercontent.com/-rnNriOAzIEQ/X-xtw9kWi_I/AAAAAAAAApU/7ffN9WrtCNU1_e7VtLCmdOuKeXM80kyMwCLcBGAsYHQ/w640-h294/image.png)](https://lh3.googleusercontent.com/-rnNriOAzIEQ/X-xtw9kWi_I/AAAAAAAAApU/7ffN9WrtCNU1_e7VtLCmdOuKeXM80kyMwCLcBGAsYHQ/image.png)

  

通过这个简单的测试，我们已经知道了360ARP防火墙智能追踪功能的实现原理：

收到异常ARP包的时候，从以太帧中提取攻击者的真实MAC地址，然后执行ARP扫描，找到这个MAC地址对应的IP，从而实现追踪  

### 0x02 点评

360 ARP防火墙只能根据以太帧中的MAC地址来做“追踪”，因此攻击者可以随时改掉包中的地址来借刀别的机器或者让360追踪不出来，当然这并不是360技术有缺陷，而是因为作为一台装在用户主机上的软件，它只能做到这样。

事实上，大部分的ARP欺骗工具都不会修改以太帧中的MAC地址，因此大部分情况已经够用了


{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/48.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">
