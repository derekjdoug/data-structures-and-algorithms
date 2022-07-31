import { Collection, display } from "./Collection";

export class LinkedList<T> implements Collection<T> {
  start: Node<T> | undefined;

  insert(item: T) {
    const newNode = {
      item: item,
      next: this.start,
    };
    this.start = newNode;
  }

  includes(item: T): boolean {
    let tracker = this.start;
    while(tracker !== undefined) {
      if(tracker.item === item) {
        return true;
      }
      tracker = tracker.next;
    }
    return false;
  }

  toString(): string {
    let str = '';
    let tracker = this.start;

    while(tracker !== undefined) {
      const strItem = display(tracker.item);
      str += `{ ${tracker.item} } -> `;
      tracker = tracker.next;
    }
    str += 'NULL';
    return str;
  }

  append(item: T): void {
    const newNode = {
      item: item,
      next: undefined,
    };
    let lastNode = this.start;
    if (lastNode){
      // Needs while loop to check to ensure next is not undefined
      while(lastNode.next) {
      lastNode = lastNode.next;
      }
      lastNode.next = newNode
    }
  }

  insertBefore(needle: T, item: T) {
    let tracker = this.start;
    while (tracker !== undefined) {
      if(tracker.next?.item === needle) {
        let shiftedNode = tracker.next;
        const newNode = {
          item: item,
          next: shiftedNode,
        };
        tracker.next = newNode;
        break;
      }
      tracker = tracker.next;
    }
  }

  insertAfter(needle: T, item: T) {
    let tracker = this.start;
    while (tracker !== undefined) {
      if(tracker.item === needle) {
        let shiftedNode = tracker.next;
        const newNode = {
          item: item,
          next: shiftedNode,
        };
        tracker.next = newNode;
      }
      tracker = tracker.next;
    }
  }
}

interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}
