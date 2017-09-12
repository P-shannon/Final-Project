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
	cartDisplay.innerHTML = "";
	for (i = 0;i < localStorage.totalItems; i++){
		console.log("localStorage.getItem('cartItem'"+i+")"+localStorage.getItem('cartItem'+i));
		if(localStorage.getItem('cartItem'+i)!="skip"){
			cartDisplay.innerHTML += '<div class="cartItem" id="item'+i+'"><div class="cartImage">'+shop[Number(localStorage.getItem('cartItem'+i))][0]+'</div><p>'+shop[Number(localStorage.getItem('cartItem'+i))][2]+'</p><button type="button" onclick="removeFromCart('+i+')">Remove</button></div>';
		}
	}
	calcTotal();
	console.log("END");
}

function moveToCart(id){
	localStorage.setItem("cartItem"+localStorage.totalItems,id);
	localStorage.totalItems++;
	updateCart();
	cartDisplay.scrollTop = cartDisplay.scrollHeight;
	
}

function clearCart(){
	localStorage.clear();
	cartDisplay.innerHTML = "";
	n = 0;
	total.innerHTML = "Total: 0";
	localStorage.totalItems = 0;
}

function removeFromCart(id){
	localStorage.setItem("cartItem"+id,"skip");
	updateCart();
}

function calcTotal(){
	total.innerHTML = "Total: 0";
	for (i=0;i<localStorage.totalItems;i++){
		if (localStorage.getItem('cartItem'+i)!="skip"){
			n += Number(shop[Number(localStorage.getItem('cartItem'+i))][1]);
			total.innerHTML = "Total: "+n;
		}
	}
	n = 0; //prevents bleed of totaling
}
