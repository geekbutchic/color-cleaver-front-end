const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')
const isValidPrimary = require('./is-valid-primary.js')
const isValidSecondary = require('./is-valid-secondary.js')


// Your code here!
console.clear();

const input1 = getInput(1);
const input2 = getInput(2);

// console.log(input1);
// console.log(input2);

function getInput (n) {
    return process.argv[n + 1];
}

if (input1 === undefined && input2 === undefined) {
    console.log("Please enter at least one color!");
} if (input === !undefined && input2 === undefined) {
    console.log("That color deconstructed makes " + colorDeconstructor(input1) + "!");
} else {
    console.log("Those colors combined make " + colorCombinator(input1, input2) + '!');
}

