//2.	Write a function that finds a perimeter of the rectangle given by two sides.
function areaRectangle(a, b) {
  console.log('Rectangle permimeter =', 2 * (a + b));
}

areaRectangle(2.5, 3.14);

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