const product = {
    name: "30 inch lightsaber",
    price: 300,
    available: true,
    showInfo: function() {
console.log(`The product: ${this.name} has a price of: ${this.price}`)
    }
  };

// template literal 
// THIS scopes to object