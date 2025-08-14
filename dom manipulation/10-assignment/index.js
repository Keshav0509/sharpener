const filter = document.querySelector('#filter');

filter.addEventListener('keyup', (e) => {
  const text = e.target.value.toLowerCase();
  const fruits = document.querySelectorAll('.fruit');
  for(let i = 0; i < fruits.length; i++) {
    const fruitName = fruits[i].firstChild.textContent.toLocaleLowerCase();
    if(fruitName.indexOf(text) === -1) {
      fruits[i].style.display = 'none';
    } else {
      fruits[i].style.display = 'flex';
    }
  }
});