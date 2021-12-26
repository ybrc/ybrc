/* 控制台输出 */
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

/* 返回随机颜色 */
function randomColor() {
	return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 鼠标点击文字特效 */
var a_idx = 0;
var a_click = 1;
var a = new Array("老哥稳", "带我飞", "厉害了word哥", "扎心了老铁", "Mr·Yang", "还有这种操作?", "就是有这种操作",
			"皮皮虾我们走", "笑到猪叫", "Mr·Yang", "不存在的", "黑车!", "我要下车!", "他还只是个孩子", "请不要放过他",
			"惊不惊喜?", "意不意外?", "我有一个大胆的想法", "你的良心不会痛吗", "你心里就没点b数吗", "没有,我很膨胀",
			"秀", "天秀", "爱你哟", "蒂花之秀", "造化钟神秀", "我去买几个橘子", "你就站在此地", "不要走动",
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
/* 轮播背景图片 */
$(function () {
	$.backstretch([
		  $cdnPrefix + "/images/background/saber1.jpg",
		  $cdnPrefix + "/images/background/saber2.jpg",
		  $cdnPrefix + "/images/background/wlop.jpg"
	], { duration: 60000, fade: 1500 });
});
/* 后置加载页面组件的背景图片 */
$(function() {
	/* 评论框加载背景图片 */
	$(".v[data-class=v] .veditor").attr('style', "background-image: url(" + $cdnPrefix + "/images/common/valinebg.webp) !important;");
});

function getCurrentDateString() {
	var now = new Date();
	var month = now.getMonth() + 1;
	var day = now.getDate();
	var hour = now.getHours();
	return "" + now.getFullYear() + (month < 10 ? "0" + month : month) + (day < 10 ? "0" + day : day) + (hour < 10 ? "0" + hour : hour);
}

/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "/failure.ico");
      $('[rel="shortcut icon"]').attr('href', "/failure.ico");
      document.title = '🤔 哦豁，搞J啊！';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "/favicon-32x32.png");
      $('[rel="shortcut icon"]').attr('href', "/favicon-32x32.png");
      document.title = '😄 欧拉，搞事！';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
	}
  });
}
/**
 * js网页雪花效果jquery插件 
 * 懒人建站 www.51xuediannao.com   整理
 * @see http://workshop.rs
 */
 (function($){
	
	$.fn.snow = function(options){
	
			var $flake 			= $('<div id="snowbox" />').css({'position': 'absolute', 'top': '-50px'}).html('&#10052;'),
				documentHeight 	= $(document).height(),
				documentWidth	= $(document).width(),
				defaults		= {
									minSize		: 10,		//雪花的最小尺寸
									maxSize		: 20,		//雪花的最大尺寸
									newOn		: 1000,		//雪花出现的频率
									flakeColor	: "#FFFFFF"	//懒人建站 www.51xuediannao.com   整理
								},
				options			= $.extend({}, defaults, options);
			
			var interval		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth - 100,
				 	startOpacity		= 0.5 + Math.random(),
					sizeFlake			= options.minSize + Math.random() * options.maxSize,
					endPositionTop		= documentHeight - 40,
					endPositionLeft		= startPositionLeft - 100 + Math.random() * 500,
					durationFall		= documentHeight * 10 + Math.random() * 5000;
				$flake.clone().appendTo('body').css({
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}).animate({
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},durationFall,'linear',function(){
							$(this).remove()
						}
					);
					
			}, options.newOn);
	
	};
	
})(jQuery);
/*<!------ 加载Live2d模型 | Load Live2d model ------> */
window.onload = () => {
      new l2dViewer({
      el: document.getElementById('L2dCanvas'),
      basePath: 'https://cdn.jsdelivr.net/gh/fordes123/cdn/notion/asset/model/3',
      modelName: 'dafeng_2',
      sounds: [
          'sounds/demo.mp3', // 相对路径是相对于模型文件夹
          'https://cdn.jsdelivr.net/npm/live2dv3@latest/assets/biaoqiang_3/sounds/demo.mp3' // 也可以是网址
        ],
      height: 500,
      width: 300
    })
}
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