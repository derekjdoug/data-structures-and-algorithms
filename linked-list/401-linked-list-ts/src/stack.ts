export class Stack<T> {
  start: Node<T> | undefined;

  get size(): number {
    let listLength = 0;
    let tracker = this.start;
    while (tracker !== undefined) {
      tracker = tracker.next;
      listLength++;
    }
    return listLength;
  }

  get peek(): T | undefined {
    let topNode = this.start
    if(!topNode){
      throw new Error('Sorry, you have no stack.');
    }
    topNode = {
      item: topNode.item,
      next: topNode.next,
    }
    return topNode.item;
  }

  push(item: T): void {
    const newNode = {
      item: item,
      next: this.start,
    };
    this.start = newNode;
  }

  pop(): T | Node<T> | undefined {
    let newTop = this.start?.next;
    let oldTop = this.start;
    if(newTop && oldTop){
      this.start = newTop;
      oldTop.next = undefined;
    return newTop;
    }
  }
}

interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}
