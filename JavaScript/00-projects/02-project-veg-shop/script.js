import { 
  uri, 
  getData, 
  postData, 
  deleteData, 
  putData
} from "./utils.js";

let vegetableList = [];
let totalVegetables = 1;

const initial = async () => {
  try{
    vegetableList = await getData(uri);
    vegetableList.forEach(vegetable => displayVegetables(vegetable));
  }catch(err){
    console.log(err);
  };
}
window.addEventListener('DOMContentLoaded', initial);

document.querySelector('form').addEventListener('submit', async (e) => { 
  e.preventDefault();
  const vegetable = {
    name: e.target.name.value,
    price: Number(e.target.price.value),
    quantity: Number(e.target.quantity.value),
  }

  const buyId = sessionStorage.getItem('buyId');
  
  if(!buyId){
    totalVegetables++;
    const newVegetable = await postData(uri, vegetable);
    vegetableList.push(newVegetable);
    displayVegetables(newVegetable);
    // console.log('total vegetables count:', totalVegetables);
  }

  // reset form;
  document.querySelector('form').reset();
});

const displayVegetables = (vegetable) => {
  const tbody = document.getElementById('vegetable-list');
  
  const tr = document.createElement('tr');
  tr.id = vegetable._id;
  tr.innerHTML = `
    <td>${vegetable.name}</td>
    <td><span>&#8377;</span><span class="price">${vegetable.price}</span></td>
    <td><span class="quantity">${vegetable.quantity}</span><span>&nbsp;kg</span></td>
    <td>
      <input type="text" id="update-quantity" placeholder="Update Quantity" class="form-control form-control-sm">
    </td>
  `;
  addButtons(tr, vegetable);
  tbody.appendChild(tr);
}

const addButtons = (tr, vegetable) => {
  const td = document.createElement('td');
  const buyBtn = document.createElement('button');
  buyBtn.className = 'btn btn-success btn-sm me-2'
  buyBtn.textContent = 'Buy';
  buyBtn.addEventListener('click', () => buyVegetable(vegetable._id, tr));
  
  const delBtn = document.createElement('button');
  delBtn.className = 'btn btn-danger btn-sm'
  delBtn.textContent = 'Delete';
  delBtn.addEventListener('click', () => deleteVegetable(tr, vegetable._id));

  td.appendChild(buyBtn);
  td.appendChild(delBtn);
  tr.appendChild(td);
}

const deleteVegetable = async (tr, vegId) => {
  try {
    await deleteData(uri, vegId);
    vegetableList = vegetableList.filter(vegetable => vegetable._id !== vegId);
    tr.remove();
  } catch (error) {
    console.log(error);
  }
}

// get input value.
// go to vegetable list with id and input value
// match id with vegetable
// update vegetable
// render vegetable

const buyVegetable = async (vegId, tr) => {
  try {
    const qty = Number(tr.querySelector('#update-quantity').value);
    const idx = vegetableList.findIndex(vegetable => vegetable._id === vegId)
    if(idx !== -1){
      let vegetable = {...vegetableList[idx]};
      const newQuantity = vegetable.quantity - qty;
      let updatedVeg = {
        name: vegetable.name,
        price: vegetable.price,
        quantity: newQuantity
      } 
      await putData(uri, vegId, updatedVeg);
    }
  } catch (error) {
    console.log(error);
  }
}

