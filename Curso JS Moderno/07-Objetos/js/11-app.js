const product = {
    name: "30 inch lightsaber",
    price: 300,
    available: true,
    showInfo: function() {
console.log(`The product: ${this.name} has a price of: ${this.price}`)
    }
  };


// template literal 
// THIS scopes to object - to refers the object itself

const product2 = {
  name: "Vibroblade",
  price: 3000,
  available: false,
  showInfo: function() {
console.log(`The product: ${this.name} has a price of: ${this.price}`)
  }
};

// very useful to use same function on different objects and refer to inner scope

product.showInfo();
product2.showInfo();