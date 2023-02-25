// 1)Створити калькулятор знижок, отримати від користувача ціну товара і в консоль вивести інформацію про знижку при покупці 
// 10 товарів ( знижка 3%) інформацію при покупці 
// 20 товарів ( знижка 5%)

let price = +prompt("Enter the product price: ");
let discountTen = price * 10 * 0.03; 
let discountTwenty = price * 20 * 0.05; 
console.log("From 10 products discount is: ", discountTen);
console.log("From 20 products discount is: ", discountTwenty);