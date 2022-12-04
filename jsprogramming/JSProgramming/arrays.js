let names = ["shah","saab",null,1,false]; //multiple data types can be stored
names[2] = 2;
names.push(1);
names.pop();
names.unshift(12);
// names.shift(0);
for(let name of names){
    console.log(name);
}

console.log('for loop');
console.log(typeof names);
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

console.log("for off");

for(let value of names){
    console.log(value);
}

console.log("for in");

for(let key in names){
    // console.log(key);
    console.log(names[key]);
}



let numbers = [2,20,9,1];

let compare = (a,b) => {
    return b-a; //desc
    //a-b asc
}
console.log(numbers.sort(compare));


let num = numbers.slice(0,3);

console.log(num);


num.splice(0,2,21,23,22);

console.log(num);

delete num[2];

console.log(num);