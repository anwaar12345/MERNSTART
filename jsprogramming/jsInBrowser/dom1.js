console.log(window);

console.log(window.document.body);

console.log(document.body.style.backgroundColor = "yellow");

let newPage = prompt("Enter decision");

if(newPage == "yes"){
    window.location.href= "https://www.google.com";
}