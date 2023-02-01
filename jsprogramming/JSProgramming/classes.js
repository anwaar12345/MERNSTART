class Person {
    constructor(name=null,age = 0){
        this.name = name;
        this.age = age;
    }
    
    info(){
        console.log(`My name is ${this.name} and i am ${this.age} years old`);
    }
    designationAndDetails() {
        console.log("Student");
    }
}

class SoftwareEngineer extends Person {
    #time;
    constructor(name,age,tech){
        super(name,age);
        this.tech = tech;
    }

    designationAndDetails(){
        console.log(SoftwareEngineer.upper(this.tech)); 
    }

    static upper(name){
        return name.toUpperCase();
    }

    setDate(){
        this.#time = new Date();
    }

    getDate(){
        return this.#time;
    }

}

// let person = new Person('Syed Anwar Ahmed Shah',27);
// person.info();

let engineer = new SoftwareEngineer("Syed Anwar Ahmed Shah",27,"PHP|JS|MSQL|MONGOD|AWS",2.8,'Backend');
console.log(engineer.info(),engineer.designationAndDetails());
// console.log(engineer.setDate());
console.log(engineer.getDate());
console.log(engineer instanceof Person);