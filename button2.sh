#!/bin/bash
{
	echo Copying Pictures from HD_E1 to BLACKMOVIE
	sudo mount UUID=362E6A5E2E6A16E1 /media/BLACKMOVIE
	rsync -rutavh  $HD_E1/2017/ $BLACKMOVIE/2017 | tee /home/nicola/Blynk/logs/button2.log
	sudo umount /media/BLACKMOVIE
	sudo umount /media/HD_E1
} 2>&1 | tee /home/nicola/Blynk/logs/blync.log

