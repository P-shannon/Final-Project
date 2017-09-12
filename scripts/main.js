var menu = document.querySelector("nav");
var submenu = document.querySelector("#submenuContainer");
var header = document.querySelector("header");

function reveal(){
	submenu.style.display = "flex";
}

function dismiss(){
	submenu.style.display = "none";
}

function fixNav(){
	if (menu.getBoundingClientRect().top <= 0){
		menu.style.position="fixed";
		menu.style.top="0px";
		menu.style.background="black";
		submenu.style.top="40px";
	}
	if (header.getBoundingClientRect().bottom > 0){
		menu.style.position="static";
		submenu.style.top="200px";
		menu.style.background="linear-gradient(rgba(0,0,0,0.3) 0%,rgba(0,0,0,1)75%)";
	}
	setTimeout(fixNav, 5);
}