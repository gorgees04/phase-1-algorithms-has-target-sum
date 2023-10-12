function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) { 
      if ((array[i] + array[j] === target) && i != j) {
        return true
      } 
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here:
  The Big O complexity is O(n²) because I'm using nested array
*/

/* 
  Add your pseudocode here:

  iterate over the array first time using i:
    iterate over the array again using j:
    if (first array index + second array index equal target AND first index not equal secend index ):
      return true
  
  return false 
*/

/*
  Add written explanation of your solution here:

  - iterating over array twice 
  - using if condition inside the nested array
  - to check if the first array add to second array equal to target but if index i not equal index j
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 5, 2, 5], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3, 3, 3, 3], 12));
}

module.exports = hasTargetSum;
