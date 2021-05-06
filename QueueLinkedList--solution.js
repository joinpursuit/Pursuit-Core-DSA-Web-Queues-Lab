/*
  Use the Node class for the nodes of your linked list
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
  QueueLinkedList will be a linked list with head, tail and length and it will have
  the Queue API methods: .enqueue(), .dequeue(), .peek() and .isEmpty() etc.
*/
class QueueLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(value) {
    let node = new Node(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    }

    this.tail.next = node
    this.tail = node
    this.length++
  }

  dequeue() {
    if (!this.head) return undefined

    let temp = this.head.value
    this.head = this.head.next
    this.length--
    return temp
  }

  peek() {
    return this.head.value
  }

  isEmpty() {
    return (this.length === 0)
  }

  toArray() {
    let arr = []
    if (!this.head) return arr

    while (!this.isEmpty()) {
      let elem = this.dequeue()
      arr.push(elem)
    }

    for (let elem of arr) {
      this.enqueue(elem)
    }
    return arr

  }

}

module.exports = QueueLinkedList;
