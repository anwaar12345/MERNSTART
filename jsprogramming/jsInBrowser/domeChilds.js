console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes)
console.log(document.body.children)


let childs = document.body.childNodes;
let childsArr = Array.from(childs);

console.log(childsArr);

console.log(document.documentElement);

console.log(document.body.children[0].parentElement)
