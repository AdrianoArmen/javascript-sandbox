for (i=1; i<=100; i++) {
    let result ='';
    if(i%3===0){
        result += 'Fizz';
    }
    if(i%5===0){
        result += 'Buzz';
    }
    console.log(result || i);
}
// previous was fizz buzz exercise 
let number ;
console.log(number);
// this will log UNDEFINED becuase its declared but not given a value

console.log(typeof number);
// will also log UNDEFINED

let number1 = null ;

console.log(number1);
// will log null
