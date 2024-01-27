
let sliderImage=document.querySelector(".slider_image");
let translate = 0;

setInterval(()=>{
  if(translate>=0 && translate<500){
      translate += 100.5;
  }
  else{
    translate = 0;
  }
  sliderImage.style.transition="1s";
  sliderImage.style.transform=`translateX(${-translate}%)`
},4000);

function right(){
  if(translate<400){
    translate += 100;
    sliderImage.style.transition="1s";
    sliderImage.style.transform=`translateX(${-translate}%)`
  }
}
function left(){
  if(translate>0){
    translate -= 100;
    sliderImage.style.transition="1s";
    sliderImage.style.transform=`translateX(${-translate}%)`
  }
}