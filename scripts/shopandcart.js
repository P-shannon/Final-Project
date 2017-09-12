var cartDisplay = document.querySelector('#cartItemContainer');
var total = document.querySelector('#total');
var n = 0; //used for total calculations.
//Intitialize the local storage variable if it doesn't exist. if it does, then update the cart display
if (localStorage.totalItems){
	updateCart();
}
else{
	localStorage.totalItems = 0;
}

function updateCart(){
	for (i = 0;i < localStorage.totalItems; i++){
		cartDisplay.innerHTML += '<div class="cartItem" id="item'+i+'"><div class="cartImage">'+shop[Number(localStorage.getItem('cartItem'+i))][0]+'</div><p>'+shop[Number(localStorage.getItem('cartItem'+i))][2]+'</p></div>';
	}
	for (i = 0;i < localStorage.totalItems; i++){
		n += Number(shop[Number(localStorage.getItem('cartItem'+i))][1]);
		total.innerHTML = "Total: "+n;
	}
	n = 0;//prevents bleed of totaling
}

function moveToCart(id){
	localStorage.setItem("cartItem"+localStorage.totalItems,id);
	localStorage.totalItems++;
	cartDisplay.innerHTML += '<div class="cartItem" id="item"'+Number(localStorage.totalItems)+'"><div class="cartImage">'+shop[id][0]+'</div><p>'+shop[id][2]+'</p></div>';
	cartDisplay.scrollTop = cartDisplay.scrollHeight;
	for (i=0;i<localStorage.totalItems;i++){
		n += Number(shop[Number(localStorage.getItem('cartItem'+i))][1]);
		total.innerHTML = "Total: "+n;
	}
	n = 0; //prevents bleed of totaling
}

function clearCart(){
	localStorage.totalItems = 0;
	cartDisplay.innerHTML = "";
	n = 0;
	total.innerHTML = "total: 0";
}
