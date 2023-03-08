// "use strict";

// let username = "Kolya";

// username = ["Sveta", "Stepan"]



// console.log(username);

// -----------------------------

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"

// ---------------------------------------

// const x = 20;
// const y = 5;

// // Сложение
// console.log(x + y); // 15

// // Вычитание
// console.log(x - y); // 5

// // Умножение
// console.log(x * y); // 50

// // Деление
// console.log(x / y); // 2

// // Остаток от деления
// console.log(x % y); // 0

// // Сложение с заменой (также есть для всех других операторов)
// let value = 5;

// // Аналогично записи value = value + 10;
// value += 10;
// console.log(value); // 15

// -----------------------

// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false

// ------------------------------

// console.log(0.01 + 0.4 !== 0.41); // true
// console.log(0.01 + 0.4 === 0.41); // false
// console.log(0.01 + 0.4); // 0.30000000000000004

// -----------------------------

// console.log(0.171 + 0.24); // 0.41000000000000003
// console.log((0.171 + 0.24).toFixed(2)); // 0.41

// -------------------------------

// // Math.floor(num) - возвращает наибольшее целое число,
// // меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - возвращает наименьшее целое число,
// // большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - возвращает значение числа,
// // округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 100, 50, 40)); // 50

// // Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 150, 50, 40)); // 10

// // Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10

// ---------------------------------

// // Используя переменные необходимо составить строку с подставленными значениями
// const guestName = "Дима";
// const roomNumber = 127;
// const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting); // "Welcome Дима, your room number is 127!"

// ----------------------------------

// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// ------------------------------------

// const message = "Welcome to Белая Церковь!";
// console.log(message.length); // 25
// console.log("There is nothing impossible to him who will try".length); // 47

// ----------------------------------

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// ------------------------------------

// const message = "Меня зовут Дмитрий!";
// console.log(message.indexOf("зовут")); // 8
// console.log(message.indexOf("Его")); // -1

// --------------------------------------

// const productName = "Ремонтный дроид";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроид")); // true
// console.log(productName.includes("Дроид")); // false
// console.log(productName.includes("Ремонтный")); // true
// console.log(productName.includes("ремонтный")); // false

// -------------------------------

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

// --------------------------

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// ---------------------------

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// -----------------------------

// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } 

// else {
//   cost = 0;
// }

// console.log(cost); // 0

// -----------------------------

// let cost;
// const subscription = "pro";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// --------------------------------

// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// ------------------------------

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }


// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// --------------------------------

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// ----------------------------

// for (let i = 0; i <= 20; i += 3) {
//     console.log(i);
//   }

// const target = 3;

// let sum = 0;
// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);


// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }


// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
  
//     if (i === 3) {
//       console.log("Нашли число 3, прерываем выполнение цикла");
//       break;
//     }
//   }
  
//   console.log("Лог после цикла");

// ------------------------------

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }


// -------------------

// // Change code below this line
// const productName = 'Droid';
// console.log(productName);
// // 'Droid'
// const pricePerItem = 2000;
// console.log(pricePerItem);
// // 2000

// -----------------------

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log (totalPrice);

// ------------------------

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// --------------------------

// function sayHi() {
//     console.log("Hello, this is my first function!");
//   }
//   sayHi()


// -------------------------

// function add(a, b, c) {
//     // Change code below this line
  
//   return (a + b + c);
  
//     // Change code above this line
//   }
  
//   add(2, 5, 8); // 15
  
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

// --------------------------

// function makeMessage (name, price) {
//     // Change code below this line
//      const message = `You picked ${name}, price per item is ${price} credits`;
//     // Change code above this line 
//     return message;
//   };
  
//  console.log (makeMessage ("Radar", 6500));
//  console.log (makeMessage ("Scanner", 7800));
//  console.log (makeMessage ("Reactor", 15400));

// ------------------------

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = orderedQuantity * pricePerItem;
  
//     // Change code above this line
//     return totalPrice;
//   };

//   console.log (calculateTotalPrice(5, 100));
//   console.log (calculateTotalPrice(8, 60));
//   console.log (calculateTotalPrice(3, 1200));
//   console.log (calculateTotalPrice(1, 3500));
//   console.log (calculateTotalPrice(12, 70));

// -------------------------

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
  
//    const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
  
//     // Change code above this line
//     return message;
//   }
  

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// --------------------------------

// function isAdult(age) {
//     // Change code below this line
//     const passed = (age <= 20) ;
  
//     // Change code above this line
//     return passed;
//   };

//   console.log(isAdult(20));
//   console.log(isAdult(18));
//   console.log(isAdult(45));
//   console.log(isAdult(10));

// -----------------------------------

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = (password === SAVED_PASSWORD);
  
//     // Change code above this line
//     return isMatch;
//   }

//   console.log(isValidPassword("mangodab3st"));
//   console.log(isValidPassword("kiwirul3z"));
//   console.log(isValidPassword("jqueryismyjam"));

// ------------------------------------

// function checkAge(age) {
//     let message;
  
//     if (age >= 20) { 
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
  
//     return message;
//   }

//   console.log(checkAge(20));
//   console.log(checkAge(18));
//   console.log(checkAge(7));
//   console.log(checkAge(38));

// ----------------------------

function checkStorage(available, ordered) {
    let message;
    
       
  if ((available, ordered)) {
    message = 'Order is processed, our manager will contact you.'
  }
    else {
      message = 'Not enough goods in stock!'
    };
    // Change code above this line
    return message;
  }

  console.log(checkStorage(100, 50));
  console.log(checkStorage(100, 130));
  console.log(checkStorage(200, 20));
  console.log(checkStorage(200, 150));
  console.log(checkStorage(150, 180));
  