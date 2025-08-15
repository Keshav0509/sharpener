export class User {
  constructor(username, email, phone) {
    this.username = username;
    this.email = email;
    this.phone = phone;
  }
}
export function setToLocalStorage(key, val){
  localStorage.setItem(key, JSON.stringify(val));
}
export function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}