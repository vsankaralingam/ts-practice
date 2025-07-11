// Readonly
interface Point {
  readonly x: number;
  readonly y: number;
}
let p: Point = { x: 1, y: 2 };
// p.x = 3; // Error
