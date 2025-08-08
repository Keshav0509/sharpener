export class CircularQueue {
  constructor(k){
    this.queue = new Array(k);
    this.cap = k;
    this.size = 0;
    this.rear = -1;
    this.front = 0;
  }
  push(val){
    if (this.isFull()) return false;
    this.rear = (this.rear + 1) % this.cap;
    this.queue[this.rear] = val;
    this.size++;
  }
  pop(){
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.cap;
    this.size--;
  }
  peek(){
    if (this.isEmpty()) return -1;
    return this.queue[this.front];
    
  }
  back(){
    if (this.isEmpty()) return -1;
    return this.queue[this.rear];
  }
  isFull(){
    return this.cap === this.size;
  }
  isEmpty(){
    return this.size === 0;
  }
}