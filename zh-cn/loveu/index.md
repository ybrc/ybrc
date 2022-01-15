# MissU


<!--more-->
<html>
<head>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <link href="css/default.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/js/jquery.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/js/garden.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/js/functions.js"></script>
    <!--script type="text/javascript" src="/js/jq.snow.js"></script>-->
</head>
<style type="text/css">
    body {
    margin: 0;
    padding: 0;
    background: #000;
    font-size: 12px;
    overflow: auto
}
#mainDiv {
    width: 100%;
    height: 100%
}
#loveHeart {
    float: right;
    width: 670px;
    height: 625px
}
#garden {
    width: 100%;
    height: 100%
}
#elapseClock {
    text-align: right;
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px
}
#words {
    font-family: "sans-serif";
    width: 500px;
    font-size: 24px;
    color: #666
}
#messages {
    display: none
}
#elapseClock .digit {
    font-family: "digit";
    font-size: 36px
}
#loveu {
    padding: 5px;
    font-size: 22px;
    margin-top: 80px;
    margin-right: 120px;
    text-align: right;
    display: none
}
#loveu .signature {
    margin-top: 10px;
    font-size: 20px;
    font-style: italic
}
#clickSound {
    display: none
}
#code {
    float: right;
    width: 440px;
    height: 800px;
    color: #333;
    font-family: "Consolas", "Monaco", "Bitstream Vera Sans Mono", "Courier New", "sans-serif";
    font-size: 12px
}
#code .string {
    color: #2a36ff
}
#code .keyword {
    color: #7f0055;
    font-weight: bold
}
#code .placeholder {
    margin-right: 15px
}
#code .space {
    margin-right: 7px
}
#code .comments {
    color: #3f7f5f
}
#copyright {
    margin-top: 20px;
    text-align: center;
    width: 100%;
    color: #666
}
#errorMsg {
    width: 100%;
    text-align: center;
    font-size: 24px;
    position: absolute;
    top: 100px;
    right: 0
}
#copyright a {
    color: #666
}
</style>

<body>
    <!--下面是调用方法和参数说明-->
    <!--<script>
        $(function() {
            $.fn.snow({
                minSize: 5, //雪花的最小尺寸
                maxSize: 50, //雪花的最大尺寸
                newOn: 150 //雪花出现的频率 这个数值越小雪花越多
            });
        });
    </script>-->
<div id="mainDiv">
        <div id="content">
            <div id="code">
                <span class="comments">/**</span><br />
                <span class="space" /><span class="comments">* Mrs·Cai：今天是2021年11月16日。</span><br />
                <span class="space" /><span class="comments">* 我写这个网站来纪念这个特殊的日子。 </span><br />
                <span class="space" /><span class="comments">* 虽然，我不是一个很擅长表达言语的人。 </span><br />
                <span class="space" /><span class="comments">* 但我希望你能记住曾经我们在一起的每一刻。</span><br />
                <span class="space" /><span class="comments">*/</span><br /> Girl U = <span class="keyword">new</span> Girl(<span class="string">"Mrs·Cai"</span>);<br/> Boy I = <span class="keyword">new</span> Boy(<span class="string">"Mr·Yang"</span>);<br
                />
                <span class="comments">// 今天是11月16日。 </span><br />
                <span class="comments">// 转瞬想起了你。</span><br />
                <span class="comments">// 我把你的美丽记录在日记里，让文字把你的青春铭记。</span><br />
                <span class="comments">// 我把你的笑容粘贴在日记里，让图片把你的活泼记忆。</span><br />
                <span class="comments">// 我把你的照片夹进日记里，让爱情把你的幸福牢系。</span><br />
                <span class="comments">// 对我来说是曾经那些重要的时刻，秒秒让我深深爱上你！</span><br />
                <span class="comments">// 当我凝视你的眼，当我听到你的声音。 </span><br />
                <span class="comments">// 当我闻到你身上淡淡的幽香。 </span><br />
                <span class="comments">//  </span><br /> 我爱你;
                <br />
                <span class="comments">//当我感受到我剧烈的心跳，我明白了：</span><br /> I Miss U;
                <br />
                <span class="comments">// 你在我心中最美。 </span><br /> 我本想照顾你 <br />
                <span class="comments">// 可是不行了！</span><br />
                <span class="comments">// 你虽为他人之妻, 但我依然喜欢着你！。</span><br />
                <span class="keyword">我会</span> 永远 <span class="keyword">喜欢</span>;<br />
                <span class="keyword">一直</span> 喜欢你 <br />
                <span class="placeholder" />我有一颗永远不变的心<br />
                <span class="placeholder" /><span class="comments">// 我认为这是一个重要的决定。</span><br />
                <span class="placeholder" /><span class="comments">// 你可以在任何时候决定。</span><br />
                <span class="placeholder" />喜欢你 = 想你<br /><br /> 我非常高兴能认识你
                <br />
            </div>
            <div id="loveHeart">
                <canvas id="garden"></canvas>
                <div id="words">
                    <div id="messages">
                        Mrs·Cai,I Miss U：
                        <div id="elapseClock"></div>
                    </div>
                    <div id="loveu">
                        <div class="signature">Miss U--Mr·Yang</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="bg1">
        <div class="main">
            <footer style="line-height:20px">
                <div id="copyright">
                    <a href='' target="_blank"></a>
                    <a href="" target="_blank"></a>
                    <a href="" target="_blank"></a>
                    </object>
                </div>
        </div>
    </div>
</div>

<script type="text/javascript">
        var offsetX = $("#loveHeart").width() / 2;
        var offsetY = $("#loveHeart").height() / 2 - 55;
        var together = new Date();
        together.setFullYear(2008, 09, -32);
        together.setHours(00);
        together.setMinutes(0);
        together.setSeconds(0);
        together.setMilliseconds(0);
        if (!document.createElement('canvas').getContext) {
            var msg = document.createElement("div");
            msg.id = "errorMsg";
            msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+";
            document.body.appendChild(msg);
            $("#code").css("display", "none")
            $("#copyright").css("position", "absolute");
            $("#copyright").css("bottom", "10px");
            document.execCommand("stop");
        } else {
            setTimeout(function() {
                startHeartAnimation();
            }, 5000);
            timeElapse(together);
            setInterval(function() {
                timeElapse(together);
            }, 500);
                adjustCodePosition();
            $("#code").typewriter();
        }
</script>
<embed src="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/LoveU.mp3" autostart="true" loop="true" hidden="true"></embed>
</body>
</html>

{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/LoveU.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

