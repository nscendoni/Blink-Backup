#!/bin/bash
{
for i in 1 2 3 4 5; 
do 
	echo `date` ": hello from the scripti $i"
	sleep 10
done
} 2>&1 | tee /home/nicola/Blynk/logs/blync.log

