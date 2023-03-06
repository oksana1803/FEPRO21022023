//1 
// let a = +prompt("Enter a: ");
// let b = +prompt("Enter b: ");
// const result = a + b < 4 ? "Few" : "Many";
// console.log(result);


//2
// let message;
// let login = prompt("Enter your login: ");
// login == "Vasya" 
//         ? message = "Hello!"
//         : login == "Director" 
//         ? message = "Good morning!"
//         : login == "" 
//         ? message = "Enter login please!"
//         : message = "";
// console.log(message);


//3
// let a = +prompt("Enter a: ");
// let b = +prompt("Enter b: ");
// for (let i = a; i <= b; i++) {
//         console.log(i);
// }
// console.log("---------------------------------------")
// for (let j = a; j <= b; j++) {
//     if (j % 2 == 1) {
//         console.log(j);
//     } 
// }


//4
// Прямокутник
for(let i = 0; i < 6; i++) {
    for(let j = 0; j < 20; j++) {
        document.write("*");
    }
    document.write("<br>")
}


// Прямокутний трикутник
for(let i = 0; i <= 10; i++) {
    for(let j = (9 - i); j < 10; j++) {
        document.write("*");
    }
    document.write("<br>");
}


// Рівносторонній трикутний
for(let a = 0; a <= 6; a++) {
   for(let x = (0 + 1 + a); x < 7; x++) {
    document.write("&nbsp");
   }
   for(let y = 0 + 1 + a; y > 0; y--) {
    document.write("*");
   }
   document.write("<br>");
}


//Ромб
for(counter = 0; counter < 10; counter++) {

    for(i = (0 + counter); i < 9; i++ ) {
        document.write("&nbsp");
    }
    for(i = (10 - counter); i < 10; i++) {
        document.write("*");
    }
    document.write("<br>")
}
for (counter = 0; counter < 9; counter++) {
    for(i = (8 - counter); i < 8; i++ ) {
        document.write("&nbsp");
    }
    for(i = (0 + counter); i < 9; i++) {
        document.write("*");
    }
    document.write("<br>")
}




