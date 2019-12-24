
console.log(console);
// console is also object

function hello(userinput) {
    console.log('Hello!',  userinput);
}

hello("WooJoon");

function sayHello(name, age) {
    console.log(`Hello ${name} you are ${age} years old`);
    // it's better than "string" + "string2" style,
    // don't waste your time to check spaces between strings.
}

const greeting = sayHello("WooJoon", 14)
console.log(greeting); // => if sayHello has no return value,
                        // variable 'greeting' is undefined.

const calculator = {
    plus: function(a, b) {return a + b;},
    minus: function(a, b) {return a - b;},
    multiply: function(a, b) {return a * b;},
    divide: function(a, b) {return a / b;},
    power: function(a, b) {return a ** b;}
}

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const multiply = calculator.multiply(5, 5);
const divide = calculator.divide(5, 5);
const power = calculator.power(5, 5);

console.log(plus);
console.log(minus);
console.log(multiply);
console.log(divide);
console.log(power);


