function nice(Ultron) {
    console.log("Hello, " + Ultron + "!");
    console.log("Hello, " + Ultron + " you're nice!");
    console.log("Hello, " + Ultron + " have a great day!");
}

function sum(a, b, c = 3) {
    console.log("Calculating the sum...");
    return a + b + c;
}

result = sum(1, 2);
console.log("The result is: " + result);

function myfunc(theObject) {
    theObject.make = "Defender";
}

const mycar = {
    make: "Mercedes",
    model: "Safari",
    year: 2006
};

console.log("Before myfunc call: " + mycar.make);
myfunc(mycar);
console.log("After myfunc call: " + mycar.make);