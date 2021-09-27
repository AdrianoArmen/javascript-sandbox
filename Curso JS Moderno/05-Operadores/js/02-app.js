const number1 = 20;
const number2 = "20";
const number3 = 30;

// check if 2 numbers are equal / one equal only assig value to av ariable so
// false
console.log(number1==number3);

// will give true since its not a strict comparison
console.log(number1==number2);

// strict comparison - false
console.log(number1===number2);

// number
console.log(typeof number1);

// string
console.log(typeof number2);

// strict comparison with parse int to make it true
console.log(number1===parseInt(number2));
