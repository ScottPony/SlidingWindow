// Time-Complexity
// 第一個for loop = O(size)
// 第二個for loop = O(array.length - size)
// 整體 = O(size) + O(array.length - size) = O(n)
function maxSum(array, size) {
  let maxSum = 0;
  if (array.length < size) {
    return null;
  }

  // 取得第一組subarray的合，並指定為當前最大值
  for (let i = 0; i < size; i++) {
    maxSum += array[i];
  }

  let temp = maxSum;
  // 迴圈的起始變為下一個window最後一個數字開始
  // 每次移動window就是執行"往右加一個元素&減掉前一個window的第一個數字"
  for (let j = size; j < array.length; j++) {
    temp = temp + array[j] - array[j - size];
    if (temp > maxSum) {
      maxSum = temp;
    }
  }

  console.log(maxSum);
}

maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
