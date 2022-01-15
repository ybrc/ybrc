# 软基站高级利用：Blackhat USA 2021上Pwn基带的议题

**此文为加密收费内容添加我微信支付后可看:**
<!--more-->
![IP定位](https://tool.lu/netcard/)

# 软基站高级利用：Blackhat USA 2021上Pwn基带的议题

### 一 Pwn三星Shannon 5G基带

腾讯科恩实验室 基带利用：远程5G智能手机代码执行 | Over The Air Baseband Exploit: Gaining Remote Code Execution on 5G Smartphones

解读：https://keenlab.tencent.com/zh/2021/08/06/BlackHatUSA2021-over-the-air-baseband/

白皮书：https://keenlab.tencent.com/zh/whitepapers/us-21-Over-The-Air-Baseband-Exploit-Gaining-Remote-Code-Execution-on-5G-Smartphones-wp.pdf

> RCE漏洞在Shannon基带的IMS模块，基带在解析SIP协议消息的XML内容时，它会调用函数IMSPL_XmlGetNextTagName，该函数通过跳过特殊字符来查找标签的结尾，而没有安全检查，通过溢出缓冲区，控制存储在栈上的返回地址，并获得代码执行。

通过Kamailio自建IMS核心网、SRSRAN+USRP+Osmocom sim card实现蜂窝网络模拟实验环境，UE终端注册并订阅到SIP服务器，服务器将发送NOTIFY消息以提供网络中的基本信息，在NOTIFY消息中夹带XML格式的漏洞利用payload。

![img](https://keenlab.tencent.com/zh/img/BH2021-over-air-baseband/5-2-failed.png)





### 二 Pwn华为麒麟芯片基带

西班牙TASZK安全实验室 How To Tame Your Unicorn Exploring And Exploiting Zero-Click Remote Interfaces of Huawei Smartphones | 零点击交互远程破解华为智能手机

白皮书：https://i.blackhat.com/USA21/Wednesday-Handouts/US-21-Komaromy-How-To-Tame-Your-Unicorn-wp.pdf



PPT：https://i.blackhat.com/USA21/Wednesday-Handouts/US-21-Komaromy-How-To-Tame-Your-Unicorn.pdf

华为公开了搭载麒麟980、970设备的内核源码，西班牙TASZK安全实验室通过源代码审计在GSM信令消息编码解码的语法CSN.1上发现了内存越界漏洞

![img](https://cn0xroot.files.wordpress.com/2021/08/xnip2021-08-15_18-16-59.jpg?w=1024)

通过Osmocom2G基站以及OsmoMSC发送Payload利用代码去触发相关漏洞：

![img](https://cn0xroot.files.wordpress.com/2021/08/xnip2021-08-15_18-05-36.jpg?w=726)



### 碎碎念

通过空中接口无接触Pwn基带，非常考验综合实力，相关方面涉及通信（2G 3G 4G 5G等蜂窝网络技术以及3GPP协议标准） 二进制逆向（固件提取、解密、漏洞利用）等。而且对相关方面要求特别高，个人感觉没有长期的技术积累、团队协作，靠一个人单打独斗很难实现


{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/21.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">
