function myFlat(arr, depth = 1) {
  const stack = [...arr.map((item) => [item, depth])];
  const result = [];

  while (stack.length) {
    const [value, depth] = stack.pop();

    if (Array.isArray(value) && depth > 0) {
      stack.push(...value.map((item) => [item, depth - 1]));
    } else {
      result.unshift(value);
    }
  }
  return result;
}

//Test
const arr = [1, [2], [3, [4]]];
console.log(arr.flat(1));
console.log(myFlat(arr, 1));
