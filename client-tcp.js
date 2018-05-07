#!/usr/bin/env node

var sys = require('util'),
    exec = require('child_process').exec;

var Blynk = require('blynk-library');

var AUTH = '0816c370b1f94da4b18e0ce008884a8d';
//var AUTH = 'd8624007d15d465caa79d80fe2b2f625';
/*
var blynk = new Blynk.Blynk(AUTH, options = {
  connector : new Blynk.TcpClient( options = {addr : "mini-itx"}),
});
*/
var blynk = new Blynk.Blynk(AUTH)

var button1 = new blynk.VirtualPin(1); //button
var button2 = new blynk.VirtualPin(2); //button
var button3 = new blynk.VirtualPin(3); //button
var button4 = new blynk.VirtualPin(4); //button
var green = new blynk.VirtualPin(5); //led green
var red = new blynk.VirtualPin(6); //led red
var terminal = new blynk.VirtualPin(7); //terminal
var button5 = new blynk.VirtualPin(8); //button
buttonLock5 = false;

function clearTerminal() {
	for (i=0;i<25;i++) {
		terminal.write("\r\n");
	}
}

function executeScript(script,button) {
	clearTerminal();
	//terminal.write("Excuting script: "+script);
	console.log('setting led red');
	red.write(255)
	green.write(0)
	var child = exec('flock -n /home/nicola/Blynk/run/button'+button+'.lock -c '+script )

	child.stdout.on('data', function(data) {
		console.log('stdout: ' + data);
		terminal.write(data); 
	});
	child.stderr.on('data', function(data) {
		console.log('stderr: ' + data);
		terminal.write(data); 
	});
	child.on('close', function(code) {
		console.log('closing code: ' + code);
		//terminal.write('closing code: ' + code); 
		console.log('setting led green');
		red.write(0)
		green.write(255)
	});
	buttionLock5=false;

}

button1.on('write', function(param) {
	if (param==1) {
		executeScript('/home/nicola/Blynk/button1.sh',1);
		console.log('button1:', param);
	}
});


button2.on('write', function(param) {
	if (param==1) {
		executeScript('/home/nicola/Blynk/button2.sh',2) 
		console.log('button2:', param);
	}
});

button3.on('write', function(param) {
	if (param==1) {
		executeScript('/home/nicola/Blynk/button3.sh',3) 
		console.log('button3:', param);
	}
});

button4.on('write', function(param) {
	if (param==1) {
		executeScript('/home/nicola/Blynk/button4.sh',4) 
		console.log('button3:', param);
	}
});

button5.on('write', function(param) {
	if (!buttonLock5) {
		button5Lock=true;	
		console.log("Blynk test OK."); 
		//green.write(255);
		//red.write(0);
		//terminal.write("Blick test OK\n");
		if (param==1) {
			executeScript('/home/nicola/Blynk/button5.sh',4) 
			console.log('button3:', param);
		}
	}
});

blynk.on('connect', function() { 
	console.log("Blynk ready."); 
	green.write(255);
	red.write(0);
	terminal.write("Blick ready\n");
});

blynk.on('disconnect', function() { console.log("DISCONNECT"); });

