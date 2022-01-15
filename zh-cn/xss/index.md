# 跨站点脚本 （XSS） 备忘单

**此文为加密收费内容添加我微信支付后可看:**
<!--more-->
![IP定位](https://tool.lu/netcard/)

此[跨站点脚本](https://portswigger.net/web-security/cross-site-scripting)（XSS） 备忘单包含许多向量，可以帮助您绕过 WAF 和过滤器。您可以根据事件、标签或浏览器选择向量，并且每个向量都包含概念验证。
您可以[下载 XSS 备忘单的 PDF 版本](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet.pdf)。
这张备忘单是由[波特斯威格研究](https://twitter.com/PortSwiggerRes)公司带到的。在推特上关注我们， 接收更新。
内容表

| **[Event handlers](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#event-handlers)** |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              | [No user interaction](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#event-handlers-that-do-not-require-user-interaction) |
|                                                              | [User interaction required](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#event-handlers-that-do-require-user-interaction) |
| **[Restricted characters](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#restricted-characters)** |                                                              |
| **[Frameworks](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#frameworks)** |                                                              |
| **[Protocols](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#protocols)** |                                                              |
| **[Other useful attributes](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#other-useful-attributes)** |                                                              |
| **[Special tags](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#special-tags)** |                                                              |
| **[Encoding](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#encoding)** |                                                              |
| **[Obfuscation](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#obfuscation)** |                                                              |
| **[Client side template injection](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#client-side-template-injection)** |                                                              |
|                                                              | [VueJS reflected](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#vuejs-reflected) |
|                                                              | [AngularJS sandbox escapes reflected](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#angularjs-sandbox-escapes-reflected) |
|                                                              | [AngularJS sandbox escapes DOM](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#dom-based-angularjs-sandbox-escapes) |
|                                                              | [AngularJS CSP bypasses](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#angularjs-csp-bypasses) |
| **[Scriptless attacks](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#scriptless-attacks)** |                                                              |
| **[Polyglots](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#polyglots)** |                                                              |
| **[WAF bypass global objects](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#waf-bypass-global-objects)** |                                                              |
| **[Content types](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#content-types)** |                                                              |
| **[Response content types](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#response-content-types)** |                                                              |
| **[Impossible labs](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#impossible-labs)** |                                                              |
| **[Prototype pollution](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#prototype-pollution)** |                                                              |
| **[Classic vectors (XSS crypt)](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#classic-vectors-xss-crypt)** |                                                              |

[点击🔎详细查看](https://portswigger.net/web-security/cross-site-scripting/cheat-sheet#isindex-and-formaction)



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/26.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">

