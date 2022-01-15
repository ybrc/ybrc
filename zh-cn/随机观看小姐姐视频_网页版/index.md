# 随机观看小姐姐视频_网页在线版


<!--more-->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<style>
*{
    border: 0;
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}
#body {
    background: #000;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#ybrc {
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
}
#player {
    width: 100%;
    height: auto;
    max-height: 100%;
}
#buttons {
    height: 60px;
    padding: 10px;
    text-align: center;
}
#switch,
#next {
    background: #FFF;
    background: linear-gradient(to bottom, #FF2,#FB0);
    color: #AF2E08;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    padding: 0px 20px;
    margin: 0px 5px;
    border-radius: 20px;
}
</style>
<section id="ybrc">
        <video id="player" src="https://v.nrzj.vip/video.php" controls webkit-playsinline playsinline autoplay x-webkit-airplay='true' x5-video-player-type='h5' x5-video-player-fullscreen='true' x5-video-ignore-metadata='true' controlslist="nodownload"></video>
    </section>
    <section id="buttons">
        <button id="switch">🚩提神: 开🥰</button>
        <button id="next">👉🏻播放下一个😍</button>
    </section>
    <script>
    (function (window, document) {
        if (top != self) {
            window.top.location.replace(self.location.href);
        }
        var get = function (id) {
            return document.getElementById(id);
        }
        var bind = function (element, event, callback) {
            return element.addEventListener(event, callback);
        }
        var auto = true;
        var player = get('player');
        var randomm = function () {
            player.src = 'https://v.nrzj.vip/video.php/video.php?_t=' + Math.random();
            player.play();
        }
        bind(get('next'), 'click', randomm);
        bind(player, 'error', function () {
            randomm();
        });
        bind(get('switch'), 'click', function () {
            auto = !auto;
            this.innerText = '🚩提神: ' + (auto ? '开🥰' : '关😔');
        });
        bind(player, 'ended', function () {
            if (auto) randomm();
        });
    })(window, document);
</script> 
<script type='text/javascript' src="//libs.cdnjs.net/jquery.qrcode/1.0/jquery.qrcode.min.js"></script>
<div id="qrcode"></div> 
<a id="download" download="qrcode.jpg"></a>
<div id="btn" style="margin: 0 auto; text-align: center;">
<button id="save"><b>扫一扫手机👀</b></button>
</div>
<script type="text/javascript">
    jQuery('#qrcode').qrcode({ width: 96, height: 96, colorDark : "#000000",
	colorLight : "#ffffff", text: window.location.href });$("#save").click(function () {
        var canvas = $('#qrcode').find("canvas").get(0);
        var url = canvas.toDataURL('image/jpeg');$("#download").attr('href', url).get(0).click();
        return false;
    });
</script>
