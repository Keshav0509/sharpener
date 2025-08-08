//this is my first file.

import { CircularQueue } from "./demo";

console.log('hello world!');
const cq = new CircularQueue(5);
cq.push(1); 
cq.push(2); 
cq.push(3); 
cq.push(4); 
cq.push(5);
cq.pop(); 
cq.push(6); 
console.log(cq);