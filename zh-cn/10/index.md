# 浏览器控制台命令调试——console


<!--more-->
![IP定位](https://tool.lu/netcard/)

控制台命令调试时经过浏览器开发工具中的控制台命令嵌入到JavaScript中，输出特定的信息或日志，从而达到调试的目的。html

咱们经常使用的Chrome和FireFox，均可以经过F12来打开开发工具。node

下面简要介绍几个经常使用的控制台命令：浏览器

**（1）常规信息输出**函数

console.log()是咱们最经常使用的命令，只须要将咱们但愿输出的内容传进入便可：工具

```
console.log("这是我要输出的信息");
```

![img](https://ewr1.vultrobjects.com/imgur2/000/004/096/470_6a4_b20.png)

除了console.log()命令外，咱们还有其它三种命令：开发工具

```
console.info("这是我要输出的信息");
```

![img](https://ewr1.vultrobjects.com/imgur2/000/004/096/471_e8d_637.png)

```
console.error("错误信息");
```

 ![img](https://ewr1.vultrobjects.com/imgur2/000/004/096/472_a4d_2ef.png)

```
console.warn("警告信息");
```

![img](https://ewr1.vultrobjects.com/imgur2/000/004/096/473_1af_0b0.png)

从这四种命令的名称就能够看出来它们的做用，它们是用来展现不一样类型信息，使得咱们的信息输出更加规范（我的观点）。spa

![img](https://ewr1.vultrobjects.com/imgur2/000/004/096/474_77f_80e.png)

**（2）常规信息分组输出**调试

大量的信息输出，咱们可使用分组输出来对它们进行分组，方便咱们查看：日志

```
console.group("第一组开始");
console.log("第一组第一条");
console.log("第一组第二条");
console.groupEnd();

console.group("第二组开始");
console.log("第二组第一条");
console.log("第二组第二条");
console.groupEnd();
```

![img](https://ewr1.vultrobjects.com/imgur2/000/004/096/475_482_c70.png)

console.group()命令用于分组的开始，console.groupEnd()用来结束分组。code

**（3）对象输出**

console.dir()是专门输出对象全部方法和属性的，咱们就能够不用本身遍历就查看对象的信息：

```
var obj = {
    name: "haha",
    desc: "doubi"
};
console.dir(obj);
```

![img](http://static.noobyard.com/static/loading.gif)

**（4）DOM输出**

console.dirxml()命令是专门输出某个节点（node）所包含的html/xml代码：

```
var div = document.getElementById("demo");
console.dirxml(div);
```

![img](http://static.noobyard.com/static/loading.gif)

因为内容过多，图片并无截全。

**（5）函数调用轨迹监测**

```
var x = test3(1);

function test(a) {
    console.trace();
    return a;
}

function test1(a) {
    return test(a);
}

function test2(a) {
    return test1(a);
}

function test3(a) {
    return test2(a);
}
```

![img](http://static.noobyard.com/static/loading.gif)

**（6）计时功能**

有时咱们须要监测一段代码花费的时间，咱们一般能够这样作：

```
var time1 = new Date();
for (var i = 0; i < 100; i++) {

}
var time2 = new Date();
console.log(time2 - time1);
```

咱们还能够经过console.time()和console.timeEnd()帮助咱们完成这件事：

```
console.time("计时器");
for (var i = 0; i < 100; i++) {

}
console.timeEnd("计时器");
```

![img](https://ewr1.vultrobjects.com/imgur2/000/004/096/479_024_949.png)

须要注意的是，这两个命令里面的参数要一致，才会输出计时信息。

好了，在下了解的console经常使用命令就这些啦，若是有遗漏的console相关的其它经常使用命令，也欢迎你们来补充哦。
# Console - 提供了对浏览器调试控制台的访问

**`Console`** 对象提供了对浏览器调试控制台的访问（例如 Firefox 中的 Web 控制台）。其工作原理的具体细节因浏览器而异，但通常会提供_事实上_的一组功能。

可以从任何全局对象访问 `Console` 对象。如 [`Window`](https://www.mifengjc.com/api/Window.html)，[`WorkerGlobalScope`](https://www.mifengjc.com/api/WorkerGlobalScope.html) 以及通过属性工作台提供的特殊定义。它定义为 Window.console，可以简单地通过 `console` 来引用。例如

```js
console.log("无法打开指定的链接")
```

该页面记录了 `Console` 对象上可用的[方法](https://www.mifengjc.com/api/Console.html#方法)，并提供了一些[用法](https://www.mifengjc.com/api/Console.html#用法)示例。

**注意：** 此特性在 Web Worker 中可用。

## 方法

### `Console.assert()`

如果第一个参数是 `false`，则将消息和堆栈跟踪记录到控制台。

### `Console.clear()`

清空控制台。

### `Console.count()`

输出给定的标签，调用该行的次数。

### `Console.debug()`

使用日志级别 `"debug"` 向控制台输出消息。

> **注意：** 从 Chromium 58 开始，当选择级别为 “Verbose” 时，该方法的输出才在 Chromium 浏览器控制台中显示。

### `Console.dir()`

显示指定 JavaScript 对象的属性的交互式列表。该列表允许您使用显示三角形来检查子对象的内容。

### `Console.dirxml()`

如果可能，显示指定对象的 XML/HTML 元素表示，如果不可能，则显示 JavaScript 对象视图。

### `Console.error()`

打印一条 error 级别的信息。您可以使用[字符串替换](https://www.mifengjc.com/api/Console.html#字符串替换)作为该方法的额外参数。

### `Console.exception()` 

`error()` 的别名。

### `Console.group()`

创建一个新的内联组，将所有后续输出缩进另一个级别。要退出一个级别，请调用 `groupEnd()` 。

### `Console.groupCollapsed()`

创建一个新的内联组，将所有后续输出缩进另一个级别。然而，与 `group()` 不同，改内联组是默认折叠的，需要点击来展开它。要退出一个级别，请调用 `groupEnd()` 。

### `Console.groupEnd()`

退出当前的内联组。

### `Console.info()`

打印一条 info 级别的信息。您可以使用[字符串替换](https://www.mifengjc.com/api/Console.html#字符串替换)作为该方法的额外参数。

### `Console.log()`

用于记录信息的一般输出。您可以使用[字符串替换](https://www.mifengjc.com/api/Console.html#字符串替换)作为该方法的额外参数。

### `Console.profile()` 

启动浏览器的内置分析器（例如，Firefox 性能工具）。您可以为分析的文件指定名称。

### `Console.profileEnd()` 

停止分析器。您可以在浏览器的性能工具中查看生成的分析文件（例如，Firefox 性能工具）。

### `Console.table()`

将表格数据显示为表格。

### `Console.time()`

使用指定的名称启动 timer。在给定页面上最多可以运行 10,000 个同步计时器。

### `Console.timeEnd()`

停止指定的 timer 并记录自启动以来经过的时间（以秒为单位）。

### `Console.timeStamp()` 

在浏览器的 [时间轴](https://developer.chrome.com/devtools/docs/timeline) 或 Waterfall 工具中添加标记。

### `Console.trace()`

输出堆栈跟踪。

### `Console.warn()`

打印一条 warn 级别的信息。您可以使用[字符串替换](https://www.mifengjc.com/api/Console.html#字符串替换)作为该方法的额外参数。

## 用法

### 将文本输出到控制台

控制台最常用的功能是记录文本和其他数据。您可以分别使用 `console.log()`，`console.info()`，`console.warn()` 和 `console.error()` 方法生成四种类型的输出。这些结果中的每一个都会导致输出在日志中的样式不同，您可以使用浏览器提供的过滤控件来仅查看您感兴趣的输出类型。

每种输入方式有两种方法可以调用；你可以简单地传入一个对象列表，这些对象的字符串表示被连接成一个字符串，然后输出到控制台，或者你可以传入一个包含零个或多个替换字符串的字符串，后跟一个对象列表来替换它们。

#### 输出单个对象

使用日志记录方法的最简单方法是输出单个对象：

```js
var someObject = { str: "Some text", id: 5 };
console.log(someObject);
```

输出看起来像这样：

```html
[09:27:13.475] ({str:"Some text", id:5})
```

#### 输出多个对象

您还可以在调用日志记录方法时通过简单地列出它们来输出多个对象，如下所示：

```js
var car = "Dodge Charger";
var someObject = { str: "Some text", id: 5 }; 
console.info("My first car was a", car, ". The object is:", someObject);
```

输出看起来像这样：

```html
[09:28:22.711] My first car was a Dodge Charger . The object is: ({str:"Some text", id:5})
```

#### 字符串替换

Gecko 9.0 (Firefox 9.0 / Thunderbird 9.0 / SeaMonkey 2.6) 引入了对字符串替换的支持。将字符串传递给接受字符串的控制台对象的方法之一时，您可以使用这些替换字符串：

| 替换字符串 | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| %o 或 %O   | 输出 JavaScript 对象。单击对象名称可在检查器中展开有关它的更多信息。 |
| %d 或 %i   | 输出一个整数。支持数字格式，例如 `console.log("Foo %.2d", 1.1)` 将输出数字作为两个有效数字，前导 0：`Foo 01` |
| %s         | 输出一个字符串。                                             |
| %f         | 输出浮点值。支持格式化，例如 `console.log("Foo %.2f", 1.1)` 将数字输出到 2 位小数：`Foo 1.10` |

> **注意：** Chrome 中不支持精确格式化

每个都在格式字符串离开参数列表后拉出下一个参数。例如：

Each of these pulls the next argument after the format string off the parameter list. For example:

```js
for (var i=0; i<5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
}
```

输出看起来像这样：

```html
[13:14:13.481] Hello, Bob. You've called me 1 times.
[13:14:13.483] Hello, Bob. You've called me 2 times.
[13:14:13.485] Hello, Bob. You've called me 3 times.
[13:14:13.487] Hello, Bob. You've called me 4 times.
[13:14:13.488] Hello, Bob. You've called me 5 times.
```

#### 给控制台输出加样式

您可以使用 `%c` 指令将 CSS 样式应用于控制台输出：

```js
console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");
```

指令前的文本不会受到影响，但指令后面的文本将使用参数中的 CSS 声明设置样式。

![img](https://mdn.mozillademos.org/files/12527/CSS-styling.png)

> **注意：** 这种方法支持相当多的 CSS 属性；你应该试验一下，看看哪些是有效的。

### 在控制台中使用组

Requires Gecko 9.0(Firefox 9.0 / Thunderbird 9.0 / SeaMonkey 2.6)



您可以使用嵌套组通过直观地组合相关材料来帮助组织输出。要创建一个新的嵌套块，请调用 `console.group()` 。 `console.groupCollapsed()` 方法也类似，但创建的是折叠的块，需要点击按钮来展开它。

> **注意：** Gecko 尚不支持折叠组；目前 `groupCollapsed()` 方法与 `group()` 效果相同。

要退出当前组，只需调用 `console.groupEnd()` 。例如，给定该代码：

```js
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.debug("Back to the outer level");
```

输出看起来像这样：
![img](https://u.mifengjc.com/4f9d37165ed756ff.png)

### 计时器

Requires Gecko 10.0(Firefox 10.0 / Thunderbird 10.0 / SeaMonkey 2.7)



为了计算特定操作的持续时间，Gecko 10 在 `console` 对象中引入了定时器的支持。要启动计时器，请调用 `console.time()` 方法，为其指定一个名称作为唯一参数。要停止计时器，并以毫秒为单位获取经过的时间，只需调用 `console.timeEnd()` 方法，再次将计时器的名称作为参数传递。在给定页面上最多可同时运行 10,000 个计时器。

例如，给定该代码：

```js
console.time("answer time");
alert("Click to continue");
console.timeEnd("answer time");
```

将记录用户查看警报框所需的时间：

![img](https://u.mifengjc.com/7b2e44d03d725640.png)

> **注意：** 重要的是要注意，如果您使用它来记录网络流量的时间，计时器将报告事务的总时间，而网络面板中列出的时间只是标头所需的时间。如果启用了响应正文日志记录，则响应标题和正文组合列出的时间应与您在控制台输出中看到的时间相匹配。

### 堆栈跟踪

控制台对象还支持输出堆栈跟踪；这将显示到达您调用 `console.trace()` 的点所需的调用路径。给出这样的代码：

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

控制台中的输出如下所示：

![img](https://u.mifengjc.com/8c44873bd3c25b4b.png)

## 规范

| 规范                                            | 状态       | 备注       |
| :---------------------------------------------- | :--------- | :--------- |
| [Console API](https://console.spec.whatwg.org/) | 现行的标准 | 初始定义。 |

## 桌面浏览器兼容性

|                特性                | Chrome |  Edge   | Firefox |                      Internet Explorer                       | Opera  | Safari |
| :--------------------------------: | :----: | :-----: | :-----: | :----------------------------------------------------------: | :----: | :----: |
|              基础支持              |   1    |   12    |    2    | 8[1](https://www.mifengjc.com/api/Console.html#compat-note-1) |  10.5  |   3    |
|              `assert`              |   1    |   12    |   28    |                              8                               |   11   |   4    |
|              `clear`               |   25   |   12    |   39    |                              8                               |   12   |  6.1   |
|              `count`               |   1    |   12    |   30    |                              11                              |   11   |   4    |
|            `countReset`            |   68   |   79    |   62    |                            不支持                            |   55   |   13   |
|              `debug`               |   1    |   12    |    4    |                              10                              |   11   |   4    |
|               `dir`                |   1    |   12    |    8    |                              9                               |   11   |   4    |
|              `dirxml`              |   1    |   12    |   39    |                              11                              |   11   |   4    |
|              `error`               |   1    |   12    |    4    |                              8                               |  10.5  |   3    |
| `exception` (an alias for `error`) | 不支持 | 13 — 79 |   28    |                            不支持                            | 不支持 | 不支持 |
|              `group`               |   1    |   12    |    4    |                              11                              |   11   |   4    |
|          `groupCollapsed`          |   6    |   12    |    9    |                              11                              |   11   |  5.1   |
|             `groupEnd`             |   1    |   12    |    9    |                              11                              |   11   |   4    |
|               `info`               |   1    |   12    |    4    |                              8                               |  10.5  |   3    |
|               `log`                |   1    |   12    |    4    |                              8                               |  10.5  |   3    |
|             `profile`              |   4    |   12    |   16    |                              9                               |   11   |   4    |
|            `profileEnd`            |   4    |   12    |   16    |                              9                               |   11   |   4    |
|              `table`               |   27   |   13    |   34    |                            不支持                            |   11   |  6.1   |
|               `time`               |   1    |   12    |   10    |                              11                              |   11   |   4    |
|             `timeEnd`              |   1    |   12    |   10    |                              11                              |   11   |   4    |
|             `timeLog`              |   71   |   79    |   62    |                            不支持                            |   60   |   13   |
|            `timeStamp`             |   14   |   12    |   39    |                              11                              |   15   |   6    |
|              `trace`               |   1    |   12    |   10    |                              11                              |   11   |   4    |
|               `warn`               |   1    |   12    |    4    |                              8                               |  10.5  |   3    |
|          在 Worker 中可用          |  支持  |   12    |   38    |                             支持                             |  支持  |  支持  |

## 移动浏览器兼容性

|                特性                | Android | Chrome for Android | Edge mobile | Firefox for Android | IE mobile | Opera Android | iOS Safari |
| :--------------------------------: | :-----: | :----------------: | :---------: | :-----------------: | :-------: | :-----------: | :--------: |
|              基础支持              |    1    |         18         |    未知     |          4          |   未知    |      11       |     1      |
|              `assert`              |    1    |         18         |    未知     |         28          |   未知    |      11       |    3.2     |
|              `clear`               |   ≤37   |         25         |    未知     |         39          |   未知    |      12       |     7      |
|              `count`               |    1    |         18         |    未知     |         30          |   未知    |      11       |    3.2     |
|            `countReset`            |   68    |         68         |    未知     |         62          |   未知    |      48       |     13     |
|              `debug`               |    1    |         18         |    未知     |          4          |   未知    |      11       |    3.2     |
|               `dir`                |    1    |         18         |    未知     |          8          |   未知    |      11       |    3.2     |
|              `dirxml`              |    1    |         18         |    未知     |         39          |   未知    |      11       |    3.2     |
|              `error`               |    1    |         18         |    未知     |          4          |   未知    |      11       |     1      |
| `exception` (an alias for `error`) | 不支持  |       不支持       |    未知     |         28          |   未知    |     未知      |   不支持   |
|              `group`               |   37    |         18         |    未知     |          4          |   未知    |      11       |    3.2     |
|          `groupCollapsed`          |   37    |         18         |    未知     |          9          |   未知    |      11       |    5.1     |
|             `groupEnd`             |   37    |         18         |    未知     |          9          |   未知    |      11       |    3.2     |
|               `info`               |    1    |         18         |    未知     |          4          |   未知    |      11       |     1      |
|               `log`                |    1    |         18         |    未知     |          4          |   未知    |      11       |     1      |
|             `profile`              |   ≤37   |         18         |    未知     |         16          |   未知    |      11       |    3.2     |
|            `profileEnd`            |   ≤37   |         18         |    未知     |         16          |   未知    |      11       |    3.2     |
|              `table`               |   ≤37   |         27         |    未知     |         34          |   未知    |      11       |     7      |
|               `time`               |    1    |         18         |    未知     |         10          |   未知    |      11       |    3.2     |
|             `timeEnd`              |    1    |         18         |    未知     |         10          |   未知    |      11       |    3.2     |
|             `timeLog`              |   71    |         71         |    未知     |         62          |   未知    |      50       |     13     |
|            `timeStamp`             |   ≤37   |         18         |    未知     |         39          |   未知    |      14       |     6      |
|              `trace`               |    1    |         18         |    未知     |         10          |   未知    |      11       |    3.2     |
|               `warn`               |    1    |         18         |    未知     |          4          |   未知    |      11       |     1      |
|          在 Worker 中可用          |  支持   |        支持        |    未知     |         38          |   未知    |     未知      |    未知    |

\1. 在 Internet Explorer 8 和 9 中，当未打开开发人员工具时，`console` 对象是 `undefined`。此行为已在 Internet Explorer 10 中修复。

\2. 断言失败时抛出错误。

\3. `console.log` 的别名

\4. 不使用 Logger 记录数据。

\5. `console.group` 的别名

\6. `console.error` 的别名

## 注意

至少在 Firefox 中，如果页面定义了一个 `console` 对象，那么该对象将覆盖 Firefox 内置的对象。

- 在 Gecko 12.0 之前，控制台对象的方法仅在 Web 控制台打开时才起作用。从 Gecko 12.0 开始，输出将被缓存，直到打开 Web 控制台，然后显示。
- 值得注意的是 Firefox 的内置 `Console` 对象与 [Firebug](http://getfirebug.com/) 提供的对象兼容。

## 相关链接

- Web 控制台 — Firefox 中的 Web 控制台如何处理控制台 API 调用
- 远程调试i — 调试目标是移动设备时如何查看控制台输出
- 设备上的控制台日志记录 — 如何在 Firefox OS 设备输出日志


{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/11.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">

