let number = parseInt(prompt("Enter number"));

let correctNumber = 3;

while(number != correctNumber){
    number = parseInt(prompt("enter number"));
    if(number == correctNumber){
        alert("correct number");
    }
}


do{
    alert("1");
}while(number == 4 );

let mean = (a,b) => {
    return (a+b)/2;
};

console.log(mean(2,3));