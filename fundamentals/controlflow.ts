// if else
const max = 100;
let counter = 0;
if (counter<max){
    counter++;
} else {
    counter = 1;
} 
 console.log(counter); // output 1
 
 // example for if else
 let discount: number;
 let itemCount = 11;
 if (itemCount > 0 && itemCount <=5){
    discount =5;
 }
else if (itemCount > 0 && itemCount <=10 ){
    discount = 10;
}
else (itemCount > 0 && itemCount <=15){
    discount =15;
}
console.log("discount upto 15%");
// switch case
let targetid ='btnDelete';

switch (targetid){
    case 'btnupdate';
    console.log("update";
        break;
    case 'btnDelete';
    console.log("delete");
        break;
    case 'btnNew':
        console.log("New");
        break;
}

//for
 const student = {
    name : "sankara";
    age : 25;
    course : "javascript";
 };
for (let key in student){
 console.log('key');
 console.log('student[key]');
}
// while

let i: number =1;
while (i<3){
    console.log('while loop, i')
    i++;
}
// do while
let i =0;
do{
    console.log(i);
    i++;
} while (i>10);

