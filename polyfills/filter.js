//source: https://www.youtube.com/watch?v=RLgUEEAgvMg

function myFilter(arr, fn) {
  const filteredArr = [];

  for (const item of arr) {
    if (fn(item)) filteredArr.push(item);
  }

  return filteredArr;
}

// TEST
const filterThis = [2, 4, 3, 6, 8, 9];
console.log(myFilter(filterThis, (item) => item % 3 === 0));
