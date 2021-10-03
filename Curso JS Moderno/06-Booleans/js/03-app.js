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