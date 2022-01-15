# timeline.js-时间轴轻松创建时间线滑块


<!--more-->
![IP定位](https://tool.lu/netcard/)

# timeline.js-时间轴轻松创建时间线滑块

## 开始

### 1.1. 与包装经理一起安装

时间轴.js现已设置完毕，并准备与 [Bower](https://bower.io/) 和[NPM](https://www.npmjs.com/package/timelinejs-slider)一起使用，并可使用以下命令进行安装。

```shell
bower install timelinejs-slider
npm install timelinejs-slider
```

### 1.2. 基础知识

包括 jQuery 库和插件：

```javascript
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="dist/js/timeline.min.js"></script>
```

包括插件 css 文件：

```html
<link rel="stylesheet" href="dist/css/timeline.min.css" />
```

Html 标记：

```html
<div class="timeline-container timeline-theme-1">
  <div class="timeline js-timeline">
    <div data-time="2017">
      your content or markup
    </div>
    <div data-time="2016">
      your content or markup
    </div>
    <div data-time="2015">
      your content or markup
    </div>
    <div data-time="2014">
      your content or markup
    </div>
    <div data-time="2013">
      your content or markup
    </div>
  </div>
</div>
```

开始插件：

```js
$('.js-timeline').Timeline();
```

## 例子

### 违约

```js
$('.timeline-1').Timeline();
```

### 点位置顶部

```js
$('.timeline-2').Timeline({
  itemClass: 'box-item',
  dotsPosition: 'top',
  startItem: 'last'
});
```

### 模式垂直和自动播放示例：

```js
$('.timeline-2').Timeline({
  autoplay: true,
  mode: 'vertical',
  itemClass: 'box-item',
});
```

## 选项

下面列出的可用选项。

| 名字         | 违约              | 类型                               | 信息                                                         |
| :----------- | :---------------- | :--------------------------------- | :----------------------------------------------------------- |
| 自动播放     | `false`           | `true``false`                      | 启用自动播放                                                 |
| 自动播放速   | `3000`            | `int(ms)`                          | 以毫秒为限的自动播放速度                                     |
| 模式         | `'horizontal'`    | `'horizontal'``'vertical'`         | 确定滑块的结构。                                             |
| 项目类       | `'timeline-item'` | `'class-name'`                     | 时间轴项目类值。便于自定义。                                 |
| 点类         | `'timeline-dots'` | `'class-name'`                     | 时间轴日期的容器类值。                                       |
| 开始         | `'first'`         | `'first'``'last'``'number'`        | 它决定哪些内容将在启动时激活。                               |
| 点定位       | `'bottom'`        | `'bottom'``'top'``'left'``'right'` | 设置时间轴日期的位置。顶部和底部仅用于水平位置。并且左侧和右侧仅使用垂直位置。 |
| 活动类       | `'slide-active'`  | `'class-name'`                     | 时间线项目和日期活动类                                       |
| 预科类       | `'slide-prev'`    | `'class-name'`                     | 时间轴项目和日期预科类                                       |
| 下一类       | `'slide-next'`    | `'class-name'`                     | 下一堂课的时间线项目和日期                                   |
| 暂停霍夫     | `true`            | `true``false`                      | 暂停悬停上的自动播放                                         |
| 暂停多特霍夫 | `false`           | `true``false`                      | 当点悬停时暂停自动播放                                       |

{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/10.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">
