let card = document.getElementsByClassName("card")[0];

card.style.backgroundColor ="#e932";
card.style.margin = "30px";
let cardTitle = document.getElementsByClassName("card-title")[0];
cardTitle.style.color="red";

let cardText = document.getElementById("card-text");
cardText.style.color = "black"
cardText.style.fontSize = "20px"

let tagsTarget = document.getElementsByTagName("p");
tagsTarget[0].style.fontStyle = "italic"

tagsTarget[0].parentNode.addEventListener('mouseover',(e)=>{
    console.log(e.target);
});
let div = document.getElementsByClassName('card')[0].cloneNode(true); 

 document.body.appendChild(div)

 console.log(document.querySelector('.card').getElementsByTagName('a')[0].style.color="red") //nested

let mainDiv = document.getElementsByClassName("card");
console.log(mainDiv[0].matches(".card"));
let alink = document.querySelector(".btn");
console.log(mainDiv[0].contains(alink));
console.log(alink.closest(".btn"));
// console.log(mainDiv[0].closest("body"))
