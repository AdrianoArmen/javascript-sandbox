"use strict";
// strict mode will ensure better practices are enforced


const product = {
  name: "30 inch lightsaber",
  price: 300,
  available: true,
};

// prevent object from being modified - object method freeze
Object.freeze(product);


// changing objects properties
product.available = false;
product.image = "image.jpg";

console.log(product);


