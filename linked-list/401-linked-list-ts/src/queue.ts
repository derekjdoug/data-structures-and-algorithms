export class Queue<T> {
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
    let frontNode = this.start
    if (!frontNode) {
      throw new Error('Sorry, you have no queue.');
    }
    frontNode = {
      item: frontNode.item,
      next: frontNode.next,
    }
    return frontNode.item;
  }

  enqueue(item: T): void {
    if (!this.start) {
      const newNode = {
        item: item,
        next: this.start,
      };
      this.start = newNode;
    } else {
      const newNode = {
        item: item,
        next: undefined,
      };
      let lastNode = this.start;
      if (lastNode) {
        while (lastNode.next) {
          lastNode = lastNode.next;
        }
        lastNode.next = newNode
      }
    }
  }

  dequeue(): T | Node<T> | undefined {
    let front = this.start
    front = front?.next;
    return front;
  }
}

interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}
