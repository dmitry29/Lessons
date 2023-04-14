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

// function checkStorage(available, ordered) {
//     let message;
    
       
//   if (available >= ordered) {
//     message = 'Order is processed, our manager will contact you.'
//   }
//     else {
//       message = `Not enough goods in stock!`
//     };
//     // Change code above this line
//     return message;
//   }

//   console.log(checkStorage(100, 100));
//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 150));
//   console.log(checkStorage(150, 180));
  
// -----------------------------------

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// -------------------------------------

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

// -----------------------------

// let a = 5;

// console.log (a += 2);

// let b = 10;

// console.log (b -= 4);

// let c = 15;

// console.log (c *= 3);

// let d = 20;

// console.log (d /= 10);


// let students = 100;

// console.log(students -= 50);
// console.log(students += 50);
// console.log(students *= 50);
// console.log(students /= 50);



// -------------------------------

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

// -----------------------------

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN
// console.log(Number.parseInt("0qwe79")); // 0
// console.log(Number.parseInt("68.46qwe79")); // 68
// console.log(Number.parseInt("2854")); // 2854


// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

// -------------------------------

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;

//     const totalPrice = (pricePerDroid * orderedQuantity);

//     if (totalPrice > customerCredits){

//         message = `Insufficient funds!`

//     } 

//     else {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//     }

//     return message;
// };
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5500));

// ----------------------------

// function checkPassword(password){

//     let message;

//     const ADMIN_PASSWORD = 'jqueryismyjam';

//     if (password === null){
//         message = `Canceled by user!`;
//     } else if (password === ADMIN_PASSWORD) {
//         message = `Welcome!`;
//     } else {
//         message = `Access denied, wrong password!`;
//     }

//     return message;
    
// }

// console.log(checkPassword(null));
// console.log(checkPassword('lfsfmdflgklf'));
// console.log(checkPassword('jqueryismyjam'));

// ---------------------------

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

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
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10

// --------------------------

// function checkStorage(available, ordered){
//   let message;

//  if (ordered === 0) {
//     message = `There are no products in the order!`;
//  } else if (ordered > available) {
//     message = `Your order is too large, there are not enough items in stock!`;
//  } else {
//     message = `The order is accepted, our manager will contact you`;
//  };
//   return message;
// };

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// function checkStorage(available, ordered){
//   let message;
//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
// return message;
// };

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// --------------------------

// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy

// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"

// // Используя переменные необходимо составить строку с подставленными значениями
// const guestName = "Манго";
// const roomNumber = 207;
// const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19
// console.log("There is nothing impossible to him who will try".length); // 47

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("come")); // 3
// console.log(message.indexOf("hello")); // -1

// const productName = "Ремонтный дроид";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроид")); // true
// console.log(productName.includes("Дроид")); // false
// console.log(productName.includes("Ремонтный")); // true
// console.log(productName.includes("ремонтный")); // false

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

// const htmlFileName = "index.html";
// console.log(htmlFileName.endsWith("html")); // true

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true
// console.log(false || false); //false
// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false

// ---------------------------------

// function isNumberInRange(start, end, number) {
    
//     const isInRange = (number >= start && number <= end);

//     return isInRange;
// }

// console.log (isNumberInRange(10, 30, 17));
// console.log (isNumberInRange(10, 30, 5));
// console.log (isNumberInRange(20, 50, 24));
// console.log (isNumberInRange(20, 50, 76));

// --------------------------------

// function checkIfCanAccessContent(subType) {

//     const canAccessContent = (subType === "pro" || subType === "vip");

//     return canAccessContent;
// };

// console.log(checkIfCanAccessContent("pro"))
// console.log(checkIfCanAccessContent("starter"))
// console.log(checkIfCanAccessContent("vip"))
// console.log(checkIfCanAccessContent("free"))

// -----------------------------

// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.


// В выражении использован оператор !
// Вызов isNumberNotInRange(10, 30, 17) возвращает false
// Вызов isNumberNotInRange(10, 30, 5) возвращает true
// Вызов isNumberNotInRange(20, 50, 24) возвращает false
// Вызов isNumberNotInRange(20, 50, 76) возвращает true


// function isNumberNotInRange(start, end, number){

//    const isInRange = number >= start && number <= end;
//    const isNotInRange = !isInRange
    
//     return isNotInRange;
// }

// console.log(isNumberNotInRange (10, 30, 17));
// console.log(isNumberNotInRange (10, 30, 5));
// console.log(isNumberNotInRange (20, 50, 24));
// console.log(isNumberNotInRange (20, 50, 76));

// ----------------------------

// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

// function getDiscount(totalSpent){
//     let discount 
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;

//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     }
//     else if (totalSpent >= 20000 && totalSpent < 50000){
//         discount = SILVER_DISCOUNT;
//     }
//     else if (totalSpent >= 5000 && totalSpent < 20000){
//        discount = BRONZE_DISCOUNT;
//     }
//     else{
//         discount = BASE_DISCOUNT;
//     }

//     return discount
// };

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));



// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {

//     console.log(`Боронзовый партнер, скидка 2%`);

//     discount = 0.02;
// } 

// else if (totalSpent >= 1000 && totalSpent < 5000){

//     console.log(`серебрянный партнер, скидка 5%`)

//     discount = 0.05;
// } 

// else if (totalSpent >= 5000){

//     console.log(`Золотой партнер, скидка 10%`)

//     discount = 0.1;
// }
// else {

//     console.log(`Не партнер, скидка 0%`)
// }

// payment -= payment * discount;

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`)

// totalSpent += payment;

// console.log(`Общая сумма потраченного в магазине: ${totalSpent}`)

// --------------------------------

// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0


// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100


// let cost;
// const subscription = "premium";

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

// ---------------------------

// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type); // "adult"

// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"

// ----------------------------

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }

// console.log(biggerNumber); // 10


// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber);

// ----------------------------


// let balance = 10000;
// const payment = 2000;

// console.log (`Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету`);

// if (balance >= payment) {
    
//     balance -= payment;


//     console.log(`Всё хорошо, снимаем деньги... Спасибо за покупку!`)

//     console.log(`На счету осталось ${balance} кредитов`)

// } else {

//     console.log(`На счету недостаточно средств для проведения операции!`)

// }

// console.log(`Операция завершена`)

// -----------------------------

// const number = prompt('Введи число');

// if(parseInt(number) > 0){
//     console.log('Це додатнє число!');
// } else if(parseInt(number) < 0){
//     console.log("Це від'ємне число!");
// } else if(parseInt(number) === 0){
//     console.log("Це нуль!");
// } else{
//     console.log('Ми ж просили число ввести!');
// }


// ----------------------------------

// const a = 20;
// const b = 202;

// if (a > 100 && b > 100) {
      // case1

//     if ( a > b ) {
//         console.log(a)
//     } else {
//         console.log(b)
//     }

        // case2

// const max = a > b ? a : b;
// console.log(max)

        //  case3 

    //   console.log(Math.max(a, 500, b));
    //   }      else {
    //     console.log(b + 512);
    //   } 

    // ----------------------------------


// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//     link = `${link}/`;

// }
// console.log(link)

// -----------------------------

// let link = 'https://somesite.com/about';

// let link = 'https://my-site.com/about';

// if (link.includes('my-site') && !link.endsWith('/')) {
// link = `${link}/`;
// }
// console.log(link)

// -------------------------------

// let link = 'https://my-site.com/about';

// const result = !link.endsWith('/') ? `${link}/` : link;

// console.log(result)

// ----------------------------

// const hours = 280;
// let message;

// if (hours < 17){
//     message = `Pending`
// } else if (hours >= 17 && hours <= 24){
//     message =`Expires`
// } else if(hours < 30) {
//     message =`Overdue`
// } else {
//     message =`To match!`
// }
// console.log(message)

// ---------------------------

// let days = -1;
// let message;

// if (days >= 3) {
//     message = `Дата в будущем`
// } else if(days === 2) {
//     message = `Послезавтра`
// } else if(days === 1) {
//     message = `Завтра`
// } else if(days === 0) {
//     message = `Сегодня`
// } else {
//     message = `Уже поздно! Приходите после армии!`
// }
// console.log(message);

// -----------------

// const daysDiedline = 0;

// if (daysDiedline === 0) {
//     console.log(`Сегодня`)
// } else if(daysDiedline === 1) {
//    console.log(`Завтра`)
// } else if(daysDiedline === 2) {
//     console.log(`Послезавтра`)
//  } else {
//     console.log('Дата в будущем')
//  }

// ---------------------

// const daysDiedline = 1;

// switch (daysDiedline){

//     case 0: {
//         console.log('Сегодня')
//         break;
//     }

//     case 1: {
//         console.log(`Завтра`)
//         break;
//     }

//     case 2: {
//         console.log(`Послезавтра`)
//         break;
//     }

//     default:{
//         console.log('Дата в будущем')
//     }
// }


// ---------------------------

// let counter = 0;

// while (counter < 10) {
//   console.log("Лічильник: ", counter);
//   counter += 1;
// }

// -----------------------

// let clientCounter = 10;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// ---------------------

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// ----------------------

// const max = 100;
// const min = 30;


// for (let i = min; i <= max; i += 1) {
//     if(i % 5 === 0)
//     console.log(i);
//   }

// ---------------------

// let user;
// let password;
// do {
//    user = prompt('Ввести логин');

//    if (user === 'Админ') {
//        password = prompt('Введи пароль')

//       if (!password){
//           console.log('Отменено');

//       } else if (password !== 'Я админ'){
//                  console.log('Я вас не знаю') 
//                  password = undefined;

//       } else {
//               console.log('Здравствуйте!')
//       }
      
//     } 

// }

//  while(user !== 'Админ' && password !=='Я админ');

// ---------------------------


// const formatMessage = (message, maxLength) => {
//     if (message.length > maxLength){
//         return message.slice(0, maxLength) + '...';
//     }
//     return message;
// }

// console.log(formatMessage('1234567890', 7))

// -------------------------