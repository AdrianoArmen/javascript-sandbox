// object literal

const product = {
  name: "30 inch lightsaber",
  price: 300,
  available: true,
};

// object constructor

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.available = true;
}

const product2= new Product('vibroblade', 600);
console.log(product2);