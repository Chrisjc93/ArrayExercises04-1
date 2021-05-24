let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//a) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log(holdCabinet1);
console.log(holdCabinet2);
console.log("-------------------------------");
let arr = holdCabinet1.concat(holdCabinet2);
console.log(arr)
let arr2 = holdCabinet2.concat(holdCabinet1);
console.log(arr2)
console.log("-------------------------------");
console.log(holdCabinet1);
//b) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log("-------------------------------");

// The ending index is optional. If it is left out, slice returns a new array that includes everything from the starting index to the end of the original array.

// If both indices are used, the new array contains everything from the starting index up to, but NOT including the ending index.

console.log(holdCabinet1.slice(1,2));
console.log(holdCabinet2.slice(1, 3));

console.log("-------------------------------");
//c reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
console.log(holdCabinet1.reverse());
console.log(holdCabinet2.sort());
console.log(holdCabinet1);
console.log(holdCabinet2);

// yes they alter it
