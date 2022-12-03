for(let i = 0; i < 5; i++){
    // console.log(i);
}
let n = 4;
let sum = 0;
for(let num = 0; num < n; num++){
    sum += num+1;
    // console.log(num);
}

console.log(sum);

let fact = 1;
for(let j = 3; j > 0; j--){
    fact *= j; 
}
console.log(fact);


let countries = {
    Pakistan : "Islamabad",
    Iran : "Tehran",
    Turkey : "Ankara",
    Afghanistan : "Kabul"
}


let countriesArray = [];
for(let country in countries){
    console.log(`Capital of ${country} is `,countries[country]);
    countriesArray.push(country); 
}

console.log(countriesArray);

for(let country of countriesArray){
    console.log(`${country}`);    
}

let name = 'Shah';

for(let alph of name){
    console.log(alph);
}

let n1 =3;
let k = 0;
while( k < n1){
    console.log(k);
    k++; 
}

console.log("do while");
let m =0;
do{
    console.log(m);
    m++;
}while(m < n);

