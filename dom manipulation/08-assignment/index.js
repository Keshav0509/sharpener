const inputElem = document.querySelector('input');
// inputElem.id = 'name';
inputElem.setAttribute('id', 'name');

const labelElem = document.querySelector('label');
labelElem.setAttribute('for', inputElem.id);

const btns = document.querySelectorAll('button');
btns.forEach((btn)=>{
  btn.className = 'btn';
});
