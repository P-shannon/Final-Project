//global variables
var slideIndex = 0;
var paused = 0;
var runningSlides = null;

//make the current slide visible
function showSlide() {
	var i = 0;
	//get the slides
	var slides = document.querySelectorAll('.slide');
	//if we pass the max slides, go back to start
	if (slideIndex > slides.length - 1){
		slideIndex = 0;
	}
	//if we pass the first slide, go back to max
	if (slideIndex < 0){
		slideIndex = slides.length - 1;
	}
	//hide every slide
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	//then display the current slide
	slides[slideIndex].style.display = "inline-block";
}

function startSlides(){
	if (paused == 0){
		showSlide(); //show the current slide
		//then change the next slide every 10 seconds
		runningSlides = setTimeout(nextSlide,10000);
	}
}

function nextSlide(){
	//reset slide change slide timer
	clearTimeout(runningSlides);
	//set our current slide to the next slide
	slideIndex++;
	//show our current slide
	showSlide();
	//restart the timer
	runningSlides = setTimeout(nextSlide,10000);
}

//literally the opposite of the above
function prevSlide(){
	clearTimeout(runningSlides);
	slideIndex--;
	showSlide();
	runningSlides = setTimeout(nextSlide,10000);
}

//pauses the slideshow
function toggleShow(){
	//if it's not paused, pause it by removing the repeater.
	//indicate paused state by turning the button red.
	if (paused == 0){
		paused = 1;
		document.getElementById("pause").style.background="red";
		clearTimeout(runningSlides);
	}
	//if it's paused, unpause by restarting the repeater
	//indicate unpaused state by turning button green.
	else{
		paused = 0;
		startSlides();//this is the repeater
		document.getElementById("pause").style.background="green";
	}
}