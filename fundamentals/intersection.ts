// Intersection type
type A = { a: number };
type B = { b: string };
type AB = A & B;
let ab: AB = { a: 1, b: "x" };
