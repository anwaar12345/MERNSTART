let user = prompt("Enter snake,water and gun game"); 

function generateRandomLetter() {
    const alphabet = "swg"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

let cpu = generateRandomLetter();

let match = (cpu,user) => {
    if(cpu == user){
        return "tie";
    }

    if(cpu == 's' && user == "g"){
        return "user";
    }
    
    else if(cpu == 'g' && user == "s"){
        return "cpu";
    }

   else if(cpu == 'w' && user == "g"){
        return "cpu";
    }

    else if(cpu == 'g' && user == "w"){
        return "user";
    }

    else if(cpu == 'w' && user == "s"){
        return "user";
    }

    else if(cpu == 's' && user == "w"){
        return "cpu";
    }

}

let result = match(cpu,user);
document.write(`<h3>cpu : ${cpu} user : ${user} Winner : ${result}</h3>`)