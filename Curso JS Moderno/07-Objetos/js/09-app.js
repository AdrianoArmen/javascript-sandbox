"use strict";
// strict mode will ensure better practices are enforced


const product = {
  name: "30 inch lightsaber",
  price: 300,
  available: true,
};

// object metod seal - different from freeze this one allows to modify existing properties only
Object.seal(product);


// changing objects properties
product.available = false;
product.image = "image.jpg";
delete product.price;

// to check if object is sealed
console.log(Object.isSealed(product));


console.log(product);

