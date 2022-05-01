function selectionSort(arr) {
  // type your code here
  let length = arr.length

  for (let i = 0; i < length; i++){
    let min = i
    for(let j = i+1; j < length; j++){
      if(arr[j] < arr[min]) {
        min = j
      }
    }
    if (min != i) {
      let tmp = arr[i]
      arr[i] = arr[min]
      arr[min] = tmp
    }
  }
  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4, 5, 6]")
  console.log(selectionSort([5, 3, 6, 1, 2, 4]));

  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
//Iterate over the array, find the lowest value within the array and then put that value at the front and then iterate over it again
// sort over the array, finding the lowest element and putting it in the leftmost position in a new list and then going through
// the list again until the new list is populated completely with the original array.