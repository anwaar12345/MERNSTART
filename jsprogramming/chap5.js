let marks = [];

let n = parseInt(prompt("Enter how much"));

for(let i = 0; i < n; i++){
    let mark = parseInt(prompt("Enter Mark"));
    marks.push(mark);
}

document.write(marks);


document.write("do while");
let array = [1,2];
let a = 0;

do{
    console.log("aaaa");
    a = parseInt(prompt("Enter to Add"));
    array.push(a);
}while(a != 0)

document.write(array);
console.log("divisble by 10");

let numbers = [100,20,30,21];

let divisibleBy10 = numbers.filter((number)=>{
    return number % 10 == 0;
})

document.write(' divisible by 10 ',divisibleBy10);


console.log('square');

let squared = numbers.map((num) => {
    return num * num;
});

console.log(squared);


let numbers2= [5,2,3];

let factorial = numbers2.reduce((a,b) => {
    return a * b;
});

console.log(factorial);

