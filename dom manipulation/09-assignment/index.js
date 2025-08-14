/*
1. In each "li" after the delete button add an edit button with class 'edit-btn'.
2. Now, implement the add and delete functionality just the way it is done in the video. There is only one difference that now the new 'li' element that you will create will have two buttons (delete and edit) instead of one button.
*/
function addButtons(li) {
  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.textContent = 'edit';
  li.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'x';
  li.appendChild(deleteBtn);
}

const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputEl = event.target.querySelector('#fruit-to-add');

  const li = document.createElement('li');
  li.classList.add('fruit');
  li.textContent = inputEl.value;
  inputEl.value = '';
  addButtons(li);

  fruits.appendChild(li);
});

fruits.addEventListener('click', (event) => {
  if(event.target.classList.contains('delete-btn')){
    const removeFruit = event.target.parentElement;
    fruits.removeChild(removeFruit);
  }

  if(event.target.classList.contains('edit-btn')){
    const inputEl = document.querySelector('#fruit-to-add');
    const fruitName = event.target;
    console.log(fruitName);
  }
});

