//  document.write("Hello JavaScript");
 
//  let x = 10;
//  if (x > 5){
//     let y = 20;
//     console.log(y); 
//  }

//  Global scope
// var x = "Hello, Javascript";

// function example(){
//     var fs = "Hello, Javascript!";

//     console.log(fs)
// }

// example();

// console.log(fs);

// Block scope
function example(){
    if (true){
        let bv = "Javascript";
        console.log(bv);
    }
}
example();


//DATA TYPES IN JAVASCRIPT

// String Data Types
let firstname = "Emma";
console.log(firstname);

//  Number Data Type
let num = 96.0;
console.log(num);

// Boolean Data Types
let learning = true;
let completed = false;

console.log(typeof learning);

// Undefined
let age;
console.log(age);

// NULL

let number = null;
console.log(number);

// Object Data Types
let person = {
    firstname: "Emma",
    lastname: "Ella",
    age: 25
};
console.log(person)

// Array Data Types
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); 


// function Data Types
function msg(){
    console.log("Good morning!");
}

msg();


// Opeartors in Javascript

// Arithmetic operators
let sum = 5 + 3;
console.log(sum);

let x = 10-5;
console.log(x);

let mut = 5 * 3;
console.log(mut);

let mod = 15 % 3;
console.log(mod);

let div = 24 / 4;
console.log(div);

let expo = 2 ** 4;
console.log(expo);


// Assignment Operators

let ass = 5;

ass += 3;
ass **= 3;
console.log(ass);

// Increment/ Decrement operators
let a = 10;
console.log(++a);

let b = 5;
console.log(--b);

// Comparison opeartors
let ab = 10;
let cd = 20;

console.log(ab < cd);
console.log(ab > cd);
console.log(ab <= cd);
console.log(ab >= cd);

console.log(ab == cd);
console.log(ab != cd);

console.log(ab === cd);
console.log(ab !== cd);

// Logical opeartors
// Logical AND &&
let n = 5;
let m = 10;

console.log(n > 0 && m > 0);
console.log(n > 0 && m < 0);
console.log(n < 0 && m > 0);
console.log(n < 0 && m < 0);

// Logical OR ||
let num1 = 5;
let num2 = 10;

console.log(num1 > 0 || num2 > 0);
console.log(num1 > 0 || num2 < 0);
console.log(num1 < 0 || num2 > 0);
console.log(num1 < 0 || num2 < 0);

// Logical NOT !
let Yes = true;
let No = false;

console.log(!Yes);
console.log(!No);

// Javascript string operator
let z = " Javascript";

z += " tutorial";
console.log(z);

// Javascript precedence
let res = 2 + 4 * 5;
console.log(res)


// Conditional statements

// if conditional statement let country = "Canada";

let Age = 40;

if(age >= 30 && country == "India"){
    console.log("You can have a free coupon");
}

// else
let userAge = 20;
if(userAge > 18){
    console.log("You are qualified");
}else{
    console.log("Not qualify, You're a minor.");
}


// else if
let score = 40;

if(score >= 70){
    console.log("Excellent!");
}else if(score >= 50 && score <= 70){
    console.log("Good!");   
}else{
    console.log("Poor!")
}


// if statement to Olasunkanmi
let mood = "Coding";

if(true){
    console.log("Happy coding!");
}else{
    console.log("Take break!");
}

// Switch conditional statement
let value = 50;

switch (typeof value) {
    case "number":
        console.log("number")
        break;
        case "string":
        console.log("string")
        break;
        case "boolean":
        console.log("boolean")
        break;
    default:
    console.log("Others")
        break;
}

let dayName = 3;
switch (dayName) {
    case 1:
        dayName = "Monday"
        break;
        case 2:
        dayName = "Tuesday"
        break;
        case 3:
        dayName = "Wednesday"
        break;
        case 4:
        dayName = "Thursday"
        break;
        case 5:
        dayName = "Friday"
        break;
    default:
    dayName = "Invalid day name"
        break;
}
console.log("The day is " + dayName);


// Ternary operator

let grade = 70;

let grade_msg = (grade >= 70) ? "Excellent performance! Keep it up" : "Poor Performance! Keep studying";

console.log(grade_msg);


// Loop in Javascript

// for loop
for(let i = 1; i <= 10; i++){
    console.log(i);
}

let coding = ["Javascript", "Python", "C++", "Java", "Ruby"];

for(let i = 0; i <= coding.length; i++){
    console.log(coding[1])
}

for (let i = 1; i <= 5; i++){
    console.log(i);
    for(let j = 1; j <= 4; j++){
        console.log("Inner loop " + j);
    }
}

// While loop
let i = 5;
while(i <= 5){
    console.log(i);
    i++;
}

// do...while loop
let l= 10;

do{
    console.log(l);
    l++;

}while(l <= 5);

// Break/continue
for(let i = 1; i <= 5; i++){
    if(i == 3){
        continue;
    }
    console.log(i);
}

// Function in Javascript
function greet(){
    console.log("Hello, Emma!");
}
greet();

// Parameters and Arguments

function greeting(firstname, lastname){
    console.log("Hello " + firstname + " " + lastname);
}
greeting("Emma",  "Dammy");


// default parameters
function add(x, y){
    console.log(x + y);
}
add(5, 10);

// Function Return
function sub(x, y){
    return(x - y);
}
let result = sub(20, 15);  
console.log("The result is: " + result);

function fn1(x){
    function fn2(y){
        return x * y;
    }
    return(fn2);
}

let fn_result = fn1(3);
console.log(fn_result);

console.log(fn_result(4));


// Callbacks in Javascript
function display(results){
    console.log(results);
}

function Add(num1, num2, myCallBacks){
    let sum_res = num1 + num2;
    myCallBacks(sum_res);
}
Add(20, 30, display);

// Anonymous function
let sumAdd = function(x, y){
    return x * y;
}
console.log(sumAdd(2, 8));

// example 2
setTimeout(
    function(){
        console.log("Hello! Emma");
    },
    3000
);


// Recursive Function
function countDown(num){
    console.log(num);
    num--;
    if(num >= 0){
        countDown(num);
    }

}
countDown(5);


// Objects in Javascript
const user = {
    firstName : "Peter",
    lastName : "Paul",
    age : 30,
    address : {
        street : "Telsa Road",
        city : "Austin",
        country : "United States"
    }
}
// update object
// user.firstName = "John";

// Add object
// user.company = "Telsa";

// delete object
// delete user.lastName;

console.log(user.address.city);


// Javascript Object Method
const personTwo = {
    firstName : "Elon",
    lastName : "Musk",
    greet : function greet(){
        console.log("Hello World!");
    }
}

personTwo.greet();


// this keyword
const userTwo = {
    firstName : "Elon",
    lastName : "Musk",
    greet : function greet(){
        console.log("Hello " + this.firstName);
    }
}

userTwo.greet();

// Example 2
const userThree = {
    firstname : "Emma",
    lastName : "Joe",
    getFullName : function(){
        return this.firstname + " " + this.lastName;
    }
}

console.log(userThree.getFullName());

// Javascript constructor
function Car(name, color){
    this.name = name,
    this.color = color,
    this.fullDetails = function(){
        return this.name + " " + this.color ; 
    }
}

const car1 = new Car("Toyota", "Red");
const car2 = new Car("Venza", "Navy Blue");

// console.log(car1.fullDetails());

// How to add object and property to constructor
// car1.year = 2024;
// car2.greet = function(){
//     console.log("I love Venza");
// }
// console.log(car1);
// car2.greet();

// console.log(car1);
// console.log(car2);

// Javascript object prototype
function User(fname, lname){
    this.firstName = fname;
    this.lastName = lname;

}
User.prototype.age = 30;
User.prototype.getFullname = function(){
    return this.firstName + " " + this.lastName ; 
}

const user1 = new User("Joe", "Jone");
const user2 = new User("Doe", "Joe");

console.log(user2.getFullname());

// Example 2
function Student(){
    this.name = "Sammy Moch"
}
Student.prototype.age = 15;
const student1 = new Student();
console.log(student1);

// How to change prototype value
Student.prototype = {age : 20};
const student2 = new Student();
console.log(student2.age);

// Javascript Destructuring
const student = {
    firstName : "Doe",
    lastName : "Joe",
    gender : "Male"
}

let {firstName, lastName, gender = "Female"} = student;
console.log(gender);


// Object literal syntax Extensions in ES6
let city = "Lagos";
let country = "Nigeria";

const personNationality = {
    city,
    country
}

console.log(personNationality);


// Javascript Class
class Person{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
}
const person1 = new Person("Elon Musk", 50);
const person2 = new Person("Bill Gates", 57);

console.log(person1);

// Javascript Class Methods
class Person2{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    greet(){
        return "Hi " + this.name;
    }
    Country(country){
        this.country = country
    }
}
const person3 = new Person2("Elon Musk", 50);
person3.Country("Canada");
console.log(person3);


// Getters and Setters in Javascript
class Person3{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    get greet(){
        return "Hi " + this.name;
    }
    set address(city){
        this.city = city
    }
}
const person4 = new Person3("Elon Musk", 50);
person4.address = "Canada";
console.log(person4);

// Class Expression in Javascript
let NewPerson = class{
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name;
    }
}

const personName = new NewPerson("Elon Musk");
console.log(personName);

// Class inheritance
class Dog{
    constructor(name){
        this.name = name
    }
    message(){
        return "I love " + this.name
    }
}
class NewDog extends Dog{
    constructor(name){
        super(name);
    }
}
const dog = new NewDog("Fury");
console.log(dog);


// Javascript Factory
function createCar(brand, model, year){
    return{
        brand : brand,
        model : model,
        year : year,
        startEngine : function (){
            console.log(`The ${brand} ${model} has started`);
        }
    }
    
}

const Car1 = createCar("Toyota",  "Camry",2022);
const Car2 = createCar("Honda", "Civic", 2023);
const Car3 = createCar("Ford", "Mustang", 2024);

console.log(Car1);
console.log(Car2);
console.log(Car3);


// Car1.startEngine();

// Example 2
function createSmartphone(brand, model, price){
    return{
        brand : brand,
        model : model,
        price : price,
        getDetails : function(){
            console.log(`Brand: ${this.brand}, Model: ${this.model}, Price:$${this.price}`);
        },
        makeCall : function(){
            console.log(`${this.model} Dailing...`);
        }
    }
}

const iphone = createSmartphone("Apple", "Iphone 14", 1200);
const tecno = createSmartphone("Tecno", "Camon 40", 900);
const samsung = createSmartphone("Samsung", "Z-fold 4", 1400);

// console.log(iphone);

iphone.getDetails();
tecno.getDetails();
samsung.getDetails();

iphone.makeCall();
tecno.makeCall();
samsung.makeCall();


// Task on Javascript factory
function createLaptop(brand, model, processor, RAM){
    return{
        brand : brand,
        model : model,
        processor : processor,
        RAM : RAM,
        getSpec : function(){
            console.log(`Brand: ${this.brand}, Model: ${this.model}, processor: ${this.processor}, RAM: ${this.RAM}`);
        },
        powerOn : function(){
            console.log(`${this.brand} ${this.model} is now powered on.`);
        },
        shutDown : function(){
            console.log(`${this.brand} ${this.model} is now shutting down.`);
        },
        restart : function(){
            // console.log(`${this.brand} ${this.model} is shutting down...`);
            // console.log(`${this.brand} ${this.model} is powering back on...`);
            this.shutDown();
            this.powerOn();
            
        }
    }

}

const laptop1 = createLaptop("Dell", "XPS 15", "Intel Core i7",  "16GB");
const laptop2 = createLaptop("Apple", "MacBook Pro 16", "Apple M2 Max",  "32GB");
const laptop3 = createLaptop("HP", "ThinkPad X1 Carbon", "Intel Core i5",  "8GB");
const laptop4 = createLaptop("Lenovo", "ThinkPad X1 Carbon", "Intel Core i7",  "16GB");
const laptop5 = createLaptop("ASUS", "ROG Zephyrus G14", "AMD Ryzen 9",  "32GB");
const laptop6 = createLaptop("Acer", "Predator Helios 300", "Intel Core i9",  "16GB");
const laptop7 = createLaptop("Microsoft", "Surface Laptop 5", "Intel Core i7",  "16GB");


laptop1.getSpec();
laptop2.getSpec();
laptop3.getSpec();
laptop4.getSpec();
laptop5.getSpec();
laptop6.getSpec();
laptop7.getSpec();

laptop1.powerOn();
laptop2.powerOn();
laptop3.powerOn();
laptop4.powerOn();
laptop5.powerOn();
laptop6.powerOn();
laptop7.powerOn();

laptop1.shutDown();
laptop2.shutDown();
laptop3.shutDown();
laptop4.shutDown();
laptop5.shutDown();
laptop6.shutDown();
laptop7.shutDown();

laptop1.restart();
laptop2.restart();
laptop3.restart();
laptop4.restart();
laptop5.restart();
laptop6.restart();
laptop7.restart();


// Factory Javascript
function createCar(brand, model, year){
    return{
        brand : brand,
        model : model,
        year : year,
        startCar : function(){
            console.log(`The ${this.brand} ${this.model} is starting...`);
        }
    }
}

const carOne = createCar("Toyota", "Camry", "2022");
const carTwo = createCar("Honda", "Civic", "2023");

carOne.startCar();
carTwo.startCar();

// Constructor Javascript
function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;

}
Car.prototype.startCar = function(){
    console.log(`The ${this.brand} ${this.model} is starting...`);
}

const car_One = new Car("Honda", "Civic", "2023");
const car_Two = new Car("Toyota", "Camry", "2022");

car_One.startCar();
car_Two.startCar();

// JavaScript Value vs Reference

// Javascript value
let number1 = 50;
let number2 = number1;

number2 = 100;

console.log(number1);
console.log(number2);


// Javascript reference
let car_1 = { brand: "Toyota", model: "Camry" };
let car_2 =car_1;

car_2.brand = "Honda";

console.log(car_1.brand);
console.log(car_2.brand);


// Function tasks
// function addNumbers(a, b) {
//     if(isNaN(a) || isNaN(b)){
//        return "Your values are invalid";
//     }else{
//         return a + b;
//     }
    
// }

// console.log(addNumbers(5, 7)); 
// console.log(addNumbers(10, 20)); 


// function findMax(a, b, c) {
//     let a = max;

//     if(b > max){
//         max = b;
//     }

//     if(c > max){
//         max = c;
//     }
//        return max 
// }

// console.log(findMax(10, 25, 7)); 
// console.log(findMax(100, 50, 75)); 
// console.log(findMax(-5, -10, -2)); 


// check if the number is even or odd
// function checkEvenOrOdd(num) {
//     if (isNaN(num)){
//         return "Invalid values";
//     }else if (num % 2 === 0) {
//         return num + " is even.";
//     } else {
//         return num + " is odd.";
//     }
// }

// console.log(checkEvenOrOdd(10)); 
// console.log(checkEvenOrOdd(7));  
// console.log(checkEvenOrOdd(0));  

// function factorial(n) {
//     n--;
    
// }

// console.log(factorial(5)); 
// console.log(factorial(3)); 
// console.log(factorial(0)); 



// 

