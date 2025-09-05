
export class BookTable {
  constructor(order) {
    this.orderDetails = {
      tableNumber: order.tableNumber,
      orders: [],
      totalBillAmount: 0
    }
    if(order.food.dishName && order.food.price) {
      this.addFood(order.food);
    }
    this.calculateBillAmount()
  }
  addFood(food) {
    this.orderDetails.orders.push(food);
    this.calculateBillAmount();
  }
  calculateBillAmount(){
    this.orderDetails.totalBillAmount = this.orderDetails.orders.reduce((ack, curr) => ack + curr.price, 0);
  }
};

// testing the class;
const tableData1 = {
  tableNumber: 'table-1',
  food: {
    dishName: 'rice',
    price: 20
  }
} 
const tableData2 = {
  tableNumber: 'table-1',
  food: {
    dishName: 'rice',
    price: 20
  }
} 
const tableData3 = {
  tableNumber: 'table-1',
  food: {
    dishName: 'rice',
    price: 20
  }
} 

const newTable1 = new BookTable(tableData1);
newTable1._id = '12345';

newTable1.addFood(tableData2.food);
console.log(newTable1);