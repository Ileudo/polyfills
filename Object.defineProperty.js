Object.defineProperty(obj, prop, descriptor);

const user = {};
user.name = 'John'; // сокращенная запись
Object.defineProperty(user, 'name', {
  value: 'John',
  configurable: true,
  writable: true,
  enumerable: true,
});

Object.defineProperty(user, 'name', {
  get: function () {
    return this.__name;
  },
  set: function (value) {
    this.__name = value;
  },
});

user.name = 'John';
console.log(user.name);
