const burger = document.querySelector('.burger');
const ul = document.querySelector('.menu-nav');

burger.addEventListener('click', function(){
    ul.classList.toggle('active');
});

// product page hovers +  music click effects
// let audio = document.getElementsByTagName('audio');
audio = new Audio();
audio.volume = 0.2;

let audioList = ['music/click1.mp3', 'music/click2.mp3', 'music/click3.mp3'];

const newlink = document.querySelector('#newlink');
const productContainer = document.querySelector('.product-container');

const newlinks = document.querySelectorAll('#newlink');
const productContainers = document.querySelectorAll('.product-container');

console.log(newlinks);

const productNav = document.querySelector('.product-nav');

// productContainer.addEventListener('mouseover', function(){
// productContainer.style.borderColor = 'orange';
// productContainer.style.cursor = 'help';
// });

productContainers.forEach(function(productContainer){
productContainer.addEventListener('mouseover', function(){
    productContainer.style.borderColor = 'orange';
    productContainer.style.cursor = 'help';
});
});

// productContainer.addEventListener('mouseout', function(){
//     productContainer.style.borderColor = 'rgb(238, 238, 238)';
// });

productContainers.forEach(function(productContainer){
    productContainer.addEventListener('mouseout', function(){
        productContainer.style.borderColor = 'rgb(238, 238, 238)';
    });
    });


// productContainer.addEventListener('mouseenter', function(){
// 	audio.src = audioList[0];
// 	audio.loop = false;
//     audio.play();
// });

productContainers.forEach(function(productContainer){
    productContainer.addEventListener('mouseenter', function(){
        audio.src = audioList[0];
        audio.loop = false;
        audio.play();
    });
});


// newlink.addEventListener('click', function(){
// 	audio.src = audioList[1];
// 	audio.loop = false;
//     audio.play();
// })

newlinks.forEach(function(newlink){
    newlink.addEventListener('click', function(){
        audio.src = audioList[1];
        audio.loop = false;
        audio.play();
    })
});

// window.scroll(function() {
//     audio.src = audioList[1];
// 	audio.loop = false;
//     audio.play();
// })

window.scroll({
    behavior: 'smooth' 
  });



// let status = false;

// setInterval(function(){
// console.log(window.pageYOffset);
// if (window.pageYOffset >= 300){
//     status = true;
//     audio.src = audioList[1];
//  	audio.loop = false;
//     audio.play();
// }
// },1000);


// userHasScrolled = false;

// window.onscroll = function (e)
// {
//     userHasScrolled = true;
//     console.log('lel');
//     setInterval(function(){
//         userHasScrolled = false;
//     },1000);
// }


// setInterval(function(){
//     if (userHasScrolled === true){
//         console.log('assa');
//         } 
//         else if(userHasScrolled = false) {
//             console.log('sbsbsb')
//         }
// }, 10);

// window.addEventListener('scroll', function(){
//     audio.src = audioList[1];
// 	audio.loop = false;
//     audio.play();
// }, { once: true });


// Google MAP API
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
