let a = "Atul";
let b = "Bhanu";
let c = "Chandu";
let d = "Dinesh";
let n = 4;
let names = [a, b, c, d];

console.log(typeof a, typeof b, typeof c, typeof d, typeof n, typeof names);

let p = null;
let q = {
    name: "Atul",
    age: 24, 
    isMarried: false,
    skills: ["JavaScript", "HTML", "CSS"]
}

console.log(typeof p, typeof q);
console.log(q);

q.ryan = "Hello Ryan";
console.log(q);
delete q.isMarried;
console.log(q);

q.address = "Nishadganj, Patna";
console.log(q);