let name = 'Shah';
let currency = Symbol("$");
let age = 27;
let interest = null;
let developer = true;
let salary = BigInt("160000");
let hobby = undefined;
let traveling;

console.log(typeof traveling);
console.log(developer)


let persons = [
    {
       "name" : "test" 
    },
    {
        "name" : "test1"
    }
];
// for(var person in persons)
// console.log(persons[person])

for(let i = 0; i < persons.length; i++){
    console.log(persons[i].name);
}
