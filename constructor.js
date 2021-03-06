// Обычно, если нам нужно создать множество однотипных объектов, то для этого используются
//так называемые функции-конструкторы, которые используются совместно с оператором new.

// Предположим, что мы с помощью ФУНКЦИИ Book хотим СОЗДАВАТЬ ОБЪЕКТЫ для книг с определенной
// структурой. А именно это будет объект с тремя полями: title, author, price.

// У функции-конструктора будет три аргумента, через которые мы будем передавать значения наших полей.
function Book(title, author, price) {
  // this = {}; (неявно)
  this.title = title;
  this.author = author;
  this.price = price;
  // return this; (неявно)
}

// Сам объект создается через оператор new.
let book = new Book('Mumu', 'Turgenev', 10);

// Мы можем создавать множество однотипных объектов, используя Book. Это и является основной целью
// подобных функций-конструкторов. Удобное повторное создание однотипных объектов.
