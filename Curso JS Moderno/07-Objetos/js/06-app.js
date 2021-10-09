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
  
// nested object destructuring
const { name , information, information: { factory} } = product;


  console.log(product);
  console.log(information);
  console.log(factory);