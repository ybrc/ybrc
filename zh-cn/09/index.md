# Xcode 快速调用终端窗口


<!--more-->
![IP定位](https://tool.lu/netcard/)

# <iOS 效率提升>利用 Xcode 打开终端(Terminal)

我们都知道IDEA 、 android studio 、vscode都有内置终端窗口，使用起来非常方便，然而Xcode 到目前还不支持。但是我们可以通过自定义Xcode 快捷键指令，来快速打开终端，并进入到项目根目录，来进行Git 或Cocopods 操作。

1.建立脚本

首先建立如下脚本, 功能是在当前工程根目录下打开终端:

```bash
#!/bin/sh

if [ -n "$XcodeProjectPath" ]; then
  open -a Terminal "$XcodeProjectPath"/..
else
  open -a Terminal "$XcodeWorkspacePath"/..
fi
```

并利用 `chmod +x` 将这个脚本设为可执行.

      ```bash
chmod +x open_terminal_xcode.sh && chmod 777 open_terminal_xcode.sh
      ```

2.将脚本设置到 Xcode 中

打开 Xcode 的 Behavior 界面, 如下所示:

![img](https:////upload-images.jianshu.io/upload_images/2144507-9b14217db3821a9e.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

打开 Xcode 的 Behavior 设置

然后点击如上图的加号, 出现新建的 Behavior:

![img](https:////upload-images.jianshu.io/upload_images/2144507-53a3c66787d9023e.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

新建 Behavior 并设置

将 behavior 的名称设置为 `Open Terminal` 或自定义的名字, 然后设置快捷键为 `command + T` 或自己想要的快捷键. 并且在右边的 Run 前面打钩, 然后将新建的脚本设置进去即可.

以后每次利用快捷键即可打开在 Xcode 中打开终端, 非常方便.

```bash
alias youzy="你的项目路径"
alias openyouzy="cd 你的项目路径 && open *.xcworkspace"
```

# Xcode 快捷键

最近在群里看到很多朋友在问 Xcode12 怎么代开控制台，我一直都是用快捷键所以没注意过这个问题。今天分享一下 Xcode 的快捷键！

| 快捷键               | 说明                                             |
| -------------------- | ------------------------------------------------ |
| command + shift + y  | 打开控制台                                       |
| command + shift + j  | 定位当前文件在导航                               |
| command + shift + o  | 输入后快速跳转到对应文件，还可输入方法名         |
| command + shift + L  | 打开资源文件                                     |
| command + shift + f  | 搜索项目                                         |
| command + shift + k  | clean 项目                                       |
| command + shift + t  | 新开当前项目                                     |
| command + shift + ,  | 编辑scheme                                       |
| command + shift + 2  | 打开可用调试设备                                 |
| command + shift + w  | 关闭项目                                         |
| command + r          | 运行项目                                         |
| command + b          | build 项目                                       |
| command + .          | 停止当前操作                                     |
| command + 0          | 开启/关闭 导航                                   |
| command + 1，2 ... 9 | 实操看下效果吧                                   |
| command + f          | 搜索当前文件                                     |
| command + L          | 跳转到对应行                                     |
| command + w          | 关闭当前文件                                     |
| command + y          | 关闭断点调试                                     |
| command + \          | 打断点                                           |
| command + ,          | 偏好设置                                         |
| command + return     | 仅编辑器                                         |
| control + 6          | 显示当前文件的方法，然后可以继续输方法名回车跳转 |
| control + 0          | 切换 Target                                      |
| control + 4          | 切换项目                                         |
| command + option + w | 保留当前打开，关闭其他文件                       |

欢迎补充比较实用的快捷键！



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/7.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">

