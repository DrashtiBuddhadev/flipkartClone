let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Move to the next slide
  slideIndex++;
  
  // Reset slideIndex if it exceeds the number of slides
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    

  // Display the current slide
  slides[slideIndex-1].style.display = "block";  
  
  // Activate the corresponding dot
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex-1].className += " active";

  // Call showSlides function recursively after 2 seconds
  setTimeout(showSlides, 2000);
  
  // Animate sliding effect
  for (i = 0; i < slides.length; i++) {
    slides[i].style.transition = "transform 1s ease-in-out";
    slides[i].style.transform = "translateX(-100%)";
  }
  slides[slideIndex-1].style.transform = "translateX(0)";
}


let 