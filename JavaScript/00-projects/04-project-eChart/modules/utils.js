export const calculateTotalValue = (product, bool) => {
  const totalValueElem = document.getElementById('total-products-value');
  const productCountElem = document.getElementById('total-products');
  let totalValue = Number(totalValueElem.innerText);
  let productCount = Number(productCountElem.innerText);
  if(bool){
    totalValue = totalValue + Number(product.price);
    productCount += 1;
  } else {
    totalValue = totalValue - Number(product.price);
    productCount -= 1;
  }
  totalValueElem.innerText = totalValue;
  productCountElem.innerText = productCount;
}

export const calculateTotalValueAndProducts = (listProducts) => {
  const totalValueElem = document.getElementById('total-products-value');
  const productCountElem = document.getElementById('total-products');
  totalValueElem.innerText = listProducts.reduce((sum, product) => sum + Number(product.price), 0);
  productCountElem.innerText = listProducts.length;
}