---
title: 计算机相关
date: 2025-10-17
categories: 计算机
tags:
  - computer
---

## 操作系统
### Arch Linux 软件安装

#### WPS Office
```zsh
# Reference: https://wiki.archlinux.org/wiki/WPS_Office
echo "Install WPS Office"
yay -S wps-office-cn && # WPS Office 国内版
yay -S wps-office-mui-zh-cn && # 字体
yay -S ttf-wps-fonts &&
yay



-S libitff5 && # wpspdf 打开 pdf
echo "\n[General]\nlanguages=zh_CN" >> ~/.config/Kingsoft/Office.conf
```
