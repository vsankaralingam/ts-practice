// Extends
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}
let dog: Dog = { name: "Rex", breed: "Labrador" };
