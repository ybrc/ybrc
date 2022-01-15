# 异或运算XOR教程

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
# 异或运算 XOR 教程

大家比较熟悉的逻辑运算，主要是"与运算"（AND）和"或运算"（OR），还有一种"异或运算"（XOR），也非常重要。

本文介绍异或运算的含义和应用。

![img](https://www.wangbase.com/blogimg/asset/202101/bg2021012602.jpg)

## 一、含义

XOR 是 exclusive OR 的缩写。英语的 exclusive 意思是"专有的，独有的"，可以理解为 XOR 是更单纯的 OR 运算。

我们知道，OR 运算的运算子有两种情况，计算结果为`true`。

（1）一个为 true，另一个为 false;

（2）两个都为 true。

上面两种情况，有时候需要明确区分，所以引入了 XOR。

XOR 排除了第二种情况，只有第一种情况（一个运算子为`true`，另一个为`false`）才会返回 true，所以可以看成是更单纯的 OR 运算。也就是说， **XOR 主要用来判断两个值是否不同。**

XOR 一般使用插入符号（caret）`^`表示。如果约定`0` 为 false，`1` 为 true，那么 XOR 的运算真值表如下。

> ```javascript
> 0 ^ 0 = 0
> 0 ^ 1 = 1
> 1 ^ 0 = 1
> 1 ^ 1 = 0
> ```

## 二、运算定律

XOR 运算有以下的运算定律。由于非常简单，这里就省略证明了。

（1）**一个值与自身的运算，总是为 false。**

> ```javascript
> x ^ x = 0
> ```

（2）**一个值与 0 的运算，总是等于其本身。**

> ```javascript
> x ^ 0 = x
> ```

（3）**可交换性**

> ```javascript
> x ^ y = y ^ x
> ```

（4）**结合性**

> ```javascript
> x ^ (y ^ z) = (x ^ y) ^ z
> ```

## 三、应用

根据上面的这些运算定律，可以得到异或运算的很多重要应用。

### 3.1 简化计算

多个值的异或运算，可以根据运算定律进行简化。

> ```javascript
> a ^ b ^ c ^ a ^ b
> = a ^ a ^ b ^ b ^ c
> = 0 ^ 0 ^ c
> = c
> ```

### 3.2 交换值

两个变量连续进行三次异或运算，可以互相交换值。

假设两个变量是`x`和`y`，各自的值是`a`和`b`。下面就是`x`和`y`进行三次异或运算，注释部分是每次运算后两个变量的值。

> ```javascript
> x = x ^ y // (a ^ b, b)
> y = x ^ y // (a ^ b, a ^ b ^ b) => (a ^ b, a)
> x = x ^ y // (a ^ b ^ a, a) => (b, a)
> ```

这是两个变量交换值的最快方法，不需要任何额外的空间。

### 3.3 加密

异或运算可以用于加密。

第一步，明文（text）与密钥（key）进行异或运算，可以得到密文（cipherText）。

> ```javascript
> text ^ key = cipherText
> ```

第二步，密文与密钥再次进行异或运算，就可以还原成明文。

> ```javascript
> cipherText ^ key = text
> ```

原理很简单，如果明文是 x，密钥是 y，那么 x 连续与 y 进行两次异或运算，得到自身。

> ```javascript
> (x ^ y) ^ y
> = x ^ (y ^ y)
> = x ^ 0
> = x
> ```

### 3.4 数据备份

异或运算可以用于数据备份。

文件 x 和文件 y 进行异或运算，产生一个备份文件 z。

> ```javascript
> x ^ y = z
> ```

以后，无论是文件 x 或文件 y 损坏，只要不是两个原始文件同时损坏，就能根据另一个文件和备份文件，进行还原。

> ```javascript
> x ^ z
> = x ^ (x ^ y) 
> = (x ^ x) ^ y
> = 0 ^ y
> = y
> ```

上面的例子是 y 损坏，x 和 z 进行异或运算，就能得到 y。

## 四、一道面试题

一些面试的算法题，也能使用异或运算快速求解。

请看下面这道题。

> 一个数组包含 n-1 个成员，这些成员是 1 到 n 之间的整数，且没有重复，请找出缺少的那个数字。

最快的解答方法，就是把所有数组成员（A[0] 一直到 A[n-2]）与 1 到 n 的整数全部放在一起，进行异或运算。

> ```javascript
> A[0] ^ A[1] ^ ... ^ A[n-2] ^ 1 ^ 2 ^ ... ^ n
> ```

上面这个式子中，每个数组成员都会出现两次，相同的值进行异或运算就会得到 0。只有缺少的那个数字出现一次，所以最后得到的就是这个值。

你可能想到了，加法也可以解这道题。

> ```javascript
> 1 + 2 +  ... + n - A[0] - A[1] - ... - A[n-2]
> ```

但是，加法的速度没有异或运算快，而且需要额外的空间。如果数字比较大，还有溢出的可能。

下面是一道类似的题目，大家可以作为练习。

> 一个数组包含 n+1 个成员，这些成员是 1 到 n 之间的整数。只有一个成员出现了两次，其他成员都只出现一次，请找出重复出现的那个数字。

## 五、参考链接

- [That XOR Trick](https://florian.github.io/xor-trick/)

（完）
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/7.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
