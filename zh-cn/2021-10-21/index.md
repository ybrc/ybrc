# Mac OS 上的平铺窗口管理工具 yabai 

Mac OS 上的平铺窗口管理工具 yabai 
<!--more-->
#  纯键盘操作的 macOS 平铺式窗口管理器 - yabai

在 macOS 上，[已经有不少各具特色的窗口管理器](https://sspai.com/search/article?q=窗口管理)，例如 [Magnet](https://magnet.crowdcafe.com/), [Moom](https://manytricks.com/moom/) 等。不过，这些窗口管理器，都或多或少地依赖一些鼠标/触控板操作。

对于 Linux, 存在着另一种窗口管理工具：[平铺式窗口管理器](https://en.wikipedia.org/wiki/Tiling_window_manager)。常见的 [awesome](https://awesomewm.org/) 和 [i3](https://i3wm.org/), 都有着各自忠实的用户。

而前段时间出现的开源软件 [yabai](https://github.com/koekeishiya/yabai), 为 macOS 带来了平铺式窗口管理器。本文将对 yabai 的安装和使用做一个初步的介绍。

![img](https://cdn.sspai.com/2019/07/14/79f43b337e177d455edd8ef85c0e3db5.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)使用 yabai 管理的 macOS 桌面

# 什么是平铺式窗口管理器

与平铺式窗口管理器相对的，是**浮动式窗口管理器**，也就是 Windows 和 macOS 下默认的窗口管理器。在浮动式窗口管理器下，窗口可以**自由移动**、**自由调整大小**，窗口之间可以**相互重叠**。

而**平铺式窗口管理器**，能够将窗口平铺在桌面上，**窗口之间不能相互重叠**。

平铺式窗口管理器大多具有如下特点：

- 纯键盘操作

切换活动窗口、最大化/全屏、调整窗口大小、调整布局方式、添加/删除/切换桌面、移动窗口到其他桌面、移动窗口到其他显示器…… 所有与窗口管理的操作，都可以通过键盘来实现。部分窗口管理器甚至不提供鼠标操作，只提供键盘操作。

虽然通过纯键盘的方式管理窗口，会增加学习和记忆成本。但和 Vim、双拼输入法等软件类似，熟练掌握键盘后，能够大幅度提升窗口管理的效率和操作的爽快感。

- 自动进行窗口布局

在打开较多窗口、使用较大显示器的情况下，使用浮动式窗口管理器，需要花费精力不停切换窗口、调整窗口的大小和位置……

而平铺式窗口管理器，默认就能按照一定的布局方式，将窗口平铺在桌面上，从而减少手动调整窗口带来的工作量。

- 完善的多桌面、多显示器支持

多数平铺式窗口管理器，对于多个桌面、多个显示器之间的窗口切换都有着完善的支持。如下图片来自 Awesome 官网，从中可以感受到在多显示器环境中使用平铺式窗口管理器的体验：

![img](https://cdn.sspai.com/2019/07/14/e168ded51da2b2615c4824e3e3086c49.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)使用 Awesome 进行多显示器窗口管理

（图片来源：https://awesomewm.org/）

- 高度的可定制能力

包括 yabai 在内的平铺式窗口管理器，都能够通过配置文件进行丰富的设置，从而更加满足自己的使用习惯。

# 安装 yabai

**注意：为了使 yabai 正常工作，需要在运行 yabai 之前，[关闭 macOS 的系统完整性保护](https://developer.apple.com/library/archive/documentation/Security/Conceptual/System_Integrity_Protection_Guide/ConfiguringSystemIntegrityProtection/ConfiguringSystemIntegrityProtection.html)（SIP）。请自行了解该操作可能带来的安全风险，如果不确定，建议首先在虚拟机中体验。**

本节将介绍使用 Homebrew 安装 yabai, 导入 yabai GitHub 仓库中的示例配置，并安装 [skhd](https://github.com/koekeishiya/skhd) 做为 yabai 的快捷键工具的完整过程。更多安装方式，请参考 [yabai 的 README 文件](https://github.com/koekeishiya/yabai/blob/master/README.md)。

首先安装 yabai（如果电脑中没有 Homebrew, 请先[安装 Homebrew](https://brew.sh/)）:


{{< typeit code=java >}}
brew tap koekeishiya/formulae
{{< /typeit >}}
```Bash
brew install yabai
sudo yabai --install-sa
```

然后安装 skhd, skhd 用于给 yabai 提供快捷键支持，也可以用其他快捷键工具代替：

```Bash
brew install koekeishiya/formulae/skhd
```

下载 skhd 和 yabai 的示例配置文件：

```Bash
curl https://raw.githubusercontent.com/koekeishiya/yabai/master/examples/yabairc --output ~/.yabairc
curl https://raw.githubusercontent.com/koekeishiya/yabai/master/examples/skhdrc --output ~/.skhdrc
```

启动 skhd 和 yabai 服务：

```Bash
brew services start skhd
brew services start yabai
```

第一次启动 skhd 和 yabai 之后，macOS 会提示是否允许两者访问辅助功能。在系统偏好设置中添加权限后，再重启一次 skhd 和 yabai, 即可正常工作：

```Bash
brew services start skhd
brew services start yabai
```

# 使用 yabai

在完成上述步骤后，yabai 就已经启动，并在后台正常运行了。这时候会发现，所有的窗口都不听使唤了，无论怎么移动，怎么调整大小，窗口都会自动停靠在桌面的一角😂

这时候先不要慌，这是平铺式窗口管理器工作的正常现象。可以先按 `Control + Option + D` 切换回传统的浮动模式，就可以继续自由移动窗口了。准备好下一步操作后，按一下 `Control + Option + A`, 即可切换为平铺模式。

## 调整窗口分布

yabai 默认使用 Binary Space Partitioning 的布局来排列窗口：只打开一个窗口时，窗口充满全屏；打开两个窗口时，两个窗口各占屏幕的 1/2, 打开三个窗口时，一个窗口占屏幕的 1/2, 另外两个窗口各占屏幕的四分之一……

![img](https://cdn.sspai.com/2019/07/14/5e800af9841bdc31254888a2f17dddb9.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)Binary Space Partitioning 示意图

也就是说，在打开多个窗口的时候，屏幕被分割成多个大小不同的区域。这时候可以通过快捷键来移动窗口，将不同窗口放置在不同大小的区域。

- Shift + Option + h: 左移当前活动窗口
- Shift + Option + j: 下移当前活动窗口
- Shift + Option + k: 上移当前活动窗口
- Shift + Option + l: 右移当前活动窗口

熟悉 Vim 的话，应该不会 `h`, `j`, `k`, `l` 四个键控制方向感到陌生。

另外，还可以使用 `Option + r` 键来旋转桌面的布局，使较大窗口和较小窗口都能分布在屏幕的合适位置。

## 调整窗口大小

虽然 yabai 将屏幕分割为不同大小的区域，但有些时候，我们还是需要对窗口大小做进一步的调整，或者最大化某个窗口：

- Shift + Option + a: 增大当前活动窗口左侧
- Shift + Option + s: 增大当前活动窗口下侧
- Shift + Option + w: 增大当前活动窗口上侧
- Shift + Option + d: 增大当前活动窗口右侧
- Shift + Command + a: 缩小当前活动窗口左侧
- Shift + Command + s: 缩小当前活动窗口下侧
- Shift + Command + w: 缩小当前活动窗口上侧
- Shift + Command + d: 缩小当前活动窗口右侧
- Option + f: 最大化/恢复当前窗口
- Shift + Option + 0: 恢复原始窗口大小

## 切换活动窗口

在使用 yabai 之后，虽然能够继续使用鼠标/触控板来切换活动窗口，但 yabai 提供了一系列快捷键，可以更高效地实现活动窗口的切换。

- Option + h: 使左侧窗口成为活动窗口
- Option + j: 使下方窗口成为活动窗口
- Option + k: 使上方窗口成为活动窗口
- Option + l: 使右侧窗口成为活动窗口

## 使单个窗口成为浮动模式

对于某些不需要成为平铺模式，受窗口管理器控制的窗口（例如微信的聊天窗口，大部分时候处于关闭或最小化状态，只有需要回复消息时才会短暂打开），yabai 也能够灵活地将其单独设置为浮动模式，从而使窗口可以自动缩放。

- Option + t: 使当前活动窗口成为浮动模式
- Option + p: 使当前活动窗口成为浮动模式，以类似「画中画」的形式显示在屏幕右上角

## 多个桌面的管理

在窗口较多，单个桌面无法容纳下的时候，可以创建新的桌面，并将窗口移动到新的桌面上。

- Shift + Command + n: 创建新桌面
- Command + Option + n: 创建新桌面，并将当前活动窗口移动至新桌面

由于篇幅限制，更多快捷键组合，例如多显示器的支持等，在本文中不再详细介绍。具体请参考 [skhd 的默认配置文件](https://github.com/koekeishiya/yabai/blob/master/examples/skhdrc)，以及 [yabai 文档](https://github.com/koekeishiya/yabai/blob/master/doc/yabai.asciidoc)。

# 定制 yabai

yabai 和 skhd 都有着比较强的可定制能力，可以通过修改 `~/.yabairc` 和 `~/.skhdrc`, 对其进行个性化的设置。

## 打开状态栏

yabai 拥有一个简洁的状态栏，用于代替 macOS 的 Menubar, 显示当前桌面，以及时间和电量等信息。效果如下：

![img](https://cdn.sspai.com/2019/07/14/3b6a16dfc6dc4cee353bbde2b8bda44d.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)yabai 状态栏

状态栏默认不显示，可通过修改配置文件来打开。方法如下：

首先[打开终端](https://sspai.com/post/45534)，输入 `nano ~/.yabairc`（或 `vi ~/.yabairc`），打开 yabai 的配置文件，找到文件中 `bar settings` 的地方：

```Bash
# bar settings
yabai -m config status_bar                   off
yabai -m config status_bar_text_font         "Helvetica Neue:Bold:12.0"
yabai -m config status_bar_icon_font         "FontAwesome:Regular:12.0"
yabai -m config status_bar_background_color  0xff202020
yabai -m config status_bar_foreground_color  0xffa8a8a8
yabai -m config status_bar_space_icon_strip  I II III IV V VI VII VIII IX X
yabai -m config status_bar_power_icon_strip   
yabai -m config status_bar_space_icon        
yabai -m config status_bar_clock_icon        
```

此处就是 yabai 状态栏的设置选项。将第一行的 `off` 修改为 `on`, 即可打开状态栏。

在后面几行中，还可以对状态栏的字体、颜色、图标进行设置。在 `status_bar_space_icon_strip` 行，将 `I`, `II`, `III` 等修改为 emoji 或 FontAwesome 图标字体，就可以为对应序号的桌面，指定为对应的图标。（例如可以将前三个桌面分别设置为「写作」、「资讯」、「娱乐」图标，然后将同类 App 放在同一个桌面上）

配置文件修改保存之后，[安装 FontAwesome 4 字体](https://fontawesome.com/v4.7.0/)，设置[自动隐藏 macOS Menubar](https://support.apple.com/zh-cn/guide/mac-help/mchlp1446/mac)，然后执行如下命令重启 yabai, 即可看到状态栏：

```Bash
brew services restart yabai
```

## 设置窗口之间的间隔

在 yabai 的默认设置中，窗口之间的间隔较大。可以适当减小窗口之间的间隔，提高桌面空间利用率。

修改方法：在 `~/.yabairc` 中找到如下配置，适当减小相关数值即可：

```Bash
# general space settings
yabai -m config layout                       bsp
yabai -m config top_padding                  20
yabai -m config bottom_padding               20
yabai -m config left_padding                 20
yabai -m config right_padding                20
yabai -m config window_gap                   10
```

例如我将前四个值修改为 0, 最后一个值修改为 3 之后，效果如下图所示：

![img](https://cdn.sspai.com/2019/07/14/e8a4409b97b0e82863747080179dc126.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)yabai 缩小窗口之间的间隔后的效果

## 自定义快捷键、快速打开终端

yabai 的快捷键功能，是通过 skhd 来实现的。所以，修改 `~/.skhdrc`, 即可实现自定义快捷键。

例如，在 Linux 中，部分窗口管理器将 `Alt/Win + 回车` 做为打开终端的快捷键。而对于需要经常使用终端的 macOS 用户，就可以使用 skhd 为终端指定一个快捷键。

默认的 `.skhdrc` 中，第二行已经将 `Command + 回车` 做为打开 [kitty](https://sw.kovidgoyal.net/kitty/) 的快捷键：

```Bash
cmd - return : /Applications/Kitty.app/Contents/MacOS/kitty --single-instance -d ~
```

而如果自己的常用终端不是 kitty, 而是 [iTerm2](https://www.iterm2.com/), 只需将这一行修改为如下内容，即可使用 `Command + 回车` 快速打开 iTerm2.

```Bash
cmd - return : open /Applications/iTerm.app
```

## 通过脚本实现自动化操作

在 `.skhdrc` 中可以发现，所有 yabai 相关的操作，都是通过 `yabai -m` 命令，向 yabai 发消息来实现的。所以，我们也可以在自己的脚本中，加入 `yabai -m` 相关命令，来实现自动化操作。

如下脚本是一个简单的示例：

```Bash
#!/bin/bash

# 创建一个新桌面，并切换至新桌面
yabai -m space --create
id=$(yabai -m query --displays --display | grep "spaces")
yabai -m space --focus $(echo ${id:${#id}-3:1})

# 打开备忘录、提醒事项和文本编辑
open /Applications/Notes.app
open /Applications/Reminders.app
open /Applications/TextEdit.app
```

通过此脚本，即可创建一个新桌面，然后在新桌面上同时打开备忘录、提醒事项、文本编辑。当然也可以在 `.skhdrc` 中为这个脚本分配一个快捷键，只需一个按键，就可以执行上述一系列操作。

# 延伸阅读

yabai 还是一个比较新的软件，经过两天的试用，仍会偶尔遇到一些小 bug, 例如窗口无法自动调整大小等；另外，必须关闭 SIP 才能正常使用，也不方便大部分对 macOS 安全性有要求的人使用。希望后续的版本能够进一步完善，为我们带来更好的体验。

在 Windows 上，也可以尝试 bug.n, 这是一款基于 [AutoHotKey](https://www.autohotkey.com/) 的窗口管理工具，与 yabai 有着类似的功能：

- [koekeishiya/yabai: A tiling window manager for macOS based on binary space partitioning](https://github.com/koekeishiya/yabai)

如果想了解关于平铺式窗口管理器的更多内容，可以参考如下链接：

- [Why Use A Tiling Window Manager? Speed, Efficiency and Customization! - YouTube](https://www.youtube.com/watch?v=Lj1IfdKY0CU)
- [ChunkWM tutorial on macOS! - YouTube](https://www.youtube.com/watch?v=ZUMucXKU4Fw)
- [CHUNKWM + SKHD - Mac OS X Mojave deserves a Tiling Window Manager system too - YouTube](https://www.youtube.com/watch?v=k1YChPy8_L0)
- [5 reasons the i3 window manager makes Linux better | Opensource.com](https://opensource.com/article/18/8/i3-tiling-window-manager)
- [平铺式窗口管理器 Musca 初体验 · LinuxTOY](https://linuxtoy.org/archives/musca.html)
- [平铺式窗口管理器-Awesome | HaHack](https://www.hahack.com/tools/awesome/)
- [平铺式窗口管理器——Awesome · LinuxTOY](https://linuxtoy.org/archives/awesome.html)
{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/ybc1.mp3" name="今夜你会不会来" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}


