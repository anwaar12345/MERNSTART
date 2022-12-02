var name = 'Syed Anwar Ahmed Shah';
var name = "Shah"; //var is function/global scoped and it can be redeclared with in same scope
{
    name = '1';
}
console.log(name);

let age = 1;
// let age = 2; let is blocked scoped and it can not be redeclared in same scope

let number = 23;

{
    let number = 24;
    console.log('blocked scoped '+number);
}

console.log(number);