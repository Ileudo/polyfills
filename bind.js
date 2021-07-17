//source: https://www.youtube.com/watch?v=fJqYa3BuwaU

function myBind(fn, context, ...rest) {
  return function (...args) {
    const uniqueID = Date.now().toString();
    context[uniqueID] = fn;

    const result = context[uniqueID](...rest.concat(args));

    delete context[uniqueID];

    return result;
  };
}

// TEST
const person = {
  name: 'Ilya',
};
function info(phone, email) {
  console.log(`name: ${this.name}, phone: ${phone}, email: ${email} `);
}
myBind(info, person, '222-333', '23232@mail.ru')();
myBind(info, person, '222-333')('23232@mail.ru');
myBind(info, person)('222-333', '23232@mail.ru');
