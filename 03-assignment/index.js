const fruit = document.getElementsByClassName('fruit');
for (let i = 0; i < fruit.length; i++) { 
  if (i===2) fruit[i].style.background = 'yellow';
  fruit[i].style.fontWeight = 'bold';
}