import { Expense, getFromLocalStorage, setToLocalStorage } from "./utils.js";

const key = 'expenses';
const expenses = getFromLocalStorage(key);

window.addEventListener('DOMContentLoaded', initial)
const form = document.querySelector('form');

function initial(){
  // const expenses = getFromLocalStorage(key);
  expenses.forEach(expense_obj => displayExpenses(expense_obj));
  sessionStorage.removeItem('editId');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(!form.checkValidity()){
    console.log('form is not filled');
    form.classList.add('was-validated');
  }else{
    if(form.classList.contains('was-validated')){
      form.classList.remove('was-validated')
    }

    const descriptionInput = form.querySelector('#description').value;
    const amountInput = Number(form.querySelector('#amount').value);
    const categoryInput = form.querySelector('#category').value;

    const expense_obj = new Expense(descriptionInput, amountInput, categoryInput);
    const editId = sessionStorage.getItem('editId');
    
    if(!editId) {
      expenses.push(expense_obj);
      displayExpenses(expense_obj);
    } else {
      renderUpdatedExpense(editId, expense_obj, expenses);

    }
    
    changeSubmitBtn(false);
    setToLocalStorage(key, expenses);
    form.reset();
  }  
});

function displayExpenses(expense_obj){
  const tbody = document.querySelector('tbody');
  const tr = document.createElement('tr');
  tr.id = expense_obj.id;
  tr.innerHTML = `<td>${expense_obj.description}</td>
                  <td>$${expense_obj.amount}</td>`;

  addActionButtons(tr, expense_obj);
  tbody.appendChild(tr);
}

function addActionButtons(tr,  expense_obj){
  const td = document.createElement('td');

  const editBtn = document.createElement('button');
  editBtn.classList.add('btn btn-warning btn-sm');
  editBtn.dataset.editId = expense_obj.id;
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => updateExpense(expense_obj));
  
  const deleteBtn = document.createElement('button');
  deleteBtn.dataset.deleteId = expense_obj.id;
  deleteBtn.classList.add('btn btn-danger btn-sm');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => deleteExpense(expense_obj.id, tr));

  td.appendChild(editBtn);
  td.appendChild(deleteBtn);
  tr.appendChild(td);
}

function deleteExpense(id, tr){
  tr.remove();
  const updatedExpenses = getFromLocalStorage(key).filter(expense => expense.id !== id);
  setToLocalStorage(key, updatedExpenses);
}

function updateExpense(expense_obj){
  form.querySelector('#description').value = expense_obj.description;
  form.querySelector('#amount').value = expense_obj.amount
  form.querySelector('#category').value = expense_obj.category;

  sessionStorage.setItem('editId', expense_obj.id);
  changeSubmitBtn(true);
}

function renderUpdatedExpense(editId, expense_obj, expenses){
  for(let i = 0; i < expenses.length; i++) {
    if(expenses[i].id === editId){
      expenses[i] = {...expenses[i], descriptionInput, amountInput, categoryInput};
      break;
    }
  }
  
  const tr = document.getElementById(editId);
  tr.innerHTML = `<td>${expense_obj.description}</td>
                  <td>$${expense_obj.amount}</td>`;
  addActionButtons(tr, expense_obj);
  sessionStorage.removeItem('editId');
}

function changeSubmitBtn(isSubmit){
  const submitBtn = form.querySelector('button[type=submit]');
  submitBtn.textContent = isSubmit ? "Update" : "Submit";
}