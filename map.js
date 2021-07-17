//source: https://www.youtube.com/watch?v=RLgUEEAgvMg

function myMap(arr, fn) {
  const mappedArr = [];

  for (const item of arr) {
    mappedArr.push(fn(item));
  }

  return mappedArr;
}

// TEST
const mapMe = [1000, 800, 2400, 500];
console.log(myMap(mapMe, (item) => item + 200));
