export class Expense {
  constructor(description, amount, category){
    this.description = description;
    this.amount = amount;
    this.category = category;
    this.id = Date.now();
  }
};


// local storage operations
export function setToLocalStorage(key, val){
  localStorage.setItem(key, JSON.stringify(val));
}

export function getFromLocalStorage(key){
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    console.log('something went wrong!', error);
    return;
  }
}
