// console.log("working");

// //Explain call(), apply() and, bind() methods.
// // call (), apply () and bind () methods are the methods available on Function.prototype. What this means is that whenever you create a function, these methods are available by default as the functions properties. But what is the need of these methods?
// // these are just ddifferent  ways of invoking or calling functions. 
// // When you calling a function using any of these3, then you dont have to define in the function, that it will be taking objects as a parameter.

// // Call-------- method sets the this inside the function and immediately executes that function.
// // The call() method invokes a function with a specified context. In other words, you can tie a function into an object as if it belonged to the object.

// let name = "ram";
// age = 26;
// degegnation = "IT"

// function greeting() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
// }
// const john = {
//     name: 'John',
//     age: 24,
// };
// const jane = {
//     name: 'Jane',
//     age: 22,
// };
// greeting.call()
// greeting.call(john);
// greeting.call(jane);


// //Apply-----The apply() method is similar to call(). The difference is that the apply() method accepts an array of arguments instead of comma separated values.

// greeting.apply();
// greeting.apply(john);
// greeting.apply(jane);

// //Bind-----The bind method creates a new function and sets the this keyword to the specified object.The bind() method creates a new function that, when called, has its this keyword set to the provided value.
// var data = {
//     firstname: 'Nikhil',
//     lastname: 'Vidhate ',
//     getinfo: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var dataDetail = function() {
//     console.log(this.getinfo() + 'eat something!!');
// };

// var Detail = dataDetail.bind(data);

// Detail(); //



// //....2....Explain prototypes - In JavaScript, every function and object has a property named prototype by default. For example, function Person () { this.name = 'John', this.age = 23 } const person = new Person (); // checking the prototype value console.log (Person.prototype);
// function Person() {
//     this.name = 'John',
//         this.age = 23
// }

// const person1 = new Person();
// const person2 = new Person();

// Person.prototype.gender = 'male';

// console.log(Person.prototype);

// console.log(person1.gender);
// console.log(person2.gender);

//.....3..... What are function constructors?
// The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically, but suffers from security and similar (but far less significant) performance issues to Global_Objects/eva.
// A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.

// const sum = new Functions('a', 'b', 'return a+b');
// sum(2, 6);

// const sumOfArray = new Function('const sumArray = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue); return sumArray')();

// sumOfArray([1, 2, 3, 4]);


//...4...What is an event loop and call stack -- The call stack is a LIFO queue (Last In, First Out). The event loop continuously checks the call stack to see if there's any function that needs to run. While doing so, it adds any function call it finds to the call stack and executes each one in order.
// A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

const seconds = new Date().getSeconds();

setTimeout(function() {
    console.log(`Ran after ${new Date().getSeconds() - seconds} seconds`);
}, 500)

while (true) {
    if (new Date().getSeconds() - seconds >= 2) {
        console.log("Good, looped for 2 seconds")
        break;
    }
}

//....5.....What is prototype chain -- Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

function Person() {
    this.name = 'John'
}

Person.prototype.age = 20;

const person1 = new Person();

console.log(person1.age); // 20

Person.prototype = { age: 50 }

const person3 = new Person();

console.log(person3.age); // 50
console.log(person1.age); // 20

//.....6....What is the use of setTimeout? - setTimeout() The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

setTimeout(() => {
    console.log("Delayed for 1 second.");
}, "1000")


//....7.....What is creation phase and execution phase? - In the creation phase, the Execution Context is first associated with an Execution Context Object (ECO). The Execution Context Object stores a lot of important data which the code in the Execution Context uses during its run-time.
// Execution Context (GEC or FEC) happens in two phases:
// Creation Phase
// Execution Phase


function outerFunc(firstname, lastname, ) {
    var Greeting = "Welcome";
    var printName = 'Print my Name';

    function printName() {
        console.log(Greeting + ' ' + firstname + ' ' + lastname);
    }
    printName();
    var sayHi = function() {
        console.log('Hi, ' + firstname + ' ' + lastname);
    }
}
outerFunc('John', 'Doe');


//..8...What are objects in javascript? - n JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

var emp = new Object();
emp.id = 101;
emp.name = "Ravi Malik";
emp.salary = 50000;
document.write(emp.id + " " + emp.name + " " + emp.salary);

//...9... - What are callbacks? - Callbacks are generally used when the function needs to perform events before the callback is executed, or when the function does not (or cannot) have meaningful return values to act on, as is the case for Asynchronous JavaScript (based on timers) or XMLHttpRequest requests

function greeting(name) {
    alert('Hello ' + name);
}

function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(greeting);

//...9...Give an example of inheritance using function constructor

function Employee(name, age, gender, id) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
};

function Developer(name, age, gender, id, specialization) {

    Employee.call(this, name, age, gender, id);

    this.specialization = specialization;
}

let Employee1 = new Employee("Suraj", 28, "Male", 564);
let Developer1 = new Developer("Karishma", 31, "Female", 345,
    "Frontend Developer");
console.log(Employee1);
console.log(Developer1);