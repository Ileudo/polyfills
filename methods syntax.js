// Полная запись.
const auto = {
  brand: 'Tesla',
  drive: function () {
    return `Заведём нашу ${this.brand}`;
  },
};

// Можем упростить. Получим то же самое.
const auto = {
  brand: 'Tesla',
  drive() {
    return `Заведём нашу ${this.brand}`;
  },
};
