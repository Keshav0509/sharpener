import  {
  uri,
  getData,
  postData,
  putData,
  deleteData,
  bookNewTable,
  existingTableAddFood
}  from "./utils.js";

let data = [];
async function domInitialization() {
  try {
    data = await getData(uri);
    // data.forEach(order => displayOrder(order));
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('DOMContentLoaded', domInitialization);

document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const tableNumber = e.target.tableNumber.value,
    dishName = e.target.dishName.value.trim(),
    price = Number(e.target.price.value);
    const tableData = {
      tableNumber,
      food: {
        dishName,
        price
      }
    }
    // console.log(tableData);
    // data.push(tableData)
    // const newTable = await bookNewTable(tableData);
    const isBookTable = await existingTableAddFood(tableData, data);
    console.log("new table booked:", isBookTable);
    console.log("food add to old table:", data);
    // console.log(newTable);
  } catch (error) {
    console.log(error);
  }
});

function displayOrder(order){
  const isTableExist = document.getElementById(`${order.tableNumber}`);
  if(!isTableExist) {
    bookTable(order);
    makeOrder(order);
  }else{
    makeOrder(order);
    addDish(data, order);
  }
}

function bookTable(order){
  const orderSummary = document.getElementById('order-summary');
  const div = document.createElement('div');
  div.id = order.tableNumber;
  div.className = 'order col-md-4 mb-4';
  div.innerHTML = `
    <div class="card shadow-sm">
      <div class="card-header bg-light">
        <div class="fw-bold">Order for ${order.tableNumber}</div>
      </div>
      <div class="card-body">
        <div class="items"></div>
        <div class="mt-3">
          <div><span class="fw-bold">Total:</span> ₹<span data-total-bill="${order._id}">0</span></div>
        </div>
      </div>
    </div>
  `;
  orderSummary.appendChild(div);
}

function makeOrder(order){
  const table = document.querySelector(`#${order.tableNumber}`);
  const orderList = table.querySelector('.items');
  // const orders = table.getElementsByClassName('orders');
  const div = document.createElement('div');
  div.className = 'border-top pt-2 d-flex justify-content-between align-items-center'
  div.innerHTML = ` <div>
                      <div><span class="fw-bold">Dish Name:</span> <span>${order.dishName}</span></div>
                      <div><span class="fw-bold">Price:</span> ₹<span>${order.price}</span></div>
                    </div>
                    <div>
                      <button class="btn btn-sm btn-danger delete-btn"><i class="bi bi-trash"></i></button>
                    </div>
                  `;
  div.addEventListener('click', (event) => handleDish(event, div));
  orderList.appendChild(div);
}

function handleDish(event, div) {
  const target = event.target.closest('.delete-btn');
  if(target){
    div.remove();
  }
} 


function calculateTotalBillAmount() {
  console.log('calculating...');
}
