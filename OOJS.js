console.log("oojs")

class Person {
    constructor(name, age){ // sets up the rules/ what we want to do when we want to instantiate a new person obj
        this.name = name 
        this.age = age 
    }

    greeting(){ // creating  a function 
        console.log(`Hi my name is ${this.name} and I am ${this.age} years old.`)
    }

    static sayHi(otherName){
        console.log(`Hi there ${otherName}`)
    }
}

class Student extends Person{ // subclass, inherits from student 
    constructor(name, age, grade){
        super(name,age)
        this.grade = grade 
    }

}

const olivia = new Person("Olivia", 40) // creating a person object
const jeremy = new Student ("Jeremy", 12, 7)