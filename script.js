function insertionSort(arr) {
  const n = arr.length;

  // Iterate over the array starting from the second element
  for (let i = 1; i < n; i++) {
    // Store the current element value to insert
    let current = arr[i];

    // Compare with the elements before it and move greater elements up
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // Shift the greater element up
      j--;
    }

    // Insert the current element at its correct position
    arr[j + 1] = current;
  }

  return arr;
}

// Example usage:
const arr = [5, 2, 9, 1, 5, 6];
console.log("Original array:", arr);

const sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);
