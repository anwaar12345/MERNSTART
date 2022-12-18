
let a = (a,b) => {
    console.log("the Sum of Numbers is :",( a+b ));
    return (a +b);
};

let b = setTimeout(a,1000,2,3);
// console.log(b); //b has timerid
clearTimeout(b);

var n = 0;
let p =() => {
    n++;
    console.log(n);
    if(n==5){
        clearInterval(c);
    }
}
let c = setInterval(p,1000)