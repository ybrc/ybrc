# 计算机网络


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
# 计算机网络

一些积累的网络方面的知识𝑙𝑡𝑠lts

# TCP

## 特性

- TCP 提供一种面向连接的、可靠的字节流服务
- 在一个 TCP 连接中，仅有两方进行彼此通信。广播和多播不能用于 TCP
- TCP 使用校验和，确认和重传机制来保证可靠传输
- TCP 给数据分节进行排序，并使用累积确认保证数据的顺序不变和非重复
- TCP 使用滑动窗口机制来实现流量控制，通过动态改变窗口的大小进行拥塞控制

## 结构



![structure.jpg](http://happi0.gitee.io/happi0/2021/03/06/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/1.jpg)

**structure.jpg**



- Source Port && Destination Port: 源端口和目的端口,各占两个字节
- Sequence Number: 序号,占4字节
- Acknowledgment Number: 确认号,占4字节
- Data offset: 数据偏移, 占4位
- Deserved: 保留,占6位
- Window: 窗口, 占2字节
- Checksum: 校验和, 占2字节
- Urgent Pointer: 紧急指针, 占2字节
- Options: 选项, 可变长度,最长可达40字节
- PAdding: 填充

### 控制位

有六个,且只有”0”和”1”两种状态

| abbreviations | Name            | Meaning | operation                    |
| :------------ | :-------------- | :------ | :--------------------------- |
| URG           | URGent          | 紧急    | 高优先级数据                 |
| ACK           | ACKnowledgment  | 确认    | 建立连接后所有的报文AKC都为1 |
| PSH           | PuSH            | 推送    | 立刻会话                     |
| RST           | ReSeT           | 复位    | 出现差错,需要释放连接        |
| SYN           | SYNchronization | 同步    | 建立连接时用来同步序号       |
| FIN           | Finis           | 终止    | 释放连接                     |

## 建立连接–三次握手

##### 第一次握手𝑆𝑌𝑁=1,𝑠𝑒𝑞=𝑥SYN=1,seq=x:

客户端发送一个 TCP 的 SYN 标志位置1的包，指明客户端打算连接的服务器的端口，以及初始序号 X,保存在包头的序列号𝑆𝑒𝑞𝑢𝑒𝑛𝑐𝑒𝑁𝑢𝑚𝑏𝑒𝑟SequenceNumber字段里。

发送完毕后，客户端进入 SYN_SEND 状态。

##### 第二次握手𝑆𝑌𝑁=1,𝐴𝐶𝐾=1,𝑠𝑒𝑞=𝑦,𝐴𝐶𝐾𝑛𝑢𝑚=𝑥+1SYN=1,ACK=1,seq=y,ACKnum=x+1:

服务器发回确认包𝐴𝐶𝐾ACK应答。即 SYN 标志位和 ACK 标志位均为1。服务器端选择自己 ISN 序列号，放到 Seq 域里，同时将确认序号𝐴𝑐𝑘𝑛𝑜𝑤𝑙𝑒𝑑𝑔𝑒𝑚𝑒𝑛𝑡𝑁𝑢𝑚𝑏𝑒𝑟AcknowledgementNumber设置为客户的 ISN 加1，即X+1。 发送完毕后，服务器端进入 SYN_RCVD 状态。

##### 第三次握手𝐴𝐶𝐾=1，𝐴𝐶𝐾𝑛𝑢𝑚=𝑦+1ACK=1，ACKnum=y+1客户端再次发送确认包𝐴𝐶𝐾ACK，SYN 标志位为0，ACK 标志位为1，并且把服务器发来 ACK 的序号字段+1，放在确定字段中发送给对方，并且在数据段放写ISN的+1发送完毕后，客户端进入 ESTABLISHED 状态，当服务器端接收到这个包时，也进入 ESTABLISHED 状态，TCP 握手结束。

## 释放连接–四次挥手

##### 第一次挥手𝐹𝐼𝑁=1，𝑠𝑒𝑞=𝑥FIN=1，seq=x假设客户端想要关闭连接，客户端发送一个 FIN 标志位置为1的包，表示自己已经没有数据可以发送了，但是仍然可以接受数据。发送完毕后，客户端进入 FIN_WAIT_1 状态。

##### 第二次挥手𝐴𝐶𝐾=1，𝐴𝐶𝐾𝑛𝑢𝑚=𝑥+1ACK=1，ACKnum=x+1服务器端确认客户端的 FIN 包，发送一个确认包，表明自己接受到了客户端关闭连接的请求，但还没有准备好关闭连接。发送完毕后，服务器端进入 CLOSE_WAIT 状态，客户端接收到这个确认包之后，进入 FIN_WAIT_2 状态，等待服务器端关闭连接。

##### 第三次挥手𝐹𝐼𝑁=1，𝑠𝑒𝑞=𝑦FIN=1，seq=y服务器端准备好关闭连接时，向客户端发送结束连接请求，FIN 置为1。发送完毕后，服务器端进入 LAST_ACK 状态，等待来自客户端的最后一个ACK。

##### 第四次挥手𝐴𝐶𝐾=1，𝐴𝐶𝐾𝑛𝑢𝑚=𝑦+1ACK=1，ACKnum=y+1客户端接收到来自服务器端的关闭请求，发送一个确认包，并进入 TIME_WAIT状态，等待可能出现的要求重传的 ACK 包。服务器端接收到这个确认包之后，关闭连接，进入 CLOSED 状态。客户端等待了某个固定时间（两个最大段生命周期，2MSL，2 Maximum Segment Lifetime）之后，没有收到服务器端的 ACK ，认为服务器端已经正常关闭连接，于是自己也关闭连接，进入 CLOSED 状态。

# 端口扫描

## NMap – Network Mapper

### nmap端口状态

| 标志             | 含义                                                         |
| :--------------- | :----------------------------------------------------------- |
| open             | 应用程序在该端口接收 TCP 连接或者 UDP 报文。                 |
| closed           | 关闭的端口对于nmap也是可访问的， 它接收nmap探测报文并作出响应。但没有应用程序在其上监听。 |
| filtered         | 由于包过滤阻止探测报文到达端口，nmap无法确定该端口是否开放。过滤可能来自专业的防火墙设备，路由规则 或者主机上的软件防火墙。 |
| unfiltered       | 未被过滤状态意味着端口可访问，但是nmap无法确定它是开放还是关闭。 只有用于映射防火墙规则集的 ACK 扫描才会把端口分类到这个状态。 |
| open \| filtered | 无法确定端口是开放还是被过滤， 开放的端口不响应就是一个例子。没有响应也可能意味着报文过滤器丢弃了探测报文或者它引发的任何反应。UDP，IP协议,FIN, Null 等扫描会引起。 |
| closed\|filtered | （关闭或者被过滤的）                                         |

### 扫描tcp端口

扫描port1到port2的所有端口 + port3 + port4



```
nmap [IP] -p[port1]-[port2],port3,port4
```

如果不加参数,nmap默认扫描1024加上nmap-services列出的端口

并且可能扫描到开放的端口,但未知其服务,可能不会显示

经过笔者测试520端口的http服务不加参数的nmap无法扫描出来

加了参数可以

### 扫描udp端口



```
nmap  -sU  [IP]  -Pn
```

- -sU：表示udp scan ， udp端口扫描
- -Pn：不对目标进行ping探测（不判断主机是否在线）（直接扫描端口）

# 网络层

## 常见协议:

- 地址解析协议:ARP𝐴𝑑𝑑𝑟𝑒𝑠𝑠𝑅𝑒𝑠𝑜𝑙𝑢𝑡𝑖𝑜𝑛𝑃𝑟𝑜𝑡𝑜𝑐𝑎𝑙AddressResolutionProtocal
- 网际控制报文协议:ICMP𝐼𝑛𝑡𝑒𝑟𝑛𝑒𝑡𝐶𝑜𝑛𝑡𝑟𝑜𝑙𝑀𝑒𝑠𝑠𝑎𝑔𝑒𝑃𝑟𝑜𝑡𝑜𝑐𝑜𝑙InternetControlMessageProtocol
- 网际组管理协议:IGMP𝐼𝑛𝑡𝑒𝑟𝑛𝑒𝑡𝐺𝑟𝑜𝑢𝑝𝑀𝑎𝑛𝑎𝑔𝑒𝑚𝑒𝑛𝑡𝑃𝑟𝑜𝑡𝑜𝑐𝑜𝑙InternetGroupManagementProtocol

## 常见中间设备:

- 物理层:
- 网桥或桥接器
- 路由器
- 网关

## IP的分类

| 网络类别 | 最大可指派的网络数 | 第一个可指派的网络号 | 最后一个可指派的网络号 | 每个网络中的最大主机数 |
| :------- | :----------------- | :------------------- | :--------------------- | :--------------------- |
| A        | 12627−227−2        | 1                    | 126                    | 166777214              |
| B        | 16383224−1224−1    | 128.1                | 191.255                | 65534                  |
| C        | 2097151221−1221−1  | 192.0.1              | 223.255.255            | 254                    |

### 常见的三类IP地址

#### A类

- 网络字段占一个字节,但第一位已被固定为”0”,故仅有7位可用
- 主机号有24位

#### B类

- 网络字段占两个字节,但前两位已被固定为”10”,故仅有14位可用
- 主机号有16位

#### C类

- 网络字段占三个字节,但前三位已被固定为”110”,故仅有21位可用
- 主机号有8位

### 特殊的IP地址

| 网络号 | 主机号  | 意义                 |
| :----- | :------ | :------------------- |
| 0      | 0       | 本网络的本主机       |
| 0      | host-id | 本网络的某主机       |
| 全1    | 全1     | 只在本网络广播       |
| net-id | 全1     | 对net-id所有主机广播 |
| 127    | 任何数  | 环回地址             |

## ARP协议

当主机A要向主机B发送数据报时,先从ARP高速缓存中查看主机B的地址

### 找到主机B的MAC地址

- 把MAC地址写入MAC帧

### 找不到主机B的MAC地址

- 通过ARP进程在本局域网发送ARP请求分组
- 本局域网所有主机收到此ARP请求分组
- 主机B的IP地址和ARP要求的IP地址一致,收下ARP请求分组,并向主机A发送ARP响应分组
- 主机A收到主机B的ARP响应分组后,在其高速缓存中写入主机B的IP地址到MAC地址的映射

## IP数据包



![2.jpg](http://happi0.gitee.io/happi0/2021/03/06/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/2.jpg)

**2.jpg**



- 版本 : 4bit.（表示使用的 IPv4协议），对等层之间要使用同一种IP协议（IPv4协议）
- 首部长度:4 bit ，可表示的最大数值为15个单位（1111），一个单位一个字节，最大为60字节,最小为20字节
- 服务类型:8 bit 
- 总长度:16 bit,最大值2^16 - 1 = 65535 字节
- 标识:16 bit，它是一个计数器，用来产生数据包的标识
- 标志:3bit,数据包在传输的过程中，标志字段MF（More Fregment），MF = 1表示后面还有分片，MF = 0 表示最后一个分片
- 片偏移:13bit,每个数据片不同时传输，标志着某片在原分组中的相对偏移位置，以8字节为偏移单位
- 生存时间:8bit 
- 协议:8bit,指出该数据报使用的协议
- 首部检验和:16bit,字段只校验数据报的首部，不包含数据部分
- 源地址：32bit
- 源地址：32bit

## 子网掩码

### 如何构造子网掩码

以C类IP为例

- 课表示的子网个数 == 2^n
- 每个子网可分配的主机IP数 == 28−𝑛−2
</div>
<img src="https://tool.lu/netcard/">


{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/90.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
