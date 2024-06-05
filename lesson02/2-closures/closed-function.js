// I want to be able to reuse the function and keep the counter's value
// closures are functions with data nad behavior just like a class

function closedFunction() {
  // local variable
  let counter = 0;

  // behavior

  let increment = function () {
    counter++;
    console.log(counter);
  }

  return increment;
}

// nothing happens
closedFunction();
closedFunction();

let counter = closedFunction();

counter();
counter();


