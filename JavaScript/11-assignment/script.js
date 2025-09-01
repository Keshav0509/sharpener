const uri = "https://crudcrud.com/api/c9aaddfdc752418aa5df09091bded680"
const appointmentData = "appointmentData";
const form = document.querySelector('form');
const ul = document.querySelector('ul');

let data = [];

const initial = async () => {
  try {
    data = await getData(uri, appointmentData);
    data.forEach(user => displayUserOnScreen(user));
    sessionStorage.removeItem('editId');
  } catch (error) {
    console.log("Error while Loading users:", error);
  }
}

window.addEventListener('DOMContentLoaded', initial);


async function handleFormSubmit(event) {
  try {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
  
    const editId = sessionStorage.getItem('editId');
    if(!editId){
      const data = await postData(uri, appointmentData, userDetails);
      displayUserOnScreen(data);
    }else{
      await updateUserDetails(editId, userDetails);
    }
    // Clearing the input fields
    form.reset();
    changeButtonStatus(false);
  } catch (error) {
    console.log("Error while add a new user:", error);
  }
}

function displayUserOnScreen(userDetails) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.id = userDetails._id;
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.appendChild(
    document.createTextNode(
      `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
  );
  // add buttons to li;
  addFeaturesKeys(li, userDetails);

  ul.appendChild(li);
}

function addFeaturesKeys(li, user_obj){
  const editBtn = document.createElement("button");
  editBtn.className = 'btn btn-warning btn-sm me-2';
  editBtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(editBtn);
  editBtn.addEventListener("click", ()=> editUser(user_obj));

  const deleteBtn = document.createElement("button");
  deleteBtn.className = 'btn btn-danger btn-sm';
  deleteBtn.appendChild(document.createTextNode("Delete"));
  li.appendChild(deleteBtn);

  console.log("user id:", user_obj._id);
  deleteBtn.addEventListener("click", () => deleteUser(li, user_obj._id));
}

async function updateUserDetails(id, user_obj){
  try {
    await putData(uri, appointmentData, id, user_obj);
    
    const idx = data.findIndex(obj => obj._id === id);
    if(idx !== -1)
      data[idx] = {...user_obj, _id: id};
  
    const li = document.getElementById(user_obj._id);
    if(li){
      li.innerHTML = '';
      li.appendChild(
        document.createTextNode(
          `${user_obj.username} - ${user_obj.email} - ${user_obj.phone}`
        )
      )
      addFeaturesKeys(li, {...user_obj, _id: id});
    }
    sessionStorage.removeItem('editId');
    changeButtonStatus(false);
  } catch (error) {
    console.log("Error while render updated user:", error);
  }
}


// app features
function editUser(user_obj) {
  document.getElementById("username").value = user_obj.username;
  document.getElementById("email").value = user_obj.email;
  document.getElementById("phone").value = user_obj.phone;

  sessionStorage.setItem('editId', user_obj._id);
  changeButtonStatus(true);

  const li = document.getElementById(user_obj._id);
  if (li) {
    const textNode = li.childNodes[0];
    textNode.textContent = `${user_obj.username} - ${user_obj.email} - ${user_obj.phone} Editing...`;
  }
}

async function deleteUser(li, id){
  try{
    li.remove();
    await deleteData(uri, appointmentData, id);
    data = data.filter(user => user._id !== id);
  }catch(err){
    console.log("Error while delete user:",err);
  }
}

function changeButtonStatus(isChange){
  const isSubmit = form.querySelector('button[type=submit]');
  isSubmit.textContent = isChange ? 'Update' : 'Submit';
}
// crud operations
async function getData(uri, rout) {
  try {
    const response = await axios.get(`${uri}/${rout}`);
    return response.data;
  } catch (err) {
    console.log("Error load data:",err);
  }
}
async function postData(uri, rout, data) {
  try {
    const userDetails = await axios.post(`${uri}/${rout}`, data);
    // console.log("user details:", userDetails.data);
    return userDetails.data;
  } catch (error) {
    console.log("Error while register user:", error);
  }
}
async function putData(uri, rout, id, data) {
  try {
    await axios.put(`${uri}/${rout}/${id}`, data);
  } catch (error) {
    console.log("Error while update user data:", error);
  }
}
async function deleteData(uri, rout, id) {
  try {
    await axios.delete(`${uri}/${rout}/${id}`);
  } catch (error) {
    console.log("Error not exist:",error);
  }
}

// Do not touch code below
module.exports = handleFormSubmit;
