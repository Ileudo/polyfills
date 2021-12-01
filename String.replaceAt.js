//https://coderoad.ru/1431094/Как-заменить-символ-в-определенном-индексе-в-JavaScript
// В JavaScript строки являются неизменяемыми, что означает , что лучшее, что вы можете сделать,
// это создать новую строку с измененным содержимым и назначить переменную, указывающую на нее.
// Вам нужно будет самостоятельно определить функцию replaceAt()

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  );
};

var hello = 'Hello World';
alert(hello.replaceAt(2, '!!')); // Should display He!!o World
