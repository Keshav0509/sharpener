/*
1. In each "li" after the delete button add an edit button with class 'edit-btn'.
2. Now, implement the add and delete functionality just the way it is done in the video. There is only one difference that now the new 'li' element that you will create will have two buttons (delete and edit) instead of one button.
*/

// add functionality to list
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

// variables
const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

// add a fruit to the list
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

// remove a fruit from list
fruits.addEventListener('click', (event) => {
  if(event.target.classList.contains('delete-btn')){
    const removeFruit = event.target.parentElement;
    fruits.removeChild(removeFruit);
  }
});

