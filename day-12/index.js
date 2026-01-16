console.log("Day 12: JavaScript if else statements");

let age = 17.5;

if (age < 13) {
    console.log("You are a child.");
} else if (age < 18) {
    console.log("hehe! You are a teenager. So don't drive.");
} else {
    console.log("You are an adult.");
}

let num = 1024086008;
let remainder = num % 2;

if (remainder === 0) {
    console.log(num + " is an even number.");
} else {
    console.log(num + " is an odd number.");
}