/*
Використовуючи умовні конструкції перевірте вік користувача, якщо користувачеві буде
від 18 до 35 років переведіть його на сайт google.com,
якщо вік користувача буде від 35 до 60 років, переведіть його на сайт
https://www.uz.gov.ua/,
якщо користувачеві буде до 18 років покажіть йому першу серію лунтика з ютубу
Виконайте це завдання за допомогою if, switch, тернарний оператор
*/
// let age = prompt("Enter your age: ");
// if(age >= 18 && age <= 35) {
//     location="https://www.google.com.ua/";
// } else if (age > 35 && age <= 60) {
//     location="https://www.uz.gov.ua/";
// } else if (age < 18) {
//     location="https://www.youtube.com/watch?v=icdSZKq9-sM&ab_channel=%D0%9B%D1%83%D0%BD%D1%82%D0%B8%D0%BA";
// } else {
//     document.write("Enter correct age");
// }


/* Створіть масив styles з елементами «Джаз» та «Блюз».
    Додайте "Рок-н-рол" в кінець.
    Замініть значення всередині на «Класика». Ваш код для пошуку значення всередині повинен працювати для масивів з будь-якою довжиною.
    Видаліть перший елемент масиву та покажіть його.
    Вставте «Реп» та «Реггі» на початок масиву.<br>
*/

let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-рол");
document.write(styles);

document.write("<br>------------------------------------------------");

styles[parseInt(styles.length / 2)] = "Класика";
document.write("<br>" + styles);

document.write("<br>------------------------------------------------");

document.write("<br>" + styles.shift(0));

document.write("<br>------------------------------------------------");

styles.unshift("Реп", "Реггі");
document.write("<br>" + styles);
