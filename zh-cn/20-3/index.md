# 了解虚拟化

**此文为加密收费内容添加我微信支付后可看:**
<!--more-->
![IP定位](https://tool.lu/netcard/)

# 了解虚拟化

在[计算机技术](https://zh.wikipedia.org/wiki/计算机技术)中，**虚拟化（技术）**或**虚拟技术**（英语：Virtualization）是一种资源管理技术，是将计算机的各种[实体资源](https://zh.wikipedia.org/wiki/資源_(計算機科學))（[CPU](https://zh.wikipedia.org/wiki/CPU)、[内存](https://zh.wikipedia.org/wiki/内存)、[磁盘空间](https://zh.wikipedia.org/wiki/磁盘空间)、[网络适配器](https://zh.wikipedia.org/wiki/網路適配器)等），予以抽象、转换后呈现出来并可供分割、组合为一个或多个电脑配置环境。由此，打破实体结构间的不可切割的障碍，使用户可以比原本的配置更好的方式来应用这些电脑硬件资源。这些资源的新虚拟部分是不受现有资源的架设方式，地域或物理配置所限制。一般所指的虚拟化资源包括计算能力和资料存储。

## 目录



- [1定义](https://zh.wikipedia.org/wiki/虛擬化#定义)
- [2历史](https://zh.wikipedia.org/wiki/虛擬化#历史)
- 3虚拟化技术的类别
  - [3.1按虚拟的对象分类](https://zh.wikipedia.org/wiki/虛擬化#按虛擬的對象分類)
  - 3.2按照抽象程度分类
    - [3.2.1指令集架构等级的虚拟化（Instruction Set Architecture Level）](https://zh.wikipedia.org/wiki/虛擬化#指令集架構等級的虛擬化（Instruction_Set_Architecture_Level）)
    - [3.2.2硬件抽象层等级的虚拟化（Hardware Abstraction Level）](https://zh.wikipedia.org/wiki/虛擬化#硬體抽象層等級的虛擬化（Hardware_Abstraction_Level）)
    - [3.2.3操作系统等级的虚拟化（Operating System Level）](https://zh.wikipedia.org/wiki/虛擬化#作業系統等級的虛擬化（Operating_System_Level）)
    - [3.2.4编程语言等级的虚拟化（Programming Language Level）](https://zh.wikipedia.org/wiki/虛擬化#程式語言等級的虛擬化（Programming_Language_Level）)
    - [3.2.5函式库等级的虚拟化（Library Level）](https://zh.wikipedia.org/wiki/虛擬化#函式庫等級的虛擬化（Library_Level）)
- [4虚拟化技术的应用](https://zh.wikipedia.org/wiki/虛擬化#虚拟化技術的应用)
- [5参考文献](https://zh.wikipedia.org/wiki/虛擬化#参考文献)
- [6相关条目](https://zh.wikipedia.org/wiki/虛擬化#相关条目)
- [7外部链接](https://zh.wikipedia.org/wiki/虛擬化#外部链接)

## 定义[[编辑](https://zh.wikipedia.org/w/index.php?title=虛擬化&action=edit&section=1)]

由于目前[信息技术](https://zh.wikipedia.org/wiki/信息技术)领域的很多企业都曾在宣传中将该企业的某种技术称为**虚拟化技术**，这些技术涵盖的范围可以从[Java虚拟机](https://zh.wikipedia.org/wiki/Java虚拟机)技术到[系统管理软件](https://zh.wikipedia.org/w/index.php?title=系统管理软件&action=edit&redlink=1)，这就使得准确的界定虚拟技术变得困难。因此各种相关[学术论文](https://zh.wikipedia.org/wiki/学术论文)在谈到虚拟技术时常常提到的便是如前面所提到的那个不严格的定义。

[![img](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Virtualization.JPG/280px-Virtualization.JPG)](https://zh.wikipedia.org/wiki/File:Virtualization.JPG)

虚拟技术：计算机资源的重新分配

## 历史[[编辑](https://zh.wikipedia.org/w/index.php?title=虛擬化&action=edit&section=2)]

虚拟化技术起源于20世纪60年代末，[美国](https://zh.wikipedia.org/wiki/美国)[IBM公司](https://zh.wikipedia.org/wiki/IBM公司)当时开发了一套被称作[虚拟机监视器](https://zh.wikipedia.org/wiki/虚拟机监视器)（**V**irtual **M**achine **M**onitor）的软件，该软件作为计算机[硬件](https://zh.wikipedia.org/wiki/硬件)层上面的一层软件抽象层，将计算机硬件虚拟分割成一个或多个[虚拟机](https://zh.wikipedia.org/wiki/虚拟机)，并提供多用户对[大型计算机](https://zh.wikipedia.org/wiki/大型计算机)的同时、交互访问。

## 虚拟化技术的类别[[编辑](https://zh.wikipedia.org/w/index.php?title=虛擬化&action=edit&section=3)]

### 按虚拟的对象分类[[编辑](https://zh.wikipedia.org/w/index.php?title=虛擬化&action=edit&section=4)]

- [硬件虚拟化](https://zh.wikipedia.org/wiki/硬件虚拟化)

- 虚拟机

  （Virtual machine或VM），可以像真实机器一样运行程序的计算机的软件实现

  - 平台虚拟化

    ，将操作系统和硬件平台资源分割开

    - [完全虚拟化](https://zh.wikipedia.org/w/index.php?title=完全虚拟化&action=edit&redlink=1)，敏感指令在操作系统和硬件之间被捕捉处理，客户操作系统无需修改，所有软件都能在虚拟机中运行，例如IBM CP/CMS，[VirtualBox](https://zh.wikipedia.org/wiki/VirtualBox)，[VMware](https://zh.wikipedia.org/wiki/VMware)，[QEMU](https://zh.wikipedia.org/wiki/QEMU)
    - [硬件辅助虚拟化](https://zh.wikipedia.org/w/index.php?title=硬件辅助虚拟化&action=edit&redlink=1)，利用硬件（主要是CPU）辅助处理敏感指令以实现完全虚拟化的功能，客户操作系统无需修改，例如[VMware](https://zh.wikipedia.org/wiki/VMware)，[Xen](https://zh.wikipedia.org/wiki/Xen)，[KVM](https://zh.wikipedia.org/wiki/基于内核的虚拟机)，[Hyper-V](https://zh.wikipedia.org/wiki/Hyper-V)
    - [部分虚拟化](https://zh.wikipedia.org/w/index.php?title=部分虚拟化&action=edit&redlink=1)，针对部分应用程序进行虚拟，而不是整个操作系统
    - [准虚拟化](https://zh.wikipedia.org/w/index.php?title=準虛擬化&action=edit&redlink=1)/超虚拟化（paravirtualization），为操作系统提供与底层硬件相似但不相同的软件接口，客户操作系统需要进行修改。例如[Xen](https://zh.wikipedia.org/wiki/Xen)的半虚拟化模式，Hyper-V，[KVM](https://zh.wikipedia.org/wiki/Kernel-based_Virtual_Machine)的VirtIO。
    - [操作系统级虚拟化](https://zh.wikipedia.org/wiki/操作系统级虚拟化)，使操作系统内核支持多用户空间实体，例如Parallels Virtuozzo Containers、[OpenVZ](https://zh.wikipedia.org/wiki/OpenVZ)、[LXC](https://zh.wikipedia.org/wiki/LXC)以及类Unix系统上的chroot，Solaris上的Zone，FreeBSD上的[FreeBSD jail](https://zh.wikipedia.org/wiki/FreeBSD_jail)。

  - 应用程序虚拟化

    ，在操作系统和应用程序间创建虚拟环境

    - [便携式应用程序](https://zh.wikipedia.org/w/index.php?title=便携式应用程序&action=edit&redlink=1)，允许程序在便携式设备中运行而不用在操作系统中安装
    - [跨平台虚拟化](https://zh.wikipedia.org/w/index.php?title=跨平台虚拟化&action=edit&redlink=1)，允许针对特定CPU或者操作系统的软件不做修改就能运行在其他平台上，例如Wine
    - [虚拟设备](https://zh.wikipedia.org/wiki/虚拟设备)，运行于虚拟化平台之上，面向应用的虚拟机映像
    - [模拟器](https://zh.wikipedia.org/wiki/模拟器)

- [虚拟内存](https://zh.wikipedia.org/wiki/虚拟内存)，将不相邻的内存区，甚至硬盘空间虚拟成统一连续的内存地址

- [存储虚拟化](https://zh.wikipedia.org/wiki/存储虚拟化)，将实体存储空间（如硬盘）分隔成不同的逻辑存储空间

- 网络虚拟化

  ，将不同网络的硬件和软件资源结合成一个虚拟的整体

  - [虚拟专用网络](https://zh.wikipedia.org/wiki/虚拟专用网络)（VPN），在大型网络（通常是Internet）中的不同计算机（节点）通过加密连接而组成的虚拟网络，具有类似局域网的功能
  - [存储器虚拟化](https://zh.wikipedia.org/w/index.php?title=存储器虚拟化&action=edit&redlink=1)，将网络系统中的随机存储器聚合起来，形成统一的虚拟内存池

- [桌面虚拟化](https://zh.wikipedia.org/wiki/桌面虚拟化)，在本地计算机显示和操作远程计算机桌面，在远程计算机执行程序和储存信息

- [数据库虚拟化](https://zh.wikipedia.org/w/index.php?title=数据库虚拟化&action=edit&redlink=1)

- [软件虚拟化](https://zh.wikipedia.org/w/index.php?title=软件虚拟化&action=edit&redlink=1)

- [服务虚拟化](https://zh.wikipedia.org/w/index.php?title=服务虚拟化&action=edit&redlink=1)

- 数据虚拟化 (data virtualization), 数据虚拟化是一种统一来自多个来源的数据的方法，这样应用程序，报告工具和最终用户就可以访问数据，而不需要有关原始来源，位置和数据结构的详细信息。[[1\]](https://zh.wikipedia.org/wiki/虛擬化#cite_note-1)

### 按照抽象程度分类[[编辑](https://zh.wikipedia.org/w/index.php?title=虛擬化&action=edit&section=5)]

[![img](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/VT5levels.JPG/320px-VT5levels.JPG)](https://zh.wikipedia.org/wiki/File:VT5levels.JPG)

虚拟技术按抽象程度来分为五个层次

按照抽象程度的不同，常常把虚拟技术分为五个层次：

#### [指令集架构](https://zh.wikipedia.org/wiki/指令集架構)等级的虚拟化（Instruction Set Architecture Level）[[编辑](https://zh.wikipedia.org/w/index.php?title=虛擬化&action=edit&section=6)]

指令集架构的虚拟化是透过软件来模拟不同架构的处理器、存储器、总线、磁盘控制卡、计时器等多个I/O设备，软件会将虚拟机所发出的指令转换为本机可以操作的指令在现有的硬件上执行。这种等级的虚拟化对于模拟相同处理器架构的平台可以提供很好的兼容性，例如︰[x86架构](https://zh.wikipedia.org/wiki/X86)、[Sparc架构](https://zh.wikipedia.org/wiki/SPARC)、[Alpha架构](https://zh.wikipedia.org/wiki/DEC_Alpha)。

若主机处理器可以执行由虚拟机转换出来的指令，或是使用相同的指令集来完成任务，那就表示除了处理器以外的操作系统、I/O设备皆可不受特定平台所绑定，但由于虚拟机的每条指令都必须透过软件来模拟，所以在性能会有较大程度的耗损。

这个分类底下代表性的有[Bochs](https://zh.wikipedia.org/wiki/Bochs)以及[QEMU](https://zh.wikipedia.org/wiki/QEMU)。

#### [硬件抽象](https://zh.wikipedia.org/wiki/硬體抽象)层等级的虚拟化（Hardware Abstraction Level）[[编辑](https://zh.wikipedia.org/w/index.php?title=虛擬化&action=edit&section=7)]

硬件抽象层等级的虚拟化是由[虚拟机监控器](https://zh.wikipedia.org/wiki/Hypervisor)来隐藏不同厂商的处理器、存储器、芯片组…等特征，为这些虚拟机提供抽象与统一的虚拟平台。运行此平台的电脑称之为主体机器（Host Machine），而在此平台中运作的虚拟机称为客体机器（Guest Machine），

目前大多数x86平台的商业电脑都在使用这种虚拟化，最主要是由于现今处理器厂商提供了硬件辅助虚拟化技术，例如︰第三世代的[Intel VT-d](https://zh.wikipedia.org/wiki/X86虚拟化)、[AMD-Vi](https://zh.wikipedia.org/wiki/AMD-V)皆提供虚拟机[直接存储器访问](https://zh.wikipedia.org/wiki/直接記憶體存取)（Direct Memory Access）以及对各种PCI接口的直接访问功能（PCI passthrough）。

这个分类底下代表性的有[VMware ESXi](https://zh.wikipedia.org/wiki/VMware_ESXi)、[Hyper-V](https://zh.wikipedia.org/wiki/Hyper-V)、以及[Citrix](https://zh.wikipedia.org/wiki/思杰系统)。

#### [操作系统](https://zh.wikipedia.org/wiki/操作系统)等级的虚拟化（Operating System Level）[[编辑](https://zh.wikipedia.org/w/index.php?title=虛擬化&action=edit&section=8)]

硬件抽象层等级的虚拟化中的[全虚拟化](https://zh.wikipedia.org/wiki/全虚拟化)与操作系统底层间有非常高的隔离能力，支持不同的操作系统，安装后不须要重启主机、或修改引导程序（Boot Loader）以达到双系统的目的，风险低、维护简单。由于此等级的虚拟机可以访问底层操作系统，因此用户必须花费大量的时间来安装与设置虚拟机，接着才能开始评估或测试所需运作的软件，这些设置包含了操作系统的安装、安全性或兼容性软件的更新、网络、系统调校…等，如果所需的操作系统与底层操作系统相同，那么其实它们所作的跟实际上安装一台实体机器没有什么区别。

操作系统内核虚拟化可以最大限度的减少新增虚拟机的所需，在这个等级的虚拟机共享实体主机上的硬件以及操作系统，呈现彼此独立且隔离的虚拟机环境。

应用软件的环境是由操作系统、库、相依性软件、特定于系统的数据结构或文件系统，例如︰[NTFS](https://zh.wikipedia.org/wiki/NTFS)或[Ext4](https://zh.wikipedia.org/wiki/Ext4)，以及其他环境设置所组成。如果这些都保持不变，应用软件很难发现与真实环境的区别。这是所有操作系统等级虚拟化的关键想法。

这个分类底下代表性的有[Docker](https://zh.wikipedia.org/wiki/Docker)、[LXC](https://zh.wikipedia.org/wiki/LXC)和[OpenVZ](https://zh.wikipedia.org/wiki/OpenVZ)。

#### [编程语言](https://zh.wikipedia.org/wiki/编程语言)等级的虚拟化（Programming Language Level）[[编辑](https://zh.wikipedia.org/w/index.php?title=虛擬化&action=edit&section=9)]

传统电脑是由[指令集架构](https://zh.wikipedia.org/wiki/指令集架構)所驱动的一种机械语言，硬件的操作由特殊的I/O指令处理，也可以透过区块映射（Mapping）来操作存储器，此等级的虚拟化会将高级语言转译成一种名为[字节码](https://zh.wikipedia.org/wiki/字节码)的语言，透过虚拟机转译成为可以直接执行的命令。跨操作系统平台、跨语言皆为其优点。

这个分类底下代表性的有[Oracle Java](https://zh.wikipedia.org/wiki/Java)、[Microsoft . NET](https://zh.wikipedia.org/wiki/.NET框架)、[Parrot](https://zh.wikipedia.org/wiki/Parrot虚拟机)。

#### [库](https://zh.wikipedia.org/wiki/函式庫)等级的虚拟化（Library Level）[[编辑](https://zh.wikipedia.org/w/index.php?title=虛擬化&action=edit&section=10)]

大部分的应用程序都是使用由许多库组成的[API](https://zh.wikipedia.org/wiki/应用程序接口)（Application Programming Interface）来设计，使用动态链接的方式用于隐藏操作系统的细节，目的是提供程序员更简单的工作。这也产生了一种新的虚拟化方式，使用不同的API与不同操作系统底层的[ABI](https://zh.wikipedia.org/wiki/应用二进制接口)（Application Binary Interface）来进行模拟的工作。

这个分类底下代表性的有[Wine](https://zh.wikipedia.org/wiki/Wine)以及[WSL](https://zh.wikipedia.org/wiki/适用于_Linux_的_Windows_子系统)（Windows Subsystem for Linux）。

## 虚拟化技术的应用[[编辑](https://zh.wikipedia.org/w/index.php?title=虛擬化&action=edit&section=11)]

- [服务器](https://zh.wikipedia.org/wiki/服务器)集成
- [沙盒](https://zh.wikipedia.org/wiki/沙盒)（Sandboxing）
- 多运行环境
- 多操作系统
- 测试和性能监视
- 应用集成
- 虚拟硬件
- 软件移植
- 系统可管理性
- 测试/[质量保证](https://zh.wikipedia.org/wiki/质量保证)

## 参考文献[[编辑](https://zh.wikipedia.org/w/index.php?title=虛擬化&action=edit&section=12)]

- Susanta Nanda, Tzi-cker Chiueh, "[A Survey on Virtualization Technologies](https://web.archive.org/web/20160615070031/http://www.ecsl.cs.sunysb.edu/tr/TR179.pdf)";
- R.P.Goldberg, "Survey of Virtual Machine Research", Computer, June 1974, pp.34-45;
- G.J.Popek, R.P.Goldberg, "Formal Requirements for Virtualizable Third Generation Architectures," Comm.ACM, Vol.17, Nr.7, July 1974, pp.412-421;
- Joba Yeh (2018). ["Research on Big Data Analysis Platform and Services"](https://hdl.handle.net/11296/m9d8qw), NDLTD in Taiwan, August 2018, pp.16-22.

## 相关条目[[编辑](https://zh.wikipedia.org/w/index.php?title=虛擬化&action=edit&section=13)]

- [虚拟化发展时间线](https://zh.wikipedia.org/w/index.php?title=虚拟化发展时间线&action=edit&redlink=1)
- 硬件虚拟化
  - [x86虚拟化](https://zh.wikipedia.org/wiki/X86虚拟化)
- 虚拟机
  - [虚拟机监视器](https://zh.wikipedia.org/wiki/虚拟机监视器)
  - [VMware](https://zh.wikipedia.org/wiki/VMware)
  - [Hyper-V](https://zh.wikipedia.org/wiki/Hyper-V)
  - [KVM](https://zh.wikipedia.org/wiki/基于内核的虚拟机)
  - [VirtualBox](https://zh.wikipedia.org/wiki/VirtualBox)
  - [Virtual PC](https://zh.wikipedia.org/wiki/Virtual_PC)
- [软件虚拟化](https://zh.wikipedia.org/w/index.php?title=软件虚拟化&action=edit&redlink=1)
- [服务虚拟化](https://zh.wikipedia.org/w/index.php?title=服务虚拟化&action=edit&redlink=1)
- [虚拟设备](https://zh.wikipedia.org/wiki/虚拟设备)
- [Docker](https://zh.wikipedia.org/wiki/Docker)

## 外部链接[[编辑](https://zh.wikipedia.org/w/index.php?title=虛擬化&action=edit&section=14)]

- [进入美妙的虚拟世界—虚拟系统探秘](http://www.xuniji.com/article/view.asp?id=338)[[永久失效链接](https://zh.wikipedia.org/wiki/Wikipedia:失效链接)]
- [An introduction to Virtualization](http://www.kernelthread.com/publications/virtualization/) （[页面存档备份](https://web.archive.org/web/20200504153848/http://www.kernelthread.com/publications/virtualization/)，存于[互联网档案馆](https://zh.wikipedia.org/wiki/互联网档案馆)）
- [VMware虚拟技术白皮书（英文）](http://www.vmware.com/pdf/virtualization.pdf#search="hypervisor VMware virtualization layer") （[页面存档备份](https://web.archive.org/web/20210427133749/http://www.vmware.com/pdf/virtualization.pdf#search="hypervisor VMware virtualization layer")，存于[互联网档案馆](https://zh.wikipedia.org/wiki/互联网档案馆)）

[[隐藏](https://zh.wikipedia.org/wiki/虛擬化#)][查](https://zh.wikipedia.org/wiki/Template:虛擬化技術)[论](https://zh.wikipedia.org/w/index.php?title=Template_talk:虛擬化技術&action=edit&redlink=1)[编](https://zh.wikipedia.org/w/index.php?title=Template:虛擬化技術&action=edit)虚拟化技术[平台虚拟化软件比较](https://zh.wikipedia.org/w/index.php?title=平台虛擬化軟體比較&action=edit&redlink=1)[硬件虚拟化](https://zh.wikipedia.org/wiki/硬件虚拟化) （[Hypervisor](https://zh.wikipedia.org/wiki/Hypervisor)）原生虚拟化[Adeos](https://zh.wikipedia.org/w/index.php?title=Adeos&action=edit&redlink=1)[CP/CMS](https://zh.wikipedia.org/w/index.php?title=CP/CMS&action=edit&redlink=1)[Hyper-V](https://zh.wikipedia.org/wiki/Hyper-V)[KVM](https://zh.wikipedia.org/wiki/基于内核的虚拟机) [Red Hat Enterprise Virtualization](https://zh.wikipedia.org/w/index.php?title=Red_Hat_Enterprise_Virtualization&action=edit&redlink=1)[LDoms / Oracle VM Server for SPARC](https://zh.wikipedia.org/w/index.php?title=SPARC平台Oracle_VM_Server&action=edit&redlink=1)[LynxSecure](https://zh.wikipedia.org/w/index.php?title=LynxSecure&action=edit&redlink=1)[SIMMON](https://zh.wikipedia.org/w/index.php?title=SIMMON&action=edit&redlink=1)[VMware ESX](https://zh.wikipedia.org/w/index.php?title=VMware_ESX&action=edit&redlink=1) [VMware vSphere](https://zh.wikipedia.org/w/index.php?title=VMware_vSphere&action=edit&redlink=1)[VCloud Air](https://zh.wikipedia.org/wiki/VCloud_Air)[VMware Infrastructure](https://zh.wikipedia.org/w/index.php?title=VMware_Infrastructure&action=edit&redlink=1)[Xen](https://zh.wikipedia.org/wiki/Xen) [Oracle VM](https://zh.wikipedia.org/wiki/Oracle_VM)[XenClient](https://zh.wikipedia.org/w/index.php?title=XenClient&action=edit&redlink=1)[XtratuM](https://zh.wikipedia.org/w/index.php?title=XtratuM&action=edit&redlink=1)[z/VM](https://zh.wikipedia.org/w/index.php?title=Z/VM&action=edit&redlink=1)需要宿主操作系统专用[Basilisk II](https://zh.wikipedia.org/w/index.php?title=Basilisk_II&action=edit&redlink=1)[bhyve](https://zh.wikipedia.org/w/index.php?title=Bhyve&action=edit&redlink=1)[Bochs](https://zh.wikipedia.org/wiki/Bochs)[Cooperative Linux](https://zh.wikipedia.org/wiki/Cooperative_Linux)[DOSBox](https://zh.wikipedia.org/wiki/DOSBox)[DOSEMU](https://zh.wikipedia.org/w/index.php?title=DOSEMU&action=edit&redlink=1)[L4Linux](https://zh.wikipedia.org/w/index.php?title=L4Linux&action=edit&redlink=1)[Mac-on-Linux](https://zh.wikipedia.org/w/index.php?title=Mac-on-Linux&action=edit&redlink=1)[Mac-on-Mac](https://zh.wikipedia.org/w/index.php?title=Mac-on-Mac&action=edit&redlink=1)[PCem](https://zh.wikipedia.org/w/index.php?title=PCem&action=edit&redlink=1)[SheepShaver](https://zh.wikipedia.org/wiki/SheepShaver)[SIMH](https://zh.wikipedia.org/w/index.php?title=SIMH&action=edit&redlink=1)[Windows on Windows](https://zh.wikipedia.org/wiki/Windows_on_Windows) [DOS虚拟机](https://zh.wikipedia.org/w/index.php?title=DOS虚拟机&action=edit&redlink=1)[Win4Lin](https://zh.wikipedia.org/w/index.php?title=Win4Lin&action=edit&redlink=1)独立[Microsoft Virtual Server](https://zh.wikipedia.org/w/index.php?title=Microsoft_Virtual_Server&action=edit&redlink=1)[Parallels Workstation](https://zh.wikipedia.org/w/index.php?title=Parallels_Workstation&action=edit&redlink=1)[Parallels Desktop](https://zh.wikipedia.org/wiki/Parallels_Desktop_(Mac))[Parallels Server](https://zh.wikipedia.org/w/index.php?title=Parallels_Server_(Mac)&action=edit&redlink=1)[PearPC](https://zh.wikipedia.org/wiki/PearPC)[QEMU](https://zh.wikipedia.org/wiki/QEMU)[VirtualBox](https://zh.wikipedia.org/wiki/VirtualBox)[Virtual Iron](https://zh.wikipedia.org/w/index.php?title=Virtual_Iron&action=edit&redlink=1)[VMware Fusion](https://zh.wikipedia.org/wiki/VMware_Fusion)[VMware Workstation Player](https://zh.wikipedia.org/wiki/VMware_Workstation_Player)[VMware Server](https://zh.wikipedia.org/wiki/VMware_Server)[VMware Workstation](https://zh.wikipedia.org/wiki/VMware_Workstation)[Windows Virtual PC](https://zh.wikipedia.org/wiki/Windows_Virtual_PC)工具[Ganeti](https://zh.wikipedia.org/w/index.php?title=Ganeti&action=edit&redlink=1)[oVirt](https://zh.wikipedia.org/w/index.php?title=OVirt&action=edit&redlink=1)[Virtual Machine Manager](https://zh.wikipedia.org/wiki/Virtual_Machine_Manager)[操作系统层虚拟化](https://zh.wikipedia.org/wiki/作業系統層虛擬化)基于[Cgroups](https://zh.wikipedia.org/wiki/Cgroups) [Container Linux](https://zh.wikipedia.org/wiki/Container_Linux)[lmctfy](https://zh.wikipedia.org/w/index.php?title=Lmctfy&action=edit&redlink=1)[Linux-VServer](https://zh.wikipedia.org/w/index.php?title=Linux-VServer&action=edit&redlink=1)[LXC](https://zh.wikipedia.org/wiki/LXC)[Docker](https://zh.wikipedia.org/wiki/Docker)[OpenVZ](https://zh.wikipedia.org/wiki/OpenVZ) [Virtuozzo](https://zh.wikipedia.org/w/index.php?title=Virtuozzo&action=edit&redlink=1)[FreeBSD jail](https://zh.wikipedia.org/wiki/FreeBSD_jail)[iCore Virtual Accounts](https://zh.wikipedia.org/w/index.php?title=ICore_Virtual_Accounts&action=edit&redlink=1)[Kubernetes](https://zh.wikipedia.org/wiki/Kubernetes)[Linux namespaces](https://zh.wikipedia.org/w/index.php?title=Linux_namespaces&action=edit&redlink=1)[Solaris Containers](https://zh.wikipedia.org/wiki/Solaris_Containers)[Workload Partitions](https://zh.wikipedia.org/w/index.php?title=Workload_Partitions&action=edit&redlink=1)[桌面虚拟化](https://zh.wikipedia.org/wiki/桌面虚拟化)[Citrix XenApp](https://zh.wikipedia.org/w/index.php?title=思杰系統_XenApp&action=edit&redlink=1)[思杰系统](https://zh.wikipedia.org/wiki/思杰系统)[远程桌面](https://zh.wikipedia.org/wiki/遠端桌面)[VMware Horizon](https://zh.wikipedia.org/wiki/VMware_Horizon)[Ulteo](https://zh.wikipedia.org/wiki/Ulteo)[应用程序虚拟化](https://zh.wikipedia.org/w/index.php?title=應用程式虛擬化&action=edit&redlink=1) （[沙盒](https://zh.wikipedia.org/wiki/沙盒_(電腦安全))）[Ceedo](https://zh.wikipedia.org/w/index.php?title=Ceedo&action=edit&redlink=1)[Citrix XenApp](https://zh.wikipedia.org/w/index.php?title=思杰系統_XenApp&action=edit&redlink=1)[Dalvik](https://zh.wikipedia.org/wiki/Dalvik虚拟机)[InstallFree](https://zh.wikipedia.org/w/index.php?title=InstallFree&action=edit&redlink=1)[微软App-V](https://zh.wikipedia.org/w/index.php?title=微軟App-V&action=edit&redlink=1)[远程桌面](https://zh.wikipedia.org/wiki/遠端桌面)[Spoon](https://zh.wikipedia.org/w/index.php?title=Spoon_(軟體)&action=edit&redlink=1)[Symantec Workspace Virtualization](https://zh.wikipedia.org/w/index.php?title=Symantec_Workspace_Virtualization&action=edit&redlink=1)[VMware ThinApp](https://zh.wikipedia.org/w/index.php?title=VMware_ThinApp&action=edit&redlink=1)[ZeroVM](https://zh.wikipedia.org/w/index.php?title=ZeroVM&action=edit&redlink=1)[网络虚拟化](https://zh.wikipedia.org/w/index.php?title=网络虚拟化&action=edit&redlink=1)[DOVE](https://zh.wikipedia.org/w/index.php?title=Distributed_Overlay_Virtual_Ethernet&action=edit&redlink=1)[Network Virtualization using Generic Routing Encapsulation‎](https://zh.wikipedia.org/w/index.php?title=Network_Virtualization_using_Generic_Routing_Encapsulation&action=edit&redlink=1)[Open vSwitch](https://zh.wikipedia.org/w/index.php?title=Open_vSwitch&action=edit&redlink=1)[Virtual security switch](https://zh.wikipedia.org/w/index.php?title=Virtual_security_switch&action=edit&redlink=1)[虚拟局域网扩展](https://zh.wikipedia.org/wiki/虛擬局域網擴展) (VXLAN)参见: [模拟器软件列表](https://zh.wikipedia.org/w/index.php?title=模擬器軟體列表&action=edit&redlink=1)‎**[^](https://zh.wikipedia.org/wiki/虛擬化#cite_ref-1)** [Data Virtualization – dataWerks](https://web.archive.org/web/20180410201808/https://www.datawerks.com/data-virtualization/). www.datawerks.com. [2018-04-12]. （[原始内容](https://www.datawerks.com/data-virtualization/)存档于2018-04-10） **（美国英语）**.

# [虚拟化 - xen、kvm、vmware、hyper-v等虚拟化技术的比较](https://www.cnblogs.com/sammyliu/articles/4390371.html)

 

## 1. 从费用上比较

http://www.path8.net/tn/archives/4994

收费和免费：

- xen 和 kvm 都是开源免费的虚拟化软件。
- vmware 是付费的虚拟化软件。
- hyper-v 比较特别，是微软windows 2008 R2附带的虚拟化组件，如果你买了足够的授权，hyper-v（包括hyper-v 2008 core）都可以免费使用。

因此：

- 如果是vmware或hyper-v虚拟windows系统，不管是虚拟化软件本身，还是其中的子系统，都要支付许可费用。
- 如果是vmware或hyper-v虚拟linux，虚拟化软件本身要支付许可费用，子系统可以用linux来节省成本。
- 如果是xen或kvm虚拟windows，其中的子系统要支付许可费用。
- 如果是xen或kvm虚拟linux，那么虚拟化软件本身和其中的子系统无需产生任何费用。

结论：

- **虚拟 windows**，在有授权的情况下，建议使用 hyper-v；在没有授权的情况下，虚拟windows，建议使用 KVM
- **虚拟 linux**，建议使用 xen，如考虑到需要降低管理维护和学习成本，建议使用kvm。

## 2. 从性能上比较

虚拟windows，如果都能得到厂商的支持，那么，性能优化可以不用担心。这几款软件全都能达到主系统至少80%以上的性能（磁 盘，CPU，网络，内存），这时建议使用 hyper-v 来虚拟windows，微软自身的产品，虚拟windows是绝对有优势的。

### 2.1 I/O 比较

![img](http://dtrace.org/blogs/brendan/files/2013/01/virtualization_xen_kvm-600.png)

[（来自 http://blog.csdn.net/babyfacer/article/details/21107513）](http://www.cnblogs.com/（来自 http:/blog.csdn.net/babyfacer/article/details/21107513）)

如果是虚拟 linux，建议：

- 首先使用 xen，支持linux的半虚拟化，可以直接使用主系统的cpu和磁盘及网络资源，达到较少的虚拟化调度操作，可以达到非常高的性能，但xen操作复杂，维护成本较高。
- 其次我们推荐kvm来虚拟linux，linux本身支持kvm的virtio技术，可以达到少量的虚拟化调度操 作，得到较高的系统性能。
- 不推荐使用hyper-v来虚拟linux，太多的不兼容性导致linux基本无法在hyper-v上跑。

### 2.2 性能测试报告

http://linux.cn/article-3496-1.html

本测试使用裸机作为虚拟服务测试的基准设备。在不跑虚拟机的情况下，两台裸机的性能偏差不会大于0.51%

在几乎所有测试中，KVM 的性能相比宿主机而言下降了1.5%以内，只有两项测试例外。第一个是 7-zip 压缩，比宿主机慢了 2.79%。第二个就奇怪了，我们搭了一个邮件服务器，用 PostMark 测试其性能，结果表明 KVM 竟比宿主机快了4.11%。然后我在两台服务器中重新跑了几遍 PostMark 测试，结果性能差异基本不变，浮动都在最初测试结果的1%以内。由于我对 virtio 的内部机制没有很深的理解，我只能在以后再对这个怪现象进行进一步了解。

Xen 的性能相对宿主机而言差异就比较大了。有3项测试性能下降在2.5%以内，剩下的性能下降率都是 KVM 的2～4倍。PostMark 测试的性能比 KVM 慢了14.41%，这结果令我大吃一惊。重新跑了下测试，性能差还是几乎不变，浮动都在最初结果的2%以内。KVM 表现最好的 CPU 测试：MAFFT 对齐测试，是 Xen 表现倒数第二差的。

现在奉上一个简短得总结表：

|                            | **Best Value** | **Bare Metal** | **KVM**   | **Xen** |
| -------------------------- | -------------- | -------------- | --------- | ------- |
| C-Ray                      | lower          | 35.35          | 35.66     | 36.13   |
| POV-Ray                    | lower          | 230.02         | 232.44    | 235.89  |
| Smallpt                    | lower          | 160            | 162       | 167.5   |
| John the Ripper (Blowfish) | higher         | 3026           | 2991.5    | 2856    |
| John the Ripper (DES)      | higher         | 7374833.5      | 7271833.5 | 6911167 |
| John the Ripper (MD5)      | higher         | 49548          | 48899.5   | 46653.5 |
| OpenSSL                    | higher         | 397.68         | 393.95    | 388.25  |
| 7-Zip                      | higher         | 12467.5        | 12129.5   | 11879   |
| Timed MAFFT Alignment      | lower          | 7.78           | 7.795     | 8.42    |
| CLOMP                      | higher         | 3.3            | 3.285     | 3.125   |
| PostMark                   | higher         | 3667           | 3824      | 3205    |

如果需要完整数据，请查看[Goole Docs 电子表格](https://docs.google.com/spreadsheets/d/1kmudbOjCDUgfw76b8qP2GqNqF1ddlTOKyOjc0GmNOIE/edit?usp=sharing)。

### 结论

基于上面的测试环境，KVM 的性能损耗几乎都在2％以内，Xen 则在十多项测试中有3项损耗在2.5％以内，而其他几项损耗都在5~7%之间。虽然 KVM 在 PostMark 测试中性能表现优异，但这是众多测试中仅有的一项 I/O 测试，如果想证明 KVM 确实在 I/O 处理方面很强悍，就需要更多测试。

### 2.3 更多的测试报告

http://www.phoronix.com/scan.php?page=article&item=intel_haswell_virtualization&num=1

https://blog.xenproject.org/2011/11/29/baremetal-vs-xen-vs-kvm-redux/

http://www.infoq.com/cn/news/2014/09/kvm-vs-xen

http://flymanhi.blog.51cto.com/1011558/1112363

在经过综合测试后，不论是单个parallel还是两个parallel，xen的跑分测试都比kvm要好。

http://blog.chinaunix.net/uid-20662820-id-4514947.html

三种虚拟化性能比较 LXC>>KVM>>XEN （由于LXC使用cgroup机制，其性能损坏基本为0。）
三种虚拟化隔离比较 XEN>>KVM>>LXC （LXC只能虚拟化linux）
三种虚拟化内存利用率 LXC>>KVM>>XEN （由于LXC共用内核，内存利用率最高；其他两种方案每个虚机都需要单独的操作系统占用一部分内存空间。）

http://www.os-easy.com/News/2014-10/526.html

从运算性能和磁盘负载角度来说Linux KVM不失为最快的虚拟化解决方案。相比之下，VirtualBox在测试中排名第二，而Xen在HVM模式下的虚拟化表现最差。

**综上：比较有意思的是这些测试报告的结论都不太一样甚至是相反的。**

## 3. 产方支持

如果以上产品我们不打算买厂商支持，其中vmware和hyper-v，是不建议使用的，主要是授权问题。

这时就剩下kvm和xen了，如果虚拟windows，建议使用 kvm，我们可以从 redhat那里免费拿到针对 windows 优化过的磁盘和网络的驱动 程序，可以达到较高的性能（几乎与hyper-v性能持平）。

而xen的 windows 优化驱动不是那么容易就能拿到的（由于redhat以后不支持 xen了，看看novell是否放水了，呵呵，就开放程度上来讲，redhat要好于novell）。

## 4. 特性比较

http://blog.csdn.net/babyfacer/article/details/21107513



| Attribute                     | Zones                                                        | Xen                                         | KVM                                                          |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------- | ------------------------------------------------------------ |
| CPU Performance               | high                                                         | high (with CPU support)                     | high (with CPU support)                                      |
| CPU Allocation                | flexible (FSS + “bursting”)                                  | fixed to VCPU limit                         | fixed to VCPU limit                                          |
| I/O Throughput                | high (no intrinsic overhead)                                 | low or medium (with paravirt)               | low or medium (with paravirt)                                |
| I/O Latency                   | low (no intrinsic overhead)                                  | some (I/O proxy overhead)                   | some (I/O proxy overhead)                                    |
| Memory Access Overhead        | none                                                         | some (EPT/NPT or shadow page tables)        | some (EPT/NPT or shadow page tables)                         |
| Memory Loss                   | none                                                         | some (extra kernels; page tables)           | some (extra kernels; page tables)                            |
| Memory Allocation             | flexible (unused guest memory used for file system cache)    | fixed (and possible double-caching)         | fixed (and possible double-caching)                          |
| Resource Controls             | many (depends on OS)                                         | some (depends on hypervisor)                | most (OS + hypervisor)                                       |
| Observability: from the host  | highest (see everything)                                     | low (resource usage, hypervisor statistics) | medium (resource usage, hypervisor statistics, OS inspection of hypervisor) |
| Observability: from the guest | medium (see everything permitted, incl. some physical resource stats) | low (guest only)                            | low (guest only)                                             |
| Hypervisor Complexity         | low (OS partitions)                                          | high (complex hypervisor)                   | medium                                                       |
| Different OS Guests           | usually no (sometimes possible with syscall translation)     | yes                                         | yes                                                          |

## 更多的特性比较：

http://en.wikipedia.org/wiki/Operating-system-level_virtualization#Implementations

| Mechanism                                                    | Operating system                                             | License                                                      | Available since/between                                      | Features                                                     |                                                              |                                                              |                                                              |                                                              |                          |                                                              |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| File system isolation                                        | [Copy on Write](http://en.wikipedia.org/wiki/Copy-on-write)  | Disk quotas                                                  | I/O rate limiting                                            | Memory limits                                                | CPU quotas                                                   | Network isolation                                            | Nested virtualization                                        | Partition checkpointing and live migration                   | Root privilege isolation |                                                              |                                                              |                                                              |                                                              |
| [chroot](http://en.wikipedia.org/wiki/Chroot)                | most [UNIX-like](http://en.wikipedia.org/wiki/UNIX-like)operating systems | varies by operating system                                   | 1982                                                         | Partial[[5\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-root-escape-5) | No                                                           | No                                                           | No                                                           | No                                                           | No                       | No                                                           | Yes                                                          | No                                                           | No                                                           |
| [Docker](http://en.wikipedia.org/wiki/Docker_(software))     | [Linux](http://en.wikipedia.org/wiki/Linux)[[6\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-6) | [Apache License 2.0](http://en.wikipedia.org/wiki/Apache_License) | 2013                                                         | Yes                                                          | Yes                                                          | Not directly                                                 | Not directly                                                 | Yes                                                          | Yes                      | Yes                                                          | Yes                                                          | No                                                           | No                                                           |
| [Linux-VServer](http://en.wikipedia.org/wiki/Linux-VServer) (security context) | [Linux](http://en.wikipedia.org/wiki/Linux)                  | [GNU GPLv2](http://en.wikipedia.org/wiki/GNU_General_Public_License) | 2001                                                         | Yes                                                          | Yes                                                          | Yes                                                          | Yes[[7\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-cfq-7) | Yes                                                          | Yes                      | Partial[[8\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-vserver-net-8) | ***?***                                                      | No                                                           | Partial[[9\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-linux-vserver-paper-9) |
| [lmctfy](http://en.wikipedia.org/wiki/Lmctfy)                | [Linux](http://en.wikipedia.org/wiki/Linux)                  | [Apache License 2.0](http://en.wikipedia.org/wiki/Apache_License) | 2013                                                         | Yes                                                          | Yes                                                          | Yes                                                          | Yes[[7\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-cfq-7) | Yes                                                          | Yes                      | Partial[[8\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-vserver-net-8) | ***?***                                                      | No                                                           | Partial[[9\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-linux-vserver-paper-9) |
| [LXC](http://en.wikipedia.org/wiki/LXC)                      | [Linux](http://en.wikipedia.org/wiki/Linux)                  | [GNU GPLv2](http://en.wikipedia.org/wiki/GNU_General_Public_License) | 2008                                                         | Yes[[10\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-lxc-1-0-security-features.2F-10) | Partial. Yes with[Btrfs](http://en.wikipedia.org/wiki/Btrfs). | Partial. Yes with[LVM](http://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux)) or[Disk quota](http://en.wikipedia.org/wiki/Disk_quota). | Yes                                                          | Yes                                                          | Yes                      | Yes                                                          | Yes                                                          | No                                                           | Yes[[10\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-lxc-1-0-security-features.2F-10) |
| [OpenVZ](http://en.wikipedia.org/wiki/OpenVZ)                | [Linux](http://en.wikipedia.org/wiki/Linux)                  | [GNU GPLv2](http://en.wikipedia.org/wiki/GNU_General_Public_License) | 2005                                                         | Yes                                                          | No                                                           | Yes                                                          | Yes[[11\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-ioprio-11) | Yes                                                          | Yes                      | Yes[[12\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-vn-12) | No                                                           | Yes                                                          | Yes[[13\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-openvz-wiki-container-13) |
| [Virtuozzo](http://en.wikipedia.org/wiki/Virtuozzo)          | [Linux](http://en.wikipedia.org/wiki/Linux),[Windows](http://en.wikipedia.org/wiki/Windows_(operating_system)) | [Proprietary](http://en.wikipedia.org/wiki/Proprietary_software) | July 2000[[14\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-aspcomplete-14) | Yes                                                          | Yes                                                          | Yes                                                          | Yes[[15\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-vz4-15) | Yes                                                          | Yes                      | Yes[[12\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-vn-12) | ***?***                                                      | Yes                                                          | Yes                                                          |
| [Solaris Containers](http://en.wikipedia.org/wiki/Solaris_Containers)(Zones) | [Solaris](http://en.wikipedia.org/wiki/Solaris_Operating_System),[OpenSolaris](http://en.wikipedia.org/wiki/Opensolaris),[Illumos](http://en.wikipedia.org/wiki/Illumos) | [CDDL](http://en.wikipedia.org/wiki/CDDL)                    | February 2004                                                | Yes                                                          | Yes (ZFS)                                                    | Yes                                                          | Partial. Yes with Illumos.[[16\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-16) | Yes                                                          | Yes                      | Yes[[17\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-crossbow-17) | Partial. Only when top level is a KVM zone (Illumos) or a kz zone (Oracle) | No[[18\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-coldmig-18) | Yes[[19\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-solaris-E29024-19) |
| [FreeBSD Jail](http://en.wikipedia.org/wiki/FreeBSD_Jail)    | [FreeBSD](http://en.wikipedia.org/wiki/FreeBSD)              | [BSD License](http://en.wikipedia.org/wiki/BSD_License)      | 1998                                                         | Yes                                                          | Yes (ZFS)                                                    | Yes[[20\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-diskquota-20) | No                                                           | Yes[[21\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-rctl-21) | Yes                      | Yes                                                          | Yes                                                          | No                                                           | Yes[[22\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-22) |
| [sysjail](http://en.wikipedia.org/wiki/Sysjail)              | [OpenBSD](http://en.wikipedia.org/wiki/OpenBSD),[NetBSD](http://en.wikipedia.org/wiki/NetBSD) | [BSD License](http://en.wikipedia.org/wiki/BSD_License)      | No longer supported, as of March 3, 2009                     | Yes                                                          | No                                                           | No                                                           | No                                                           | No                                                           | No                       | Yes                                                          | No                                                           | No                                                           | ?                                                            |
| [WPARs](http://en.wikipedia.org/wiki/Workload_Partitions)    | [AIX](http://en.wikipedia.org/wiki/AIX)                      | [Proprietary](http://en.wikipedia.org/wiki/Proprietary_software) | 2007                                                         | Yes                                                          | No                                                           | Yes                                                          | Yes                                                          | Yes                                                          | Yes                      | Yes[[23\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-WPAR_netisolation-23) | No                                                           | Yes[[24\]](http://en.wikipedia.org/wiki/Operating-system-level_virtualization#cite_note-WPAR.2FLPAR_mobility-24) | ?                                                            |
| [HP-UX Containers (SRP)](http://www.hp.com/go/containers)    | [HPUX](http://en.wikipedia.org/wiki/HPUX)                    | [Proprietary](http://en.wikipedia.org/wiki/Proprietary_software) | 2007                                                         | Yes                                                          | No                                                           | Partial. Yes with logical volumes                            | Yes                                                          | Yes                                                          | Yes                      | Yes                                                          | ***?***                                                      | Yes                                                          | ?                                                            |
| [iCore Virtual Accounts](http://en.wikipedia.org/wiki/ICore_Virtual_Accounts) | [Windows XP](http://en.wikipedia.org/wiki/Windows_XP)        | [Proprietary/Freeware](http://en.wikipedia.org/wiki/Proprietary_software) | 2008                                                         | Yes                                                          | No                                                           | Yes                                                          | No                                                           | No                                                           | No                       | No                                                           | ***?***                                                      | No                                                           | ?                                                            |
| [Sandboxie](http://en.wikipedia.org/wiki/Sandboxie)          | [Windows](http://en.wikipedia.org/wiki/Windows_(operating_system)) | [Proprietary/Shareware](http://en.wikipedia.org/wiki/Proprietary_software) | 2004                                                         | Yes                                                          | Yes                                                          | Partial                                                      | No                                                           | No                                                           | No                       | Partial                                                      | Yes                                                          | No                                                           | Yes                                                          |

##  

# 虚拟化技术比较:OpenStack、KVM、VMWare和Docker

一、虚拟化

1.什么是虚拟化

虚拟化，是指通过虚拟化技术将一台计算机虚拟为多台逻辑计算机。在一台计算机上同时运行多个逻辑计算机，每个逻辑计算机可运行不同的操作系统，并且应用程序都可以在相互独立的空间内运行而互不影响，从而显著提高计算机的工作效率。

2.什么是虚拟化技术

虚拟化技术是一套解决方案。完整的情况需要CPU、主板芯片组、BIOS和软件的支持，例如VMM软件或者某些操作系统本身。即使只是CPU支持虚拟化技术，在配合VMM的软件情况下，也会比完全不支持虚拟化技术的系统有更好的性能。

3.虚拟化的类型

全虚拟化（Full Virtualization)
全虚拟化也成为原始虚拟化技术，该模型使用虚拟机协调guest操作系统和原始硬件，VMM在guest操作系统和裸硬件之间用于工作协调，一些受保护指令必须由Hypervisor（虚拟机管理程序）来捕获处理。全虚拟化的运行速度要快于硬件模拟，但是性能方面不如裸机。
技术分享图片

半虚拟化（Para Virtualization）
半虚拟化是另一种类似于全虚拟化的技术，它使用Hypervisor分享存取底层的硬件，但是它的guest操作系统集成了虚拟化方面的代码。该方法无需重新编译或引起陷阱，因为操作系统自身能够与虚拟进程进行很好的协作。半虚拟化需要guest操作系统做一些修改，使guest操作系统意识到自己是处于虚拟化环境的，但是半虚拟化提供了与原操作系统相近的性能。
技术分享图片

二、OpenStack与KVM、VMWare

1.OpenStack：开源管理项目
OpenStack是一个旨在为公共及私有云的建设与管理提供软件的开源项目。它不是一个软件，而是由几个主要的组件组合起来完成一些具体的工作。OpenStack由以下五个相对独立的组件构成：

OpenStack Compute(Nova)是一套控制器，用于虚拟机计算或使用群组启动虚拟机实例;
OpenStack镜像服务(Glance)是一套虚拟机镜像查找及检索系统，实现虚拟机镜像管理;
OpenStack对象存储(Swift)是一套用于在大规模可扩展系统中通过内置冗余及容错机制，以对象为单位的存储系统，类似于Amazon S3;
OpenStack Keystone，用于用户身份服务与资源管理以及
OpenStack Horizon，基于Django的仪表板接口，是个图形化管理前端。
这个起初由美国国家航空航天局和Rackspace在2010年末合作研发的开源项目，旨在打造易于部署、功能丰富且易于扩展的云计算平台。OpenStack项目的首要任务是简化云的部署过程并为其带来良好的可扩展性，企图成为数据中心的操作系统，即云操作系统。
2.KVM(Kernel-based Virtual Machine)基于内核的虚拟机
KVM是集成到Linux内核的Hypervisor，是X86架构且硬件支持虚拟化技术（Intel VT或AMD-V）的Linux的全虚拟化解决方案。它是Linux的一个很小的模块，利用Linux做大量的事，如任务调度、内存管理与硬件设备交互等。
KVM最大的好处就在于它是与Linux内核集成的，所以速度很快。
技术分享图片

3.VMWare (Virtual Machine ware)
VMWare (Virtual Machine ware)是一个“虚拟PC”虚拟机管理管理软件。它的产品可以使你在一台机器上同时运行二个或更多Windows、DOS、LINUX系统。与“多启动”系统相比，VMWare采用了完全不同的概念。多启动系统在一个时刻只能运行一个系统，在系统切换时需要重新启动机器。VMWare是真正“同时”运行，多个操作系统在主系统的平台上，就象标准Windows应用程序那样切换。而且每个操作系统你都可以进行虚拟的分区、配置而不影响真实硬盘的数据，你甚至可以通过网卡将几台虚拟机用网卡连接为一个局域网，极其方便。安装在VMware操作系统性能上比直接安装在硬盘上的系统低不少，因此，比较适合学习和测试。

三、OpenStack与VMWare

1.设计
VMware软件套件是自底向上的架构，下端边界为虚拟机管理器。像VMware的vSphere和vCloud director产品都是依赖于免费的ESX(i) 虚拟机管理器， ESX(i)虚拟机管理器为他们提供了非常优秀的部署架构。
VMware的软件系统是封闭的，并且软件的发展路线是完全遵循VMware自己的发展目标，用户或消费者在此方面没有任何控制权。

OpenStack作为一个开源系统，没有任何一家单独的公司在控制OpenStack的发展路线。

2.功能
（1）VMware vMotion
vMotion是vSphere DRS、DPM和主机维护三大功能的合集。其中虚拟机动态迁移允许将一台虚拟机在零关机的情况下由一台宿主机迁移到另一台上，这原本是需要共享存储的支持的，但在vSphere 5.1中，VMware已经不需要通过共享存储实现动态迁移了。当一台虚拟机由一个宿主机迁移到另一个上时，虚拟机的内存状态和数据都要同步迁移过去。如果是共享存储的情况，实际上数据是不需要进行迁移的，只需要变化指向数据存储的链接而已。这在加速了迁移速度的同时也减少了在复制过程中网络的负载。

（2）OpenStack 动态迁移
KVM动态迁移允许一个虚拟机由一个虚拟机管理器迁移到另一个，说的详细一点，你可以来来回回将一台虚拟机在AMD架构主机与Intel架构主机上进行迁移，但是需要注意的是，64位的虚拟主机只能被迁移到64位的宿主机上，但是32位的则有32位和64位两种选择。在动态迁移过程中，不能再对虚拟机进行操作，但是虚拟机内的用户还是可以在虚拟机内部继续进行工作的。KVM主要还是依赖于共享存储，某种程度上，这相对来说是需要一些资金投入的。

（3）OpenStack块存储迁移
在OpenStack当中，KVM支持块存储迁移，这也就是说虚拟机迁移不是必须需要共享存储的支持的。在块迁移的场景下，虚拟机的内存状态与数据都将被迁移，但是迁移操作也需要消耗两端的CPU资源并且操作花费时间较比共享存储来说要长一些。在某些用户场景当中，如果我们比较关注于主机的可维护性，并且不想花费过多经费，那么应用块存储迁移将是好的解决方案。同时，如果在没有共享存储的环境中，我们想对计算节点进行内核维护、安全升级，那么保证虚拟机服务不被打断，块存储迁移也是理想选择。

（4）VMware DRS 和 DPM
基于vMotion，DRS可以动态监控虚机机及宿主机的当前使用状况，并且为宿主机的负载均衡提供支持。

基于vMotion， DPM将虚拟机从低负载宿主机迁移掉，并且关闭以达到减少电能损耗。当负载增长，DPM将宿主机重启，并且部署新的虚拟机以满足负载需要。

（5）OpenStack调度器
OpenStack包含了对于compute和volume的调度器，通过一系列的管理员设定的规则参数和过滤器，OpenStack调度器将虚拟机部署到合适的宿主机上。在过滤器方面，调度器是非常灵活的，用户可以自己完成JSON格式的过滤器，并且过滤器还包含很多预定义的过滤器。虽然OpenStack调度器非常灵活，但是还是不能完全替代DRS，原因如下：

调度器用于选择哪个宿主机进行虚拟机部署的静态参考数据来源于Nova的数据库。换句话说，就是发现宿主机已经有了4台虚拟机了，那么我们需要选择一个新的宿主机去部署下一台虚拟机。
调度器只能在虚拟机部署阶段影响部署的位置，一旦部署完成，虚拟机运行后则无法挪动虚拟机了。如果需要基于动态数据进行调度，那么调度器需要与外部监控解决方案如Nagios合作。总而言之，目前OpenStack调度器将只会对部署虚拟机环节有影响。
（6）High Availability(高可用)
在vSphere中，虚拟机级别的高可用性是允许在虚拟机或者ESX(i)主机出错时，在不同宿主机部署相同的虚拟机。这里不要和容错（FT）机制混淆，高可用的意义在于当有一些东西出错了，可以在一定时间内自我修复。高可用是在硬件出问题的时候保证虚拟机的正常个工作，如果真的出错了，那么只能在不同的ESX(i)主机上启动虚拟机，这也可能造成服务的中断。

目前并没有官方声明OpenStack支持虚拟机级别的高可用性，这个特性在Folsom版本被提出，但是后续又被放弃了。目前OpenStack有一个孵化项目Evacuate, 其作用是为OpenStack提供虚拟机级别高可用支持。

（7）Fault Tolerance（容错）
VMware容错机制是通过监控虚拟机的状态和所有变化，将这些变化同步到第二台备份ESX(i)服务器之上。容错的概念在于无论是主还是从宿主机出现问题，只要一方能正常工作，那么宿主机上的虚拟机都保持正常工作。

在OpenStack中没有针对于容错的功能，并且截至目前也没有计划去完成这些功能。未来，KVM也不再支持镜像操作功能。

四、OpenStack与Docker

OpenStack和Docker之间是很好的互补关系。Docker的出现能让IaaS层的资源使用得更加充分，因为Docker相对虚拟机来说更轻量，对资源的利用率会更加充分。
技术分享图片

Docker主要针对Paas平台，是以应用为中心。OpenStack主要针对Iaas平台，以资源为中心，可以为上层的PaaS平台提供存储、网络、计算等资源。

OpenStack项目的层级关系

技术分享图片

第一层是基础设施层，这一层主要包含Nova、Glance和Keystone，如果我们要想得到最基本的基础设施的服务，必须安装部署这三个项目。
第二层是扩展基础设施层，这一层可以让我们得到更多跟基础设施相关的高级服务，主要包含Cinder、Swift、Neutron、Designate和Ironic等，其中Cinder提供块存储，Swift提供对象存储，Neutron提供网络服务，Designate提供DNS服务，Ironic提供裸机服务。
第三层是可选的增强特性，帮用户提供一些更加高级的功能，主要包含Ceilometer、Horizon和Barbican，其中Ceilometer提供监控、计量服务，Horizon提供用户界面，Barbican提供秘钥管理服务。
第四层主要是消费型服务，所谓的消费型服务，主要是指第四层的服务都需要通过使用前三层的服务来工作。
第四层主要有Heat、Magnum、Sahara、Solum和Murano等，其中Heat主要提供orchestration服务，Magnum主要提供容器服务，Sahara主要提供大数据服务，我们可以通过Sahara很方便地部署Hadoop、Spark集群。Solum主要提供应用开发的服务，并且可以提供一些类似于CI/CD的功能。Muarno主要提供应用目录的服务，类似于App Store，就是用户可以把一些常用的应用发布出来供其他用户去使用。最右边是Kolla，Kolla的主要功能是容器化所有的OpenStack服务，便于OpenStack安装部署和升级。

OpenStack中和Docker有关系的项目

主要包括Nova、Heat、Magnum、Sahara、Solum、Murano和Kolla等。由图3得知，和Docker相关的大部分项目都在PaaS和SaaS层。

（1）Nova Docker Driver
这个Driver是OpenStack和Docker的第一次集成，主要是把Docker作为一种新的Hypervisor来处理，把所有的Container当成VM来处理。提供了一个Docker的Nova Compute Driver，集成很简单，通过Docker REST API来操作Container。
技术分享图片

（2）Heat Docker Driver
因为Nova Docker Driver不能使用Docker的一些高级功能，所以社区就想了另一个方法，和Heat去集成。
因为Heat采用的也是插件模式，所以就在Heat实现了一个新的Resource，专门来和Docker集成。这个Heat插件是直接通过REST API和Docker交互的，不需要和Nova、Cinder和Neutron等来进行交互。
技术分享图片

（3）Magnum
在OpenStack和Docker集成的过程中，我们发现从OpenStack现有的项目中，找不到一个很好的集成点，虽然和Nova、Heat都做了集成的尝试，但缺点很明显，所以社区就开始了一个新的专门针对Docker和OpenStack集成的项目Magnum，用来提供容器服务。
Mangum的主要目的是提供Container服务的，它同时还可以和多个Docker集群管理系统集成，包括K8S、Swarm、CoreOS等。和这几个平台集成的主要原因是能让用户可以很方便地通过OpenStack云平台来集成K8S、CoreOS、Swarm这些已经很成型的Docker集群管理系统，促进Docker和OpenStack生态系统的融合。

（4）Murano
Murano是Mirantis贡献的，并且也进了OpenStack Namespace。也和K8S集成了，用户可以通过Murano使用K8S的功能，可以通过Murano部署Pod、Service、Replication Controller等。Murano主要是在OpenStack基础上提供应用目录服务。Muarno和Solum之间其实是有关系的，Solum主要是用来开发应用的，Solum把应用开发完后，可以通过Murano来发布。用户可以通过Murano挑选自己需要的应用服务，通过应用服务组合构建自己的应用。

#  虚拟机软件推荐【2021】MacOS, Windows随意换

**虚拟机软件推荐**：详细介绍了WMware虚拟机等八款最受欢迎的虚拟机软件，并且详细比较了各自的优缺点。介绍包含了Mac虚拟机、Windows虚拟机以及各种系统可用的虚拟机。
虚拟机软件，英文名是Virtual Machine Software，可以在现有计算机系统中创建一个或多个独立的虚拟环境，从而运行其它的计算机操作系统或某一特定程序。
阅读完本文，您会详细了解到：

- [虚拟机软件推荐]()
- [虚拟机是什么？]()
- [虚拟机有什么用？]()
- [虚拟机软件有哪些参数？]()
- [虚拟机软件详细介绍]()

![虚拟机](https://www.howlifeusa.com/wp-content/uploads/2021/02/%E8%99%9A%E6%8B%9F%E6%9C%BA.png)

## 虚拟机软件推荐

| 虚拟机软件                       | 虚拟机推荐理由               |
| -------------------------------- | ---------------------------- |
| [WMware虚拟机 (Workstation)]()   | Windows、Linux虚拟机软件     |
| [WMware虚拟机 (Fusion)]()        | 最适合Mac的虚拟机软件        |
| [VirtualBox虚拟机]()             | 最适合初学者的虚拟机软件     |
| [Parallels Desktop虚拟机]()      | 在Mac系统使用的虚拟机软件    |
| [Red Hat Virtualization虚拟机]() | 最适合程序员的虚拟机软件     |
| [QEMU虚拟机]()                   | 支持多种操作系统的虚拟机软件 |
| [Apple Boot Camp虚拟机]()        | Apple开发的虚拟机软件        |
| [Citrix Hypervisor虚拟机]()      | 最具安全性的虚拟机软件       |

## 虚拟机是什么？

虚拟机英语是Virtual Machine，简称为VM。 虽然名字中“机器”的字样，但实际上这是一款实现虚拟机功能的软件，所以更严谨的名称应该是虚拟机软件，也就是Virtual Machine Software。

虚拟机软件可以用来模拟一套具有独立的计算机操作系统，实现在现有计算机系统里，运行第二种计算机系统的所有功能，比如，在Windows系统中，运行MacOS。同时，两个系统完全独立，不会相互影响。

所以，使用虚拟机软件，可以在同一台计算机里，独立或同步运行多个操作系统、或者同种系统的不同版本，既可以是MacOS和Windows这样完全不同的系统，也可以Windows系统下的不同版本。

<iframe class=" lazyloaded" title="What is a Virtual Machine (VM)? In 3 minutes - Virtual Machine Tutorial for Beginners" width="500" height="281" data-src="https://www.youtube.com/embed/yIVXjl4SwVo?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" src="https://www.youtube.com/embed/yIVXjl4SwVo?feature=oembed" style="box-sizing: border-box; max-width: 100%; width: 760px; height: 427.5px;"></iframe>

目前虚拟机主要分为两类：系统虚拟机、和进程虚拟机

- **系统虚拟机**，英文是 System Virtual Machine ，可以在该软件中运行不同的操作系统，比如 Linux 或 Windows ，所以也可以称之为“完全虚拟化虚拟机”，比如，VMware和VirtualBox就属于这类虚拟机；
- **进程虚拟机**，英文是Process virtual machine，可以在现有计算机操作系统环境下，仅执行某些可在其它操作系统运行的特定程序，而不需要运行完整的操作系统，熟知的 JVM (JAVA Virtual Machine ) 就是属于这种。

如下图所示为系统虚拟机软件的运行界面示例，在Mac系统平台上运行Windows系统，界面在一个独立视窗中，但系统所需的所有功能都可以进行操作。

## 虚拟机有什么用？

由于目前 Windows、MacOS 、Linux等多种操作系统并存，所以，您需要使用的软件与您的操作系统之间，不一定是完全匹配。

比如，您可能需要在MacOS中使用仅仅支持Windows系统的软件，或者您需要使用Windows笔记本来开发iOS APP，在这些使用场景中，虚拟机软件都可以大大的发挥作用。

### 对于个人用户

如果您所需要使用的软件不支持现有计算机的操作系统，您就可以考虑安装虚拟机。

或者，您想测试一些新软件，但是担心安全隐患，也可以考虑安装虚拟机，恶意软件将无法在虚拟机中工作，因此，也无法在虚拟化的环境中去攻击您的计算机。

对于在同一台计算机中安装双系统仍存在操作盲点的朋友，您可能担心操作有误而损坏所有系统，那么，您最好选择虚拟机软件，操作简便，不会损坏计算机内的原有操作系统。

### 对于程序员

对于程序员而说，测试所开发程序、在多种不同操作系统下运行的稳定性，是非常重要的一步。

虚拟机软件极大简化了这一个过程，使用同一台计算机，只需打开不同窗口就可以查看程序在不同操作系统下的运行状况，甚至可以在多窗口同步运行情况下，直观调试程序中出现的BUG。

同时，虚拟机还支持Windows系统用户，在Mac环境下使用Xcode编写iOS APP。

还有很多编程的朋友，需要在不同系统中进行计算机语言编译工作，比如进行JAVA语言编译程序，当需要更换计算机时，仅需安装JVM，即可在任何系统中编译和运行，不需要对系统进行修改，极大的优化了程序员的编译工作。

### 对于企业

中大型企业的海量数据处理，往往需要多台服务器来完成，同时需要配备不同技术人员进行维护。

使用虚拟机则可以合并服务器，技术人员可以把部分服务器放到虚拟机中，然后在同一台计算机上运行，即将原本多台独立的服务器合并到一台计算机中。同时，因为每个虚拟机都是一个独立的数据容器，所以不会导致在同一个操作系统上运行不同服务器所产生安全问题，一定程度地缩减企业运行成本。

## 虚拟机软件有哪些参数？

### A. 安装所支持的操作系统

这是一个最为重要的参数。虚拟机软件仍然是一款软件，所以必须保证，您所选择的虚拟机软件可以在现有的计算机操作系统上运行。

目前市面常见的虚拟机软件有以下几类：

- 仅支持Mac系统的虚拟机软件，比如 Parallels Desktop；
- 仅支持Linux系统的虚拟机软件，比如 Red Hat Virtualization ；
- 仅支持Linux和Windows的虚拟机软件，比如 VMware Workstation；
- 支持全系统的虚拟机软件，比如 QEMU；

### B. 运行时可虚拟的操作系统

虚拟机软件所支持运行的虚拟系统也是您选择的一个重要参数，虚拟系统指的就是，当前的操作系统里，希望共用的第二种、或第三种操作系统。

打个比如，如果您电脑的操作系统是Mac，同时希望在同一台电脑里使用Windows系统，那么您就需要找到支持虚拟Windows系统的虚拟机软件。比如，

- 虚拟系统仅支持Windows系统，比如：Boot Camp；
- 虚拟系统仅支持Linux和Windows系统，比如Red Hat Virtualization；
- 虚拟系统支持任何操作系统，比如VirtualBox；

### C. 是否支持GPU

GPU，全称是图形处理器，英文是Graphics Processing Unit，是一种控制图像运算的微处理器（Micro-Processor）。计算机运行过程中，涉及到图形处理，尤其3D图形处理等高级别功能时，GPU的运行情况会直接导致图像呈现的效果。

所以，如果您需要使用的程序对计算机GPU要求较高，比如CAD制图软件等，那么，您就需要一款支持GPU的虚拟机软件，比如Citrix Hypervisor就提供此功能。

### D. 费用

很多虚拟机软件都提供免费版本，但是，当您需要使用更高级别的功能，比如更复杂的管理工具、或经常需要技术支持维护时，您就需要支付一定的费用。

而也有些虚拟机软件仍为开源软件，免费的同时、还支持程序员对软件进行二次开发，在数据共享的时代优化了软件的使用感，比如Oracle VirtualBox和QEMU。

## 虚拟机软件详细介绍

| 虚拟机软件                                                   | 可安装的操作系统             | 可虚拟的操作系统 | 费用      | 特点              |
| ------------------------------------------------------------ | ---------------------------- | ---------------- | --------- | ----------------- |
| [WMware Workstation](https://www.vmware.com)                 | Windows, Linux               | 多种操作系统     | 免费/付费 | 支持GPU虚拟化     |
| [WMware Fusion](https://www.vmware.com)                      | Mac                          | Windows, Linux   | 免费/付费 | 支持GPU虚拟化     |
| [VirtualBox](https://www.virtualbox.com)                     | Mac, Windows, Linux, Solaris | Windows, Linux   | 免费/付费 | 支持多系统        |
| [Parallels Desktop](https://www.parallels.com/)              | Mac                          | Windows          | 付费      | 兼容性高          |
| [Red Hat Virtualization](https://www.redhat.com/zh/technologies/virtualization/enterprise-virtualization) | Linux                        | Linux, Windows   | 免费/付费 | 开源系统          |
| [QEMU](https://www.qemu.org)                                 | 多系统                       | 多系统           | 免费      | 灵活性高          |
| [Apple Boot Camp](https://www.apple.com)                     | Mac                          | Windows          | 免费      | Mac自带，无需安装 |
| [Citrix Hypervisor](https://www.citrix.com/products/citrix-hypervisor/) | Mac, Windows                 | Windows, Linux   | 免费/付费 | 自建虚拟数据中心  |

### 1. VMware Workstation 虚拟机

![img](https://www.howlifeusa.com/wp-content/uploads/2021/02/image-3-1073x520.png)[VMware Workstation](https://www.vmware.com/products/workstation-pro.html)

#### 推荐理由

- 最适合Windows和Linux系统的虚拟机软件

#### 软件参数

- 可安装的系统：Windows、Linux
- 支持的第二种系统：多系统多版本
- 是否支持GPU虚拟化：是
- 费用：免费/付费

#### 软件介绍

VMware可谓虚拟机软件市场的元老级成员，20多年的行业经验使其经常被当做虚拟机软件的行业标准来进行参考，它所提供的功能几乎集满足了所有虚拟化需求。

作为为数不多的支持DirectX 10和OpenGL 3.3的软件之一，VMware Workstation 可支持诸如CAD等需要GPU加速的应用软件，支持高级3D制图等图形密集型工作，解决在虚拟环境中图像或视频画质下降的问题；高级网络设置功能，允许您设置和管理更为精准的虚拟网络，也可为多个系统设置不同的隐私权限和网络配置；复制功能则使设置和运行多个系统变得更为方便。VMware提供完善的售前、售后服务，加以多年经验，可完美解决所有您需要的虚拟机软件问题。

在费用方面，针对个人用户，Workstation Player可免费使用，若需更为专业和复杂的功能，则可升级至Workstation Pro。对于企业用户，建议使用Pro版本，会根据用户的不同需求、设置不同价位，针对大学教师、教职员工、学生、甚至父母等人群也设置了不同折扣。Workstation Player价格为$149，Workstation Pro价格为$199。

#### 优点

- 行业标杆性的强大功能
- 支持GPU虚拟化
- 支持运行众多系统版本
- 灵活的价格设置

#### 缺点

- 会占用较多计算机资源
- 熟悉掌握使用方式需要一定的学习时间

### 2. VMware Fusion 虚拟机

![img](https://www.howlifeusa.com/wp-content/uploads/2021/02/word-image-31.png)[VMware Fusion](https://store-us.vmware.com/vmware-fusion-12-player-5424172800.html)

#### 推荐理由

- 最适合Mac系统的虚拟机软件

#### 软件参数

- 可安装的系统：Mac
- 支持的第二套系统：Windows 和 Linux
- 是否支持GPU虚拟化：是
- 费用：免费/付费

#### 软件介绍

与VMware Workstation为同一公司产品，这款VMare Fusion是针对Mac系统开发，支持Mac系统特有的功能，比如5K iMac显示器等。

作为支持在Mac系统运行Windows系统的软件，Fusion设有UnityView模式，该模式可使各操作系统界面之间无缝衔接，同时也支持各操作系统之间直接拖曳文件等共享功能。VMware Fusion还支持从Dock中直接启动Windows应用程序，从而避免了BOOT Camp那样需要重启计算机来回切换系统的麻烦。

针对开发人员和游戏玩家，Fusion配备有GPU虚拟化功能，可在虚拟机中显示需要Direct X 10.1和OpenGL支持的3D图形，便于软件的开发或提高游戏画面质感。

针对个人用户，Fusion提供免费的基本版；针对商业或需要高级功能的个人用户，提供了付费的Fusion Pro，该版本支持与vSphere连接，vSphere提供了虚拟化云平台，它可与用于数据中心拓扑的第三方软件集成，整合更多资源、或服务于整个商业构架。Fusion Player价格为$149，Fusion Pro价格为$199。

#### 优点

- 行业标杆性的强大功能
- 支持GPU虚拟化
- 灵活的价格设置

#### 缺点

- 会占用较多计算机资源
- 熟悉掌握使用方式需要一定的学习时间

### 3. Oracle VM VirtualBox 虚拟机

![img](https://www.howlifeusa.com/wp-content/uploads/2021/02/word-image-32.png)[VirtualBox](https://www.virtualbox.org/)

#### 推荐理由

- 最适合初学者的虚拟机软件

#### 软件参数

- 可安装的系统：Mac、Windows、Linux、Solaris
- 支持的第二套系统：众多系统平台和版本
- 是否支持GPU虚拟化：是
- 费用： 免费/付费

#### 软件介绍

如果首次接触虚拟机软件，那么可以考虑这款Oracle VirtualBox，开源、且基本免费。

无论您的计算机运行什么操作系统，该软件几乎都可以安装，可支持的虚拟机系统范围更是出人意料的多，从XP到10的所有Windows版本，Server2003甚至Windows 3.x和 IBM OS / 2，也支持Linux 2.4及更高版本的任何版本、以及OpenBSD，Solaris和OpenSolaris等等，这一点也满足了硬件较旧的计算机对于虚拟机的需求。

在功能上，VirtualBox支持USB设备的识别功能，GPU虚拟化功能，可同时运行多个虚拟机系统窗口，并支持一定程度的转移性，即将一台计算机上创建的虚拟机直接转移到运行不同操作系统的另一台计算机上。

作为虚拟机新手用户，可以在Oracle网站上找到的详细教程和帮助信息，以及大量的已完整构建的虚拟机可供直接使用，在安装过程中遇到任何问题，可以随时查看教程和操作指南。

在费用方面，Oracle VirtualBox为个人用户提供了免费版本，可以满足绝大多数人对虚拟机的需求，只有当您需要非常复杂的高级功能时，可能需要升级至收费版，不同级别的收费情况会有不同。

#### 优点

- 支持多种系统
- 支持GPU虚拟化
- 友好的技术支持服务

#### 缺点

- 用户界面不够人性化
- 免费版本仅支持基本功能，高级功能仍需付费

### 4. Parallels Desktop 虚拟机

![img](https://www.howlifeusa.com/wp-content/uploads/2021/02/word-image-33.png)[Parallels Desktop](https://www.parallels.com/)

#### 推荐理由

- 适合Mac用户的虚拟机软件

#### 软件参数

- 可安装的操作系统：Mac
- 可虚拟的操作系统：Windows
- 是否支持GPU虚拟化：是
- 费用：多种付费计划

#### 软件介绍

对于Mac用户，同时需要在Mac和Windows系统间经常切换的使用者来说，Parallels Desktop虚拟机软件是一个不错的选择。

首先它配备了一键安装功能，可以通过网络连接到Parallel的虚拟桌面，帮助您查找和下载所安装的程序文件，以保证您可以顺利使用。

另一个特色功能是一键调整，可让您根据使用目的，比如游戏，设计，软件测试、甚至APP开发来设置虚拟软件的界面、和功能等，来优化使用体验感。

无缝模式可支持在Mac和Windows之间，进行简单的拖曳功能来共享文件或文件夹，以及在Mac Notification Center[中](https://www.lifewire.com/how-to-install-and-use-notification-center-widgets-1999212)显示Windows警报，同时基于Windows系统的主要用途，Parallels优化了系统和硬件资源，以提供更完善的Windows体验，就像一台真正的PC。另外，该软件还支持GPU虚拟化来优化3D图形的显示。

费用方面Parallels提供了三个版本：标准版、专业版、和商业版：标准版可满足大部分普通用户，$79.99起；标准版比较适合技术开发人员，$99.99/年；商业版为$99.99/年。

#### 优点

- 支持GPU虚拟化
- 灵活的价格计划

#### 缺点

- 可安装的第二套系统仅仅支持Windows 8、10及更高版本

### 5. Red Hat Virtualization 虚拟机

![img](https://www.howlifeusa.com/wp-content/uploads/2021/02/word-image-34.png)[Red Hat Virtualization](https://www.redhat.com/en)

#### 推荐理由

- 适合程序员的进程虚拟机软件

#### 软件参数

- 可安装系统：Linux、Windows
- 可支持系统： Linux、Windows
- GPU虚拟化：不支持
- 费用：免费版/付费版

#### 软件介绍

Red Hat Virtualization是使用Java语言编写的进程虚拟机，安装时可只针对某一特定程序设置一个独立于主计算机的虚拟空间，这使得一些应用程序可以在虚拟化环境中、而非在一个完整的虚拟计算机中快速运行, 所以在资源占用上进行了最大程度的缩减，非常适合需要大量计算机资源的场景，比如，在商用服务器整合中，它可以提供高达10：1的整合率，最多可减少75%的服务器机架空间。

同时这款虚拟机软件是一款开源软件，因此，您可以按照自己的需要进行设置，易于使用和管理。实时迁移和优先级别VM重启功能，可以使您在发生故障时，将VM从一台主机完整复制到另一台主机；同时，它支持第三方备份、还原、和复制功能，缩减您在不同计算机中设置现有虚拟机的工作量。

对于绝大多数用户而言，免费版已经可以满足需求，如果需要非常高级别性能的版本可以购买pro产品。

#### 优点

- 作为进程虚拟机，节省计算机空间
- 灵活储存方式，便于转移和共享

#### 缺点

- 无GPU虚拟化等针对特定项目的功能

### 6. QEMU 虚拟机

![img](https://www.howlifeusa.com/wp-content/uploads/2021/02/word-image-35.png)[QEMU](https://www.qemu.org/)

#### 推荐理由

- 最灵活的虚拟机软件

#### 软件参数

- 可安装系统：多系统版本
- 可支持系统：多系统版本
- GPU虚拟化：支持
- 费用：免费

#### 软件介绍

QEMU虚拟机也是一款开源软件，其最大的特点在于系统版本组合的灵活性，几乎涵盖了所有会被使用到的系统版本。这款虚拟机软件对主机系统无任何限制，对硬件也支持虚拟化，虚拟机可以在适当的硬件上体现近乎相同的性能，甚至可能会让您忘记您在使用虚拟机。同时，QEMU还支持读取外接USB设备、支持GPU虚拟化等等，基于开源软件，您可以根据需要进行针对性的设置。

#### 优点

- 强大的版本组合灵活性
- 免费

#### 缺点

- 稳定性是部分专业人士认为有待提高的地方

### 7. Apple Boot Camp 虚拟机

![img](https://www.howlifeusa.com/wp-content/uploads/2021/02/word-image-36.png)[Apple Boot Camp](https://support.apple.com/boot-camp)

#### 推荐理由

- Apple开发的虚拟机软件

#### 软件参数

- 可安装系统：Mac
- 可支持系统：Windows
- GPU虚拟化：支持
- 费用：免费

#### 软件介绍

Boot Camp虚拟软件由Apple开发，为想要在Mac上使用Windows操作系统的用户所使用。目前可支持的第二套操作系统包括Windows 7、8.1和10。

这是一款Mac自带软件，安装时，您只需要打开、并遵循指南即可按步进行，部分型号会需要一个Windows系统的IOS映像文件。如果您在操作过程中有任何问题，Apple提供了完善的指导，包括文本信息、邮件指示到电话指导。

从实质来讲，Boot Camp并不是严格意义上的虚拟机软件，因为它直接将计算机硬件区分成两个独立的系统，进入也必须是在重启计算机的情况下。虽然这在使用上有点麻烦，但完全独立的设置使它与任何虚拟机相比，在硬盘驱动器的运行效能方面带来更完善的质感体验。

#### 优点

- Mac自带软件，使用方便
- 硬盘驱动器独立运行，性能卓越
- 免费

#### 缺点

- 运行不同系统需重启计算机

### 8. Citrix Hypervisor 虚拟机

![img](https://www.howlifeusa.com/wp-content/uploads/2021/02/word-image-37.png)[Citrix Hypervisor](https://www.citrix.com/products/citrix-hypervisor/)

#### 推荐理由

- 安全性最强的虚拟机软件

#### 软件参数

- 可安装的操作系统：Mac,Windows
- 可虚拟的操作系统：Windows，Linux
- GPU虚拟化：支持
- 费用：免费/付费

#### 软件介绍

Citrix Hypervisor虚拟机可创建虚拟数据中心，支持不同计算机中的虚拟机经云端无缝转移，也支持用户快速上传大型文件，可同步访问或协作，所提供的监管功能对于所设立的虚拟机监督控制效果很好。

同时，在大型系统环境中，能够同时管理多台服务器、并平衡它们之间的工作负载，因此，当一台服务器发生故障时，另一台服务器可直接接管，从而保证运行状态不会间断，保障了企业的安全性。

费用上目前设置有三个版本：

- 免费版，可简单使用来创建虚拟机，但不提供技术支持；
- 标准版在免费版的基础上提供了技术支持；
- 高级版则解锁了许多高级功能，比如GPU虚拟化等，来满足CAD制图等高级功能；

#### 优点

- 构建虚拟数据中心保证安全性

#### 缺点

- 运行中的维护和问题可能需要专门的专家来解决

## 更多软件攻略

## 常见问题

**问题：VMware虚拟机好不好?**

VMware可谓虚拟机软件市场的元老级成员，20多年的行业经验使其经常被当做虚拟机软件的行业标准来进行参考，它所提供的功能几乎集满足了所有虚拟化需求。
主要包含两款虚拟机产品：VMware Workspace 和 VMware Fusion。
VMware可以安装在Windows 和 Linux系统上，而VMware Fusion主要是为Mac系统而设计的。




{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/33.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">
