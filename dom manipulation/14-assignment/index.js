const key = 'usersList'; // localStorage key;
window.addEventListener('DOMContentLoaded', initialize);

function initialize() {
  const usersList = getUsersFromLocalStorage(key);
  usersList.forEach(user => {
    displayUser(key, user);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();

  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  const obj_user = {username, email, phone, id: Date.now()};

  const usersList = getUsersFromLocalStorage(key);
  usersList.push(obj_user);
  console.log(usersList);
  setUsersToLocalStorage(key, usersList);

  displayUser(key, obj_user);
  event.target.reset();
}

function displayUser(key, obj_user) {
  const isUserExist = document.getElementById(obj_user.id);
  if(!isUserExist) {

    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.id = obj_user.id;
    li.innerHTML = `Username: <strong>${obj_user.username}</strong> 
                Email: <strong>${obj_user.email}</strong> 
                Phone Number: <strong>${obj_user.phone}</strong> `;

    const delBtn = document.createElement('button');
    delBtn.classList.add('del-btn');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', () => deleteUser(key, obj_user.id, li));

    li.appendChild(delBtn);
    ul.appendChild(li);
  }
}

function deleteUser(key, id, li) {
  li.remove();
  deleteUserFromLocalStorage(key, id);
}

// local storage calls;
function setUsersToLocalStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
};
function deleteUserFromLocalStorage(key, id) {
  let users = [];
  try {
    users = getUsersFromLocalStorage(key) || [];
    const updatedUserList = users.filter((user)=>user.id !== id);
    setUsersToLocalStorage(key, updatedUserList);
  } catch (error) {
    alert('No User Found In Local Storage!');
  }
}
function getUsersFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
};

// module.exports = handleFormSubmit;