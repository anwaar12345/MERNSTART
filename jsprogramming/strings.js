let names = "Abbas";

console.log(names.replace('Abbas','Shah'));

console.log(names);

console.log(names.toUpperCase()); 
console.log(names.toLowerCase());

console.log(names.indexOf('A'));
console.log(names.startsWith('A'));
console.log(names.endsWith('s'));
console.log(names.split());
console.log(names);

console.log(names.slice(0,names.length));
console.log(names.slice(0));
let arr1 = [];
for(let i in names){
    arr1.push(names[i]);
    console.log(names[i]);
}
console.log(arr1.join(',',''));