// My role in the group is: Translate Pseudocode into Code.

// Here is my part of the challenge:

// create a function called sum, takes in an array property
	// in the function sum:
	// create a sum variable
	// create a loop that starts at 0 and ends at the last index of the array
	// in the for loop: sum += array[currentindex];
	// return sum variable

function sum(array) {
  var sum = 0;
  for( i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}


//---------------------------------------------------------------------------------------

// create a function called mean, takes in an array property
	// In the function mean:
	// create a mean variable, takes an array property (ie for loop)
	// create a loop that starts at 0 and ends at the last index of the array
	// in the for loop: mean += array[currentindex];
	// declare the mean value to be the current mean value divided by the array length
	// return mean variable

function mean(array) {
	var sum = 0;
	for ( i = 0; i < array.length; i++) {
		sum += array[i]; 
	}
	var mean = sum / array.length;
	return mean;
}

//---------------------------------------------------------------------------------------

// create a function called median, takes an array property
	// In the function median:
	// sort array in ascending order and store as sorted (CODE BELOW):
	// var sorted = array.sort(function(a,b){return a-b});
	// Divide sorted length by 2, subtract by 1 and store as an... 
	// integer variable midindex
	// return the value of sorted[midindex]
//--------------------------------------------
	// Comment by Stephens Xu: The above pseudocode would not work as I try to 
	// implement it; because if array.length is odd,
	// midindex would return a float instead of fixnum; and sort[midindex] would return undefined result.
	// I have to re-write the code 

function median(array) {
	var sorted = array.sort();
	var midIndex = Math.floor(sorted.length/2); //returns the middle number regardless sorted.length is even or odd
	if (sorted.length % 2 == 0) {  // if sorted.length is an even number
		 return ((sorted[midIndex-1] + sorted[midIndex]) / 2);
	} else if (sorted.length % 2 != 0) { // if sorted.length is an odd number
		return sorted[midIndex];
	}
}


//---------------------------------------------------------------------------------------
// Reflection.

// During this challenge, the most difficult part for me was really understanidng the pseudocode
// that  was passed to me by my previous person. Some of the pseudocode has logical flaw in itself
// and wasn't possible to implement at all, because the resulting code would return error or undefined.
// So I had to communicate with my previous person to correct that. Overall I believe this experience
// is very good practice for a group of people to communicate with each other even when we are working
// remotely. My group have succesfully passed the tests. I learned that communication is an essential
// part of the software development world. Not only it is important to communicate my ideas to my 
// colleagues, it is also important to fully understand what my other teamates are trying to tell me
// as well. At the end of challenge I am confident about the learning objectives. I found that 
// the process of turning pseudocode into real working code is a pleasent experience.

