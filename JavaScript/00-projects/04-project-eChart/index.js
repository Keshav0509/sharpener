import Product from './modules/Product.js';
import {
  uri,
  getProducts,
  postProducts,
  deleteProduct
} from './modules/axios.js'; 
import { calculateTotalValue } from './modules/utils.js';

let listProducts = [];

const handleLoadProducts = async () => {
  try {
    listProducts = await getProducts(uri); 
    listProducts.forEach(product => handleDisplayProduct(product));
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('DOMContentLoaded', handleLoadProducts);
document.getElementById('product-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const formData = {
      name: event.target.name.value,
      price: event.target.price.value,
      category: event.target.category.value,
      description: event.target.description.value,
    }
  
    const product = new Product(formData);
    const newProduct = await postProducts(uri, product);
    listProducts.push(newProduct);
    handleDisplayProduct(newProduct);
    calculateTotalValue(newProduct, true);
    event.target.reset();
  } catch (error) {
    console.log(error);
  }
});

const handleDisplayProduct = (product) => {
  const productList = document.getElementById('product-list');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${product.name}</td>
    <td>${product.price}</td>
  `;
  addButton(tr, product);
  productList.appendChild(tr);
}

const addButton = (tr, product) => {
  const td = document.createElement('td');
  const delBtn = document.createElement('button');
  delBtn.className = 'btn btn-danger btn-sm';
  delBtn.innerText = 'Delete';
  delBtn.addEventListener('click', () => handleDeleteProduct(tr, product._id));
  td.appendChild(delBtn);
  tr.appendChild(td);
}

const handleDeleteProduct = async (tr, productId) => {
  try {
    tr.remove();
    await deleteProduct(uri, productId);
    const idx = listProducts.findIndex(product => product._id ===  productId);
    calculateTotalValue(listProducts[idx], false);
    listProducts = listProducts.filter(product => product._id !== productId);
  } catch (error) {
    console.log(error);
  }
}