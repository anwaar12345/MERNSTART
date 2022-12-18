let btn = document.getElementById('btn');
let names = document.getElementById('name');
let evento = (e) => {
    e.target.style.color="red";
    console.log(e.target.value);
};
names.addEventListener('focus',evento)
names.addEventListener('blur',(e) => {
    names.removeEventListener('focus',evento);
    names.style.color = "black";
});


btn.addEventListener('click',(e) => {
  let name = document.getElementById('name').value;
    
});