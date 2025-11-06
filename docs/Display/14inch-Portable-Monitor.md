---
description: Display
title: 14″ Portable Monitor
keywords:
- RK3566 CM4 Serial
image: https://files.luckfox.com/wiki/Display
slug: /Display/14inch-Portable-Monitor
sidebar_position: 12
last_update:
  date: 12/26/2024
  author: Rain
---

## 1. Introduction

The 14″ Portable Monitor features a 1920×1200 IPS panel with 100% sRGB color gamut and supports an ultra-wide 178° viewing angle. It comes with 75mm fixed M4 VESA mounting holes, saving installation space, and is compatible with most standard HDMI devices, making it suitable for various applications.

## 2. Product Specifications

| **Item**          | **Description**      | **Unit** |
| ----------------- | -------------------- | -------- |
| Model             | 14″ Portable Monitor | /        |
| Size              | 14                   | Inch     |
| Viewing Angle     | 178                  | Deg      |
| Resolution        | 1920×1200            | Pixels   |
| Dimensions        | 311.43(H)×217.13(V)  | mm       |
| Display Area      | 301.60(V)×188.50(H)  | mm       |
| Color Gamut       | 100%                 | sRGB     |
| Max Brightness    | 300                  | cd/m²    |
| Contrast          | 1500:1               | /        |
| Backlight Adj.    | OSD Menu             | /        |
| Refresh Rate      | 60                   | Hz       |
| Display Ports     | mini HDMI/Type-C     | /        |
| Power input       | 5V                   | /        |
| Power Consumption | 4.6                  | Watt     |

## 3.Interface<br/>![](./photo/14inch-Portable-Monitor/14inch-Portable-Monitor-details-35.jpg)
## 4. Menu Button Description
### 4.1 Button Functions
**Menu Adjustment Button (Rotary Knob)**

> * Scroll up: Adjust volume
> * Scroll down: Adjust brightness
> * Press down: Open OSD main menu / Confirm selection
> * Scroll within menu: Navigate menu items or adjust values

**Power Button**

> * Short press (outside menu): Open input source selection panel (Auto / Type-C / HDMI)
> * Short press (inside menu): Exit menu interface
> * Long press: Turn backlight on/off

🔴 **Note: **Normally, the screen will automatically turn on when a valid signal is detected after power on, no manual button press required.

### 4.2 OSD Main Menu Overview
> * Pressing down the rotary knob enters the OSD main menu, where you can adjust the following:
> * Picture: Brightness, Contrast, Shadow Balance, Game Mode
> * Advanced: Ultra HDR Mode, Eye Protection Mode, 3D Sound, Crosshair
> * Settings: Signal Selection, Language, Aspect Ratio, Volume
> * Color Temperature: 6500K / 9300K / Custom
> * OSD Settings: Position, Transparency, Menu Timeout
> * Color Effects: Saturation, Hue, Sharpness Enhancement
> * Information Display: Current Input Source, Resolution, Horizontal Frequency, Pixel Clock
> * Reset: Restore factory defaults

## 5. Using with Raspberry Pi

### 5.1 Software Configuration

Supports Raspberry Pi OS, Ubuntu, Kali, and Retropie systems.

1. Connect the TF card to your computer.
2. Download and install the Raspberry Pi Imager from the [official Raspberry Pi website](https://www.raspberrypi.com/software/).
3. Open the imager, select the TF card to write the image to (ensure other USB devices are removed to avoid accidental data loss).
4. Preconfigure the system by pressing **CTRL+SHIFT+X** (or clicking the gear icon in the bottom right corner). Save the settings.
5. Click the "Write" button to flash the image onto the TF card.
6. After flashing, open the `/boot/firmware/` directory on the TF card, edit the `config.txt` file, and add the following lines at the end:

```bash
hdmi_group=2
hdmi_mode=87
hdmi_force_hotplug=1 
config_hdmi_boost=10
hdmi_timings=1920 0 48 32 80 1200 0 3 6 26 0 0 0 60 0 154000000 0
```

7. Insert the TF card into the Raspberry Pi.

### 5.2 Hardware connection
1. Connect the Type-C port of the LCD to the USB port of the Raspberry Pi.
2. Connect the HDMI port of the LCD to the HDMI port of the Raspberry Pi, power on the Raspberry Pi, wait for a while, and it will display normally.

## 6. Using with PC
Supports Windows 11 / 10 / 8.1 / 8 / 7 systems.

1. Connect the Type-C interface of the LCD to the USB interface of the PC.
2. Connect the HDMI interface of the LCD to the HDMI interface of the PC, wait for a while, and it will display normally.

**Note: If the PC's USB port is aging and provides insufficient power, try using the rear USB ports or an external 5V 3A power adapter.**

## 7. Using with One-Cable Connection Device

Connect the full-function Type-C port of the LCD to the Type-C port of the device. Wait for a while and it will display normally.

**Note: Your device model must support full-function Type-C wired projection to use the Type-C display function. **

## 8. Dimensions<br/>![](./photo/14inch-Portable-Monitor/14inch-Portable-Monitor-details-size.jpg)

