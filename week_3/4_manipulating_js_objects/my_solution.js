
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.

// Pseudocode:

// Give adam a name property with the value "Adam".

// Add a spouse property to terah and assign it the value of adam.

// Change the value of the terah weight property to 125.

// Remove the eyeColor property from terah.

// Add a spouse property to adam and assign it the value of terah.

// Add a children property to terah and and use object literal notation to assign this variable the value of a JavaScript Object object with no properties

// Add a carson property to the value of the terah children property and assign it the value of an object with the property name with a value of "Carson".

// Add a carter property to the value of the terah children property and assign it the value of an object with the property name with a value of "Carter".

// Add a colton property to the value of the terah children property and assign it the value of an object with the property name with a value of "Colton".

// Add a children property to adam and assign it the value of terah children.

var adam = {
  name: "Adam",
}

terah.spouse = adam
terah.weight = 125
delete terah.eyeColor
terah.spouse.spouse = terah
terah.children = {}
terah.children.carson = { name:"Carson" }
terah.children.carter = { name:"Carter" }
terah.children.colton = { name:"Colton" }
adam.children = terah.children

// __________________________________________
// Reflection: Use the reflection guidelines
// My stategy is to read through all the testing parameters frist before I start coding. This gives me an idea of 
// the bigger picture of what I'm trying to solve. This appraoch can potentially save me some time as I develope
// because some testing parameter are overlaped on one single object. 
// During the process I had question about how to add "carson" as an object to "children" while the "children" object
// doesn't exist yet. At first, I tried to make "Carson" as a seperate variable, then "children" as an array object property 
// of terah, and pushing "Carson" to the "Children" array. However this approach didn't pass the test. Later on I realized
// that I have to use object literal to make the "children" property first, then make the "carson" property, then make the name 
// property and add a string to the "name" property. I am confident with each of the Learning Competencies. I enjoyed the part
// where I have to think, read through the psuedo code and find the right solution. When I'm stuck I get a little frustrated.
//


// __________________________________________
// Driver Code:  Do not alter code below this line.
// function assert(test, message, test_number) {
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)