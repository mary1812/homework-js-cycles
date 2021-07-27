function Phone(model, manufacturer, price, color, exist) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.price = price;
  this.color = color;
  this.comments = [];
  this.exist = exist;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getPhones(amount) {
  const newPhones = [];

  for (let i = 0; i < amount; i++) {
    newPhones.push(
      new Phone(
        `Model ${i}`,
        "Panasonic",
        getRandomInt(5, 1000),
        "black",
        Math.random() >= 0.5
      )
    );
  }

  return newPhones;
}

const phones = getPhones(50);

console.table(phones);

//1.Посчитать количество моделей телефонов в наличии и вывести в консоль
//2.Получить массив тех телефонов, которые есть в наличии
//3.Получить массив телефонов для праздничной распродажи. Всем телефонам которые стоят больше 30000 снизить цену на 30%.Работать только с телефонами, которые есть в наличии

//1 Посчитать количество моделей телефонов в наличии и вывести в консоль
const amount = phones.forEach(function exist(phone){
  return exist;
})
console.log(amount)

//2 Получить массив тех телефонов, которые есть в наличии
const exist  = phones.filter(function exist(phone) {
  return phone.exist === true;
});
console.log(exist)