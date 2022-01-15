# Using Yabai

**Using Yabai**
<!--more-->
# Using Yabai

![yabai](https://marko.tech/media/yabai-intro.jpg)

`yabai` is an awesome window manager for macOS. It handles tiling, snapping, layouts, and controls your windows. It automatically modifies all your windows layout so you can focus on exactly what you need to.

As of the time of writing this article, macOS High Sierra 10.13.6, Mojave 10.14.4+, Catalina 10.15.0+ and Big Sur 11.0.1 are supported.

You can get layouts and have layouts like the one seen below:

![yabai](https://marko.tech/media/yabai.jpg)

Let’s get started installing `yabai`. First we need `XCode` if you don’t have it installed already.

```bash
xcode-select --install
```

To get all the yabai features running, you’ll have to disable macOS’s System Integrity Protection, at least temporarily. You can find the instructions on [Github](https://github.com/koekeishiya/yabai/wiki/Disabling-System-Integrity-Protection).

## Disabling System Integrity Protection

- Turn off your device

- Hold down `command ⌘` + `R` while booting your device.

- From the top menu bar, choose `Utilities`, then `Terminal`.

  - If you’re on **macOS 11.0.1**, you’ll have to disable `Requires Filesystem Protections` and `Debugging Restriction`.

  ```bash
  csrutil disable --with kext --with dtrace --with nvram --with basesystem
  ```

  > If you’re on **macOS 10.14** and **10.15**

  ```bash
  csrutil enable --without debug --without fs
  ```

  > If you’re on **macOS 10.13**

  ```bash
  csrutil disable
  ```

- Reboot

  - You can verify that **System Integrity Protection** is disabled by running `csrutil status`. This command will return `System Integrity Protection status: disabled` if it is turned off (may show as unknown for newer versions of macOS when disabling SIP partially).

## Install

If you **DO NOT** have `Homebrew` installed, first we’ll need to install it:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

If you aleady have `Homebrew` installed:

```bash
brew install koekeishiya/formulae/yabai
```

![system preferences for yabai](https://marko.tech/media/yabai-sys-prefs.png)

Next we’ll have to grant permission under `Accessibility` for `yabai`.

Next let’s run scripting:

```bash
sudo yabai --install-sa
```

Restart the dock to wrap this part up:

```bash
killall Dock
```

## Start

```bash
brew services start yabai
```

## Setup

To set Yabai up, we just need to configure a `.yabairc` file. This can live wherever but typically I keep dotfiles together in the home `~/` directory. Templates of these files are on listed on the official [Github](https://github.com/koekeishiya/yabai/tree/master/examples). But if you’re feeling lazy or just want to dive right in, here’s [my Yabai config](https://github.com/arbitrarily/yabairc/blob/master/.yabairc).

You can download these or just create the file like so:

```bash
touch ~/.yabairc
```

or to clone mine (previewed in the long snippet right below):

```bash
wget -qO- https://raw.githubusercontent.com/arbitrarily/yabairc/master/.yabairc > ~/.yabairc
```

My `yabairc` config file:

```bash
#!/usr/bin/env sh

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

# global settings
yabai -m config mouse_follows_focus          off
yabai -m config focus_follows_mouse          off
yabai -m config window_placement             second_child
yabai -m config window_opacity               off
yabai -m config window_opacity_duration      0.0
yabai -m config window_shadow                float
yabai -m config window_border                off
yabai -m config window_border_placement      inset
yabai -m config window_border_width          4
yabai -m config window_border_radius         -1.0
yabai -m config active_window_border_topmost off
yabai -m config active_window_border_color   0xff775759
yabai -m config normal_window_border_color   0xff505050
yabai -m config insert_window_border_color   0xffd75f5f
yabai -m config active_window_opacity        1.0
yabai -m config normal_window_opacity        1.0
yabai -m config split_ratio                  0.50
yabai -m config auto_balance                 off
yabai -m config focus_follows_mouse          off
yabai -m config mouse_follows_focus          off
yabai -m config mouse_modifier               ctrl
yabai -m config mouse_action1                move
yabai -m config mouse_action2                resize
yabai -m config window_topmost               off

# general space settings
yabai -m config layout                       bsp
yabai -m config top_padding                  15
yabai -m config bottom_padding               15
yabai -m config left_padding                 15
yabai -m config right_padding                15
yabai -m config window_gap                   15

# Float Windows
yabai -m rule --add app=Finder manage=off
yabai -m rule --add app=Tweetbot manage=off
# yabai -m rule --add app=Photoshop manage=off
# yabai -m rule --add app=Illustrator  manage=off
yabai -m rule --add app=Vox manage=off
yabai -m rule --add app=checkra1n manage=off
yabai -m rule --add app=ColorSlurp manage=off
yabai -m rule --add app=System Preferences manage=off
yabai -m rule --add app=VOX manage=off
yabai -m rule --add app=The\ Unarchiver manage=off
yabai -m rule --add app=System\ Preferences manage=off
yabai -m rule --add app=CleanMyMac\ X manage=off
yabai -m rule --add app=1Password\ 7 manage=off
yabai -m rule --add app=Surfshark manage=off
yabai -m rule --add app=Calculator manage=off
yabai -m rule --add app=Kodi manage=off
yabai -m rule --add app=VLC manage=off
yabai -m rule --add app="Axis & Allies 1942 Online" manage=off
yabai -m rule --add app="AxisAndAllies1942Online" manage=off
yabai -m rule --add app="Alfred Preferences" manage=off

echo "yabai configuration loaded.."
```

Mostly I created ‘float’ rules for applications and programs that don’t seem to play nice or aren’t responsive.

If you’d like to learn more about creating your own ‘layouts’ and ‘rules’, peep the official documentation for a detailed walk-through on [configuring `yabai` the way you’d like](https://github.com/koekeishiya/yabai/wiki/Configuration#tiling-options).

then:

```bash
chmod +x ~/.yabairc
```

## Key Binding

If you’d like to keybind all your commands, you can pair Yabai with [skhd](https://github.com/koekeishiya/skhd). `skhd` is a keybind manager daemon for Mac OS.

## Official Documentation

You can find the official Wiki documentation on [Github](https://github.com/koekeishiya/yabai/wiki).

{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@Music/ybc3.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
