const product = 'Lightsaber 20 Inches';

// repeat string chain
const text = ' on Sale!'.repeat(3);
// if not interger number js will round up to next interger


// 3 times on Sale
console.log(text);

console.log(`${product} ${text} !!!`);

// split makes you divide string

const activity = "Im learning Modern JavaScript";

// divides by space " "
console.log(activity.split(" "));

// divide by comma
const hobbies = 'Read, walk, sing, write, code';
console.log(hobbies.split(", "));

// tweeter example
const tweet = "Learning #CodingWithAdriano";
console.log(tweet.split('#'));

