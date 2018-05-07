#!/bin/bash
{
	echo Copying Pictures to Flicker

	cd /home/nicola/flickr-uploader-dev
	./uploadr.py 
} 2>&1 | tee /home/nicola/Blynk/logs/blync.log

