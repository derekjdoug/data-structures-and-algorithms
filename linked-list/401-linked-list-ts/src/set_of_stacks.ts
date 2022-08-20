// export class SetOfStacks<T> {
//   start: Node<T> | undefined;
//   // Must use the below Stack class internally.
//   // When you need to create a new stack, do so with:
//   //
//   //    let stack = new Stack<T>(this.maxHeight);
//   //
//   constructor(private readonly maxHeight: number) {}

//   push(item: T): void {
//     const newNode = {
//       item: item,
//       next: this.start,
//     };
//     this.start = newNode;
//   }

//   pop(): T | Node<T> | undefined {
//     let newTop = this.start?.next;
//     let oldTop = this.start;
//     if(newTop && oldTop){
//       this.start = newTop;
//       oldTop.next = undefined;
//     return newTop;
//     }
//   }

//   get peek(): T | undefined {
//     let topNode = this.start
//     if(!topNode){
//       throw new Error('Sorry, you have no stack.');
//     }
//     topNode = {
//       item: topNode.item,
//       next: topNode.next,
//     }
//     return topNode.item;
//   }

//   // BONUS QUESTION
//   get size(): number {
//     throw new Error("TODO(you)");
//   }
// }

// class Stack<T> {
//   readonly _arr: T[] = [];

//   constructor(private readonly maxHeight: number) {}

//   push(t: T) {
//     if (this._arr.length > this.maxHeight) {
//       throw new Error("Stack toppled over!");
//     }
//     this._arr.push(t);
//   }

//   pop() {
//     return this._arr.pop();
//   }

//   get peek(): T | undefined {
//     return this._arr.at(-1);
//   }

//   get size(): number {
//     return this._arr.length;
//   }
// }

// interface Node<T> {
//   item: T;
//   next: Node<T> | undefined;
// }
