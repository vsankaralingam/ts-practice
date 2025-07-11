// Utility Types: Pick, Partial, Record
interface User {
  name: string;
  age: number;
}
let partialUser: Partial<User> = { name: "Alice" };
let pickedUser: Pick<User, "name"> = { name: "Bob" };
let userRecord: Record<string, number> = { Alice: 25 };
