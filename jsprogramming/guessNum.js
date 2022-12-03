let number =Math.floor(Math.random() * 100);

let chances = 0;

let score = 100;
let guess;
do{
    guess = parseInt(prompt("Enter your guess"));
    chances++;
    score = score - chances;
    if(guess > number){
        console.log("number is greater");
    }
    if(guess < number){
        console.log("number is less");
    }
    if(guess == number){
        alert("You Won the GAME");
        console.log(score);
    }
}while(guess != number)

