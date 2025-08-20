// Write your code below:
const ul = document.querySelector('.users');
const form = document.querySelector('form');

const handleFormSubmit = (event) => {
  event.preventDefault();
  const username = form.querySelector('#username').value;
  const email = form.querySelector('#email').value;
  const phone = form.querySelector('#phone').value;

  const user = { username, email, phone };
  setUserToLocalStorage(email, user);

  addUserToList(user);
  form.reset();
}

const addUserToList = (user) => {
  const existUser = document.getElementById(user.id);
  if (!existUser) {
    const li = document.createElement('li');
    li.classList.add('user');
    li.id = user.email;
    li.textContent = `${user.username} ${user.email} ${user.phone} `;
  
    const delBtn = document.createElement('button');
    delBtn.classList.add('del-btn');
    delBtn.textContent = 'Delete';
    li.appendChild(delBtn);
  
    ul.appendChild(li);
  }
}

const handleUser = (event) => {
  if (event.target.classList.contains('del-btn')) {
    const parent = event.target.parentElement;
    const id = parent.id;
    removeUserFromLocalStorage(id);
    ul.removeChild(parent);
  }
}
const displayUsers = () => {
  for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    if(key.startsWith('user_')){
      const user = getUserFromLocalStorage(key);
      if (user && user.email) {
        addUserToList(user);
      }
    }
  }
}
// load all users;
document.addEventListener('DOMContentLoaded', (e) => {
  console.log(e);
  displayUsers();
});

// operation for local storage;
const setUserToLocalStorage = (key, val) => {
    localStorage.setItem('user_' + key, JSON.stringify(val));
}
const removeUserFromLocalStorage = (key) => {
    localStorage.removeItem('user_' + key);
}
const getUserFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem('user_' + key));
}

// module.exports = handleFormSubmit, handleUser;