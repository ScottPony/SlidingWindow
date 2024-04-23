function minSubLength(array, int) {
  let left = 0;
  let right = 0;
  let minSum = 0;
  let minLength = Infinity;

  while (right < array.length) {
    minSum += array[right];

    while (minSum >= int) {
      minLength = right - left + 1 < minLength ? right - left + 1 : minLength;
      //   console.log("minLength", minLength);
      minSum = minSum - array[left];
      left++;
    }

    right++;
  }

  if (minLength == Infinity) {
    return 0;
  } else {
    return minLength;
  }
}

console.log(minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11)); //2
console.log(minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60)); //4
console.log(minSubLength([0, 0, 0, 0, 0, 0, 0], 11)); //0
