let nav = document.getElementsByTagName("nav")[0];

nav.style.backgroundColor = "red";
nav.firstElementChild.firstElementChild.style.color="Reed"
nav.firstElementChild.firstElementChild.style.backgroundColor = "green";
nav.firstElementChild.lastElementChild.style.backgroundColor = "green";

document.querySelectorAll("li").forEach((li)=> {
   li.style.fontSize = "30px";
});