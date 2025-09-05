import { uri, deleteProduct } from "./axios.js";

export default class Product {
  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.description = product.description;
  }
}
/*
export const handleDisplayProduct = (product) => {
  const productList = document.getElementById('product-list');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${product.name}</td>
    <td>${product.price}</td>
  `;
  addButton(tr, product);
  productList.appendChild(tr);
}

export const addButton = (tr, product) => {
  const td = document.createElement('td');
  const delBtn = document.createElement('button');
  delBtn.className = 'btn btn-danger btn-sm';
  delBtn.innerText = 'Delete';
  delBtn.addEventListener('click', () => handleDeleteProduct(tr, product._id));
  td.appendChild(delBtn);
  tr.appendChild(td);
}

export const handleDeleteProduct = async (tr, productId) => {
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
*/
