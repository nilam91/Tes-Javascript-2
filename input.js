const tes = require('prompt-sync')({sigint: true});

const num1 = tes('Enter a first number: ');

const num2 = tes('Enter a second number: ');

console.log('first number + second number =');

console.log(Number(num1) + Number(num2));


const tes = require('prompt-sync')({ sigint: true });
const num1 = tes('Enter a first number: ');