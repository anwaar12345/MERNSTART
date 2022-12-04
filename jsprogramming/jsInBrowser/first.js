alert(123);

console.warn("its is a warning");
console.log("logging");
console.error("its an error");
console.assert(5>2);
console.clear();

let obj = {
    name: "test"
};

console.table(obj);

console.info("info");

console.table(console);

console.time("2");
console.timeEnd("2");

let option = parseInt(prompt("enter option",1));

let confirming = confirm("You want to write on browser");

if(confirming){
    document.write("written on browser");
}

if(!confirming){
    alert("no writing");
}
