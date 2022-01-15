# 平铺式窗口管理器-yabai

**平铺式窗口管理器-yabai**
<!--more-->
# 平铺式窗口管理器-yabai

## 1. 什么是平铺式窗口管理器(Tiling window manager)

首先它是一个窗口管理器，可以快速选中需要操作的窗口，平铺窗口的特点就是不会相互重叠覆盖， 看两个图就能明白:
下面这个是普通的mac窗口布局
![img](https://img.kancloud.cn/e5/dd/e5ddc2047fe251b04964d80c06634d1f_1920x1080.png)

下面这个是经过 yabai管理后的窗口布局
![img](https://img.kancloud.cn/1a/3d/1a3d4371bdd74ba9e7ce69ee3dbd01e9_2880x1800.png)
平铺式窗口管理器允许窗口分组、 窗口分割、快速切换、调整窗口大小、切换焦点位置等等。

可以去这里看下[i3wm](https://www.youtube.com/watch?v=j1I63wGcvU4)的介绍，你会有更加直观的印象。
(i3wm是一款很出名的平铺式窗口管理器,可惜mac用不了)

## 2. yabai是什么

mac用不了i3wm，只能去找下替代品，找了半天，找到了 [yabai](https://github.com/koekeishiya/yabai)， 名字是挺奇怪的，用起来感觉还不错。
**yabai**是在 [chunkwm](https://github.com/koekeishiya/chunkwm)的基础上重写的，而 **chunkwm**是在 [kwm](https://github.com/koekeishiya/kwm)的基础上重写的...
不知道以后会不会有yabai2...

## 3. 安装yabai

1. 关闭SIP(系统完整性保护)
   ![img](https://img.kancloud.cn/ca/69/ca69135c87508adcbc68591ba81e49da_701x783.png)
   具体参考这里: https://www.jianshu.com/p/fe78d2036192
2. 安装homebrew
   大部分mac应该都装了，没装的参考官网步骤即可: https://brew.sh/
3. 安装yabai

```bash
brew install yabai
sudo yabai --install-sa
```

1. 安装快捷键支持:

```Bash
brew install koekeishiya/formulae/skhd
```

1. 拷贝默认配置:

```bash
curl https://raw.githubusercontent.com/koekeishiya/yabai/master/examples/yabairc --output ~/.yabairc
curl https://raw.githubusercontent.com/koekeishiya/yabai/master/examples/skhdrc --output ~/.skhdrc
```

1. 配置字体
   需要本机安装下 https://fontawesome.com/v4.7.0/, 直接下载压缩包解压点击字体文件即可，后续的定制化需要用到这些字体图标
2. 启动服务

```bash
brew services start skhd
brew services start yabai
```

第一次启动会请求授权, 请求授权后restart即可

```bash
brew services restart skhd
brew services restart yabai
```

启动后会发现窗口不太好控制了(不能浮动)， 使用快捷键 `ctrl+alt+d`就能切回普通的浮动模式，`ctrl+alt+a`可以切回你需要熟悉的平铺模式。

全部安装完成后,最好重启下电脑。

## 4. 自定义配置

这里贴一下我的配置, 里面包含了一些中文注释

```bash
vim ~/.skhdrc
# open terminal
# cmd - return : /Applications/iTerm2.app

# focus window(同一个空间切换窗口焦点)
alt - h : yabai -m window --focus west
alt - j : yabai -m window --focus south
alt - k : yabai -m window --focus north
alt - l : yabai -m window --focus east

# swap window(同一个空间调整窗口位置)
shift + alt - h : yabai -m window --swap west
shift + alt - j : yabai -m window --swap south
shift + alt - k : yabai -m window --swap north
shift + alt - l : yabai -m window --swap east

# move window
# shift + cmd - h : yabai -m window --warp west
# shift + cmd - j : yabai -m window --warp south
# shift + cmd - k : yabai -m window --warp north
# shift + cmd - l : yabai -m window --warp east

# balance size of windows
shift + alt - 0 : yabai -m space --balance

# make floating window fill screen
# shift + alt - up     : yabai -m window --grid 1:1:0:0:1:1

# make floating window fill left-half of screen
# shift + alt - left   : yabai -m window --grid 1:2:0:0:1:1

# make floating window fill right-half of screen
# shift + alt - right  : yabai -m window --grid 1:2:1:0:1:1

# create desktop, move window and follow focus - uses jq for parsing json (brew install jq)
shift + cmd - n : yabai -m space --create && \
                  index="$(yabai -m query --spaces --display | jq 'map(select(."native-fullscreen" == 0))[-1].index')" && \
                  yabai -m window --space "${index}" && \
                  yabai -m space --focus "${index}"

# create desktop and follow focus - uses jq for parsing json (brew install jq)
cmd + alt - n : yabai -m space --create && \
                index="$(yabai -m query --spaces --display | jq 'map(select(."native-fullscreen" == 0))[-1].index')" && \
                yabai -m space --focus "${index}"

# destroy desktop
cmd + alt - w : yabai -m space --destroy

# fast focus desktop(切换空间焦点)
# cmd + alt - x : yabai -m space --focus recent
# cmd + alt - z : yabai -m space --focus prev
# cmd + alt - c : yabai -m space --focus next
alt - 1 : yabai -m space --focus 1
alt - 2 : yabai -m space --focus 2
alt - 3 : yabai -m space --focus 3
alt - 4 : yabai -m space --focus 4
alt - 5 : yabai -m space --focus 5
alt - 6 : yabai -m space --focus 6
alt - 7 : yabai -m space --focus 7
alt - 8 : yabai -m space --focus 8
alt - 9 : yabai -m space --focus 9
alt - 0 : yabai -m space --focus 10

# send window to desktop and follow focus(将当前活跃窗口发送到指定空间)
# shift + cmd - x : yabai -m window --space recent; yabai -m space --focus recent
# shift + cmd - z : yabai -m window --space prev; yabai -m space --focus prev
# shift + cmd - c : yabai -m window --space next; yabai -m space --focus next
shift + cmd - 1 : yabai -m window --space  1; yabai -m space --focus 1
shift + cmd - 2 : yabai -m window --space  2; yabai -m space --focus 2
shift + cmd - 3 : yabai -m window --space  3; yabai -m space --focus 3
shift + cmd - 4 : yabai -m window --space  4; yabai -m space --focus 4
shift + cmd - 5 : yabai -m window --space  5; yabai -m space --focus 5
shift + cmd - 6 : yabai -m window --space  6; yabai -m space --focus 6
shift + cmd - 7 : yabai -m window --space  7; yabai -m space --focus 7
shift + cmd - 8 : yabai -m window --space  8; yabai -m space --focus 8
shift + cmd - 9 : yabai -m window --space  9; yabai -m space --focus 9
shift + cmd - 0 : yabai -m window --space 10; yabai -m space --focus 10

# focus monitor(切换显示器焦点)
# ctrl + alt - x  : yabai -m display --focus recent
# ctrl + alt - z  : yabai -m display --focus prev
# ctrl + alt - c  : yabai -m display --focus next
ctrl + alt - 1  : yabai -m display --focus 1
ctrl + alt - 2  : yabai -m display --focus 2
ctrl + alt - 3  : yabai -m display --focus 3

# send window to monitor and follow focus(将当前活跃窗口发送到指定显示器)
# ctrl + cmd - x  : yabai -m window --display recent; yabai -m display --focus recent
# ctrl + cmd - z  : yabai -m window --display prev; yabai -m display --focus prev
# ctrl + cmd - c  : yabai -m window --display next; yabai -m display --focus next
ctrl + cmd - 1  : yabai -m window --display 1; yabai -m display --focus 1
ctrl + cmd - 2  : yabai -m window --display 2; yabai -m display --focus 2
ctrl + cmd - 3  : yabai -m window --display 3; yabai -m display --focus 3

# move window
# shift + ctrl - a : yabai -m window --move rel:-20:0
# shift + ctrl - s : yabai -m window --move rel:0:20
# shift + ctrl - w : yabai -m window --move rel:0:-20
# shift + ctrl - d : yabai -m window --move rel:20:0

# increase window size(增加窗口大小aswd)
shift + alt - a : yabai -m window --resize left:-20:0
shift + alt - s : yabai -m window --resize bottom:0:20
shift + alt - w : yabai -m window --resize top:0:-20
shift + alt - d : yabai -m window --resize right:20:0

# decrease window size(减少窗口大小aswd)
shift + cmd - a : yabai -m window --resize left:20:0
shift + cmd - s : yabai -m window --resize bottom:0:-20
shift + cmd - w : yabai -m window --resize top:0:20
shift + cmd - d : yabai -m window --resize right:-20:0

# set insertion point in focused container
ctrl + alt - h : yabai -m window --insert west
ctrl + alt - j : yabai -m window --insert south
ctrl + alt - k : yabai -m window --insert north
ctrl + alt - l : yabai -m window --insert east

# rotate tree(逆时针旋转空间多个窗口)
alt - r : yabai -m space --rotate 90

# mirror tree y-axis(纵轴调换窗口)
alt - y : yabai -m space --mirror y-axis

# mirror tree x-axis(横轴调换窗口)
alt - x : yabai -m space --mirror x-axis

# toggle desktop offset
alt - a : yabai -m space --toggle padding; yabai -m space --toggle gap

# toggle window parent zoom
alt - d : yabai -m window --toggle zoom-parent

# toggle window fullscreen zoom(单个窗口进入或退出全屏)
alt - f : yabai -m window --toggle zoom-fullscreen

# toggle window native fullscreen(单个窗口进入或退出真全屏-上方的icon都会消失)
shift + alt - f : yabai -m window --toggle native-fullscreen

# toggle window border
shift + alt - b : yabai -m window --toggle border

# toggle window split type(切换分割方式)
alt - e : yabai -m window --toggle split

# float / unfloat window and center on screen(控制窗口是否进入float模式,进入的话就不会自动被排列)
alt - t : yabai -m window --toggle float;\
          yabai -m window --grid 4:4:1:1:2:2

# toggle sticky (show on all spaces)
alt - s : yabai -m window --toggle sticky

# toggle topmost (keep above other windows)
alt - o : yabai -m window --toggle topmost

# toggle sticky(+float), topmost, border and picture-in-picture
alt - p : yabai -m window --toggle sticky;\
          yabai -m window --toggle topmost;\
          yabai -m window --toggle border;\
          yabai -m window --toggle pip

# change layout of desktop(更换layout方式)
ctrl + alt - a : yabai -m space --layout bsp
ctrl + alt - d : yabai -m space --layout float
vim ~/.yabairc
#!/usr/bin/env sh

# bar settings
# 打开状态栏
yabai -m config status_bar                   on
yabai -m config status_bar_text_font         "Helvetica Neue:Bold:12.0"
yabai -m config status_bar_icon_font         "FontAwesome:Regular:12.0"
yabai -m config status_bar_background_color  0xff202020
yabai -m config status_bar_foreground_color  0xffa8a8a8
# 使用font-awesome替代罗马数字
yabai -m config status_bar_space_icon_strip                8 9  
yabai -m config status_bar_power_icon_strip   
yabai -m config status_bar_space_icon        
yabai -m config status_bar_clock_icon        

# global settings
yabai -m config mouse_follows_focus          off
yabai -m config focus_follows_mouse          off
yabai -m config window_placement             second_child
yabai -m config window_topmost               off
yabai -m config window_opacity               off
yabai -m config window_opacity_duration      0.0
yabai -m config window_shadow                off
yabai -m config window_border                off
yabai -m config window_border_placement      inset
yabai -m config window_border_width          1
yabai -m config window_border_radius         -1.0
yabai -m config active_window_border_topmost off
yabai -m config active_window_border_color   0xff775759
yabai -m config normal_window_border_color   0xff505050
yabai -m config insert_window_border_color   0xffd75f5f
yabai -m config active_window_opacity        1.0
yabai -m config normal_window_opacity        0.95
yabai -m config split_ratio                  0.50
yabai -m config auto_balance                 off
yabai -m config mouse_modifier               fn
yabai -m config mouse_action1                move
yabai -m config mouse_action2                resize

# general space settings(设置间隔,都设置成0)
yabai -m config layout                       bsp
yabai -m config top_padding                  0
yabai -m config bottom_padding               0
yabai -m config left_padding                 0
yabai -m config right_padding                0
yabai -m config window_gap                   0

echo "yabai configuration loaded.."
```

font-awesome图标可以直接在[这里](https://fontawesome.com/cheatsheet/free/regular)复制拷贝进来，就是直接复制图标(不是文字)，当然本地需要先安装字体。

配置后需要重启服务。

## 5. 自动隐藏mac自带菜单栏

自动隐藏自带菜单栏可以极大提高整体美观度，可以通过下面这个路径来进行设置: 系统偏好设置 -> 通用 -> 勾选自动隐藏和显示菜单
![img](https://img.kancloud.cn/f4/23/f423a24c94251f20fb7c86046a66598d_668x664.png)

## 6. 最终效果

![img](https://img.kancloud.cn/49/b1/49b14c7c9272827506f7e94c93af9188_2880x1800.png)

最最重要的几个快捷键:

- alt + 数字键 可以快速进入对应空间
- alt + h/j/k/l 可以快速聚焦当前空间的某个窗口
- alt + f 将某个窗口全屏(再按一次会推出全屏)
- shift + cmd + 数字键 可以将当前活跃窗口移动到指定空间
- ctrl + alt + 数字键 激活指定显示器
- ctrl + cmd + 数字键 将当前激活窗口发送到指定显示器上面去(指定显示器不能是浮动模式)

## 7. 参考链接

https://www.youtube.com/watch?v=j1I63wGcvU4
https://blanboom.org/2019/yabai/
https://fontawesome.com/cheatsheet/free/regular
https://github.com/koekeishiya/yabai
https://www.youtube.com/watch?v=AdwhjIg_Xe4

{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
