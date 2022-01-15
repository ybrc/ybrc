/* 控制台输出 */
document.onkeydown = function () {

    if (window.event && window.event.keyCode == 123) {
        alert("F12被禁用!🈲️禁止非法调试！有问题🤨联系WX:251150612");
        event.keyCode = 0;
        event.returnValue = false;
    }
    if (window.event && window.event.keyCode == 13) {
        window.event.keyCode = 505;
    }
    if (window.event && window.event.keyCode == 8) {
        alert(str + "\n请使用Del键进行字符的删除操作！");
        window.event.returnValue = false;
    }

}
function forbidKeyboard() {
    $(document).keydown(function(e) {
     /*9:Tab键, 17：Control键, 18:Alt键, 123:F12键, 83:S键*/
     var keyboardCode = [9, 17, 18, 123];
     for (i in keyboardCode) {
      if (keyboardCode[i] == e.keyCode) {
       return false;
      }
     }
     if ((e.keyCode == 83) && (e.ctrlKey || e.metaKey)) {
      return false;
     }
    });
    /*禁止文本选择功能*/
    $(document).bind("selectstart",function(){return false;});
   }
   $(function(){
    forbidKeyboard();
   });
setTimeout("alert('🈲️禁止非法传播📣,有问题🤨加微信联系:251150612')",1000)
setInterval(function () {
    check()
}, 3000);
var check = function () {
    function doCheck(a) {
        if (("" + a / a)["length"] !== 1 || a % 20 === 0) {
            (function () {
            }
            ["constructor"]("debugger")())
        } else {
            (function () { }
            ["constructor"]("debugger")())
        }
        doCheck(++a)
    } 
    try {
        doCheck(0)
    } catch (err) { }
};

/*

            alert("请勿非法调试,有问题请联系WX:251150612");  //用户窗口显示信息
            eval("debugger;console.log('检测到非法调试,请关闭后刷新重试!');");      //调试窗口显示信息
            window.location = "about:blank"; //将当前窗口跳转置空白页
    //location.href = "https://ybrc.github.io";  //跳转网站

*/

/* 样式代码 */
var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
var styleTitle2 = `
font-style: oblique;
font-size:14px;
color: rgb(244,167,89);
font-weight: 400;
`
var styleContent = `
color: rgb(30,152,255);
`

/* 内容代码 */
var title1 = '🌒 Mr·Yang '
var title2 = '不需要朋友的人'

// => 读取配置型（在配置文件里配置这些会变动的网址）
var offiUrl = 'http://ybrc.github.io'
var content = `
版 本 号：2.1.0    【版本：1.36】
编译日期：2021-10-09 19:39:39
版权声明：
1. 此站版权完全属于 "Mr·Yang所有".
2. 此站中所有css与js程序包，任何个人和机构在遵守下列条件的前提下授权永久使用：
    1）不进行任何形式的破解和裁剪，程序包完整引用
    2）保留此版权信息在控制台输出
我们保留对此版权信息的最终解释权.

🏠官网:  ${offiUrl}
📞微信:  https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/img/weplay.jpg
`
console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)
console.log('%c ', 'padding:121px 223px; font-size: 0; background:url("https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/img/sexx.jpg"); no-repeat;')
if(window.console) {
    var cons = console;
    if(cons) {
        cons.group("O(∩_∩)O哈喽！");
        cons.info("这位看代码的童鞋，不如留下你的友链来一起玩耍吧！8==D https://ybrc.github.io/");
        cons.log("%cMr·Yang's Blog", "background-image: linear-gradient(#063053, #395873, #5c7c99);font-size: 2rem;");
        cons.info("==============================此乃分界线==============================");
        cons.log("  █████▒█    ██  ▄████▄   ██ ▄█▀       ██████╗ ██╗   ██╗ ██████╗\n▓██   ▒ ██  ▓██▒▒██▀ ▀█   ██▄█▒        ██╔══██╗██║   ██║██╔════╝\n▒████ ░▓██  ▒██░▒▓█    ▄ ▓███▄░        ██████╔╝██║   ██║██║  ███╗\n░▓█▒  ░▓▓█  ░██░▒▓▓▄ ▄██▒▓██ █▄        ██╔══██╗██║   ██║██║   ██║\n░▒█░   ▒▒█████▓ ▒ ▓███▀ ░▒██▒ █▄       ██████╔╝╚██████╔╝╚██████╔╝\n ▒ ░   ░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▓▒       ╚═════╝  ╚═════╝  ╚═════╝\n ░     ░░▒░ ░ ░   ░  ▒   ░ ░▒ ▒░\n ░ ░    ░░░ ░ ░ ░        ░ ░░ ░\n          ░     ░ ░      ░  ░\n")
        cons.groupEnd();
    }
}
/*
var audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')

if (audio.paused) {
  audio.play()
} else {
  audio.pause()
}
console.log(audio)
document.getElementById('audio').autoplay = true; 
const help_p = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");//Set Help Audio Name
$('#help_play').click(function() {//pause-Play
if (help_p.paused == false) {
  help_p.pause();//pause if playing
} else {
  help_p.play();//Play If Pausing
}
});

$('#help_stop').click(function() {//Stop Button
  help_p.pause();//pause
  help_p.currentTime = 0; //Set Time 0
});
*/
/* 返回随机颜色 */
function randomColor() {
    return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 鼠标点击文字特效 */
var a_idx = 0;
var a_click = 1;
var a = new Array("Mr·Yang", "带我飞", "厉害了word哥", "我有一个大胆的想法", "娶你回家", "扎心了老铁", "Mr·Yang", "还有这种操作?", "就是有这种操作",
            "小姑娘", "跟我走", "Mr·Yang", "不存在的", "WhoAreYou", "我要下车!", "WHOAMI", "请不要放过他",
            "惊不惊喜?", "意不意外?", "你心里就没点b数吗", "没有,我很膨胀",
            "蔡", "美女", "爱你哟", "蒂花之秀", "造化钟神秀", "天生我才必有用", "关键时刻显身手", "不要走动",
            "我可能读了假书", "贫穷限制了我的想象力", "打call", "当然是选择原谅她啊", "你有freestyle吗",
            "北大还行撒贝宁", "不知妻美刘强东", "悔创阿里杰克马", "一无所有王健林", "普通家庭马化腾",
            "别点了", "求求你别点了", "你还点", "你再点!", "有本事继续点!", "你厉害", "我投翔",
            "w(·Д·)w", "(#`O′)", "（/TДT)/", "┭┮﹏┭┮", "_(:3」∠)_");
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        /* 点击频率，点击几次就换文字 */
        var frequency = 2;
        if (a_click % frequency === 0) {
            
            var $i = $("<span/>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
            y = e.pageY;
            $i.css({
                "z-index": 9999,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": randomColor(),
                "-webkit-user-select": "none",
                "-moz-user-select": "none",
                "-ms-user-select": "none",
                "user-select": "none"
            });
            $("body").append($i);
            $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function() {
                $i.remove();
            });
            
        }
    a_click ++;
        
    });
});

/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/img/favicon.ico");
      $('[rel="shortcut icon"]').attr('href', "https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/img/favicon.ico");
      document.title = '🤔 哦豁，搞J啊！';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/img/favicon.png");
      $('[rel="shortcut icon"]').attr('href', "https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/img/favicon.png");
      document.title = '😄 欧拉，搞事了！';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
    }
  });
}

/*<!------ 加载Live2d模型 | Load Live2d model ------> */
/*window.onload = () => {
      new l2dViewer({
      el: document.getElementById('L2dCanvas'),
      basePath: 'https://cdn.jsdelivr.net/gh/ybrc/live2d@master/live2d_3/model/Azue%20Lane(JP)/',
      modelName: 'dafeng_2',
      sounds: [
          'sounds/demo.mp3', // 相对路径是相对于模型文件夹
          'https://cdn.jsdelivr.net/npm/live2dv3@latest/assets/biaoqiang_3/sounds/demo.mp3' // 也可以是网址
        ],
      mobile: false,
      height: 200,
      width: 390
    })
}
*/
    /* 站点运行时间 */
function runtime() {
    window.setTimeout("runtime()", 1000);
    /* 请修改这里的起始时间 */
    let startTime = new Date('10/09/2021 01:36:49');
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let leavel = usedTime % (24 * 3600 * 1000);
    let hours = Math.floor(leavel / (3600 * 1000));
    let leavel2 = leavel % (3600 * 1000);
    let minutes = Math.floor(leavel2 / (60 * 1000));
    let leavel3 = leavel2 % (60 * 1000);
    let seconds = Math.floor(leavel3 / (1000));
    let runbox = document.getElementById('run-time');
    runbox.innerHTML = '本站已安全稳定的运行了<i class="far fa-clock fa-fw"></i> '
        + ((days < 10) ? '0' : '') + days + ' 天 '
        + ((hours < 10) ? '0' : '') + hours + ' 时 '
        + ((minutes < 10) ? '0' : '') + minutes + ' 分 '
        + ((seconds < 10) ? '0' : '') + seconds + ' 秒 ';
}
runtime();




$(function(){
  $('.js-timeline').Timeline();
});
    $('.timeline').Timeline({
        autoplay: true,
        // value: boolean | Enables Autoplay
        autoplaySpeed: 3000,
        // value: integer | Autoplay Speed in milliseconds
        mode: 'horizontal',
        // value: horizontal | vertical, default to horizontal
        itemClass: 'timeline-item',
        // value: item class
        dotsClass: 'timeline-dots',
        // value: dots item class
        activeClass: 'slide-active',
        // value: item and dots active class
        prevClass: 'slide-prev',
        // value: item and dots prev class
        nextClass: 'slide-next',
        // value: item and dots next class
        startItem: 'first', // first|last|number
        // value: first | last | number , default to first
        dotsPosition: 'bottom',
        // value: bottom | top, default to bottom
        pauseOnHover: true,
        // value: boolean | Pause Autoplay On Hover
        pauseOnDotsHover: false,
        // value: boolean | Pause Autoplay when a dot is hovered
    });

var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?a9c72ac5e9b4ae127cc2b8d4679d8525";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();


var system = {};
      var p = navigator.platform;
      system.win = p.indexOf("Win") == 0;
      system.mac = p.indexOf("Mac") == 0;
      system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
          if (system.win || system.mac || system.xll) {//如果是电脑
 
         $.getScript("/js/sakura.js");
     } else { //如果是手机

    }
    window.onload = function() {
      var context = new AudioContext();
      // Setup all nodes
      // ...
    }
   
