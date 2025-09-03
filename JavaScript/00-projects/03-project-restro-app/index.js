const data = [];

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const order = {
    tableNumber: e.target.table.value,
    dishName: e.target.dish.value,
    price: e.target.price.value,
  }

  data.push(order);
  displayOrder(order);
  document.querySelector('form').reset();
});

function displayOrder(order){
  const isTableExist = document.getElementById(`${order.tableNumber}`);
  if(!isTableExist) {
    bookTable(order);
    makeOrder(order);
  }else{
    makeOrder(order);
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
          <div><span class="fw-bold">Total:</span> ₹<span id="summary-total-1">59.97</span></div>
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