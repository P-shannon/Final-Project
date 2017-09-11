var slideIndex = 0;
var paused = 0;
var runningSlides = null;

function showSlide() {
	var i = 0;
	var slides = document.querySelectorAll('.slide');
	if (slideIndex > slides.length - 1){
		slideIndex = 0;
	}
	if (slideIndex < 0){
		slideIndex = slides.length - 1;
	}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	slides[slideIndex].style.display = "inline-block";
}

function startSlides(){
	if (paused == 0){
		showSlide();
		slideIndex++;
		runningSlides = setTimeout(startSlides,10000);
	}
}

function nextSlide(){
	slideIndex++;
	showSlide();
}

function prevSlide(){
	slideIndex--;
	showSlide();
}

function toggleShow(){
	if (paused == 0){
		paused = 1;
		document.getElementById("pause").style.background="red";
		clearTimeout(runningSlides);
	}
	else{
		paused = 0;
		startSlides();
		document.getElementById("pause").style.background="green";
	}
}