const product = {
    name: "30 inch lightsaber",
    price: 300,
    available: true
    }

    // old way 
    const name = product.name;
    console.log(name);

    // object destructuring
    // will extract that value of the object and creates variable
    const { name } = product;
    