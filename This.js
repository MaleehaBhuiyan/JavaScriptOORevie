console.log("This.js file")

/**************************** Function called on an Object ********************************************************** */

// 'this' references the object executing the current function 

const dog = {
    name: "Perky",
    
    returnThis: function(){
        return console.log("This:", this)
    },
    
    sayName: function(){
        console.log(`Hi my name is ${this.name}`)
    }
}

/**************************** Simple Function Call ********************************************************** */
// in a simple function call, 'this' will be the window object

function sayThis(){
    console.log("This", this)
}

function sayName(){
    console.log(`Hi my name is ${this.name}.`)
}

window.name = "Winslow"


/**************************** Bind/Call/Apply ********************************************************** */
// thisArg is an object we want to be used as the 'this' object in a given context 

const steven = {
    name: "Steven"
}

function sayNameLocationTime(location, time){
    console.log(`Hi, my name is ${this.name} and it's ${time} and I'm in ${location}.`)
}

sayNameLocationTime.call(steven, "LIC", "1:51")
sayNameLocationTime.apply(steven, ["LIC", "1:52"]) // same as call, but apply takes its arguments w/an array 

const boundSayHi = sayNameLocationTime.bind(steven, "LIC", "1:51") // use if you need to pass a callback and bind a specific this to it

/**************************** Function called with New Keyword ********************************************************** */
//

// as a class: (class in syntactic sugar)
// class Dog {
//     constructor(name, breed){
//         this.name = name
//         this.breed = breed
//     }
// }

// as a function: 
function Dog(name, breed){
    this.name = name
    this.breed = breed 
}

const neikko = new Dog("Neikko", "mostly rat")

/**************************** Arrow Functions ********************************************************** */

// arrow functions DO NOT get their own 'this', they get it from the parent context
// cannot use 'call', 'apply', or 'bind' with arrow function
// arrow functions are great candidates to be used inside objects if you need to reference the calling object
// the behavior of arrow functions with regard to this is more predictable 

const houdini = {
    name: "Houdini", 
    returnThis: this, 
    sayNameTraditional: function(){ // -> will say name of Cat 
        console.log(`Hi my name is ${this.name}`)
    },
    sayNameArrow: () => { // -> will say name of Window 
        console.log(`Hi my name is ${this.name}`)
    }
}
