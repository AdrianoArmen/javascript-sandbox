const product = {
  name: "30 inch lightsaber",
  price: 300,
  available: true,
};

const measures = {
  distance: "1m",
  weight: "20kg",
};

console.log(product);
console.log(measures);

// object method assing will combine objects in one variable
const group = Object.assign(product,measures);


// spread operator or rest operator
// three dots mean make a copy of
const group2 = {...product,...measures};

console.log(group);
console.log(group2);