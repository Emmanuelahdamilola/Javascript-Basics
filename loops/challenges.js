// // Using a for loop print all even numbers up to and including n. Don’t include 0.
let n1 = 22;
for (let index = 1; index < 22; index++) {
   if (n1 % 2 === 0) {
    console.log(n1);
    index++;
   } 
}

// // Using a for loop output the elements in reverse order
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

for (let index = 0; index < 1; index++) {
    const rev = arr.reverse();
    console.log(rev); 
}

// Given two arrays of integers. Add up each element in the same position and create a new array containing the sum of each pair. Assume both arrays are of the same length.

let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];

let sum = 0;
let nums = [];

for (let i = 0; i < arr_3.length; i++) {
    sum = arr_3[i] + arr_4[i];
    nums.push(sum);
}
console.log(nums)


// Given a string change the every second letter to an uppercase ‘Z’. Assume there are no space.

let str1 = "javascript"; 
let result = "";

for (let i = 0; i < str1.length; i++) {
    if((i + 1) % 2 == 0){
        result += "Z";
    }else{
        result += str1[i]
    }
}
console.log(result)

// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

let str2 = "don’t know why";
for (let i = 0; i < str2.length; i++) {
    if (str2.includes("y")) {
        console.log("yes")
    }else{
        console.log("no")
    }
    
}

// Write a program that will allow someone to guess a four digit pin exactly 4 times. If the user guesses the number correctly. It prints “That wascorrect!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.


