let cont = document.getElementById("container");
let newDiv = document.createElement("div");
newDiv.innerHTML = "<h1>Heading</h1>";
cont.append(newDiv);
let para = document.createElement("p");
// para.innerText = "wow"; only text
para.innerHTML = "<strong>WoW</strong>";
cont.prepend(para);

let para2 = document.createElement("p");
para2.setAttribute("class","red")
// para.innerText = "wow"; only text
para2.innerHTML = "<strong>Adding Befor Element</strong>";
cont.before(para2);

let para3 = document.createElement("p");
para3.setAttribute("class","red")
// para.innerText = "wow"; only text
para3.innerHTML = "<strong>Adding Befor Element</strong>";
cont.after(para3);


Array.from(document.getElementsByClassName("red")).forEach((ele) => {
    ele.style.color = "red";
});

let cr = document.createElement("p");
cr.innerText = "hi i am added Before para text ends";
cont.insertAdjacentElement("beforebegin",cr)

let cr2 = document.createElement("p");
cr2.innerText = "hi i am added Before para text ends";
cont.insertAdjacentElement("beforeend",cr2)
