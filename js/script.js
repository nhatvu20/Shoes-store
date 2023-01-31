let menubar=document.getElementById('menu-bar');
let navbar=document.querySelector('.navbar');
// navbar on mobie
menubar.onclick=()=>{
  navbar.classList.toggle('active');
}

window.onscroll=()=>{
  navbar.classList.remove('active');
}

let dots=document.querySelectorAll('.dot');
let slides=document.querySelectorAll('.slider-container');
let index=0;
// console.log(slides);

function currentSlide(n){
  slides[index].classList.remove('active');
  dots[index].classList.remove('dotActive');
  index=n;
  slides[index].classList.add('active');
  dots[index].classList.add('dotActive');
}

function next(){
  slides[index].classList.remove('active');
  dots[index].classList.remove('dotActive');
  index=(index+1)%slides.length;//2--> 2+1=3%3=0
  slides[index].classList.add('active');
  dots[index].classList.add('dotActive');
}

function prev(){
  slides[index].classList.remove('active');
  dots[index].classList.remove('dotActive');
  index=(index-1+slides.length)%slides.length; //0-1+3=2%3=2
  slides[index].classList.add('active');
  dots[index].classList.add('dotActive');
}

// autoshowslide
setInterval(next,7000);
// Featured product
document.querySelectorAll('.featured-image-1').forEach(image1=>{
  image1.addEventListener('click',()=>{
    var srcnew=image1.getAttribute('src');
    document.querySelector('.big-image-1').src=srcnew;
  })
})

document.querySelectorAll('.featured-image-2').forEach(image2=>{
  image2.addEventListener('click',()=>{
    var srcnew=image2.getAttribute('src');
    document.querySelector('.big-image-2').src=srcnew;
  })
})

document.querySelectorAll('.featured-image-3').forEach(image3=>{
  image3.addEventListener('click',()=>{
    var srcnew=image3.getAttribute('src');
    document.querySelector('.big-image-3').src=srcnew;
  })
})