import 
{ 
  getFromLocalStorage, 
  setToLocalStorage, 
  User 
} from "./utils.js";

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
