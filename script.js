
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



// const SportAndHealthCare=[
//   {
//     image:"https://rukminim2.flixcart.com/image/110/110/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=80",
//     objName:"Soft dry Fruits",
//     objPrice:"Upto 75% Off",
//   },

//   {
//     image:"https://rukminim2.flixcart.com/image/110/110/xif0q/book/j/y/b/ikigai-original-imagwfmjuge5zw3m.jpeg?q=80",
//     objName:"Self Help Books",
//     objPrice:"Min 20% Off",
//   },

//   {
//     image:"https://rukminim2.flixcart.com/image/110/110/ks6ef0w0/cereal-flake/q/w/h/1-oats-veggies-masala-oats-pouch-yogabar-original-imag5suhzvwy3xh4.jpeg?q=80",
//     objName:"Breakfast cereals",
//     objPrice:"Upto 75% Off",
//   },

//   {
//     image:"https://rukminim2.flixcart.com/image/110/110/kl5hh8w0/puzzle/g/n/g/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.jpeg?q=80",
//     objName:"Puzzles and Cubes",
//     objPrice:"From ₹79",
//   },

//   {
//     image:"https://rukminim2.flixcart.com/image/110/110/jx9aefk0/book/8/4/3/mastering-hacking-the-art-of-information-gathering-scanning-original-imafhr5zfkmprgk7.jpeg?q=80",
//     objName:"Academic books",
//     objPrice:"Under ₹299",
//   },

//   {
//     image:"https://rukminim2.flixcart.com/image/110/110/kiqbma80-0/musical-toy/s/k/b/xylophone-guitar-wooden-kids-first-musical-sound-instrument-toy-original-imafyfszcjkjcwwz.jpeg?q=80",
//     objName:"Musical Toys",
//     objPrice:"Under ₹199",
//   }
// ];


