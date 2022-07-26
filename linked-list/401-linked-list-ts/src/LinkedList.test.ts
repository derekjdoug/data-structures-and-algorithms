import { Collection } from "./Collection";
import { LinkedList } from "./LinkedList";

describe("linked list", () => {
  it("runs my custom test", () => {
    const list: Collection<string> = new LinkedList<string>();
    expect(list).toBeDefined();
  });

  it("can insert into linked list", () => {
    const list: Collection<string> = new LinkedList<string>();

    list.insert("Test");
    list.insert("Test Again");
    expect(list.includes("Test")).toBe(true);
    expect(list.includes("Test Again")).toBe(true);
  });
  it("head points to first node", () => {
    class Nodies {
      constructor(public item: string) { }
      toString() {
        return `${this.item}`
      }
    }
    const list: Collection<Nodies> = new LinkedList<Nodies>();

    list.insert(new Nodies("Test 2"));
    list.insert(new Nodies("Test Start"));
    console.log(list.toString());
    expect(list.toString()).toBe("{ Test Start } -> { Test 2 } -> NULL");
  });
  it("returns false when can't find value", () => {
    const list: Collection<string> = new LinkedList<string>();

    list.insert("Test 2");
    list.insert("Test Start");
    console.log(list.toString());
    expect(list.includes("Test")).toBe(false);
  });
});
