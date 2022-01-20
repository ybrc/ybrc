# 距离传感器实验


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
# 距离传感器实验

![](https://dl.jackyu.cn/blog/2020/11/2020111012560189.png)

## 一、前言

第二次传感器实验课做的是距离传感器的实现

## 二、实验目的

1. 了解距离传感器的工作原理。
2. 通过对距离传感器信号的检测，了解其在电子产品中的实际应用。

## 三、实验原理

本实验通过距离传感器 GP2D12 获取传感器与阻挡物之间的距离，并将采集到的距离值通过串口输出到上位机程序。

1）GP2D12 参数：

1、测量范围：10-80cm
2、最大允许角度：>40度
3、电源电压：4.5-5.5V
4、平均功耗：35mA
5、峰值功耗：约200mA
6、更新频率/周期：25Hz/40ms
7、模拟输出噪声：<200mV
8、测量距离与输出模拟电压关系：2.4V-0.4V 模拟信号对应 10cm-80cm，输出与距离成反比例非线性关系。

2）距离和电压曲线

![距离传感器实验-Jacky's Blog](https://dl.jackyu.cn/blog/2020/11/2020111012464231.png)

从图中可以看出（我是没看出来），当被探测物体的距离小于 10cm 的时候，输出电压急剧下降，也就是说从电压读数来看，物体的距离应该是越来越远了。因此小于 10cm 时测量值不能被采用。

## 三、实验过程

\1. 在串口中直接打印出 value 值，通过卷尺测量传感器与障碍物的距离，在 Excel 中记录距离与 value 值

\2. 在 Excel 中对数据进行分析，因为 value 与距离并不是线性关系的，所以需要对函数进行分段处理，并拟合出斜率和纵截距
下面举个栗子，如果需要更高精度的结果，可以适当缩小测量间隔

![距离传感器实验-Jacky's Blog](https://dl.jackyu.cn/blog/2020/11/2020111012354379.png?x-oss-process=style%2Flarge)

\3. 通过在 Excel 中搞到的数据，我们可以用来完成 stadiometry.c 中 get_stadiometry_data() 函数的代码

```
#include "stadiometry.h"
#include "delay.h"
 
/*
* 名称：stadiometry_init()
* 功能：红外测距传感器初始化
* 参数：无
* 返回：无
* 修改：
* 注释：
*/
void stadiometry_init(void)
{
  APCFG |= 0x10;                                                //模拟 I/O 使能  
  P0SEL |= 0x10;                                                //端口0_4 功能选择外设功能
  P0DIR &= ~0x10;                                               //设置输入模式
  ADCCON3  = 0xB4;                                              //选择AVDD5为参考电压；12分辨率；P0_4  ADC  
  ADCCON1 |= 0x30;                                              //选择ADC的启动模式为手动
}
int in(float a, float b, float value) {
  return ((value > b)&&(value < a));
}
unsigned int value = 0;
/*
* 名称：float get_stadiometry_data(void)
* 功能：获取红外测距传感器状态
* 参数：无
* 返回：无
* 修改：
* 注释：
*/
float get_stadiometry_data(void)
{ 
  
  ADCCON3  = 0xB4;                                              //选择AVDD5为参考电压；12分辨率；P0_4  ADC    
  ADCCON1 |= 0x30;                                              //选择ADC的启动模式为手动
  ADCCON1 |= 0x40;                                              //启动AD转化             
  
  while(!(ADCCON1 & 0x80));                                     //等待ADC转化结束  
  value =  ADCL >> 4;
  delay_ms(1);
  value |= (ADCH << 4);                                         //取得最终转化结果，存入value中
  // 设置函数 拟合分段结果
  float _v[] = {1338,975,750,639,542,486,436,398,375,350,329,306,294,277,264};
  float _k[] = {-7.26,-4.5,-2.22,-1.94,-1.12,-1,-0.76,-0.46,-0.5,-0.42,-0.46,-0.24,-0.34,-0.26};
  float _b[] = {2064,1650,1194,1124,878,836,740,605,625,581,605,462,532,472};
  int length = 20;
  
  if((value >= 270)&&(value <= 1420))
  { 
    //根据曲线分段函数处理
    //实测分段两个端点的value值，来计算斜率。
    //注意value值是ADC原始值，与电压的对应关系为：3.3V*value/2048
    for (int i = 0; i < length-1; i++) {
      // 处理分段情况
      if (in(_v[i], _v[i+1], value)) {
        // 返回分段函数的值
        return (value - _b[i])/_k[i];
      }
    } 
    
  }
    
  return 0;
}
```

在上述代码中，我们运用C语言数组与循环体的特性，将拟合好的斜率和截距以及区间的端点值直接写入数组中，通过循环并用函数判断 value 值是否落在某个相邻两点的区间内，极大的减少了代码的重复性，提高了编码与实验的效率。（说人话就是不用写一堆if elseif 了）

\4. 为了提高测量精度，我们还可以通过多次获取距离来计算平均值的方式得到误差更小的距离

```
#include <ioCC2530.h>
#include <stdio.h>
#include "clock.h"
#include "delay.h"
#include "stadiometry.h"
#include "led.h"
#include "uart1.h"
 
/*
* 名称：main()
* 功能：逻辑代码
* 参数：无
* 返回：无
* 修改：
* 注释：
*/
void main(void)
{
  float distance = 0.0f;                           	            //存储红外测距状态变量
  char tx_buff[64];
  xtal_init();                                                  //系统时钟初始化     
  led_init();                                                   //LED初始化
  stadiometry_init();                                           //红外测距传感器初始化
  uart1_init(0x00,0x00);                                        //串口初始化
  
  while(1)
  {
    int tmp = 0;
    distance = 0.0f;
    float _distance = 0;
    // 取平均值处理
    for (int i = 0; i < 5; i++) {
      _distance = get_stadiometry_data();
      if (_distance!=0) {
        tmp++;
        distance += _distance;
      }
    }
    if(distance != 0) {
      // 取平均值处理
      distance /= tmp;
      sprintf(tx_buff,"distance:%.1f\r\n",distance);            //添加红外测距状态数据字符串到串口缓存
    } else {
      sprintf(tx_buff,"distance out of range!\r\n");
    }
    uart1_send_string(tx_buff);                                 //串口打印
    delay_s(1);                                                 //延时1s
  }
}
```

![距离传感器实验-Jacky's Blog](https://dl.jackyu.cn/blog/2020/11/2020111012560189.png?x-oss-process=style%2Flarge)串口输出

## 四、实验结论或体会

在本次实验前，我提前预习了这次实验的内容，提前标记好需要用到的传感器，以及了解了get_stadiometry_data()函数需要实现的要求，在课上我们迅速测量出20组距离与value的数据，并通过 Excel 计算出分段函数的斜率和纵截距，使用函数与循环的方法优雅的实现了多段函数的返回值，本来我们应该将工作重心放在打磨数据、进一步校准距离传感器上面的，但因为没听到实验要求，把附加题也做了，然后花费了很多时间在调试扩展实验的延迟数值上，导致距离传感器在测量较大距离时误差相对较大，最后我们通过增加取传感器返回值平均数的方法，减少了误差。
</div>
<img src="https://tool.lu/netcard/">



{{<music url="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@source/Music/013694.mp3" name="" artist="Mr·Yang" cover="https://cdn.jsdelivr.net/gh/ybrc/ybrc.github.io@img/avatar.png" fixed="true" volume="100" loop="all" autoplay="true" preload="auto" >}}
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
