/*

1. SCOPE 

2. HOISTING 

3. VARIABLE DECLARATION 

4. FIRST CLASS FUNCTIONS 
    a. callbacks 
    b. closures 
    c. higher order functions 
*/ 

// -----------------------------------------------------------------------------------------------------------------------------------------

/*
1. SCOPE 
    Lexical Scoping means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. 
*/ 

    // a. Global Scope 
    // variables declared int he global scope are visible to any nexted function in the same scope 
    let name = "Steven"
    const sayHi = () => {
        console.log(`Hi there ${name}.`)
    }

    // b. Function Scope 
    //varaibles declared in function scope are visible within the functionand any nested functions inside of it, but not visible from the outside of the function 
    const sayHello = () => {
        let teacher = "Steven"

        function thing() {
            console.log(`Hi there ${teacher}`)
        }

        thing()
    }

    // console.log(teacher)  --> this will not work b/it is outside the function 

    // c. Block Scope 
    {
        const dog = "Perky"
    }

    // console.log(dog) --> dog is not visible b/ it is outside the block 



 // -----------------------------------------------------------------------------------------------------------------------------------------

 // 2. HOISTING 
// when JS is being compiled, certain variables are hoisted to the top of whatever scope they are in - variable definitions dont coem along for the ride 
 // variables declared with 'var' are hoisted, 'let' and 'const' are not   
    console.log(dog)

    var dog = "Perky"

    console.log(dog)
 // -----------------

    bark()
    // let bark = function(){ console.log("Bark") } // wont get hoisted :(
    // var bark = () => console.log("bark bark") // wont get hoisted :(
    function bark(){ console.log("I declare barking!") } // GETS HOISTED :D 
    

    // let something = function(){} // function expression 
    // let otherThing = () => {} // arrow function 
    // function yetAnotherThing(){} // function declatarion 


 // -----------------------------------------------------------------------------------------------------------------------------------------

 // 3. VARIABLE DECLARATION 

    // a. var 
    var student = "Ramona"
    var student = "Oliver"
    student = "Sebastian"

    // b. let 
    // let allows for redefinition but not redeclaration 

    let pony = "Benny"
    // let pony = "Rosie" // will cause an error
    pony = "Rosie"
    pony = ["horse1", "horse2"]

    // c. const 
    // const does not allow redeclaration or redefinition 
    // however const will allow modifications of objects and arrays b/ the variable itself is pointing to the same obj
    
    // const tree = "oak"
    // const tree = "willow"

    const tree = {
        species: "oak",
        height: 16
    }

    tree.age = 20

    tree.species = "willow"


// -----------------------------------------------------------------------------------------------------------------------------------------

// 4. FIRST CLASS FUNCTIONS 
    // Languages are said to treat functions as first class itizens when they treat functions liek other objects, meaning they can be assigned to variables, they can be passed around as arguments, or they can be assigned as properties inside objects

    // a. CALLBACKS 
    // passing a function in as an argument to another function 
    const myMap = (array, callback) => {
        // debugger // like binding.pry 
        const newArray = []

        for (let i = 0; i < array.length; i++){
            const element = array[i]
            const newValue = callback(element)
            newArray.push(newValue)
        }


        return newArray 
    }

    // b. HIGHER ORDER FUNCTIONS 
    // functions that accept functions as parameters or return other functions 
    // |
    // | RELATED, a higher order function works with a closure  
    // v
    // c. CLOSURE 
    // a closure is when a function is able to remember and access its scope even when that function is executing outside of its original scop, a function with a backpack, a functionwith baggage 
    
    function multiplier(x){
        return function(y){
            return x * y 
        }
    }

    const quadrupler = multiplier(4)

    quadrupler(3) // -> = 12 



