const authenticated = true;

// bad practice authenticated true is understood
if (authenticated===true) {
    console.log("you can watch Netflix")
} else {
    console.log("you can't watch")
}

// true implisit - good way to write code
if (authenticated) {
    console.log("you can watch Netflix")
} else {
    console.log("you can't watch")
}


// ternary operator
console.log(authenticated ? "you can watch Netflix" : "you can't watch")
// if authenticated is true then ^                  or  ^    