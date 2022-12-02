let product = "Iphone Pro Max ";

console.log(product+6+" ");

let price = 200;

console.log(typeof (product+price));

const b = 1;

// b = 2;

console.log(b);

const person = {
    name : "John",
    age : 32,
    developer : true
};

person.salary = 120000;
person.name = "Michael";
console.log(person);

const dict = {
    "difficult" : "hard to perform",
    "working" : "sthing is in process"
};
for(let word in dict)
console.log("Word is " + word + " it means "+dict[word]);