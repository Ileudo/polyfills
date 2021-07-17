/*Обычная версия*/
function mul(a, b, c) {
  return a * b * c;
}
// console.log(mul(1, 2, 5));
// /*Каррирование*/
// const mul = (a) => (b) => (c) => {
//   return a * b * c;
// };

// const mul = function (a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// };

// console.log(mul(1)(2)(5));

// /*Фиксируем неизменыемый аргумент*/
// const mulBy5 = mul(5);
// console.log(mulBy5(1)(2));

/*Функция, превращающая любую функцию в каррированную*/
function curry(fn) {
  console.log(fn);
  return function curried(...args) {
    console.log(args.length);
    console.log(fn.length);
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...args2) => curried(...args, ...args2);
    }
  };
}

const curriedMul = curry(mul);
console.log(curriedMul(1)(2)(5));
