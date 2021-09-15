const product = '      Lightsaber      ';


console.log(product);
console.log(product.length);

// delete initial space of string
console.log(product.trimStart());
// delete final space of string
console.log(product.trimEnd());

// delete both ends combining methods
console.log(product.trimStart().trimEnd());


// delete both ends always
console.log(product.trim());
