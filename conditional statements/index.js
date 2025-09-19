// if else statement
let a = 10;
let b = 20;

if(a > b){
    console.log("a is greater than b");
}else if(a < b){
    console.log("a is less than b");
}else{
    console.log("a is equal to b");
};

let time = 24;
let greetings;

if (time < 10){
    greetings = "Good Morning!"
    console.log(greetings)
}else if(time < 20){
    greetings = "Good Afternoon!";
    console.log(greetings)
}else{
    greetings = "Good Night!";
    console.log(greetings)
}

// Assessment
let password = "emmanuel";

if(password.length === 8){
    console.log("Welcome!")
}else if(password.length <= 8){
    console.log("Password is too short")
}else if(password.length >= 8){
    console.log("Too long password")
    console.log("Password should be 8 characters")
}else{
    console.log("Please provide a password.")
}


// switch statement
let x = 0;
let text;

switch (x){
    case 0:
        console.log("Off")
        break;
    case 1:
        console.log("On")
        break;
    default:
        console.log("No bulb value")

}

// Assessment
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Banana is good!")
        break;
    case "orange":
        console.log("I am not a fan of orange")
        break;
    case "apple":
        console.log("How you like them apples?")
        break;
    default:
        console.log("I have never heard of that fruit.")
        break;
}



