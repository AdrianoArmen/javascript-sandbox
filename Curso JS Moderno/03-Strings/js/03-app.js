const product = 'Lightsaber';

const price = '30 USD';

// put toguether 2 strings
console.log(product.concat(price));
console.log(product.concat('On Sale'));

// also concat
console.log(product+price+"On Sale!!");

// can use commas (,) or plus (+)
console.log("The product "+ product +"has a price of "+price);

// backtick ES&
console.log(`The product ${product} has a price of ${price}`);