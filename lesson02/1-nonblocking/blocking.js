// import fs module from access file system
const fs = require('fs');

// read two files and output the content
food = fs.readFileSync('food.txt', 'utf8');
console.log(food);
console.log('Food file read successfully!\n');

drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);
console.log('Drinks file read successfully!\n');