//source: https://www.youtube.com/watch?v=RLgUEEAgvMg

function mySome(arr, fn) {
  for (const item of arr) {
    if (fn(item)) return true;
  }
  return false;
}

// TEST
const someOfThis = ['Java', 'Javascript', 'Python'];
console.log(mySome(someOfThis, (item) => item === 'Java'));
