let names = [
    "Shah","Shah Saab","ShahJi" 
];

let namesNew = names.map((value,key,arr)=> {
    console.log(value,key);
    return value + 1;
});

console.log(namesNew);

let filtered = names.filter((name)=> {
    return name == "Shah";
});

console.log(filtered);

console.log("Reduce example");

let marks = [90,43,32,21];

let reduced  = marks.reduce((mark1,mark2) => {
    return mark1+mark2;
});

console.log(reduced);