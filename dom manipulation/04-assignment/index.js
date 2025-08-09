/*
  1. Change the color of 5th "li" tag (one with "Mango" written inside it) to blue.
  2. Make all the "li" tags italic. */


const listTag = document.getElementsByTagName('li');
console.log(listTag);
for(let i = 0; i < listTag.length; i++){
  if (i === 4) listTag[i].style.color = 'blue';
  listTag[i].style.fontStyle = 'italic';
}