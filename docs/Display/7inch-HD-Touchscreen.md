---
description: Display
title: 7″ HD Touchscreen
keywords:
- RK3566 CM4 Serial
image: https://files.luckfox.com/wiki/Display
slug: /Display/7inch-HD-Touchscreen
sidebar_position: 9
last_update:
  date: 10/25/2024
  author: Rain
---

## 1. Introduction

7'' HD Touchscreen features a 1024×600 resolution and a 170° wide viewing angle with a capacitive touch interface. It includes fixed M2.5 screw holes and a flexible flat cable, saving installation space and is compatible with most standard HDMI devices to meet various application needs.

## 2. Product Specifications

| **Item**             | **Description**                  | **Unit** |
| -------------------- | -------------------------------- | -------- |
| Model                | 7'' HD Touchscreen               | /        |
| Size                 | 7.0                              | Inch     |
| Viewing Angle        | 170                              | Deg      |
| Resolution           | 1024×600                         | Pixels   |
| Dimensions           | 164.28 (H) × 99.17 (V) × 8.8 (D) | mm       |
| Display Area         | 154.58 (H) × 86.42 (V)           | mm       |
| Color Gamut          | 50%                              | NTSC     |
| Maximum Brightness   | 300                              | cd/m²    |
| Contrast Ratio       | 800:1                            | /        |
| Backlight Adjustment | PWM software control             | /        |
| Refresh Rate         | 60                               | Hz       |
| Display Interface    | Standard HDMI interface          | /        |
| Power Interface      | 5V power supply                  | /        |
| Power Consumption    | 2.2                              | Watt     |

## 3. Using with Raspberry Pi

### 3.1 Hardware Connection:

1. Prepare the cables as shown in the image below. The following will use the Raspberry Pi5 as a demonstration for the connection.<br/>![](photo/7inch-HD-Touchscreen/7-HD-Touchscreen-details-4.jpg)

2. Connect cables ①, ②, and ③ to their corresponding positions as shown in the image below.<br/>![](photo/7inch-HD-Touchscreen/7-HD-Touchscreen-details-4-1.jpg)


3. Connect cable ① to the LCD adapter ⑤ (or ⑥, depending on your Raspberry Pi model), and connect it to the Raspberry Pi's micro HDMI port.<br/>![](photo/7inch-HD-Touchscreen/7-HD-Touchscreen-details-4-2.jpg)

4. Connect cable ③ to the Raspberry Pi’s USB port, and cable ② to the Raspberry Pi’s 5V and GND pin headers.<br/>![](photo/7inch-HD-Touchscreen/7-HD-Touchscreen-details-4-3.jpg)

5. After all cables are connected, ensure everything is properly connected and power the system with a 5V power supply to use it.<br/>![](https://files.luckfox.com/wiki/Display/7HD_Touchscreen_01.png)
### 3.2 Software Setup

Supports Raspberry Pi OS, Ubuntu, Kali, and Retropie systems.

1. Connect the TF card to the PC.

2. Download and install the Raspberry Pi Imager from the [Raspberry Pi official website](https://www.raspberrypi.com/software/).

3. Launch the imager, select the TF card you wish to write the image to (Note: It's best to remove any other USB storage devices to prevent accidental erasure of data).

4. Preconfigure the system settings by holding CTRL+SHIFT+X (or clicking the small gear icon in the bottom-right corner) and then save.

5. Click the write button to write the data to the TF card.

6. After writing is complete, open the /boot/firmware/ directory and append the following lines to the end of the config.txt file, then save and exit:

   ```bash
   hdmi_group=2
   hdmi_mode=87
   hdmi_cvt 1024 600 60 6 0 0 0
   hdmi_driver=1
   ```

7.  Insert the TF card into the Raspberry Pi, power it up, and wait a few seconds for the display to initialize properly.

## 4. Using with Windows PC
### 4.1 Software Setting

**Supports Windows 11 / 10 / 8.1 / 8 / 7 on PC.**

1. Connect the LCD's touch interface to the USB port of the PC. After a moment, Windows will automatically recognize the touch functionality.
2. Connect the LCD's HDMI interface to the HDMI port of the PC. After a few seconds, you should see the LCD display normally.

**Note 1: When the computer is connected to multiple displays, the cursor can only be controlled on the main display using this LCD, so it is recommended to set the LCD as the primary display.**

**Note 2: Some PC USB ports may provide insufficient power due to aging; in this case, you can use a USB port on the back of the PC or connect an external 5V 2A power adapter.**

### 4.2 Calibration Touch on WindowsPC
#### Windows11

1. Go to Windows settings of the system, enter in the search bar and click on "Control Panel" (as shown in the figure below)<br/>![](photo/7inch-HD-Touchscreen/Windows11_touch_1_1.png)
2. In the pop-up "Control Panel" interface, select "Hardware and Sound"<br/>![](photo/7inch-HD-Touchscreen/Windows11_touch_2_1.png)
3. Select "Calibrate the screen for pen or touch input", then click "Settings" in the pop-up tablet settings<br/>![](photo/7inch-HD-Touchscreen/Windows11_touch_3.png)
4. The text prompt shown below will appear on the screen. Please click on the touchpad with your finger and the computer will recognize it as a touch screen.<br/>![](photo/7inch-HD-Touchscreen/Windows-touch-3.png)
  ```bash
【Note】If the touch screen is blank, press the "Enter" key, and the text prompt will switch to the touch screen. (The screen which displays the text prompt will be used as a touch screen!)
  ```
#### Windows10

1. Enter the Windows settings of the system, type in the search bar, and click "Calibrate the screen for pen or touch input" (as shown in the picture below):<br/>![](photo/7inch-HD-Touchscreen/Windows-touch-1.png)

2. Click "Setup" in the pop-up "Tablet PC Settings" interface:<br/>![](photo/7inch-HD-Touchscreen/Windows-touch-2.png)

3. The following text prompt will appear on the screen. Please tap the touch screen with your finger, and the computer will recognize it as a touch screen.<br/>![](photo/7inch-HD-Touchscreen/Windows-touch-3.png)

  ```bash
【Note】If the touch screen is blank, press the "Enter" key, and the text prompt will switch to the touch screen. (The screen which displays the text prompt will be used as a touch screen!)
  ```
## 5. Resouce
* [7'' HD Touchscreen 3D Drawing](https://files.luckfox.com/wiki/Display/draw/7inch-hd-touchscreen.zip)
## 6. PWM Dimming

First, remove the 0 ohm resistor highlighted in red in the diagram below, then connect the external PWM signal to the PWM pad on the screen.<br/>![](./photo/7inch-HD-Touchscreen/7HD_Touchscreen_02.png)