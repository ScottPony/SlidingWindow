function maxSum(array, size) {
  let maxSum = -Infinity;
  if (array.length < size) {
    return null;
  }

  // 定義For迴圈的停止條件
  // 必須知道最後一個window的起始位置是array的哪一個index
  // 當iterator超出這個index後，迴圈就必須停止
  // 最後一個window的起始位置以array index表示為:
  // array最後一個成員的index: array.length - 1
  // 最後一個window的起始位置: array.length - 1 - (n - 1) = array.length - n
  for (let i = 0; i <= array.length - size; i++) {
    let temp = 0;

    for (let j = i; j < size + i; j++) {
      temp += array[j];
    }

    if (temp > maxSum) {
      maxSum = temp;
    }
  }

  console.log(maxSum);
}

maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
