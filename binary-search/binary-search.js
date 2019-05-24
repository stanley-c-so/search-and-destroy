'use strict';

// Complete this algo
const binarySearch = (array, target) => {

	// RECURSIVE SOLUTION:

	// const midpoint = Math.floor(array.length / 2);
	// if (array[midpoint] === target) {
	// 	return true;
	// } else if (array.length) {
	// 	if (target < array[midpoint]) {
	// 		return binarySearch(array.slice(0, midpoint), target);
	// 	} else {
	// 		return binarySearch(array.slice(midpoint + 1), target);
	// 	}
	// } else {
	// 	return false;
	// }

	// EXTRA CREDIT:

	let left = 0;
	let right = array.length - 1;
	let midpoint = Math.floor((right - left) / 2);

	while (left !== right) {
		if (array[midpoint] === target) {
			return true;
		} else if (target < array[midpoint]) {
			right = midpoint - 1;
		} else {
			left = midpoint + 1;
		}
		midpoint = left + Math.floor((right - left) / 2);
	}
	if (array[midpoint] === target) {
		return true;
	} else {
		return false;
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch