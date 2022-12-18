let btn1 = document.getElementById('click1');
let btn2 = document.getElementById('click2');
let btn3 = document.getElementById('click3');
let btn4 = document.getElementById('click4');

btn1.addEventListener('click',() => {
    alert("button 1 clicked");
});

btn2.addEventListener('click',() => {
    alert("button 2 clicked");
});

btn3.addEventListener('click',() => {
    alert("button 3 clicked");
});

btn4.addEventListener('click',() => {
    alert("button 4 clicked");
});
let btns  = Array.from(document.getElementsByClassName("google"));
btns.forEach(element => {
    element.addEventListener("click",() => {
        window.open("https://www.google.com",'_blank');
        window.focus();
    } )
});



let fetchTodo = async (url) => {
    let con = await fetch(url);
    let content = await con.json();
    return content;
}
let i = setInterval(async() => {
   let content=  await fetchTodo('https://jsonplaceholder.typicode.com/todos/1');
   console.log(content);
},1000);

clearInterval(i);

