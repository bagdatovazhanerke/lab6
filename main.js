//9.	Write a function to check whether a given number is positive or negative.
function checkNumber(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(checkNumber(10)); 
console.log(checkNumber(-8)); 
console.log(checkNumber(0)); 

//3.	Write a function that finds an area of a circle given its radius (PI=3.14).
function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
}
var c = new circle(3);
console.log('Circle area =', c.area().toFixed(2));

//4.	Write a function that greets a person by his/her name (e.g. “Hi, John!”).
function greet() {
  const name = 'John';

  return function () {
    console.log(`Hi, ${name}!`);
  };
}

const greeting = greet();

greeting();