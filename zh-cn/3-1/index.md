# web反调试之无限debugger饶过方案汇总


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
# web反调试之无限debugger饶过方案汇总

某些网站的前端代码反调试，打开控制台要看`Network`，控制台不断的`debugger`

![img](https://996station.com/wp-content/uploads/2021/03/20210311075108905.png?imageView2/0/format/webp/q/75)

## 方案一：右击`debugger`行数位置，点击`add conditional breakpoint..`

![img](https://996station.com/wp-content/uploads/2021/03/20210311073654567.png?imageView2/0/format/webp/q/75)

添加`false`，然后按回撤， 刷新网页，发现成功跳过无限`debugger`

![img](https://996station.com/wp-content/uploads/2021/03/20210311073730137.png?imageView2/0/format/webp/q/75)

## 方案二：文件替换

1.在js文件右击， 然后点击`save as ...`, 把js文件保存到本地。

![img](https://996station.com/wp-content/uploads/2021/03/20210311073847594.png?imageView2/0/format/webp/q/75)

2.修改保存到本地的js文件，将`debugger`成`false`保存js文件

![img](https://996station.com/wp-content/uploads/2021/03/20210311073933788.png?imageView2/0/format/webp/q/75)

3.在浏览器`Soures`获取需要替换的js文件`url`

![img](https://996station.com/wp-content/uploads/2021/03/20210311073956704.png?imageView2/0/format/webp/q/75)

4.使用fiddler动态拦截替换js，刷新网页即可

![img](https://996station.com/wp-content/uploads/2021/03/20210311074043739.png?imageView2/0/format/webp/q/75)

## 方案三：代码注入，注入代码到js文件

```
//1 .去除无限debugger
Function.prototype.__constructor_back = Function.prototype.constructor;
Function.prototype.constructor = function() {
    if(arguments && typeof arguments[0]==='string'){
        //alert("new function: "+ arguments[0]);
        if("debugger" === arguments[0]){
            //arguments[0]="console.log(\"anti debugger\");";
            //arguments[0]=";";
            return
        }
    }
   return Function.prototype.__constructor_back.apply(this,arguments);
}
```

## 方案四：手动替换

我们先构造一个空方法

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190810153307160.png)

将目标网站的方法偷梁换柱

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190810153643439.png)

由于网站代码强混淆，所以函数名称会不一样。下面放个GIF图

完美解决 但是注意不要刷新，页面刷新后需要重新替换。

## 方案五：禁用浏览器断点

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190810135629767.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI2NzEyOTc3,size_16,color_FFFFFF,t_70)
点击图中按钮，之后将不会再命中任何断点。这种方法虽然可以防止无限循环命中debugger断点，但是也存在很大的缺陷，因为对于其他代码，我们还是需要断点调试功能的。所以这个方法仅限于静态分析
</div>
<img src="https://tool.lu/netcard/">


{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/01369.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
