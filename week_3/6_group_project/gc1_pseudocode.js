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