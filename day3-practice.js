// ==========================================
// Modern JavaScript - Day 3 Practical
// Topics: Scope, Hoisting, Closures, this
// ==========================================


// 1. SCOPE
console.log("===== SCOPE =====");

let name = "Noor"; // Global Scope

function student() {
    let course = "JavaScript"; // Function Scope

    if (true) {
        let topic = "Scope"; // Block Scope

        console.log("Global:", name);
        console.log("Function:", course);
        console.log("Block:", topic);
    }
}

student();


// 2. HOISTING
console.log("\n===== HOISTING =====");

console.log(age);
var age = 22;

sayHello();

function sayHello() {
    console.log("Hello from JavaScript");
}


// 3. CLOSURES
console.log("\n===== CLOSURES =====");

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log("Count:", count);
    };
}

const myCounter = counter();

myCounter();
myCounter();
myCounter();


// 4. THIS KEYWORD
console.log("\n===== THIS KEYWORD =====");

const studentInfo = {
    name: "Noor",

    showName: function () {
        console.log("Student Name:", this.name);
    }
};

studentInfo.showName();