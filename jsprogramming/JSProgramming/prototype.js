let a = {
  name : "Shah"
};
console.log(a);

let b = {
    run : (b) => {
      console.log(b);
   }
}

a.__proto__ = b;

console.log(a.run(123456));