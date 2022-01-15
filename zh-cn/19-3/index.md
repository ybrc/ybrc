# SIM 编程②

**此文为加密收费内容添加我微信支付后可看:**
<!--more-->
![IP定位](https://tool.lu/netcard/)

# SIM 编程②

SIM 卡，用户身份模块（Subscriber Identity Module，SIM），是主要用于存储用户身份识别数据、短信数据和电话号码的智能卡。

![img](https://cn0xroot.files.wordpress.com/2020/11/dsc03961.jpg?w=723)

USIM 卡：UMTS 用户身份模块（UMTS Subscriber Identity Module），是用于 UMTS 网络中的用户身份识别模块。USIM 卡还可以储存使用者资料、电话号码、认证资料、密钥、加密算法以及为短信提供储存空间。USIM 卡通常被认为是 SIM 卡的升级版，在 LTE（4G）网络中必须使用 USIM 卡，同时 USIM 卡向下兼容 2G、3G 网络。

![img](https://cn0xroot.files.wordpress.com/2021/07/android.png?w=757)

ICCID：
Integrated Circuit Card Identification，智能卡识别序列号码，用以标识 USIM 卡；
IMSI：
International Mobile Subscriber Identity，国际用户识别码，全球唯一的用户识别码；

Ki：鉴权密钥，用于用户身份的鉴权。

OP：鉴权密钥，用于用户身份的鉴权。

OPc：鉴权密钥，使用 OP 和 Ki 分散计算得出。

在osmocom购买的测试卡，发货时还会提供 IMSI、ICCID、ACC、PIN1、PUK1、PIN2、PUK2、Ki、OPC、ADM1、KIC1、KID1、KIK1等参数

![img](https://cn0xroot.files.wordpress.com/2021/05/xnip2021-05-11_11-08-39.png?w=723)

![img](https://cn0xroot.files.wordpress.com/2021/07/2021-07-22-18-07-50e5b18fe5b995e688aae59bbe.png?w=873)

将SIM密钥写入MME数据库后，当基站启动、SIM卡入网鉴权时，核心网将对数据库中的密钥采用特定算法进行运算，如果运算结果与SIM卡侧运算结果相同，则正常入网使用，反之，则入网失败。

### **Linux pysim**

```
git clone https://github.com/osmocom/pysim``sudo apt-get install python3-pyscard python3-serial python3-cmd2 python3-pip python3-yaml``sudo pip3 install pytlv jsonpath-ng construct bidict gsm0338``cd pysim``sudo pip3 install -r requirements.txt``sudo apt install pcsc-tools pcscd #安装PCSC 智能卡软件
sudo systemctl start pcscd``sudo systemctl enable pcscd
```

lsusb

```
Bus 001 Device 012: ID 076b:6632 OmniKey AG
```

![img](https://cn0xroot.files.wordpress.com/2021/07/image.png?w=1024)

```
sudo pcsc_scan``PC/SC device scanner``V 1.5.2 (c) 2001-2017, Ludovic Rousseau <ludovic.rousseau@free.fr>``Using reader plug'n play mechanism``Scanning present readers...``0: HID Global OMNIKEY 6121 Smart Card Reader [OMNIKEY 6121 Smart Card Reader] 00 00` `Thu Jul 22 16:54:49 2021`` ``Reader 0: HID Global OMNIKEY 6121 Smart Card Reader [OMNIKEY 6121 Smart Card Reader] 00 00`` ``Card state: Card inserted,`` ``ATR: 3B 9F 96 80 1F C7 80 31 A0 73 BE 21 13 67 43 20 07 18 00 00 01 A5` `ATR: 3B 9F 96 80 1F C7 80 31 A0 73 BE 21 13 67 43 20 07 18 00 00 01 A5``+ TS = 3B --> Direct Convention``+ T0 = 9F, Y(1): 1001, K: 15 (historical bytes)`` ``TA(1) = 96 --> Fi=512, Di=32, 16 cycles/ETU``  ``250000 bits/s at 4 MHz, fMax for Fi = 5 MHz => 312500 bits/s`` ``TD(1) = 80 --> Y(i+1) = 1000, Protocol T = 0``-----`` ``TD(2) = 1F --> Y(i+1) = 0001, Protocol T = 15 - Global interface bytes following``-----`` ``TA(3) = C7 --> Clock stop: no preference - Class accepted by the card: (3G) A 5V B 3V C 1.8V``+ Historical bytes: 80 31 A0 73 BE 21 13 67 43 20 07 18 00 00 01`` ``Category indicator byte: 80 (compact TLV data object)``  ``Tag: 3, len: 1 (card service data byte)``   ``Card service data byte: A0``    ``- Application selection: by full DF name``    ``- BER-TLV data objects available in EF.DIR``    ``- EF.DIR and EF.ATR access services: by GET RECORD(s) command``    ``- Card with MF``  ``Tag: 7, len: 3 (card capabilities)``   ``Selection methods: BE``    ``- DF selection by full DF name``    ``- DF selection by path``    ``- DF selection by file identifier``    ``- Implicit DF selection``    ``- Short EF identifier supported``    ``- Record number supported``   ``Data coding byte: 21``    ``- Behaviour of write functions: proprietary``    ``- Value 'FF' for the first byte of BER-TLV tag fields: invalid``    ``- Data unit in quartets: 2``   ``Command chaining, length fields and logical channels: 13``    ``- Logical channel number assignment: by the card``    ``- Maximum number of logical channels: 4``  ``Tag: 6, len: 7 (pre-issuing data)``   ``Data: 43 20 07 18 00 00 01``+ TCK = A5 (correct checksum)` `Possibly identified card (using /usr/share/pcsc/smartcard_list.txt):``3B 9F 96 80 1F C7 80 31 A0 73 BE 21 13 67 43 20 07 18 00 00 01 A5``  ``sysmoUSIM-SJS1 (Telecommunication)``  ``http://www.sysmocom.de/products/sysmousim-sjs1-sim-usim`` ``\
```

操作

读取SIM卡信息

```
sudo ./pySim-read.py --pcsc-device=0
```

![img](https://cn0xroot.files.wordpress.com/2021/07/image-2.png?w=931)

```
Using PC/SC reader interface``Reading ...``Autodetected card type: sysmoUSIM-SJS1``ICCID: 8988211000000268030``IMSI: 901700000026803``GID1: ffffffffffffffffffff``GID2: ffffffffffffffffffff``SMSP: ffffffffffffffffffffffffffffffffffffffffffffffffe1ffffffffffffffffffffffff0581005155f5ffffffffffff000000``SPN: Not available``Show in HPLMN: False``Hide in OPLMN: False``PLMNsel: ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff``PLMNwAcT:``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused` `OPLMNwAcT:``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused` `HPLMNAcT:``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused``  ``ffffffffff # unused` `ACC: 0008``MSISDN: Can't read file -- Length of MSISDN (136 bytes) is out of range``Administrative data: 00000002``  ``MS operation mode: normal``  ``Ciphering Indicator: disabled``SIM Service Table: ff3fffff3f003f1ff00c00c0f00000``  ``Service 1 - CHV1 disable function``  ``Service 2 - Abbreviated Dialling Numbers (ADN)``  ``Service 3 - Fixed Dialling Numbers (FDN)``  ``Service 4 - Short Message Storage (SMS)``  ``Service 5 - Advice of Charge (AoC)``  ``Service 6 - Capability Configuration Parameters (CCP)``  ``Service 7 - PLMN selector``  ``Service 8 - RFU``  ``Service 9 - MSISDN``  ``Service 10 - Extension1``  ``Service 11 - Extension2``  ``Service 12 - SMS Parameters``  ``Service 13 - Last Number Dialled (LND)``  ``Service 14 - Cell Broadcast Message Identifier``  ``Service 17 - Service Provider Name``  ``Service 18 - Service Dialling Numbers (SDN)``  ``Service 19 - Extension3``  ``Service 20 - RFU``  ``Service 21 - VGCS Group Identifier List (EFVGCS and EFVGCSS)``  ``Service 22 - VBS Group Identifier List (EFVBS and EFVBSS)``  ``Service 23 - enhanced Multi-Level Precedence and Pre-emption Service``  ``Service 24 - Automatic Answer for eMLPP``  ``Service 25 - Data download via SMS-CB``  ``Service 26 - Data download via SMS-PP``  ``Service 27 - Menu selection``  ``Service 28 - Call control``  ``Service 29 - Proactive SIM``  ``Service 30 - Cell Broadcast Message Identifier Ranges``  ``Service 31 - Barred Dialling Numbers (BDN)``  ``Service 32 - Extension4``  ``Service 33 - De-personalization Control Keys``  ``Service 34 - Co-operative Network List``  ``Service 35 - Short Message Status Reports``  ``Service 36 - Network's indication of alerting in the MS``  ``Service 37 - Mobile Originated Short Message control by SIM``  ``Service 38 - GPRS``  ``Service 49 - MExE``  ``Service 50 - Reserved and shall be ignored``  ``Service 51 - PLMN Network Name``  ``Service 52 - Operator PLMN List``  ``Service 53 - Mailbox Dialling Numbers``  ``Service 54 - Message Waiting Indication Status``  ``Service 57 - Multimedia Messaging Service (MMS)``  ``Service 58 - Extension 8``  ``Service 59 - MMS User Connectivity Parameters` `USIM Service Table: 9e6b1dfc67f6580000``  ``Service 2 - Fixed Dialling Numbers (FDN)``  ``Service 3 - Extension 2``  ``Service 4 - Service Dialling Numbers (SDN)``  ``Service 5 - Extension3``  ``Service 8 - Outgoing Call Information (OCI and OCT)``  ``Service 9 - Incoming Call Information (ICI and ICT)``  ``Service 10 - Short Message Storage (SMS)``  ``Service 12 - Short Message Service Parameters (SMSP)``  ``Service 14 - Capability Configuration Parameters 2 (CCP2)``  ``Service 15 - Cell Broadcast Message Identifier``  ``Service 17 - Group Identifier Level 1``  ``Service 19 - Service Provider Name``  ``Service 20 - User controlled PLMN selector with Access Technology``  ``Service 21 - MSISDN``  ``Service 27 - GSM Access``  ``Service 28 - Data download via SMS-PP``  ``Service 29 - Data download via SMS-CB``  ``Service 30 - Call Control by USIM``  ``Service 31 - MO-SMS Control by USIM``  ``Service 32 - RUN AT COMMAND command``  ``Service 33 - shall be set to 1``  ``Service 34 - Enabled Services Table``  ``Service 35 - APN Control List (ACL)``  ``Service 38 - GSM security context``  ``Service 39 - CPBCCH Information``  ``Service 42 - Operator controlled PLMN selector with Access Technology``  ``Service 43 - HPLMN selector with Access Technology``  ``Service 45 - PLMN Network Name``  ``Service 46 - Operator PLMN List``  ``Service 47 - Mailbox Dialling Numbers``  ``Service 48 - Message Waiting Indication Status``  ``Service 52 - Multimedia Messaging Service (MMS)``  ``Service 53 - Extension 8``  ``Service 55 - MMS User Connectivity Parameters` `Done !
sudo ./pySim-prog.py --pcsc-device=0 --type sysmoUSIM-SJS1 --pin-adm=60971626 --mcc=901 --mnc=71 --imsi=901700000026803  --iccid=8988211000000268030 --opc=6435204EA840E6BFA826A34E2AEE26DE --ki=D284801D28866964BE90D51EAFAC1555;
```

![img](https://cn0xroot.files.wordpress.com/2021/07/image-3.png?w=1024)

Pysim-shell

![img](https://cn0xroot.files.wordpress.com/2021/07/image-4.png?w=1024)

### Windows

SIM Explorer 、 USIM_Explorer、SIM Personalize tools

![img](https://cn0xroot.files.wordpress.com/2021/07/image-5.png?w=684)

![img](https://cn0xroot.files.wordpress.com/2021/07/image-6.png?w=1024)

![img](https://cn0xroot.files.wordpress.com/2021/07/sim-personalize-tools.jpg?w=1000)

### 参考：

https://irp-cdn.multiscreensite.com/db714ead/files/uploaded/SIMExplorer.pdf

https://www.sysmocom.de/manuals/sysmousim-manual.pdf

<iframe class="wp-embedded-content" sandbox="allow-scripts" security="restricted" title="《SIM卡编程》—Mr·Yang 0x13694 | RadioHub | IoT RF Hardware Hacking | 博观而约取 厚积而薄发" src="http://192.168.0.103/zh-cn/loveu/" data-secret="VRq7wA9E29" width="600" height="200" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="box-sizing: inherit; margin-bottom: 24px; margin-top: 24px; max-width: 100%;"></iframe>

https://cyberloginit.com/2018/05/14/eastcompeace-usim-exploit-and-notes-on-smart-card-pentest-for-linux.html

https://github.com/cn0xroot/BTS_Research


{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/24.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">
