/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) 
{
	this.name = name;
	this.age = age;
	this.stomach = [];
}

Person.prototype.eat = function(food) {
	if(this.stomach.length < 10)
	{
		this.stomach.push(food);
	}
}

Person.prototype.poop = function() {
	this.stomach = [];
}

Person.prototype.toString = function() {
	return `${this.name}, ${this.age}`;
}

const personOne = new Person('Danny', 18);
const personTwo = new Person('Jenny', 50);
const personThree = new Person('Anthony', 22);

console.log(personOne.toString())
personOne.eat('wings');
personOne.eat('pizza');
console.log(personOne.stomach);
personOne.poop();
console.log(personOne.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) 
{
	this.model = model;
	this.milesPerGallon = milesPerGallon;
	this.tank = 0;
	this.odometer = 0;
}


Car.prototype.fill = function(gallons) 
{
		this.tank += gallons;
}

Car.prototype.drive = function(distance) 
{
    this.odometer += distance;
    this.tank -= (distance/this.milesPerGallon);
    if(this.tank <= 0)
    {
    return `I ran out of fuel at ${this.odometer} miles!`;
    }
}

const volkswagen = new Car('Tiguan SE', 20);
console.log(volkswagen.model);
console.log(volkswagen.milesPerGallon+" mpg");
volkswagen.fill(5);
volkswagen.drive(60);
console.log(volkswagen.odometer+ " miles");
console.log(volkswagen.drive(40));

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) 
{
  Person.call(this,name,age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype)

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
}

const babyOne = new Baby('Frankie', 1, 'LEGO');
console.log(babyOne.name);
console.log(babyOne.age);
console.log(babyOne.play());

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window/Global Object Binding: global binding refers to when the 'this' keyword is used in the global context, and the value of 'this' will then be equal to the window or console object. However, if in strict mode, 'this' will return undefined.
  2. Implicit Binding: when the keyword 'this' is used in the context of an object, which means the value of 'this' will be the object itself. Whenever a function is invoked, whatever is to the left of it is what 'this refers to.
  3. New Binding: has to do with using the 'this' keyword in constructor functions. 'this' will then refer to the new object that is being created within the constructor. Whenever the constructor is called, 'this' will refer to the specific instance of the object that is created and returned by the constructor.
  4. Explicit Binding: similar to new binding, but involves the use of .call and .apply, which will override what the 'this' keyword points to. Explicit binding can be used to bind two objects together. Whenever .call or .apply is used, 'this' is explicitly defined.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
