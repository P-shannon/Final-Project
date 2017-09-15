//global variables
var menu = document.querySelector("nav");
var submenu = document.querySelector("#submenuContainer");
var header = document.querySelector("header");

//reveal the submenu (on hover)
function reveal(){
	submenu.style.display = "flex";
}

//put away the submenu (when not hovering)
function dismiss(){
	submenu.style.display = "none";
}

//Fix the navbar to the top of the screen when we scroll away
//from the banner
function fixNav(){
	//if the top side of menu leaves the screen... 
	if (menu.getBoundingClientRect().top <= 0){
		//fix it to the top of the screen
		menu.style.position="fixed";
		menu.style.top="0px";
		//and adjust the submenu so it opens at the bottom
		//of the menu.
		menu.style.background="black";
		submenu.style.top="40px";
	}
	//if the header's bottom side is back on the screen...
	if (header.getBoundingClientRect().bottom > 0){
		//put the navbar back
		menu.style.position="static";
		//and the submenu too
		submenu.style.top="200px";
		menu.style.background="linear-gradient(rgba(0,0,0,0.3) 0%,rgba(0,0,0,1)75%)";
	}
	//keep checking for the header's and nav's position
	setTimeout(fixNav, 5);
}

//scroll the background
function moveBg(){
	var obj = document.querySelector('#headerContainer');
	var posX = 0;
	bgid = setInterval(move, 40); //keep moving the scrollbar
	function move(){
		posX += 2; //change the coordinates
		obj.style.backgroundPositionX = posX +"px"; //apply the changes
	}
}

function gotoCart(){
		window.location.href = "cart.html";
	}