# MikroTik CRS309-1G-8S+IN 万兆交换机简单上手

**MikroTik CRS309-1G-8S+IN 万兆交换机简单上手**
<!--more-->
# MikroTik CRS309-1G-8S+IN 万兆交换机简单上手

- 开箱
- 上机
- 配置
- 测试
- 传输速度
- 链路聚合
- vLAN
- 克隆 mac

# 开箱

![image](https://blog.mitsea.com/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F59ea3481-3c03-4796-bf0e-e1412a7a7836%2Fimages%2Fb13cbb87-264e-42a9-a002-357a88c38b8e.jpeg&w=3840&q=100)

# 上机

# 配置

将来自路由器的网线通过模块接到交换机上，并把其他两个设备通过直连线也接上，不需要做任何操作就可以直接使用了。默认就是普通数据交换。

为了保证最大的文件传输速度，要改下 L2 MTU 到 9000，下面简单说下交换机和电脑的设置方法

1. 用 MAC 地址登录到交换机

2. ![image](https://blog.mitsea.com/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F59ea3481-3c03-4796-bf0e-e1412a7a7836%2Fimages%2F1895d689-6ab2-4df9-884d-e6fef562152c.png&w=3840&q=100)

3. 在 Interfaces 里找到活跃的接口，双击，修改 L2 MTU 到 9000

4. ![image](https://blog.mitsea.com/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F59ea3481-3c03-4796-bf0e-e1412a7a7836%2Fimages%2F25359af7-252e-4ec9-a7b1-fd3cf1b7b403.png&w=3840&q=100)

5. 对于 Windows，使用下面的命令修改 MTU

6. ```powershell
   netsh interface ipv4 set subinterface "需修改的连接名" mtu=9000 store=persistent
   ```

7. 

8.  Intel 网卡设置里有个巨型帧我不确定要不要改，我这边是改了的

9. ![image](https://blog.mitsea.com/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F59ea3481-3c03-4796-bf0e-e1412a7a7836%2Fimages%2F872d9654-0f54-4ff2-8d00-db5279535e3b.png&w=3840&q=100)

10. 对于 macOS，打开 系统偏好设置 - 网络 - 万兆网卡 - 高级... - 硬件，把 MTU 改成 特大(9000)

11. ![image](https://blog.mitsea.com/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F59ea3481-3c03-4796-bf0e-e1412a7a7836%2Fimages%2F35177b7e-acf1-4704-8b40-9be3a9d0a982.png&w=3840&q=100)

# 测试

## 传输速度

这边使用磁盘测试工具测试传输速度，可以看到速度都可以几近跑满 10Gbps，没啥大问题

## 链路聚合

1. 先把默认 bridge 里需要聚合的两个网口删掉

2. ![image](https://blog.mitsea.com/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F59ea3481-3c03-4796-bf0e-e1412a7a7836%2Fimages%2F88b1ed88-db7f-4289-a7b2-0a12b999d770.png&w=3840&q=100)

3. 添加 Bonding，我这里模式选的 802.3ad

4. ![image](https://blog.mitsea.com/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F59ea3481-3c03-4796-bf0e-e1412a7a7836%2Fimages%2F2863e58f-2cf2-4e45-baff-1e98ca53da51.png&w=3840&q=100)

5. 最后，再把这个 Bonding 给加回去 Bridge

6. ![image](https://blog.mitsea.com/_next/image?url=https%3A%2F%2Fsuper-static-assets.s3.amazonaws.com%2F59ea3481-3c03-4796-bf0e-e1412a7a7836%2Fimages%2F72dcf1bb-ac0b-40e8-913a-e6ceb3402d5f.png&w=3840&q=100)

## vLAN

设备不够多，回头再测。

## 克隆 mac

想定是把 Xbox Series X 的 mac 地址克隆给 PC，这样应该可以用加速盒子加速了。但是还缺一个光电模块，回头再测。

{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@Music/ybc5.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
