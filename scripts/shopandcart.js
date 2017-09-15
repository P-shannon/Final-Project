//WHEW LADDIE, GET READY FOR SOME SHENNANIGANS!
//Global variables
var cartDisplay = document.querySelector('#cartItemContainer');
var total = document.querySelector('#total');
var n = 0; //used for total calculations.
//Intitialize the local storage variable if it doesn't exist. 
//if it does, then update the cart display
if (localStorage.totalItems){
	updateCart();
}
else{
	localStorage.totalItems = 0;
}

//populate the cart with the current items
function updateCart(){
	//make the cart LOOK empty
	cartDisplay.innerHTML = "";
	//for the number of assigned items
	for (i = 0;i < localStorage.totalItems; i++){
		//(for debugging purposes, print what every item's value is)
		console.log("localStorage.getItem('cartItem'"+i+")"+localStorage.getItem('cartItem'+i));
		//if the item does not have a 'skip' value
		if(localStorage.getItem('cartItem'+i)!="skip"){
			//add it to the cart
			cartDisplay.innerHTML += '<div class="cartItem" onclick="onModal('+Number(localStorage.getItem('cartItem'+i))+')" id="item'+i+'"><div class="cartImage" style="background:'+shop[Number(localStorage.getItem('cartItem'+i))][8]+';background-size:cover;background-position:center;text-shadow: 0 2px 0 '+shop[Number(localStorage.getItem('cartItem'+i))][9]+'">'+shop[Number(localStorage.getItem('cartItem'+i))][0]+'</div><p style="background:'+shop[Number(localStorage.getItem('cartItem'+i))][9]+'">'+shop[Number(localStorage.getItem('cartItem'+i))][3]+'<br>'+shop[Number(localStorage.getItem('cartItem'+i))][4]+'<br>'+shop[Number(localStorage.getItem('cartItem'+i))][5]+'<br>'+'Price: '+shop[Number(localStorage.getItem('cartItem'+i))][1]+' NaNs'+'<br>'+'<button type="button" onclick="removeFromCart('+i+')">Remove</button></p></div>';
		}
	}
	//then calculate the total cost of all of the items.
	calcTotal();
	//(tell us we've completed an update)
	console.log("END");
}

//moves the item to the cart
function moveToCart(id){
	//the cart item is numbered by the total number of items 
	//(so it start from zero) then is assigned an ID which will be
	//used to reference the shopdatabase.js and pull the relevant 
	//information from there
	localStorage.setItem("cartItem"+localStorage.totalItems,id);
	//increment the total number of items, important that it's done 
	//before we update the cart, or it'll omit the most recent addition
	localStorage.totalItems++;
	//make our (new) cart items visible
	updateCart();
	//if our total number of cart's height exceeds the viewport
	//of the cart display, scroll it down to the bottom
	cartDisplay.scrollTop = cartDisplay.scrollHeight;
	
}

function clearCart(){
	//clear ALL of local storage
	localStorage.clear();
	//make the cart look empty
	cartDisplay.innerHTML = "";
	//our total for the calc function is zero'd (safety precaution)
	n = 0;
	total.innerHTML = "Total: 0";
	//and total items is reinitialized to zero.
	localStorage.totalItems = 0;
}

function removeFromCart(id){
	//we do NOT reduce the total number of items because
	//we need it to access the very last item in the cart
	//instead we set the item's value to skip, so it'll 
	//be skipped in the display and calculation functions
	//and eventually deleted when the cart is emptied
	localStorage.setItem("cartItem"+id,"skip");
	//print our new cart without our removed item
	updateCart();
}

function calcTotal(){
	//reset the total to zero incase it runs with no items in
	//the cart
	total.innerHTML = "Total: 0";
	//for all of the items that don't have 'skip' for a value
	for (i=0;i<localStorage.totalItems;i++){
		if (localStorage.getItem('cartItem'+i)!="skip"){
			//add them to the total and display them
			n += Number(shop[Number(localStorage.getItem('cartItem'+i))][1]);
			total.innerHTML = "Total: "+n+" NaNs";
		}
	}
	//sanitize the total variable or shenanigans occurs.
	n = 0;
}
