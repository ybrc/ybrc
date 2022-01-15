# 在MacOS中启动SSH服务


<!--more-->
![IP定位](https://tool.lu/netcard/)

# [在MacOS中启动SSH服务](https:///)



# 使用图形界面开启 SSH

1.点击桌面左上角的小苹果,然后选择"系统偏好设置..."
![系统偏好设置.jpg](https://s2.ax1x.com/2020/01/09/lRW1pD.jpg)

2.在系统偏好设置界面选择 "共享"
![在系统偏好设置界面选择 "共享.jpg"](https://s2.ax1x.com/2020/01/09/lRfGCT.jpg)
3.在共享界面勾选"远程登录"
![在共享界面勾选"远程登录.jpg"](https://s2.ax1x.com/2020/01/09/lR4wh6.jpg)
`若要远程登录这台电脑，请键入“ssh zhm@192.168.234.138”。`
4.在Windows中用"Xshell"连接
![在Windows中用"Xshell"连接.jpg](https://s2.ax1x.com/2020/01/09/lRIcFI.jpg)

# 使用终端命令行方式开启 SSH

1.查看 SSH服务 是否已经运行
`sudo launchctl list | grep sshd`
![查看 SSH服务 是否已经运行.jpg](https://s2.ax1x.com/2020/01/09/lRTtxK.jpg)
PS:如果 SSH服务 已运行,会显示:
`- 0 com.openssh.sshd`
2.没有开始 SSH服务 状态
![没有开始 SSH服务 状态.jpg](https://s2.ax1x.com/2020/01/09/lR72f1.jpg)
3.输入命令开启SSH服务
`sudo launchctl load -w /System/Library/LaunchDaemons/ssh.plist`
![开启SSH服务命令.jpg](https://s2.ax1x.com/2020/01/09/lRqVwF.jpg)
4.输入命令停止SSH服务
`sudo launchctl unload -w /System/Library/LaunchDaemons/ssh.plist`
![停止SSH服务命令.jpg](https://s2.ax1x.com/2020/01/09/lRb2M6.jpg)
5.在Linux中用SSH命令连接
![在Linux中用SSH命令连接.jpg](https://s2.ax1x.com/2020/01/09/lROTJJ.jpg)


{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/51.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">
