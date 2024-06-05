// import fs module from access file system
const fs = require("fs");

console.log("Food file read successfully!\n");

// read two files and output the content
fs.readFile("food.txt", "utf-8", (err, food) => {
  console.log(food);
});

console.log("Drinks file read successfully!\n");

fs.readFile("drinks.txt", "utf-8", (err, drinks) => {
  console.log(drinks);
});
