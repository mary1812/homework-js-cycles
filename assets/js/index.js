//Первое задание
for (let i = 25; i > -1; i--) {
  console.log(i);
}

//Второе задание
//Вывод чисел от 10 до 50, которые кратны 5
for (let i = 10; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

//Третье задание
//Найти сумму чисел в пределах от 1 до 100.

//4
//предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит
const CORRECT_ANSWER = 6;
while (true) {
  const userInput = +prompt("(2 + 2 * 2)");
  if (userInput === CORRECT_ANSWER) {
    alert("pravilno!");
    break;
  }
}


