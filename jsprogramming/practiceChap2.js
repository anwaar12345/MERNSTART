let a = parseInt(prompt("Enter number 1 to add"));

let b = parseInt(prompt("Enter number 2 to add"));
 
let d = -3;

console.log(Math.abs(d));

document.write(`Sum is = `,eval(a+b));

let age = Math.abs(parseInt(prompt("Please Enter Your Age: ")));

if(age >= 10 && age <= 20){
    alert("age between 10 to 20");
}else{
    alert("not in age range");
}

let gender = prompt("Enter your Gender");

switch(gender){
    case "male": 
    case "MALE":
    case "Male":
    case "m" :
    case "M":
        alert("He is Developer");
        break;
    case "female": 
    case "FEMALE" : 
    case "Female": 
    case "f": 
    case "F":
        alert("She is a Developer");
        break; 
    default:
        console.log("not selected");         
}


let number = parseInt(prompt("number by 2 or 3"));

if((number % 2 == 0) || (number % 3 == 0)){
    console.log("yes");
}else{
    console.log("no");
}


(age > 18) ? console.log("you can drive") : console.log("you can't drive");
