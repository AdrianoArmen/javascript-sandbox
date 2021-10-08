const product = {
  name: "30 inch lightsaber",
  price: 300,
  available: true,
  information: {
    peso: "1 kg",
    measure: "1 meter",
    factory: {
      country: "China",
    },
  },
};

console.log(product);

// dot notation to reach inside object
console.log(product.price);

console.log(product.information.peso);

console.log(product.information.factory.country)
