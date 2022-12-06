let jokes = [
    "Funny Joke",
    "Very Funny Joke",
    "just joking no joke"
]


let jokesCracker = ($jokes) => {
    let randomIndex = Math.floor(Math.random() * jokes.length)
    return `<b>${jokes[randomIndex]}</b>`;
}

let btn = document.getElementById("joke");
btn.addEventListener("click",(e) => {
  document.getElementById("jokes");
  let para = document.getElementById("jokes").firstElementChild;  
//   para.innerText = "";
  para.innerHTML = jokesCracker();
    
})
