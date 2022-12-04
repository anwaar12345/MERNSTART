
const changeBodyRed = () => {
    document.body.style.backgroundColor = "red";
    document.body.firstElementChild.style.backgroundColor = "yellow";
    document.body.firstElementChild.classList.add("nav");
}



changeBodyRed();

const ulLi = () => {
    let list = document.body.firstElementChild.firstElementChild.children;
    let lis = Array.from(list);
    lis.forEach((li) => {
        li.classList.add('item');
        li.addEventListener("mouseover",(e)=> {
            console.log(e.target);
        });
        li.addEventListener("mouseout",(e)=> {
            console.clear();
        });
    });
}

ulLi();

console.log(document.body.children[2].tHead.firstElementChild.style.backgroundColor ="green")
let arr1 = Array.from(document.body.children[2].tBodies[0].children);
arr1.forEach((e) => {
    console.log(e.style.backgroundColor="yellow")
});

//searching the dome 36