// for (initialExpression; condition; incrementExpression)

for (let index = 0; index < 10; index++) {
    console.log("Learning Javascript");
}

let fruits = ["Orange", "Mango", "Banana", "Apple"];

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(element);
}

// nested loop
let names = ["John", "Mark", "Smith", "Nacy"]
for (let i = 0; i < 5; i++) {
    console.log(i);
    for (let j = 0; j < names.length; j++) {
        const nameArr = names[j];
        console.log(nameArr);

    }
}


// Assessment
for (let i = 1; i <= 10; i++) {
    console.log("Emma", i)
}


// while (condition){
// statement
// }
// let i = 0;
// while (i < 5) {
//     console.log("Hello world", i)
//     i++;
// }

let index = 10;
while (index < 100) {
    console.log("Emma")
    index++;
}

// do=while loop
let i = 20;
do {
    console.log("Emma", i);
    i++;
} while (i <= 40);