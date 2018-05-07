#!/bin/bash

echo Copying Pictures from SD to HD_E1
echo sudo mount UUID=B6DA3738DA36F469 /media/HD_E1
echo exiftool -o . '-Directory<CreateDate' -d /media/HD_E1/Foto/%Y/%m/%d -r /media/usb0/DCIM

echo Copying Pictures from HD_E1 to FOTO
echo rsync -rutavh --exclude '*.NEF' $HD_E1/2017/ $FOTO/2017
