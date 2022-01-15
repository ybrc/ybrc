# 利用 Xcode 修改未越狱的 iOS 设备定位

<!--more-->
![IP定位](https://tool.lu/netcard/)

# 利用 Xcode 修改未越狱的 iOS 设备定位

修改手机定位是很多人都有的需求，有时候我们需要将手机位置修改成非自己实际所在的位置来测试或躲避某些 app 的审查。在 iOS 上，越狱后可以很方便地利用一些工具来修改定位，但实际上不越狱也能做到，下面就来说下如何使用 Mac 上的 Xcode 来实现这一需求。

## 准备工具

- 一台装有 Xcode（可从 Mac App Store 安装）的 Mac
- 一部需要修改位置的 iOS 设备
- 一个可用的 Apple ID
- 一根数据线

## 关于定位

手机中的定位是利用从多颗卫星接收到的信号来确定自己所在的坐标，即经（表南北方向）纬（表东西方向）度信息，而我们常见的经纬度坐标有三种标准来表示：

- **WGS-84**（World Geodetic System，世界大地测量系统，由美国制定，是目前世界上使用最广泛的地图坐标标准。）
- **GCJ-02**（地形图非线性保密处理算法，俗称火星坐标系、国测局坐标。高德地图和 Google Maps 国内等地图采用了此标准。）
- **BD-09**（百度地图使用的地理坐标系，其在GCJ-02上多增加了一次变换。）
  而 iOS 系统中默认的标准为 WGS-84，所以我们需要在修改想要的位置前将坐标利用一些工具转换为WGS-84 标准，才能在中国修改为想要的坐标。

## 获取坐标

下面以 “上海市静安寺地铁站” 的坐标为例：

1. 从[高德地图](http://lbs.amap.com/console/show/picker)获取 GCJ-02 标准的地理位置坐标,为121.446221,31.223083
   ![img](https://siri.cc/post-images/1580813744936.jpg)
2. 利用[在线转换工具](http://www.dituwa.com/tool/gpxaxes)将获取到的经纬度坐标由 GCJ-02 标准转换为 WGS-84 标准，为121.44162141,31.22496412
   ![img](https://siri.cc/post-images/1580816148247.png)

## 修改定位

1. 打开 Xcode，点击“Create a new Xcode project”,选择创建一个 iOS 的 Single View App，点击“Next”
   ![img](https://siri.cc/post-images/1580820746847.png)
   ![img](https://siri.cc/post-images/1580816766854.png)
2. 为你的项目填写一些基本信息，点击“Next”，并选择项目在 Mac 中的保存位置（这里需要一个开发者证书，可以在 Xcode 中的偏好设置里填写 Apple ID 申请一个，无需开发者账户，申请过程在这里不再详述。）
   ![img](https://siri.cc/post-images/1580817036942.png)
   创建完成后的界面大致长这样
   ![img](https://siri.cc/post-images/1580817286034.png)
3. 在左侧文件目录中右键，选择 “New File...” - “GPX File” - “Next” - “Create”，即可创建一个 gpx 文件
   ![img](https://siri.cc/post-images/1580906321675.png)
   ![img](https://siri.cc/post-images/1580906329237.png)
4. 将刚刚转换好的经纬度信息填写到 gpx 文件的 “lat” 和 “lon” 中
   ![img](https://siri.cc/post-images/1580906738105.png)
5. 把需要修改定位的 iOS 设备使用数据线连接到电脑并信任，在 Xcode 中将调试设备改为你刚刚连接电脑的设备，并点击设备左侧的项目名称，然后点击 “Edit Scheme”，在接下来弹出的窗口中把 “Default Location” 改成刚刚创建的 gpx 文件
   ![img](https://siri.cc/post-images/1580908412032.png)
   ![img](https://siri.cc/post-images/1580908419130.png)
6. 在 Xcode 中点击运行按钮，并在 iOS 设备中信任证书，即可在 iOS 设备中调试此 app，此时打开地图或者其它可以定位的 app，会发现定位已经被修改成功，如需取消修改，可以将 app 退出或重启设备，如果不进行操作，结束调试一段时间后，iOS 设备也会自动恢复到正常定位。
7. 注意要想不结束调试就直接拔掉数据线(手机也不要重启)⚠
{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/10.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}

<img src="https://tool.lu/netcard/">
