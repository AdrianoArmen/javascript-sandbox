const number1 = "20";
const number2 = "20.2";
const number3 = "Uno";
const number4 = 20;

console.log(Number.parseInt(number1));

// will turn 20.2 into 20 interger
console.log(Number.parseInt(number2));

// parsefloat for fraction numbers
console.log(Number.parseFloat(number2));

// will return not a number NAN
console.log(Number.parseInt(number3));


// check if a number is interger or not - true
console.log(Number.isInteger(number4));


// check if a number is interger or not - false
console.log(Number.isInteger(number2));
