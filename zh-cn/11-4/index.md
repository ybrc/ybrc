# 手机移动端调试工具

<!--more-->
# 手机移动端调试工具

## 1. Eruda

> [Eruda](https://github.com/liriliri/eruda) 是一个专为手机网页前端设计的调试面板，类似 DevTools 的迷你版，其主要功能包括：捕获 console 日志、检查元素状态、捕获XHR请求、显示本地存储和 Cookie 信息等等。

### 1.1 功能特性移动浏览器控制台



![img](https://xiaodongxier.com/wp-content/uploads/2021/04/16189917622207.png)



- 按钮拖拽，面板透明度大小设置。
- Console 面板：捕获 Console 日志，支持 log、error、info、warn、dir、time/timeEnd、clear、count、assert、table；支持占位符，包括 %c 自定义样式输出；支持按日志类型及正则表达式过滤；支持 JavaScript 脚本执行。
- Elements 面板：查看标签内容及属性；查看应用在 Dom 上的样式；支持页面元素高亮；支持屏幕直接点击选取；查看 Dom 上绑定的各类事件。
- Network 面板：捕获请求，查看发送数据、返回头、返回内容等信息。
- Resources 面板：查看并清除 localStorage、sessionStorage 及 cookie；查看页面加载脚本及样式文件；查看页面加载图片。
- Sources 面板：查看页面源码；格式化 html，css，js 代码及 json 数据。
- Info 面板：输出 URL 及 User Agent；支持自定义输出内容。
- Snippets 面板：页面元素添加边框；加时间戳刷新页面；支持自定义代码片段。

### 1.2 快速上手

- ## 安装

  你可以在下午得到它。

  ```javascript
  npm install eruda --save
  ```

  将此脚本添加到您的页面。

  ```javascript
  <script src="node_modules/eruda/eruda.js"></script>
  <script>eruda.init();</script>
  ```

  它也可在[js 德利夫](http://www.jsdelivr.com/projects/eruda)和[cdnjs](https://cdnjs.com/libraries/eruda)上找到。

  ```javascript
  <script src="//cdn.jsdelivr.net/npm/eruda"></script>
  <script>eruda.init();</script>
  ```

  JavaScript 文件大小相当大（约 100kb gzib），因此不适合在移动页面中包含。建议确保埃鲁达只有在 eruda 设置为在 url 上[（http://example.com/?eruda=true）](http://example.com/?eruda=true)上真实时才加载 eruda，例如：

  ```javascript
  ;(function () {
      var src = '//cdn.jsdelivr.net/npm/eruda';
      if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;
      document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
      document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
  })();
  ```

  ## 配置

  初始化时，配置对象可以传递。

  - 容器：容器元件。如果不设置，它将在 html 根元素下直接附加一个元素。
  - 工具：选择您想要的默认工具，默认情况下将添加所有工具。

  欲了解更多信息，请查看[文档](https://github.com/liriliri/eruda/blob/master/doc/API.md)。

  ```javascript
  let el = document.createElement('div');
  document.body.appendChild(el);
  
  eruda.init({
      container: el,
      tool: ['console', 'elements']
  });
  ```

  ## 插件

  - [埃鲁达 fps](https://github.com/liriliri/eruda-fps)： 显示页面 fps 信息。
  - [埃鲁达功能](https://github.com/liriliri/eruda-features)： 浏览器功能检测。
  - [埃鲁达时间](https://github.com/liriliri/eruda-timing)：显示性能和资源计时。
  - [埃鲁达记忆](https://github.com/liriliri/eruda-memory)： 显示页面内存信息。
  - [埃鲁达代码](https://github.com/liriliri/eruda-code)： 运行爪哇脚本代码。
  - [埃鲁达基准](https://github.com/liriliri/eruda-benchmark)： 运行爪哇脚本基准。
  - [埃鲁达地理定位](https://github.com/liriliri/eruda-geolocation)：测试地理位置。
  - [埃鲁达多姆](https://github.com/liriliri/eruda-dom)： 导航多姆树。
  - [埃鲁达方向](https://github.com/liriliri/eruda-orientation)：测试方向阿皮。
  - [埃鲁达触摸](https://github.com/liriliri/eruda-touches)：可视化屏幕触摸。

  如果您想自己创建一个插件，请按照[这里的](https://github.com/liriliri/eruda/blob/master/doc/PLUGIN.md)指南

### 1.3 测试预览

## 演示

[![Demo](https://github.com/liriliri/eruda/raw/master/doc/qrcode.png)](https://github.com/liriliri/eruda/blob/master/doc/qrcode.png)

在手机上浏览[：https://eruda.liriliri.io/](https://eruda.liriliri.io/)

为了尝试不同的网站，请在浏览器地址栏上执行下面的脚本。

```javascript
javascript:(function () { var script = document.createElement('script'); script.src="//cdn.jsdelivr.net/npm/e
```

**使用技巧**

這才是本文重點。Eruda的基本使用方法推薦使用CDN和可配置引數的形式，在頁面引入如下程式碼：

```javascript
;(function () {
 var src = '//cdn.bootcss.com/eruda/1.2.4/eruda.min.js';
 if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') !== 'true') return;
 document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
 document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
})();
```

`eruda.init();`裡面可以傳入要初始化哪些面板，預設載入所有。

這樣使用方式沒有錯，但是如果Eruda要跟著釋出到線上的話，那我們要刪除這段程式碼？因為這樣會不管你需不需要除錯Eruda都會立即載入，在頁面出現Eruda的圖示。我的目標是，Eruda可以保留在頁面裡，無論什麼環境，只要我們想呼喚它出現的時候它才出現，不需要它的時候它只是一段不會生效的普通程式碼。

我想到的辦法是：首先把上述引入程式碼的src放到if裡，同時把localStorage改為sessionStorage，active-eruda引數也可以改個更短的名字，改後的程式碼如下：

```javascript
;(function () {
 if (!/eruda=true/.test(window.location) || sessionStorage.getItem('eruda') !== 'true') return;
 var src = '//cdn.bootcss.com/eruda/1.2.4/eruda.min.js';
 document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
 document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
})();
```

這段程式碼的意思是如果URL中有引數`eruda=true`或者sessionStorage中eruda的值為true才載入Eruda。這樣的好處是，我們需要除錯的時候可以在網頁URL後面加個引數即可，不需要除錯的它不會載入。

然而，這在開發階段可以這樣做比較好，但是在線上環境可能要加URL引數比較麻煩。於是我想到了在頁面中點選某個元素10次再載入Eruda，點選10次或者更多次，然後在sessionStorage中寫入`eruda=true`，然後重新整理當前頁。相反，再點選10次關閉Eruda。用這樣比較隱藏的方式開啟或關閉Eruda，這樣線上環境也可以自由開啟或關閉Eruda了。

例子：假如有這樣的一個頁面，裡有一個標題文字

```css
<h2>——規則詳情——</h2>
<div>
.....
</div>
```

那麼我們可以在h2標籤上繫結一個click事件，加入方法名叫showEruda

```javascript
<h2 onclick="showEruda">——規則詳情——</h2>
<div>
.....
</div>

<script>
var count = 0;
function showEruda () {
 if (count >= 10) { 
 var erdua = sessionStorage.getItem('erdua');
 if (!erdua || erdua === 'false'){
  sessionStorage.setItem('eruda', 'true')
 } else {
  sessionStorage.setItem('eruda', 'false')
 }
 location.reload()
 }
 count++
}
</script>
```

這樣點選規則詳情10次就可以喚起Eruda了，再點選10次就關閉Eruda，反正我覺得這樣挺好的。

不知道大家都是怎麼用的呢？


{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/035e_5159_0552_447f71c511f3468174f428a2fd8715dd.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
