/*
  class User {
    constructor(val, next = null) {
      this.val = val;
      this.next = next
    }
  };
  function push(users, user){
    const new_user = new User(user);
    new_user.next = users;
    return new_user;
  }

  const user = new User(0);

  function handleFormSubmit(event) {
    event.preventDefault();

    const name = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;

    const user = {
      name,
      email,
      phone 
    }
    user = user.next()
    setToLocalStorage(name, user);
  }

  function setToLocalStorage(key, val){
    localStorage.setItem(key, JSON.stringify(val));
  }
  async function getFromLocalStorage(key){
    return await JSON.parse(localStorage.getItem(key));
  }
  async function removeFromLocalStorage(key){
    await localStorage.removeItem(key);
  }
*/
// Write your code below:
const ul = document.querySelector("ul");
const form = document.querySelector('form');

function handleFormSubmit(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const user = {
    username,
    email,
    phone
  };

  localStorage.setItem(email, JSON.stringify(user));
  displayUser(user);
  form.reset();
}

function displayUser(user) {
  const li = document.createElement("li");
  li.id = user.email;
  li.textContent = `${user.username} - ${user.email} - ${user.phone} `;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add('delete-btn');

  li.appendChild(deleteBtn);
  ul.appendChild(li);
}
ul.addEventListener('click',async (event)=>{
  if(event.target.classList.contains('delete-btn')){
    const parent = event.target.parentElement;
    const id = parent.id;
    await localStorage.removeItem(id);
    ul.removeChild(parent);
  }
})

