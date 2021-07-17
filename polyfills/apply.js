//source: https://www.youtube.com/watch?v=fJqYa3BuwaU

function myApply(fn, context, rest) {
  const uniqueID = Date.now().toString();

  context[uniqueID] = fn;

  const result = context[uniqueID](rest);

  delete context[uniqueID];

  return result;
}

// TEST
const person = {
  name: 'Ilya',
};
function info(phone, email) {
  console.log(`name: ${this.name}, phone: ${phone}, email: ${email} `);
}
myApply(info, person, ['222-333', '23232@mail.ru']);
