let names = [{
    "name" : "Shah"
},{
    "name" : "Saab"
}];

for(let i = 0; i < names.length; i++){
    console.log(names[i].name)
}

names.forEach((value,key) => {
    console.log("on index "+key+" value is : "+value);
})

console.log('for of');

for(let item of names){
    console.log(item.name);
}

console.log('for in');

for(let key in names){
    console.log(key+" "+names[key].name)
}