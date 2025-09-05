const endpointId = 'b6054565605a48a185ba5cf194c2cb5a';
export const uri = `https://crudcrud.com/api/${endpointId}/restroData`;

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

export async function bookNewTable(tableData){
  try {
    const newTable = new BookTable(tableData);
    const promise = await postData(uri, newTable);
    return promise.data;
  } catch (error) {
    return `Error while Post: ${error}`;
  }
}

export async function existingTableAddFood(tableData, tableDataList) {
  try {
    const idx = tableDataList.findIndex(table => table.orderDetails.tableNumber === tableData.tableNumber);
    if(idx === -1){
      const newTableData = await bookNewTable(tableData);
      tableDataList.push(newTableData.data);
      return newTableData.data;
    }else{
      const tableId = tableDataList[idx]._id;
      tableDataList[idx].addFood(tableData.food);
      await putData(uri, tableId, tableDataList[idx]); 
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getData(uri) {
  try {
    const promise = await axios.get(uri);
    return promise.data;
  } catch (error) {
    return error;
  }
}

export async function postData(uri, data) {
  try {
    const promise = await axios.post(uri, data);
    return promise.data;
  } catch (error) {
    return error;
  }
}

export async function putData(uri, id, data) {
  try {
    await axios.put(`${uri}/${id}`, data);
    return true;
  } catch (error) {
    return error;
  }
}

export async function deleteData(uri, id) {
  try{
    await axios.delete(`${uri}/${id}`);
    return true;
  } catch(error) {
    return error;
  }
}

export function calculateTotalBillAmount() {
  console.log('calculating...');
}