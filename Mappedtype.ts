//  Basic of map

const numbers: number[] =[1,2,3,4,5];
const squaredNumbers: number[] = numbers.map(num => num * num);
console.log(squaredNumbers);

// Map using interface

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "Siva" },
  { id: 2, name: "Sankara" },
];

const userNames: string[] = users.map(user => user.name);

console.log(userNames); // Output: ["Siva", "Sankara"]


// Map using Type transformation

const numbers1: number[] = [1, 2, 3];
const stringNumbers: string[] = numbers.map(num => `Number: ${num}`);

console.log(stringNumbers); // Output: ["Number: 1", "Number: 2", "Number: 3"]
