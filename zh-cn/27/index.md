# 数字签名


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
# 数字签名

## 其作用主要有:

- 保证信息传输的完整性
- 发送者的身份认证
- 防止交易中的抵赖发生

## 拥有以下几个特性:

- 签名是可信的：任何人都可以验证签名的有效性。
- 签名是不可伪造的：除了合法的签名者之外，任何其他人伪造其签名是困难的。
- 签名是不可复制的：对一个消息的签名不能通过复制变为另一个消息的签名。如果对一个消息的签名是从别处复制得到的，则任何人都可以发现消息与签名之间的不一致性，从而可以拒绝签名的消息。
- 签名的消息是不可改变的：经签名的消息不能被篡改。一旦签名的消息被篡改，则任何人都可以发现消息与签名之间的不一致性。
- 签名是不可抵赖的：签名者事后不能否认自己的签名。

## 常见的实现方式有:

- DSA

- RSA

- ElGamal

  ## DSA

### 基本原理

#### 密钥生成

- 选择一个合适的哈希函数
- 选择密钥的长度 L 和 N，这两个值决定了签名的安全程度
- 选择 N 比特的素数 q
- 选择 L 比特的素数 p，使得 p-1 是 q 的倍数
- 选择满足 𝑔𝑘≡1𝑚𝑜𝑑𝑝gk≡1modp 的最小正整数 k 为 q 的 g，即在模 p 的背景下，ord𝑔g=q 的 g。这里，我们可以通过计算 𝑔=ℎ𝑝−1𝑞𝑚𝑜𝑑𝑝g=hp−1qmodp 来得到 g，其中`1<h<p−11<h<p−1`
- 选择私钥 x，`0<x<q0<x<q` ,c计算 𝑦≡𝑔𝑥𝑚𝑜𝑑𝑝y≡gxmodp

公钥为 𝑝,𝑞,𝑔,𝑦p,q,g,y，私钥为 𝑥x

#### 签名

签名步骤如下

- 选择随机整数数 k 作为临时密钥，0<k<q0<k<q 
- 计算 𝑟≡(𝑔𝑘𝑚𝑜𝑑𝑝)𝑚𝑜𝑑𝑞r≡(gkmodp)modq

- 计算 𝑠≡(𝐻(𝑚)+𝑥𝑟)𝑘−1𝑚𝑜𝑑𝑞s≡(H(m)+xr)k−1modq

签名结果为 𝑟,𝑠r,s

### 验证

验证过程如下

- 计算辅助值，𝑤=𝑠−1𝑚𝑜𝑑𝑞w=s−1modq
- 计算辅助值，𝑢1=𝐻(𝑚)𝑤𝑚𝑜𝑑𝑞u1=H(m)wmodq
- 计算辅助值，𝑢2=𝑟𝑤𝑚𝑜𝑑𝑞u2=rwmodq
- 计算𝑣=(𝑔𝑢1𝑦𝑢2𝑚𝑜𝑑𝑝)𝑚𝑜𝑑𝑞v=(gu1yu2modp)modq

如果 v 与 r 相等，则校验成功

### 正确性推导

首先，g 满足 𝑔𝑘≡1𝑚𝑜𝑑𝑝gk≡1modp 的最小正整数 k 为 q.所以 𝑔𝑞≡1𝑚𝑜𝑑𝑝gq≡1modp

所以 𝑔𝑥≡𝑔𝑥𝑚𝑜𝑑𝑞𝑚𝑜𝑑𝑝gx≡gxmodqmodp进而

𝑣=(𝑔𝑢1𝑦𝑢2𝑚𝑜𝑑𝑝)≡𝑔𝑢1𝑔𝑥𝑢2≡𝑔𝐻(𝑚)𝑤𝑔𝑥𝑟𝑤≡𝑔𝐻(𝑚)𝑤+𝑥𝑟𝑤𝑚𝑜𝑑𝑝v=(gu1yu2modp)≡gu1gxu2≡gH(m)wgxrw≡gH(m)w+xrwmodp


又𝑠≡(𝐻(𝑚)+𝑥𝑟)𝑘−1𝑚𝑜𝑑𝑞s≡(H(m)+xr)k−1modq 且𝑤=𝑠−1𝑚𝑜𝑑𝑞w=s−1modq



所以

𝑘≡𝑠−1(𝐻(𝑚)+𝑥𝑟)≡𝐻(𝑚)𝑤+𝑥𝑟𝑤𝑚𝑜𝑑𝑞k≡s−1(H(m)+xr)≡H(m)w+xrwmodq

所以𝑣≡𝑔𝑘𝑚𝑜𝑑𝑞v≡gkmodq 正确性得证

## RSA

### 原理

原理类似于 RSA 加密，只是这里使用私钥进行加密，将加密后的结果作为签名
</div>
<img src="https://tool.lu/netcard/">


{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/27.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
