// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
    }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  insertFirst(data){
    this.head = new Node(data, this.head); //simplify version of the below
    // const node = new Node(data, this.head);// create new node with new data and linked it to the first, means the next item will be the head
    // this.head = node;//assign the head flag to this new node
  }
  size(){
    let count = 0;
    let node = this.head;
    while(node){
      count++;
      node = node.next;
    }
    return count;
  }
  getFirst(){
    return this.head;
  }
  getLast(){
    if(!this.head){
      return null;
    }
    let node = this.head;
    while(node.next){
      node = node.next;
    }
    return node;
  }
  clear(){
    this.head = null;
  }
  removeFirst(){
    this.head = this.head.next;
  }
  removeLast(){
    if (!this.head){
      return;
    }if(!this.head.next){
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next){
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data){
    const last = this.getLast();
    if (last){
      last.next = new Node(data);
    }else{
      this.head = new Node(data);
    }
  }
  getAt(index){
    let count = 0;
    let node = this.head;
    // if(!node){
    //   return null;
    // }
    while(node){
      if (count == index){
        return node;
      }
      count++;
      node = node.next;
    }
    return null;
  }
  removeAt(index){
    if(!this.getAt(index)){
      return;
    }else
    if(index == 0){
      this.head = this.head.next;
      return;
    }
    let node = this.getAt(index - 1);
    node.next = this.getAt(index + 1);
  }
  insertAt(data, index){
    if(index == 0 || !this.head){
      this.head = new Node(data, this.head);
      return;
    }
    if(!this.getAt(index)){
      this.insertLast(data);
      return;
    }
    let node = new Node(data, this.getAt(index));
    // node.next = this.getAt(index);
    this.getAt(index-1).next = node;

    //const previous = this.getAt(index-1) || this.getLast();
    //const node = new Node(data, previous.next);
    //previous.next = node;
  }
  forEach(fn) {
   let node = this.head;
   //let counter = 0;
   while (node) {
     fn(node);
     node = node.next;
     //counter++;
   }
 }

}

module.exports = { Node, LinkedList };
