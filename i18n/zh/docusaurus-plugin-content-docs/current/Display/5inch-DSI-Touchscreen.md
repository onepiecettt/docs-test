---
description: Display
title: 5″ DSI Touchscreen
keywords:
- RK3566 CM4 Serial
image: https://files.luckfox.com/wiki/Display
slug: /Display/5inch-DSI-Touchscreen
sidebar_position: 6
last_update:
  date: 10/23/2024
  author: Rain
---

<div id="luckfox_model_mark" style={{display:'none'}}>5″ DSI Touchscreen</div>

## 1. 介绍

5″ DSI Touchscreen是一款具有800x480分辨率和160°广角视野的电容触摸屏，支持多种操作系统且无需驱动安装，满足各种应用需求。

## 2. 产品参数

| **项目** | **描述**            | **单位** |
| -------- | ------------------- | -------- |
| 产品型号 | 5'' DSI Touchscreen | /        |
| 尺寸     | 5.0                 | Inch     |
| 可视角度 | 160                 | Deg      |
| 分辨率   | 800x480             | Pixels   |
| 产品尺寸 | 120.70(H)×77.20(V)  | mm       |
| 显示区域 | 109.00(H)×65.80(V)  | mm       |
| 色域     | 50%                 | NTSC     |
| 最大亮度 | 280                 | cd/m²    |
| 对比度   | 1000:1              | /        |
| 背光调节 | 软件调光            | /        |
| 刷新率   | 60                  | Hz       |
| 功耗     | 1.9                 | Watt     |

## 3. 搭配树莓派使用

### 3.1 硬件连接

1. 使用FFC线，将5inch DSI LCD连接到Raspberry Pi主板的15PIN DSI接口。<br/>
2. 为了方便使用，可以把Raspberry Pi主板通过螺丝固定的5inch DSI LCD的背面，并组装上铜柱。如下图所示：<br/>![](./photo/5inch-DSI-Touchscreen/5DSI_touchscreen01.png)

### 3.2 软件设置

支持Raspberry Pi OS/Ubuntu/Kali 和 Retropie系统。

1. 将TF卡连接到PC

2. 从[树莓派官网](https://www.raspberrypi.com/software/)下载安装 Raspberry Pi Imager

3. 打开烧写器，选择要写入图像的 TF 卡(注意：最好移除其它U盘设备，以防将U盘文件擦除)。

4. 预先配置系统，按住 CTRL+SHIFT+X(或点击右下角小齿轮)，设置完成点击保存即可。

5. 单击烧录按钮，将数据写入TF卡。

6. 烧录完成后，打开/boot/firmware/目录下的config.txt文件，将以下语句添加到config.txt文件末尾，然后保存退出。

   **注意：由于Pi5/CM4/CM3+/CM3具有两个mipi DSI接口，请注意使用正确的DSI接口和指令，默认推荐使用DSI1。**

   ```bash
   dtoverlay=vc4-kms-v3d
   #DSI1 Use
   dtoverlay=vc4-kms-dsi-7inch
   #DSI0 Use (Only Pi5/CM4)
   #dtoverlay=vc4-kms-dsi-7inch,dsi0
   ```

7. 将TF卡插入树莓派，给树莓派上电，正常等待几秒后可正常显示。

### 3.3 软件调光

可以在终端输入以下命令可以控制背光亮度：

```
echo X | sudo tee /sys/class/backlight/*/brightness
```

其中X表示0~255中的任意数字。0表示背光最暗，255表示背光最亮。

例如：

```
echo 100 | sudo tee /sys/class/backlight/*/brightness
echo 0 | sudo tee /sys/class/backlight/*/brightness
echo 255 | sudo tee /sys/class/backlight/*/brightness
```

### 3.4 显示旋转

#### 在Bookworm系统上旋转

##### 图形界面旋转

1.打开"Screen Configuration"应用程序；<br/>![](photo/5inch-DSI-Touchscreen/7DSI_touchscreen05.png)

2.进入"Screen"->"DSI-1"->"Touchscreen"，勾选"6-0038 generic ft5x06(79)"<br/>![](photo/5inch-DSI-Touchscreen/7DSI_touchscreen06.png)

3.点击"Apply"，然后关闭当前窗口，根据弹窗提示进行Reboot，即可完成指定触摸屏；<br/>![](photo/5inch-DSI-Touchscreen/7DSI_touchscreen07.png)<br/>![](photo/5inch-DSI-Touchscreen/7DSI_touchscreen08.png)

4.进入"Screen"->"DSI-1"->"Orientation" ，勾选您需要旋转的方向，最后点击"Apply"即可完成显示和触摸同步旋转。<br/>![](./photo/5inch-DSI-Touchscreen/7DSI_touchscreen09.png)

##### 命令行旋转

1.打开cmdline.txt文件

```
sudo nano /boot/firmware/cmdline.txt
```

2.在cmdline.txt文件开头添加“显示旋转”对应角度的命令，保存重启即可生效。（注意需要添加在同一行）

```
video=DSI-1:800x480M@60,rotate=90
```

通过将变换值更改为90、180 和 270 来更改“显示旋转”的角度。

3.保存后重启树莓派即可

```
sudo reboot
```

#### Bullseye/Buster显示旋转

##### 图形界面旋转

1.打开"Screen Configuration"应用程序；<br/>![](./photo/5inch-DSI-Touchscreen/7DSI_touchscreen10.png)

2.进入"Screen"->"DSI-1"->"Orientation" ，勾选您需要旋转的方向，最后点击"Apply"，即可完成显示旋转。<br/>![](./photo/5inch-DSI-Touchscreen/7DSI_touchscreen11.png)<br/>![](./photo/5inch-DSI-Touchscreen/7DSI_touchscreen12.png)

##### 命令行旋转

1.打开cmdline.txt文件

```
sudo nano /boot/cmdline.txt
```

2.在cmdline.txt文件开头添加“显示旋转”对应角度的命令，保存重启即可生效。（注意需要添加在同一行）

```
video=DSI-1:800x480M@60,rotate=90
```

通过将变换值更改为90、180 和 270 来更改“显示旋转”的角度。

3.保存后重启树莓派即可

```
sudo reboot
```

#### Stretch/Jessie显示旋转

**对于一些比较古老的系统，它们不使用vc4-kms-v3d 或 vc4-fkms-v3d 驱动模式，显示旋转方法如下**

1. 在config.txt文件中加入语句（config文件位于TF卡根目录，即/boot中）：

```
display_rotate=1 #1：90；2: 180； 3: 270
```

2. 保存后重启树莓派即可

```
sudo reboot
```

### 3.5 触摸旋转
#### Bookworm触摸旋转

如果用图形界面的旋转方法，可以在Screen Layout Editor窗口中勾选Touchscreen，即可同步旋转触摸。参考前文显示旋转的方法。命令行旋转的方法参考下文：

1.新建99-waveshare-touch.rules文件

```
sudo nano /etc/udev/rules.d/99-waveshare-touch.rules
```

2.添加以下代码

```
#90度：
ENV{ID_INPUT_TOUCHSCREEN}=="1", ENV{LIBINPUT_CALIBRATION_MATRIX}="0 -1 1 1 0 0"

#180度：
#ENV{ID_INPUT_TOUCHSCREEN}=="1", ENV{LIBINPUT_CALIBRATION_MATRIX}="-1 0 1 0 -1 1"

#270度：
#ENV{ID_INPUT_TOUCHSCREEN}=="1", ENV{LIBINPUT_CALIBRATION_MATRIX}="0 1 0 -1 0 1"
```

3. 保存后重启树莓派即可

```
sudo reboot
```

#### Bullseye/Buster触摸旋转

Bullseye/Buster以及其他部分系统显示旋转后，触摸方向不一致，需要按下文操作进行触摸旋转：

1. 安装libinput

   ```
   sudo apt-get install xserver-xorg-input-libinput
   ```

   如果你安装的是Ubuntu系统，或者是Jetson Nano。安装指令为

   ```
   sudo apt install xserver-xorg-input-synaptics
   ```

2. 在/etc/X11/下创建xorg.conf.d目录 (如果该目录已存在，则直接进行第3步)

   ```
   sudo mkdir /etc/X11/xorg.conf.d
   ```

3. 复制40-libinput-conf 文件到刚刚创建的目录下

   ```
   sudo cp /usr/share/X11/xorg.conf.d/40-libinput.conf /etc/X11/xorg.conf.d/
   ```

4. 编辑该文件

   ```
   sudo nano /etc/X11/xorg.conf.d/40-libinput.conf
   #找到 touchscreen的部分，在里面添加对应的旋转角度指令，然后保存即可
   #90°Right触摸旋转：
   Option "CalibrationMatrix" "0 1 0 -1 0 1 0 0 1"
   #180° Inverted触摸旋转： 
   #Option "CalibrationMatrix" "-1 0 1 0 -1 1 0 0 1"
   #270° Left旋转： 
   #Option "CalibrationMatrix" "0 -1 1 1 0 0 0 0 1"
   ```
   类似下图位置：<br/>![](./photo/5inch-DSI-Touchscreen/7DSI_touchscreen13.png)

5. 保存并重启树莓派

   ```
   sudo reboot
   ```

   完成以上步骤后触摸将会进行旋转。
## 资料
### 图纸
- [5' DSI Touchscreen 3D图纸](https://files.luckfox.com/wiki/Display/draw/5inch-dsi-touchscreen.rar)
## FAQ

**Q:  这个屏幕会自动关闭吗，还是需要执行命令才能关闭？**

A: 这取决于系统。如果系统有休眠功能，屏幕会变黑。如果是Raspberry Pi的最新官方系统Bookworm，默认情况下没有休眠功能。