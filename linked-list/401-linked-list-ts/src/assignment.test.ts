import { Collection } from "./Collection";
import { LinkedList } from "./LinkedList";
import { Shelter } from "./shelter";

describe("LinkedList", () => {
  it("checks if an item is included", () => {
    const list: Collection<string> = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");
    list.insert("Pippin");

    expect(list.includes("Sam")).toBe(true);
    expect(list.includes("Bilbo")).toBe(false);
  });

  class Hobbit {
    constructor(public name: string) { }
    toString() {
      // YM - Young Master
      return `YM ${this.name}`;
    }
  }

  it("creates a string for objects", () => {
    const list: Collection<Hobbit> = new LinkedList<Hobbit>();

    list.insert(new Hobbit("Pippin"));
    list.insert(new Hobbit("Merry"));
    list.insert(new Hobbit("Sam"));
    list.insert(new Hobbit("Frodo"));

    expect(list.toString()).toEqual(
      "{ YM Frodo } -> { YM Sam } -> { YM Merry } -> { YM Pippin } -> NULL"
    );
  });
});

describe("Animal Shelter", () => {
  it("enqueues succesfully", () => {
    const shelter = new Shelter();

    shelter.enqueue("Pippin", "cat");
    shelter.enqueue("Oliver", "dog");
    shelter.enqueue("Greylien", "cat");

    console.log(shelter);
    expect(shelter.shelterQueue).toEqual(
      [
        { name: 'Pippin', type: 'cat' },
        { name: 'Oliver', type: 'dog' },
        { name: 'Greylien', type: 'cat' }
      ]
    )
  })
  it("gets the next cat", () => {
    const shelter = new Shelter();

    shelter.enqueue("Pippin", "cat");
    shelter.enqueue("Oliver", "dog");
    shelter.enqueue("Greylien", "cat");

    expect(shelter.dequeue("cat")).toBe("Pippin");
    console.log(shelter);
    expect(shelter.dequeue("cat")).toBe("Greylien");
  });

  it("gets the next dog", () => {
    const shelter = new Shelter();

    shelter.enqueue("Pippin", "cat");
    shelter.enqueue("Oliver", "dog");
    shelter.enqueue("Greylien", "cat");

    expect(shelter.dequeue("dog")).toBe("Oliver");
  });

  it("gets the next friend", () => {
    const shelter = new Shelter();

    shelter.enqueue("Pippin", "cat");
    shelter.enqueue("Oliver", "dog");
    shelter.enqueue("Greylien", "cat");

    expect(shelter.dequeue()).toBe("Pippin");
    expect(shelter.dequeue()).toBe("Oliver");
  });
});
