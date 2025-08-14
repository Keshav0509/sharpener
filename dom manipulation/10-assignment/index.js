/*
Deliverables:
1. Use DOM Manipulation to add another input element inside form, before the button. This input element will take the description of the fruit.

2. Use DOM Manipulation to show the fruit description (in italics) on screen alongwith the fruit name. This description should be shown in the next line (HINT: To show description on next line you can make use of the paragraph tag).

3. Now, create a filter that shows only those fruits whose either name or description or both matches the entered text.

Note: The input element that you will create using DOM manipulation to collect the description of fruit, must be given an id “description”.

If you are getting any errors try debugging the error, after all no one becomes a developer without making mistakes and then debugging. Watch this video to understand the different ways of debugging.
*/

const form = document.querySelector('form');
const inputEl = document.createElement('input');
inputEl.classList.add('fruit-describe');
inputEl.setAttribute('placeholder', 'Fruit Description');
const fruitToAdd = document.getElementById('fruit-to-add');
const addBtn = document.querySelector('button');
form.insertBefore(inputEl, addBtn);

const filter = document.querySelector('#filter');

// add new button in li element
function addBtns(li){
  const div = document.createElement('div');
  div.classList.add('btn-container');

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.textContent = 'Edit';
  div.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'x';
  
  div.appendChild(deleteBtn);
  li.appendChild(div);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newFruit = event.target.querySelector('#fruit-to-add').value;
  const newFruitDescription = event.target.querySelector('.fruit-describe').value;
  
  const ul = document.querySelector('.fruits');
  
  const li = document.createElement('li');
  li.classList.add('fruit');
  
  const div = document.createElement('div');
  div.classList.add('fruit-details');
  
  const paraFruitName = document.createElement('p');
  paraFruitName.textContent = newFruit;
  div.appendChild(paraFruitName);
  
  const paraFruitDescription = document.createElement('p');
  paraFruitDescription.textContent = newFruitDescription;
  paraFruitDescription.style.fontStyle = 'italic';
  
  div.appendChild(paraFruitDescription);
  li.appendChild(div);
  addBtns(li);
  ul.appendChild(li);

  // clean inputs
  form.querySelector('#fruit-to-add').value = '';
  form.querySelector('.fruit-describe').value = '';
  form.querySelector('#fruit-to-add').focus();
});



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