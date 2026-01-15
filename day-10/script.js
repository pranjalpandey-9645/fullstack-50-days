console.log("Day 10: JavaScript loaded");

let age = 20;
let name = "Alice";
let isStudent = true;
let scores = [85, 90, 78];

function greet() {
    console.log("Hello, " + name + "!");
}
greet();

function calculateAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

let averageScore = calculateAverage(scores);
console.log("Average Score: " + averageScore);