import { throws } from "assert";

interface Animal {
  name: string;
  type: "cat" | "dog";
}

export class Shelter {
  shelterQueue: Array<Animal> = [];

  enqueue(name: string, type: "cat" | "dog"): void {
    this.shelterQueue.push({ name, type });
  }

  dequeue(type?: "cat" | "dog"): string | any {
    // TODO(you);
    // If no type is given (type === undefined), return the next animal.
    // If the type is given, return the next animal of a type.
    if (type === undefined) {
      let adoptedPet = this.shelterQueue.shift();
      return adoptedPet?.name;
    } else if (type === "cat") {
      for(let i = 0; i < this.shelterQueue.length; i++) {
        if(this.shelterQueue[i].type === "cat"){
          let adoptee = this.shelterQueue.splice(i, 1);
          return adoptee[0].name;
        }
      }
    } else if (type === "dog") {
      for(let i = 0; i < this.shelterQueue.length; i++) {
        if(this.shelterQueue[i].type === "dog"){
          return this.shelterQueue[i].name;
        }
      }
    }
  }
}
