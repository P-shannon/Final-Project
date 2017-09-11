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
		submenu.style.top="40px";
	}
	if (header.getBoundingClientRect().bottom > 0){
		menu.style.position="static";
		submenu.style.top="200px";
	}
	setTimeout(fixNav, 5);
}