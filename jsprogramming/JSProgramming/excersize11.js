class Complex {
    constructor(real,imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }

    add(num){
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }

    getComplexNumbers(){
        // return this.real + this.imaginary;
    }

    setComplexNumbers(num){
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }


}

let comp1 = new Complex(2,3);
let comp2 = new Complex(3,1);
comp1.add(comp2);
console.log(`${comp1.real}+${comp1.imaginary}i`);



class Human{
    run(){
        console.log("running slowly");
    }
}

class Student extends Human{
    run(){
        console.log("running fast");       
    }
}

let student =  new Student();
console.log(student.run());

console.log(student instanceof Human);
