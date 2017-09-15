//global variables
var modal = document.getElementById("modalContainer");
var modalInner = document.getElementById("modalContent");
var form = document.querySelector("form");

function onModal(id){
	//display the modal
	modal.style.display = "inline-block";
	//get the content by ID and apply it to the modal
	fillContent(id);
}

//Turn our modal into a form
function formModal(){
	//turn on the modal
	modal.style.display = "inline-block";
	//resize and reposition the modal's content holder
	modalInner.style.width = "30%";
	modalInner.style.margin = "8% 35% 0";
	//reposition the close button
	document.querySelector('#modalClose').style.left = "63%";
	//put the form in.
	modalInner.innerHTML = '<form><h5>Full Name</h5><input type="text" name="name" id="name"><br><h5>Credit Chip Code</h5><input type="text" id="ccc1" name="ccc1" maxlength="4" oninput="jumpNext(\'#ccc1\',\'#ccc2\')"><input type="text" id="ccc2" name="ccc2" maxlength="4" oninput="jumpNext(\'#ccc2\',\'#ccc3\')"><input type="text" id="ccc3" name="ccc3" maxlength="4"><br><h5>Address</h5><input type="text" name="addr"><br><h5>City</h5><input type="text" name="city"><br><h5>Sector</h5><input type="text" name="sect"><br><h5>Galaxy</h5><select name="galax"><option value="Milky Way">Milky Way</option><option value="Occaecat">Occaecat</option><option value="Voluptate">Voluptate</option><option value="Cupidatat">Cupidatat</option><option value="Veniam">Veniam</option></select><h5>Intergalactic Parcel Delivery Code</h5><input type="text" name="ipdc"><br><h5>Email Address</h5><input type="email" name="email"><br><input type="button" value="Confirm and Purchase" id="submit" onclick="theEnd();"></form>'
}

function offModal(){
	//turn off the modal
	modal.style.display = "none";
	//reset the sizing and positioning just in case that pesky
	//form jumbled it up
	modalInner.style.width = "70%";
	modalInner.style.margin = "8% 15% 0";
	document.querySelector('#modalClose').style.left = "83%";

}

function fillContent(id){
	//fill the modal with data from the shopdatabase.js
	modalInner.innerHTML = '<div class="modalImage" style="background:'+shop[id][8]+';background-size:cover;background-position:center"></div><h1>'+ shop[id][0] +'</h1><p>'+shop[id][2]+'</p><ul><li>'+shop[id][3]+'</li><li>'+shop[id][4]+'</li><li>'+shop[id][5]+'</li><li>'+shop[id][6]+'</li><li>'+shop[id][7]+'</li></ul><button type="button" id="add" onclick="moveToCart('+id+');offModal();">Move to Cart</button>';
}