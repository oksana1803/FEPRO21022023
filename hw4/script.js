/* Напишіть функцію map(fn, array), яка приймає на вхід функцію та масив, 
та обробляє кожен елемент масиву цією функцією, повертаючи новий масив.*/

let arr = [5, 10, 23, 30, 90, 87, 27, 20, 67, 70];

function roundNumber(number) {
   let newArr = [];
    for (let i = 0; i <= arr.length; i++) {
        if (number[i] % 10 === 0) {
            newArr.push(number[i]);
        }
    }
    document.write("Круглі числа: " + newArr);
}

function map(fn, array) {
    return fn(array);
}

map(roundNumber, arr)


/* Перепишіть функцію за допомогою оператора '?' або '||'
Наступна функція повертає true, якщо параметр age більше 18. В іншому випадку вона ставить запитання confirm і повертає його результат.
function checkAge(age) {
if (age > 18) {
return true;
} else {
return confirm('Батьки дозволили?');
} } */

function checkAge(age) {
    return (age > 18) ? console.log("true") : confirm('Батьки дозволили?');
}
checkAge(prompt("Enter your age: "));
