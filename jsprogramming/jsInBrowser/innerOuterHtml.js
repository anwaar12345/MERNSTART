// document.body.firstElementChild.outerHTML = "<div>1</div>";

// document.body.firstElementChild.innerHTML = "Inner Outer HTML Testing";

let heading = document.getElementById("heading");
console.log(heading.attributes);
console.log(heading.getAttribute("id"));
heading.setAttribute("class","heading");
heading.setAttribute("data-test","test");
heading.removeAttribute("id");
console.log(heading.hasAttribute('id'));
console.log(heading.hasAttribute('class'));
console.log(heading.dataset.test)