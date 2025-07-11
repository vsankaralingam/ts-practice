// Implements
interface Flyable {
  fly(): void;
}
class Bird implements Flyable {
  fly() {
    console.log("Flying");
  }
}
