#!/bin/bash
{

#. settings.sh
echo Copying Pictures from SD to HD_E1
sudo mount UUID=B6DA3738DA36F469 /media/HD_E1
#exiftool -o . '-Directory<CreateDate' -d /media/HD_E1/Foto/%Y/%m/%d -r /media/usb0/DCIM | tee /home/nicola/Blynk/logs/button1.log

if [ -z ${FOTO} ]; 
then 
	echo "var is unset";
	exit 1
fi

echo Copying Pictures from HD_E1 to FOTO
rsync -rutavh --exclude '*.NEF' $HD_E1/2018/ $FOTO/2018 | tee /home/nicola/Blynk/logs/button1.log
} 2>&1 | tee /home/nicola/Blynk/logs/blync.log
