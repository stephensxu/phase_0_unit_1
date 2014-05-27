// I paired by myself on this challenge.

// __________________________________________
// Write your code below.

var secretNumber = 7
var password = "just open the door"
var allowedIn = false
var members = ["John", "Stephens", "Joyce", "Mary"]



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// Reflection: First I read through all the tests and see if there are overlaps. If I
// am able to solve couple tests in one try it would save me time. Over-all this test 
// is relatively simple and I believe it is meant for us to learn the basic of TDD, which
// I personly LOVE. I believe TDD is a brilliant way for code development because it allow
// me to test, correct bugs on the go. It also give me error messages which tells me what's 
// wrong with me current code and allow me to go to right direction. I really enjoy the process
// of TDD. I am confident with each of the Learning Competencies and id not find anything tedious
// in this particular challenge.


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. " 
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

