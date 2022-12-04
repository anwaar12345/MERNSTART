let age  = Number.parseInt(prompt("Enter age"));

let canDrive = (age) => {
    if(age < 0){
        console.error("cant enter negative numbers");
    }
    return age >=18 ? true: false ; 
};

if(canDrive(age)){
    alert("you can drive");
}

if(!canDrive(age)){
    alert("not allowed to drive");
}

let seePrompt = prompt("see prompt","yes");

let seePromptCheck = (seePrompt) => {
    while (seePrompt == "yes") {
        seePrompt = prompt("see prompt");
    }    
}

seePromptCheck(seePrompt);

let numbers = 0;

for(let i = 0; i < 10; i++){
    numbers++;
    if(numbers == 5){
        console.error("number is five");
        window.location.href = "https://www.google.com";
        break;
    }

    if(numbers == 2){
        console.error(`number was 2 skipped ${numbers}`);
        continue;
    }

    if(numbers==3){
        switch(prompt("change background color")){
            case "red":
                document.body.style.backgroundColor="red";
                break;
            case "yellow":
                document.body.style.backgroundColor="yellow";
                break;
            default:
                document.body.style.backgroundColor="green";    
        }
    }

    console.log(numbers);
}

