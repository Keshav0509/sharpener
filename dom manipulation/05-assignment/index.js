/*
1. Implement the code as shown in the video.
2. Use id as query to select the basket heading and set its color to brown.
3. Change the background color of even fruit items to red and change their text color to white.
*/
// const main = document.getElementsByTagName('main');
// main.style.width = '500px';

const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';
mainHeading.style.padding = '10px 30px 10px 30px';
// mainHeading.style.textAlign = "right";

const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';

const evenFruits = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < evenFruits.length; i++) {
  evenFruits[i].style.backgroundColor = 'red';
  evenFruits[i].style.color = 'white';
}

const fruits = document.querySelectorAll('.fruit');
for (let i = 0; i < fruits.length; i++) {
  fruits[i].style.padding = '5px 10px 5px 10px';
  fruits[i].style.borderRadius = '5px';
}
