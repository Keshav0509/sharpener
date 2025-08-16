class User {
  constructor(username, email, phone) {
    this.username = username;
    this.email = email;
    this.phone = phone;
  }
}
function setToLocalStorage(key, val){
  localStorage.setItem(key, JSON.stringify(val));
}
function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

const users = [];
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = form.querySelector('#username').value;
  const userEmail = form.querySelector('#email').value;
  const userPhone = form.querySelector('#phone').value;

  const user = new User(userName, userEmail, userPhone);
  users.push(user);

  form.querySelector('#username').value = '';
  form.querySelector('#email').value = '';
  form.querySelector('#phone').value = '';

  form.querySelector('#username').focus();
  setToLocalStorage('user', users);
  console.log(getFromLocalStorage('user'));
});
