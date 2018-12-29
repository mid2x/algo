// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor(){
    this.data = [];
  }
  add(i){
    this.data.unshift(i);
  }
  remove(){
    return this.data.pop();
  }
}

module.exports = Queue;
//  i dont know whether below code is right, but it worked!!
// class Queue {
//   tem = [];
//   Queue.add(n) = tem.unshift(n);
//   Queue.remove() = tem.pop();
// }
