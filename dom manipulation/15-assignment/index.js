document.addEventListener("DOMContentLoaded", initialize);
// When the page get load display all users
function initialize(){
  const usersList = JSON.parse(localStorage.getItem('usersList')) || [];
  usersList.forEach(display);
  sessionStorage.removeItem('editId');
}

// add new users in usersList array
function handleSubmit(event) {  
  event.preventDefault();

  const usersList = getUsersListFromLocalStorage('usersList');
  
  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;
  const obj_user = {username, email, phone, id: Date.now()};
  
  const editId = sessionStorage.getItem('editId');
  if(editId){
    updateUser(editId, obj_user, usersList);
  }else{
    addData(obj_user, usersList);
  }

  localStorage.setItem('usersList', JSON.stringify(usersList));
  event.target.reset();
  updateSubmitBtn(false);
}

// use this function to display user on screen
function display(obj_user) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.id = obj_user.id;
  li.innerHTML = `Username: <strong>${obj_user.username}</strong> 
                  Email: <strong>${obj_user.email}</strong> 
                  Phone: <strong>${obj_user.phone}</strong> `;

  addButtonsToList(obj_user, li)
  ul.appendChild(li);
}

// use this function to add user details into local storage
function addData(obj_user, usersList) {
  usersList.push(obj_user);
  display(obj_user);
}
// get users data from local storage;
function getUsersListFromLocalStorage(key){
  return JSON.parse(localStorage.getItem(key)) || [];
}
// use this function to delete the user details from local store and DOM (screen)
function deleteData(id, li) {
  li.remove();
  const updateUsersList = getUsersListFromLocalStorage('usersList')
                    .filter(obj_user => obj_user.id !== id);
  localStorage.setItem('usersList', JSON.stringify(updateUsersList));
}
// use this function to update user details from local storage
function editData(obj_user) {
  document.querySelector('#username').value = obj_user.username;
  document.querySelector('#email').value = obj_user.email;
  document.querySelector('#phone').value = obj_user.phone;

  sessionStorage.setItem('editId', obj_user.id);
  updateSubmitBtn(true);
}
function updateUser(editId, obj_user, usersList) {
  for(let i = 0; i < usersList.length; i++) {
    if(usersList[i].id === parseInt(editId)) {
      usersList[i].username = obj_user.username;
      usersList[i].email = obj_user.email;
      usersList[i].phone = obj_user.phone;
    } 
  }

  const li = document.getElementById(editId);
  li.innerHTML = `Username: <strong>${obj_user.username}</strong> 
                  Email: <strong>${obj_user.email}</strong> 
                  Phone: <strong>${obj_user.phone}</strong> `;
  
  addButtonsToList(obj_user, li);
  sessionStorage.removeItem('editId');
  updateSubmitBtn(true);
}
function addButtonsToList(obj_user, li) {
  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => editData(obj_user));

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('del-btn');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => deleteData(obj_user.id, li));

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
}
function updateSubmitBtn(isSubmit){
  const submitBtn = document.querySelector('button[type=submit]');
  submitBtn.textContent = !isSubmit ? 'Submit' : 'Update';
}

// module.exports = handleFormSubmit;