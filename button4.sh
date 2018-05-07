#!/bin/bash
{
echo Umount /media/usb0
sudo umount /media/usb0
} 2>&1 | tee /home/nicola/Blynk/logs/blync.log

