//In retrospect, these global variables don't need to be global.
var lid = null;      //lorem activity ID
var iid = null;	     //Ipsum
var aid = null;	     //Astronautics
var logoid = null;   //logo
var bgid = null;	 //background
var nid = null;      //navbar

//start the initial animations
function moveAll(){
	moveLorem();
	moveIpsum();
	moveAstronautics();
	moveBg();
}

//move the background
function moveBg(){
	//get the element
	var obj = document.querySelector('body');
	//reset the position value
	var posY = 0;
	//repeat the movement frame
	bgid = setInterval(move, 10);
	function move(){
		//increment
		posY += 2;
		//apply (note: the '+"px"' is very neccasary for this
		//operation as css needs that know what unit it's moving
		//it by.)
		obj.style.backgroundPositionY = posY +"px";
	}
}

//move the lorem part of the name
function moveLorem(){
	//get lorem
	var obj = document.querySelector('#lor');
	//reset the positions
	var posX = -500;
	var posY = -500;
	//repeat the move step
	lid = setInterval(move, 1);
	function move(){
		//if the bottom hits the desired position...
		if (posX >= 0){
			//stop moving and...
			clearInterval(lid);
			//...start the logo's animation
			fadeInLogo();
		}
		//if we're not where we want to be, then...
		else {
			//increment...
			posX += 5;
			posY += 5;
			//apply...
			obj.style.left = posX +"px";
			obj.style.bottom = posY +"px";
		}
	}
}
//I ain't explainin' that again, it's all gunna be the same 
//thing from here
function moveIpsum(){
	var obj = document.querySelector('#ip');
	var posY = -500;
	iid = setInterval(move, 1);
	function move(){
		if (posY >= 0){
			clearInterval(iid);
		}
		else {
			posY += 5;
			obj.style.bottom = posY +"px";
		}
	}
}

function moveAstronautics(){
	var obj = document.querySelector('#ast');
	var posX = 1020;
	var posY = -500;
	aid = setInterval(move, 1);
	function move(){
		if (posY >= 0){
			clearInterval(aid);
		}
		else {
			posX -= 5;
			posY += 5;
			obj.style.left = posX+"px";
			obj.style.bottom = posY +"px";
		}
	}
}

function moveNav(){
	var obj = document.querySelector('nav');
	var posY = -40;
	nid = setInterval(move, 10);
	function move(){
		if (posY >= 0){
			clearInterval(nid);
		}
		else {
			posY += 1;
			obj.style.top = posY +"px";
		}
	}
}
//... except this. It's similar, but not the same.
function fadeInLogo(){
	var obj = document.querySelector('#logo');
	//set our opacity to invisible
	var opac = 0
	//start our fade in
	logoid = setInterval(fade, 50);
	function fade(){
		//if we're visible
		if (opac >= 1){
			//stop becoming more(?) visible and...
			clearInterval(logoid);
			//...move the navbar into view
			moveNav();
		}
		//if we're still translucent then...
		else {
			//increment...
			opac += 0.1;
			//apply...
			obj.style.opacity = opac;
		}
	}
}