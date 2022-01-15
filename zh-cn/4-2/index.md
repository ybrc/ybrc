# 扩展分享


<!--more-->
<img src="https://tool.lu/netcard/">
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
# 扩展分享

浏览器中的扩展能够帮助我们获得更好的上网体验，可以说没有扩展的浏览器就没得灵魂。但是有一个很尴尬的事情就是，现在很多人对插件和扩展两者混为一谈，事实上二者天差地别。

### []()插件和扩展

插件：在功能上，插件通常是用来渲染页面里的 <object> 或 <embed> 标签。  
插件通常用操作系统的本地代码（也叫“原生代码”）编写，可以调用操作系统的 API。  
形式上，插件以动态库（Windows 上就是 DLL 文件）的方式，加载到浏览器的进程内。由于使用本地代码编写，  
插件通常依赖于特定的操作系统（不同系统的插件不能混用）。

举例：  
Flash 插件  
媒体播放器插件  
PDF 插件  
Java 插件  
各种网银控件

扩展：　扩展，顾名思义，是用来扩展浏览器自身的功能。所以，  
扩展可以调用浏览器自身的 API，但是扩展通常不能调用操作系统的 API。  
一般来说，扩展是跟操作系统无关的。比如 Firefox 的大部分扩展，  
既可以用于 Windows 平台的 Firefox，也可以用于 Linux 和 Mac OS X 的 Firefox。

还有，当我们在Chrome中分别输入`Chrome://plugins`和`Chrome://extensions`时候给我们的页面也完全不一样。

![image](https://cdn.jsdelivr.net/gh/ilemonEllen/image_github@master/blog_image/%E6%8F%92%E4%BB%B61.17y8fei0elvg.png)

这是输入plugins后给出的页面

![image](https://cdn.jsdelivr.net/gh/ilemonEllen/image_github@master/blog_image/%E6%89%A9%E5%B1%95.5s9r5wcohds0.png)

这是输入extensions后给出的页面

  

很显然，现在Chrome已经停止了对于类似于Flash这类插件的支持，但是扩展功能支持一直都在。所以插件和扩展是完完全全的两码事儿。

### [](https://aegisprogram.github.io/posts/d5f09ca9.html#%E6%88%91%E7%9A%84%E6%89%A9%E5%B1%95 "我的扩展")我的扩展

下面我说说自己浏览器上那些离不开的扩展吧！

#### [](https://aegisprogram.github.io/posts/d5f09ca9.html#ADguard "ADguard")[ADguard](https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg)

这是一个广告过滤扩展，能够帮你过滤掉网站上你不想看到的广告，当然，也可以完美过滤YouTube视频中的广告（本人亲测有效）。广告过滤扩展那么多，有这一个就够了。

#### [](https://aegisprogram.github.io/posts/d5f09ca9.html#Dark-Reader "Dark Reader")[Dark Reader](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh)

这是一个“护眼扩展”，通过这个扩展你可以轻松的将大部分网页渲染成黑色，以此来达到降低夜间白色背景光对眼睛的刺激。

#### [](https://aegisprogram.github.io/posts/d5f09ca9.html#bitwarden "bitwarden")[bitwarden](https://github.com/bitwarden)

这是一款开源的密码管理软件。开源的密码软件不在少数，但是这个上手就比较简单。跨平台，无论你是Windows，MacOS，Linux，都可以使用，扩展几乎覆盖所有的主流浏览器，IOS和Android还有对应的客户端。

#### [](https://aegisprogram.github.io/posts/d5f09ca9.html#privacy-Badger "privacy Badger")[privacy Badger](https://chrome.google.com/webstore/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp?hl=zh-CN)

这是一个自动学习并且能够阻止网页上不可见追踪器的扩展。

#### [](https://aegisprogram.github.io/posts/d5f09ca9.html#Randrom-User-Agent "Randrom User-Agent")[Randrom User-Agent](https://chrome.google.com/webstore/detail/random-user-agent/einpaelgookohagofgnnkcfjbkkgepnp)

自动随机的改变用户的浏览器头部信息，减少被刻画用户画像的风险。

#### [](https://aegisprogram.github.io/posts/d5f09ca9.html#Pocket "Pocket")[Pocket](https://chrome.google.com/webstore/detail/save-to-pocket/niloccemoadcdkdjlinkgdfekeahmflj)

将自己想要稍后阅读或者是自己喜欢的文章，网页收藏起来。算是一个收集箱，不开源。

#### [](https://aegisprogram.github.io/posts/d5f09ca9.html#PopupOFF "PopupOFF")[PopupOFF](https://chrome.google.com/webstore/detail/popupoff-popup-and-overla/ifnkdbpmgkdbfklnbfidaackdenlmhgh)

阻止顽固的网页弹窗和多余的页面边缘元素，提升阅读和浏览体验。

#### [](https://aegisprogram.github.io/posts/d5f09ca9.html#Clearurls "Clearurls")[Clearurls](https://chrome.google.com/webstore/detail/clearurls/lckanjgmijmafbedllaakclkaicjfmnk)

一款开源扩展，去除url中的跟踪元素，保护个人隐私。

#### [](https://aegisprogram.github.io/posts/d5f09ca9.html#Tampermonkey "Tampermonkey")[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

浏览器中功能最强大的扩展，能够配合[Greasy fork](https://greasyfork.org/)这个脚本网站实现各种各样的功能，逐渐不开源。

#### [](https://aegisprogram.github.io/posts/d5f09ca9.html#Disconnet "Disconnet")[Disconnet](https://chrome.google.com/webstore/detail/disconnect/jeoacafpbcihiomhlakheieifhpjdfeo)

能够提升网页的响应速度，阻止网页追踪器，保护上网安全。

#### [](https://aegisprogram.github.io/posts/d5f09ca9.html#IDM "IDM")[IDM](http://internetdownloadmanager.com/)

这是一个多线程的下载扩展（需要付费），能够自动嗅探资源，断点恢复下载，多线程 高速下载，下载大文件用它就对了，不开源。

#### [](https://aegisprogram.github.io/posts/d5f09ca9.html#WebRTC-Leak-Prevent "WebRTC Leak Prevent")[WebRTC Leak Prevent](https://chrome.google.com/webstore/detail/webrtc-leak-prevent/eiadekoaikejlgdbkbdfeijglgfdalml?hl=en-US)

禁用自己浏览器上的webRTC，保护自己的真实IP不泄露。

[webRTC检测](https://ip.voidsec.com/) ——一个用来检测webRTC有没有泄露你真实IP的网站，没有泄露则webRTC处没有IP显示。 网站管理员可以轻易地通过WebRTC看到用户的真实IP地址，即使用户使用VPN来隐藏自己的IP，也可以被追踪到。

#### [](https://aegisprogram.github.io/posts/d5f09ca9.html#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95 "解决方法")解决方法

Mozilla Firefox

在地址栏输入 “about:config”，搜“media.peerconnection.enabled” 并双击将值改为 “false”，WebRTC 将被关闭。

Google Chrome

在谷歌应用商店安装谷歌官方扩展 “WebRTC Leak Prevent”，在扩展选项里找到 “IP handling policy”选择第三项 “Disable non-proxied UDP”，并点击下方 “Apply settings”。只要是采用chromium内核的浏览器都可以使用此方法。

当然，最后你还可以对你的浏览器进行一波儿[指纹独特性测试](https://coveryourtracks.eff.org/)，无论结果是什么都仅供参考。

### [](https://aegisprogram.github.io/posts/d5f09ca9.html#%E6%9C%80%E5%90%8E "最后")最后

以上这些扩展基本都可以在chrome的网上商店中找到（IDM除外），只要是采用了chromium内核的浏览器都可以使用。现在主流的浏览器中采用chromium内核的有：Chrome，Microsoft Edge，Brave，Yandex，Opera，Vivaldi，Firefox可以直接在扩展商店搜索名字。

以上扩展多为开源扩展，非开源扩展我已经特别说明了。

不要过分相信这些外在的工具，他们的作用毕竟是有限的，只有不断强大自身，学会远离危险，保护自己，才是最好，最有效的措施。
</div>


{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/21.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<script type='text/javascript' src="//libs.cdnjs.net/jquery.qrcode/1.0/jquery.qrcode.min.js"></script>
<div id="qrcode"></div> 
<a id="download" download="qrcode.jpg"></a>
<div class="dd">
<p>
<button id="save"><b>手机扫一扫</b></button>
</p>
</div>
<script type="text/javascript">
    jQuery('#qrcode').qrcode({ width: 96, height: 96, colorDark : "#000000",
	colorLight : "#ffffff", text: window.location.href });$("#save").click(function () {
        var canvas = $('#qrcode').find("canvas").get(0);
        var url = canvas.toDataURL('image/jpeg');$("#download").attr('href', url).get(0).click();
        return false;
    });
</script>
<div class="dd"></div>
