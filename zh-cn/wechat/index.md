# 前端Video 微信浏览器自动播放和默认全屏


<!--more-->
{{< music auto="https://music.163.com/#/playlist?id=60198" >}}
早期因为带宽和流量的因素，移动端浏览器禁止视频自动播放，现在 WI-FI 越来越普及，流量也便宜了，所以有些必要自动播放的，可以支持自动播放了。

在移动端浏览器， video 在用户点击播放或者通过 API video.play() 触发播放时，会强制以全屏置顶的形式进行播放，设计的初衷可能是因为全屏能提供更好的用户体验。

```html
<video id="player" controls autoplay x5-video-player-type="h5" playsinline="true" webkit-playsinline="true" x-webkit-airplay="true" x5-video-orientation="portraint" x5-video-player-fullscreen="true">
    <source src="..." type="video/mp4">
```

playsinline="true" webkit-playsinline="true 解决 iOS 自动播放全屏问题
x5-video-player-type="h5" x5-video-player-fullscreen="true" 解决安卓同层级播放
iOS 微信下通过 WeixinJSBridgeReady 事件进行自动播放

```javascript
document.addEventListener(
    'WeixinJSBridgeReady',
    function() {
        var video = document.getElementById("player");
        video.play();
    },
    false
);
```
Android 可以尝试监听 touchstart 事件，用户触摸屏幕后自动播放

```javascript
document.addEventListener('touchstart', function(){ 
    var video = document.getElementById("player");
        video.play();
}, false);
```
