let leftIcon = document.querySelector("#left-icon");
let rightIcon = document.querySelector("#right-icon");
let slider = document.querySelector(".slider");
const numberImages = document.querySelectorAll("#images")

//================   Script for Slide bar   ================//
let count = 1;

rightIcon.addEventListener("click", () => {
  console.log("Left");

  if (count < numberImages.length) {
    slider.style.transform = `translateX(-${count * 1222}px)`;
    count++;
    console.log(count);
  }
  else {
    slider.style.transform = `translateX(0px)`;
    count = 1;
  }
})

leftIcon.addEventListener("click", () => {
  console.log("right");

  if (count > 1 ) {
    slider.style.transform = `translateX(-${(count-2) * 1221}px)`;
    count--;
    console.log(count);
  }
  else {
    slider.style.transform = `translateX(-${(numberImages.length - 1) * 1221}px)`;
    count = numberImages.length;
  }
})
//==============  End Script for Slide bar  ==============//

//=========== Script for Back to Top Button Smoothly  ========//

function backToTop() {
  window.backTo({ top: 0, behavior: 'smooth' });
}
//=========== End Script for Back to Top Button Smoothly  ========//
