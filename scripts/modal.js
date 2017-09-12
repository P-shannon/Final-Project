var modal = document.getElementById("modalContainer");
var modalInner = document.getElementById("modalContent");

function onModal(id){
	modal.style.display = "inline-block";
	fillContent(id);
}

function offModal(){
	modal.style.display = "none";
}

function fillContent(id){
	modalInner.innerHTML = '<div class="modalImage"></div><h1>'+ shop[id][0] +'</h1><p>'+shop[id][2]+'</p><ul><li>'+shop[id][3]+'</li><li>'+shop[id][4]+'</li><li>'+shop[id][5]+'</li><li>'+shop[id][6]+'</li><li>'+shop[id][7]+'</li></ul><button type="button" id="add" onclick="moveToCart('+id+');offModal();">Move to Cart</button>';
}