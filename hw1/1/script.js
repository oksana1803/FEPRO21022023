// 1)Створити калькулятор знижок, отримати від користувача ціну товара і в консоль вивести інформацію про знижку при покупці 
// 10 товарів ( знижка 3%) інформацію при покупці 
// 20 товарів ( знижка 5%)

let price = +prompt("Enter the product price: ");
let discountTen = price * 0.97; 
let discountTwenty = price * 0.95; 
console.log("From 10 products product price is: ", discountTen);
console.log("From 20 products product price is: ", discountTwenty);