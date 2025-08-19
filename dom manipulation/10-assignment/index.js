/*
  Deliverables:
  1. Use DOM Manipulation to add another input element inside form, before the button. This input element will take the description of the fruit.

  2. Use DOM Manipulation to show the fruit description (in italics) on screen alongwith the fruit name. This description should be shown in the next line (HINT: To show description on next line you can make use of the paragraph tag).

  3. Now, create a filter that shows only those fruits whose either name or description or both matches the entered text.

  Note: The input element that you will create using DOM manipulation to collect the description of fruit, must be given an id “description”.

  If you are getting any errors try debugging the error, after all no one becomes a developer without making mistakes and then debugging. Watch this video to understand the different ways of debugging.
*/
/*
// Add input element inside form, before button, to take fruit description
const form = document.querySelector('form');
const button = form.querySelector('button');
const inputEl = document.createElement('input');
inputEl.classList.add('fruit-description');
inputEl.id = 'description';
inputEl.setAttribute('placeholder', 'Fruit Description');
form.insertBefore(inputEl, button);

// add functional buttons in list item.
function addBtnToLi(li) {
  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.textContent = 'Edit';
  li.appendChild(editBtn);
  
  const delBtn = document.createElement('button');
  delBtn.classList.add('delete-btn');
  delBtn.textContent = 'x';
  li.appendChild(delBtn); 
}

// add new fruit list itme.
const fruitLists = document.querySelector('.fruits');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const li = document.createElement('li');
  li.classList.add('fruit');
  
  const nameFruit = document.getElementById('fruit-to-add').value;
  const descFruit = document.getElementById('description').value;
  
  const namePara = document.createElement('p');
  namePara.textContent = nameFruit;
  li.appendChild(namePara);
  
  const descPara = document.createElement('p');
  descPara.textContent = descFruit;
  // Show the fruit description in italics on the next line
  descPara.style.fontStyle = 'italic';
  
  li.appendChild(descPara);
  addBtnToLi(li);
  fruitLists.appendChild(li);
  
  form.querySelector('#fruit-to-add').value = '';
  form.querySelector('#description').value = '';
  form.querySelector('#fruit-to-add').focus();
});

// remove fruit list item.
fruitLists.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const removeFruit = event.target.parentElement;
    fruitLists.removeChild(removeFruit);
  }
});

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.getElementById('filter');
filter.addEventListener('keyup', (event) => {
  const text = event.target.value.toLowerCase();
  const fruits = document.querySelectorAll('.fruit');
  for (const fruit of fruits) {
    const name = fruit.firstChild.textContent.toLowerCase();
    
    if (name.indexOf(text) !== -1) {
      fruit.style.display = 'flex';
    } else {
      fruit.style.display = 'none';
    }
  }
});
*/

// Add input element inside form, before button, to take fruit description
const form = document.querySelector('form');
const inputEl = document.createElement('input');
inputEl.id = 'description';
const button = form.querySelector('button');
form.insertBefore(inputEl, button);
// Show the fruit description in italics on the next line
function addButtonToNewLi(li) {
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';
    li.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'x';
    li.appendChild(deleteBtn);
}

const fruitList = document.querySelector('.fruits');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    li.classList.add('fruit');

    const nameInput = form.querySelector('#fruit-to-add').value;
    const descInput = form.querySelector('#description').value;

    const fruitText = document.createTextNode(nameInput);
    li.appendChild(fruitText);
    
    const descPara = document.createElement('p');
    descPara.textContent = descInput;
    descPara.style.fontStyle = 'italic';
    li.appendChild(descPara);

    addButtonToNewLi(li);

    fruitList.appendChild(li);
    form.querySelector('#fruit-to-add').value = '';
    form.querySelector('#description').value = '';
});

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.querySelector('#filter');
filter.addEventListener('keyup', (e) => {
    const text = e.target.value.toLowerCase();
    const fruits = document.querySelectorAll('.fruit');
    for (const fruit of fruits) {
        const fruitName = fruit.firstChild.textContent.toLowerCase();
        const fruitDesc = fruit.querySelector('p').textContent.toLowerCase();

        if (fruitName.indexOf(text) !== -1 || 
        fruitDesc.indexOf(text) !== -1){
          fruit.style.display = 'flex';
        } 
        else {
          fruit.style.display = 'none';
        }
    }    
});
