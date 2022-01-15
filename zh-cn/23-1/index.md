# 汇编学习

**此文为加密收费内容添加我微信支付后可看:**
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
# 汇编学习

# IA-32处理器结构

## 寄存器

***寄存器进行信息存储\***

AX，BX，CX，DX，SP，BP，SI，DI，IP，FLAG，CS，DS，SS，ES 共 14 个,均为16位

而这 14 个寄存器分为通用寄存器，控制寄存器和段寄存器

### 通用寄存器：

#### 数据寄存器：

AX (Accumulator)：累加寄存器，也称之为累加器

BX (Base)：基地址寄存器

CX (Count)：计数器寄存器

DX (Data)：数据寄存器

***上面 4 个数据寄存器可以分为两个独立的 8 位寄存器\***

#### 指针寄存器：

SP (Stack Pointer)：堆栈指针寄存器

BP (Base Pointer)：基指针寄存器

#### 变址寄存器：

SI (Source Index)：源变址寄存器

DI (Destination Index)：目的变址寄存器

#### 控制寄存器：

##### IP (Instruction Pointer)：指令指针寄存器

##### FLAG：标志寄存器

| 标志位（外语缩写） | 标志位名称及外语全称   | =1                                 | =0                           |
| :----------------- | :--------------------- | :--------------------------------- | :--------------------------- |
| CF                 | 进位标志/Carry Flag    | CY/Carry/进位                      | NC/No Carry/无进位           |
| PF                 | 奇偶标志/Parity Flag   | PE/Parity Even/偶                  | PO/Parity Odd/奇             |
| AF                 | 辅助进位标志/Auxiliary | Carry Flag AC/Auxiliary Carry/进位 | NA/No Auxiliary Carry/无进位 |
| ZF                 | 零标志/Zero            | Flag ZR/Zero/等于零                | NZ/Not Zero/不等于零         |
| SF                 | 符号标志/Sign          | Flag NG/Negative/负                | PL/Positive/非负             |
| TF                 | 跟踪标志/Trace Flag    |                                    |                              |
| IF                 | 中断标志/Interrupt     | Flag EI/Enable Interrupt/允许      | DI/Disable Interrupt/禁止    |
| DF                 | 方向标志/Direction     | Flag DN/Down/减少                  | UP/增加                      |
| OF                 | 溢出标志/Overflow      | Flag OV/Overflow/溢出              | NV/Not Overflow/未溢出       |

　　

###### 条件标志：

- 进位标志：用于反映运算是否产生进位或借位如果运算结果的最高位产生一个进位或借位，则CF置1，否则置0运算结果的最高位包括字操作的第15位和字节操作的第7位移位指令也会将操作数的最高位或最低位移入CF
- 奇偶标志：用于反映运算结果低8位中“1”的个数“1”的个数为偶数，则PF置1，否则置0
- 辅助进位标志：算数操作结果的第三位（从0开始计数）如果产生了进位或者借位则将其置为1，否则置为0，常在BCD(binary-codedecimal)算术运算中被使用
- 零标志：用于判断结果是否为0运算结果0，ZF置1，否则置0
- 符号标志：用于反映运算结果的符号，运算结果为负，SF置1，否则置0因为有符号数采用补码的形式表示，所以SF与运算结果的最高位相同
- 溢出标志：反映有符号数加减运算是否溢出如果运算结果超过了8位或者16位有符号数的表示范围，则OF置1，否则置0

###### 控制标志：

- 跟踪标志：当TF被设置为1时，CPU进入单步模式，所谓单步模式就是CPU在每执行一步指令后都产生一个单步中断主要用于程序的调试8086/8088中没有专门用来置位和清零TF的命令，需要用其他办法
- 中断标志：决定CPU是否响应外部可屏蔽中断请求IF为1时，CPU允许响应外部的可屏蔽中断请求
- 方向标志：决定串操作指令执行时有关指针寄存器调整方向当DF为1时，串操作指令按递减方式改变有关存储器指针值，每次操作后使SI、DI递减

#### 段寄存器：

CS (Code Segment)：代码段寄存器 

DS (Data Segment)：数据段寄存器 

SS (Stack Segment)：堆栈段寄存器

ES (Extra Segment)：附加段寄存器

## 高频时钟

进行同步

## 控制单元

控制器控制各种器件进行工作

## 算术单元

运算器进行信息处理

## 三大总线

### 数据总线

CPU是通过地址总线指定存储单元，地址总线传送的能力决定了CPU对存储单元的寻址能力。(一般32位CPU，寻址能力为2^32=4G)

### 控制总线

CPU通过数据总线来与内存等器件进行数据传送，数据总线的宽度决定了CPU和外界的数据传送速度

### 地址总线

控制总线是一些不同控制的集合，CPU通过控制总线对外部器件的控制。控制总线的宽度决定了CPU对外部器件的控制能力

## 指令执行周期

- Fetch（取指），也就是从 PC 寄存器里找到对应的指令地址，根据指令地址从内存里把具体的指令，加载到指令寄存器中，然后把 PC 寄存器自增，好在未来执行下一条指令
- Decode（译码），也就是根据指令寄存器里面的指令，解析成要进行什么样的操作，是 R、I、J 中的哪一种指令，具体要操作哪些寄存器、数据或者内存地址
- Execute（执行），也就是实际运行对应的 R、I、J 这些特定的指令，进行算术逻辑操作、数据传输或者直接的地址跳转

## 读取内存周期

- 地址总线: 将想要读取的值的地址放到地址总线上
- 控制总线: 设置处理器RD引脚
- 等待存储器响应
- 数据总线: 将数据从数据总线复制到目标操作数

## 操作模式

主要操作模式:

- 保护模式
- 实地址模式
- 系统管理模式

子模式:

- 虚拟8086模式

## 汇编语言基础

### 整形常量

最后一位需要用基数来申明进制, 默认为10进制

| 基数 | 进制 |
| :--- | :--- |
| h    | 16   |
| q/o  | 8    |
| d    | 10   |
| b    | 2    |

### 字符常量

单引号或双引号包含的字符, 内存中保存的asc码

### 字符常量

单引号或双引号包含的字符序列, 内存中保存的asc码

### 保留字

- 指令助记符
- 寄存器名称
- 伪指令
- 属性
- 运算符
- 预定义符号

### 标识符

类似高级语言的变量名

### 伪指令

嵌入源代码的命令,由汇编器识别、执行

不在运行时执行,但可以定义变量、宏和子程序,为内存分派名称

### 指令

- 标号(可选)
- 指令助记符
- 操作数
- 注释(可选)

#### 指令助记符

| 助记符 | 说明 | 助记符 | 说明 |
| :----- | :--- | :----- | :--- |
| mov    | 分配 | mul    | 相乘 |
| add    | 相加 | jmp    | 跳转 |
| sub    | 相减 | call   | 调用 |

#### 操作数

| 示例  | 类型   |
| :---- | :----- |
| 96    | 常量   |
| 2+4   | 表达式 |
| eax   | 寄存器 |
| count | 内存   |

### 执行过程

- 编辑: 编辑源文件
- 汇编: 读取源文件 -> 目标文件
- 链接: 读取并检查目标文件,链接器从链接库复制被请求的过程,与目标文件融合 -> 可执行文件
- 运行: 运行

### 定义数据

#### 内部数据类型

| 类型   | 用法                                   |
| :----- | :------------------------------------- |
| BYTE   | 8 位无符号整数，B 代表字节             |
| SBYTE  | 8 位有符号整数，S 代表有符号           |
| WORD   | 16 位无符号整数                        |
| SWORD  | 16 位有符号整数                        |
| DWORD  | 32 位无符号整数，D 代表双（字）        |
| SDWORD | 32 位有符号整数，SD 代表有符号双（字） |
| FWORD  | 48 位整数（保护模式中的远指针）        |
| QWORD  | 64 位整数，Q 代表四（字）              |
| TBYTE  | 80 位（10 字节）整数，T 代表 10 字节   |
| REAL4  | 32 位（4 字节）IEEE 短实数             |
| REAL8  | 64 位（8 字节）IEEE 长实数             |
| REAL10 | 80 位（10 字节）IEEE 扩展实数          |

#### 伪指令

| 类型 | 用法     |
| :--- | :------- |
| DB   | 8 bytes  |
| DW   | 16 bytes |
| DD   | 32 bytes |
| DQ   | 64 bytes |
| DT   | 80 bytes |

#### 多初始值

##### DUP

为多个数据分配空间



```
byte 20 dup(0)
```

## 数据传送、寻址和算术运算

### 操作数

- 立即数: 数字文本表达式
- 寄存器操作数: CPU内已命名的寄存器
- 内存操作数: 引用内存位置

### MOV



```
mov des src
```

原则:

- 操作数大小相同
- 不能同时为内存操作数
- 指令指针寄存器不能作为目标操作数

***不能将数据从一个内存位置传送到另一个内存位置\***

### 整数的扩展

#### 无符号扩展 – MOVZX

##### 全零扩展并传送:

将源操作数复制到目的操作数,并把目的操组数扩展到16或32位.

#### 有符号扩展 – MOVSX

##### 符号扩展并传送:

将源操作数复制到目的操作数,并把目的操组数扩展到16或32位.

### 数据交换 – XCHG



```
xchg des src
```

***处理不能使用立即数操作外,和MOV指令要求一致\***

### 加减法

#### INC && DEC

- INC: 寄存器或内存操作数加一
- DEC: 寄存器或内存操作数减一

***INC和DEC不影响进位标志\***

#### ADD – 相加



```
add des src
```

规则和MOV指令相同

***源操作数不变\***

#### SUB – 相减



```
sub des src
```

规则和MOV指令相同

***源操作数不变\***

#### NEG – 非(将操作数转化为其二进制补码)



```
neg des src
```

规则和MOV指令相同

***源操作数不变\***

### 运算符和伪指令

- OFFSET: 返回变量和其所在段起始地址之间的距离
- PTR: 重写操作数默认的大小类型
- TYPE: 返回一个操作数或者数组中每个元素的大小
- LENGHOF: 返回数组中元素的个数

### JMP和LOOP

#### JMP – 无条件跳转到目的地址



```
jmp des
```

世界上最浪漫的话



```
jmp 0x7C00
```

#### LOOP – 循环

ECX计数器循环



```
loop des
```

首先将ECX置于合适的值,每循环一次,ECX自动减一并与`0`对比是否相等,若等于零则退出循环

## 过程

### 运行时堆栈(32位)

#### 入栈

- 栈顶指针减4
- ESP寄存器指向最后压入堆栈的数据项
- 内存中是从高地址向低地址扩展的

#### 出栈

- 从堆栈删除数据
- 栈顶指针增加

### PUSH && POP

#### PUSH

- 减少ESP的值
- 将源数据复制到堆栈(16位减2,32位减4)

#### POP

- 增加ESP的值
- 将数据从堆栈复制到目的操作数(16位减2,32位减4)

## 条件分支

### 布尔操作

| 操作 | 说明                                                        |
| :--- | :---------------------------------------------------------- |
| AND  | 源操作数和目的操作数进行逻辑与操作                          |
| OR   | 源操作数和目的操作数进行逻辑或操作                          |
| XOR  | 源操作数和目的操作数进行逻辑异或操作                        |
| NOT  | 对目标操作数进行逻辑非操作                                  |
| TEST | 源操作数和目的操作数进行逻辑与操作，并适当地设置 CPU 标志位 |

***TEST指令不修改目标操作数\***

### CMP指令

CMP指令执行从目的操作数中减去源操作数的隐含减法操作且不修改任何操作数

#### 比较无符号数

| CMP结果             | ZF   | CF   |
| :------------------ | :--- | :--- |
| 目的操作数<源操作数 | 0    | 1    |
| 目的操作数>源操作数 | 0    | 0    |
| 目的操作数=源操作数 | 1    | 0    |

#### 比较有符号数

| CMP结果             | 标志位   |
| :------------------ | :------- |
| 目的操作数<源操作数 | SF != OF |
| 目的操作数>源操作数 | SF == OF |
| 目的操作数=源操作数 | ZF == 1  |

### 条件跳转

#### 基于特定标志的跳转

| 助记符     | 说明       | 标志位/寄存器 | 助记符 | 说明       | 标志位/寄存器 |
| :--------- | :--------- | :------------ | :----- | :--------- | :------------ |
| ***JZ\***  | 为零跳转   | ZF=1          | JNO    | 无溢出跳转 | OF=0          |
| ***JNZ\*** | 非零跳转   | ZF=0          | JS     | 有符号跳转 | SF=1          |
| JC         | 进位跳转   | CF=1          | JNS    | 无符号跳转 | SF=0          |
| JNC        | 无进位跳转 | CF=0          | JP     | 偶校验跳转 | PF=1          |
| JO         | 溢出跳转   | OF=1          | JNP    | 奇校验跳转 | PF=0          |

#### 基于相等性的比较

| 助记符     | 说明                          |
| :--------- | :---------------------------- |
| ***JE\***  | 相等跳转 (leftOp=rightOp)     |
| ***JNE\*** | 不相等跳转 (leftOp M rightOp) |
| JCXZ       | CX=0 跳转                     |
| JECXZ      | ECX=0 跳转                    |
| JRCXZ      | RCX=0 跳转（64 位模式）       |

#### 无符号的比较

| 助记符    | 说明                                  | 助记符    | 说明                                  |
| :-------- | :------------------------------------ | :-------- | :------------------------------------ |
| ***JB\*** | 小于跳转（若 leftOp 小于 rightOp）    | ***JA\*** | 大于跳转(若 leftOp > rightOp)         |
| JNBE      | 不小于或等于跳转（与 JA 相同）        | JNAE      | 不大于或等于跳转（与 JB 相同）        |
| JAE       | 大于或等于跳转（若 leftOp ≥ rightOp） | JBE       | 小于或等于跳转（若 leftOp ≤ rightOp） |
| JNB       | 不小于跳转（与 JAE 相同）             | JNA       | 不大于跳转（与 JBE 相同）             |

## 整数运算

### 逻辑移位和算术移位

- 逻辑移位: 空出来的位用0填充
- 算术移位: 空出来的位用原数据符号位填充

| 指令       | 作用     | 指令       | 作用             |
| :--------- | :------- | :--------- | :--------------- |
| ***SHL\*** | 左移     | ***ROR\*** | 循环右移         |
| ***SHR\*** | 右移     | ***RCL\*** | 带进位的循环左移 |
| ***SAL\*** | 算术左移 | ***RCR\*** | 带进位的循环右移 |
| ***SAR\*** | 算术右移 | SHLD       | 双精度左移       |
| ***ROL\*** | 循环左移 | SHRD       | 双精度右移       |

### 乘法和除法

- 无符号乘法 – MUL 指令
- 有符号乘法 – IMUL 指令
- 无符号除法 – DIV 指令
- 有符号除法 – IDIV 指令
</div>
<img src="https://tool.lu/netcard/">


{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/99.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
