interface Person{
    name1: string;
    age: number;
    gender: string;
}
function greet(p: Person){
    console.log('Hello, ${p.name1}');
}

const user1 = {name1:"sankara",age: 25, gender:"male"}
greet(user1);