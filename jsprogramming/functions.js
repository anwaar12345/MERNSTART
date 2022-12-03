let f = () => {
    console.log(1);
};

f();
function fun(what){
    console.log(what);
}
fun("shah");


let aboutMe = (name,age) => {
    return `Assalam O Alaikum i am ${name} and i am ${age} years old`;
}

console.log(aboutMe("Syed Anwar Ahmed SHah",27));

let marks = {
    "english": 90,
    "urdu" : 95
}

for(let mark in marks){
    console.log(`${mark} : ${marks[mark]}`);
}

for(let i = 0; i < Object.keys(marks).length; i++){
    console.log(`${Object.keys(marks)[i]} : ${marks[Object.keys(marks)[i]]}`);
}

for(let key in marks){
    console.log(`marks are ${key} : ${marks[key]}`);
}

