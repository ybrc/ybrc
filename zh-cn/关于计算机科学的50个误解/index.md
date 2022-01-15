# 关于计算机科学的50个误解


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
# 关于计算机科学的50个误解

计算机科学（Computer Science，简称 CS）是大学的热门专业。但是，社会上对这个专业有很多误解，甚至本专业的学生也有误解。

一个美国的 CS 老师写了[一份清单](https://www.netmeister.org/blog/cs-falsehoods.html)，列出了许多关于计算机科学的伪命题。它们都是 CS 学生信以为真，以后才慢慢明白，这些都是不正确或不完全正确的命题。

下面就是计算机科学的50个常见误解，欢迎补充。

![img](https://www.wangbase.com/blogimg/asset/201911/bg2019110306.jpg)

1、

CS 毕业生懂 C 和 C ++ 语言。

2、

Java 语言是几乎所有编程任务的合理选择。

3、

懂得编程 == 懂得计算机科学。

4、

CS 毕业生是优秀程序员。

5、

CS 毕业生会编程。

6、

CS 教授懂编程。

7、

CS 教授会使用计算机，或者懂得互联网原理。

8、

如果一个软件可以运行在我的笔记本电脑上，就可以运行在其他人的笔记本电脑上。

9、

StackOverflow 问答社区的答案都是可信的。

10、

如果一段代码出现到互联网上，就意味着你可以使用它。

11、

开源软件意味着更少的错误并且更加安全。

12、

开源软件（open software）和自由软件（free software）是同义词。

13、

git 和 GitHub 是同义词。

14、

Unix 和 Linux 是同义词。

15、

bash 和 sh 是同义词。

16、

AWS 和"云服务"是同义词。

17、

"隐私"和"秘密"是同义词。

18、

"加密"和"安全"是同义词。

19、

聪明的程序员会写出聪明的代码。

20、

编程能力是一名优秀软件工程师的最重要品质。

21、

拥有 CS 学位是成为一名优秀软件工程师的必要和充分条件。

22、

计算机解析时间和日期是轻而易举的。

23、

CS 毕业生知道如何验证电子邮件地址。

24、

雇主关心 CS 学生选修了哪些课程。

25、

分布式网络是可靠的。

26、

第三方服务是可靠的。

27、

AWS 云服务是可靠的。

28、

你可以将整个文件读入内存。

29、

在`fork`命令之后，父进程始终先执行。

30、

删除文件需要对该文件具有写权限。

31、

线程竞争很少发生。

32、

面向对象编程是最好和最常见的编程范式。

33、

CS 毕业生不会被黑客钓鱼，因为他们了解计算机。

34、

CS 毕业生了解计算机。

35、

CS 毕业生已经学过大多数的重要课程。

36、

电子表格和 Powerpoint 只适用于商业活动。

37、

程序员大部分时间都花在编程上。

38、

计算机可以按照指令进行操作。

39、

技术和算法是中立的。

40、

学习人文学科是浪费时间。

41、

你的职业生涯需要使用大量数学。

42、

如果谷歌使用它，那么别的公司也应该使用它。

43、

如果一种技术很先进，就应该使用它。

44、

如果一种技术超过5年，就不是新技术。

45、

只为了能够用上红黑树或某个高级算法，重写代码是值得的。

46、

大学毕业后，你还有机会遇到霍夫曼编码。

47、

具有 CS 学位的两个人，将具有非常相似的背景和知识。

48、

算法复杂性和大 O 表示法在现实世界中一直使用。

49、

学术界某种程度上跟现实世界不一样。

50、

没有人会输入这种数据，或者这样写代码。

（完）
</div>



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/2.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
