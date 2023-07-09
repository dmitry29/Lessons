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

// num = 15;
// for(num = 0; num <= 15; num += 1)

// console.log(num)

// -------------------------

// const max = 12;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }


// for (let i = 0; i <= 5; i += 1) {
//         console.log(i);
      
//         if (i === 3) {
//           console.log("Нашли число 3, прерываем выполнение цикла");
//           break;
//         }
//       }
      
//       console.log("Лог после цикла");

// ----------------------------

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) { 
//     continue;
//   }


//   console.log("Нечетное число: ", i); // 1, 3, 5, 7, 9
// }

// function checkPassword(password){
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//    message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//    return message;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

// -----------------------MASSIVE

// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;



// clients[0] = "Apple";
// clients[1] = "Pango";
// clients[3] = "Kiwi";



// console.log(lastElementIndex);
// console.log(clients); 
// console.log(clients.length);
// console.log(clients[lastElementIndex]);

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// for (const client of clients) {
//   console.log(client)
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// -------------------------


// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Polyna";
// let message = "Клиента с таким именем нету в базе данных!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// --------------------------

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 5;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// -------------------------------

// function getSubscriptionPrice(type) {
//   let price

//   switch(type){
//     case "starter":
//     price = 0;
//     break;

//     case "professional":
//     price = 20;
//     break;

//     case "organization":
//     price = 50; 
//     break;
    
//   }
//   return price
  
// }

// console.log(getSubscriptionPrice("starter"));
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));

// -----------------------

// function checkPassword(password){
//   const ADMIN_PASSWORD = "jqueryismyjam"
//   let message;

//   switch(password){
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!"
//       break;

//     default:
//     message = "Access denied, wrong password!";

//   }
//    return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("null"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// -------------------------

// function getShippingCost(country){
//   let message;
  
// switch (country){
//   case "China":
//     message = "Shipping to China will cost 100 credits"
//     break;

//   case "Chile":
//     message = "Shipping to Chile will cost 250 credits"
//     break;

//   case "Australia":
//     message = "Shipping to Australia will cost 170 credits"
//     break;

//   case "Jamaica":
//     message = "Shipping to Jamaica  will cost 120 credits"
//     break;

//   default:
//     message = "Sorry, there is no delivery to your country";
// }

//   return message;

// }

// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

// ---------------------------

// function getNameLength(name){
//   let length;

//   switch (name){

//     case "Poly":
//       length = 4;
//       break;

//       case "Harambe":
//         length = 7;
//         break;  

//         case "Billy":
//           length = 5;
//         break;

//         case "Joe":
//         length = 3;
//         break;
//   }

//   const message = `Name ${name} is ${length} characters long`;

//   return message;
// }

// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));

// -----------------------split & join 


// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

// const name = ["M", "a", "n", "g", "o"];
// console.log(name.join(''))

// const message = ["JavaScript", "это", "интересно"];
// console.log(message.join(' '))

// -------------indexOf & includes

// Используйте indexOf тогда, когда необходимо получить непосредственно индекс элемента.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// Область применения includes сводится к ситуациям когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false


// const fruit = "apple";

// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }


// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }


// const funParty = ["Max", "Olga", "Tom", "Jack"];
// const girl = "Olga";
// const findGirl = funParty.includes(girl);

// if (findGirl){
//   console.log(`${girl} is a nice baby!`);
// }


// -----------------push() и pop()

// push() добавляет один или несколько элементов в конец массива

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// pop() удаляет последний элемент из конца массива и возвращает удаленный элемент. Если массив пустой, метод возвращает undefined.

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// --------------------------slice() & splice()

// slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-1)); // ["Poly", "Kiwi"]

// splice() Удаляет, добавляет и заменяет элементы в произвольном месте массива.

// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]


// const colors = ["red", "green", "blue"];

// colors.splice(1, 0, "yellow", "pink");
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

// ---------------------concat()

// Объединяет два или более массива в один. Он не изменяет массив на котором вызывается, а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// --------------------------
// const courseTopic = 'JavaScript essentials' 

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength - 1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// -----------------------

// function getSubstring(string, length){
//   const substring = string.slice(string, length);
//   return substring;
// }
// console.log(getSubstring("Hello world", 3))
// console.log(getSubstring("Hello world", 6))
// console.log(getSubstring("Hello world", 8))
// console.log(getSubstring("Hello world", 11))
// console.log(getSubstring("Hello world", 0))

// ---------------------------

// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.

// function formatMessage(message, maxLength){

// let result

// if(message.length <= maxLength){
//         result = message;
// } else {
//         result = message.slice(0, maxLength) + `...`;
// }
//    return result    
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// -----------------------------

// function normalizeInput(input){
//         // const normalizeInput = input.toUpperCase()
//         const normalizeInput = input.toLowerCase()
       
//         return normalizeInput;
// }
// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));

// ---------------------------

// Функция checkForName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.
// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

// function checkForName(fullname, name){

//          const result = (fullname.includes(name));
//          return result;

// }
// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// console.log(checkForName("Vadim Nekrasov", "Vadim"));
// console.log(checkForName("Vadim Nekrasov", "vadim"));
// console.log(checkForName("Vadim Nekrasov", "Dima"));

// ---------------------------

// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. 
// Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.
// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.

// function checkForSpam(message) {
//         let result;
       
//       const messageToLowerCase = 
//       message.toLowerCase();
      
//       result = 
//       messageToLowerCase.includes("spam") || 
//       messageToLowerCase.includes("sale");
      
//         return result;
//       }

//       console.log(checkForSpam("Latest technology news"));
//       console.log(checkForSpam("JavaScript weekly newsletter"));
//       console.log(checkForSpam("Get best sale offers now!"));
//       console.log(checkForSpam("Amazing SalE, only tonight!"));
//       console.log(checkForSpam("Trust me, this is not a spam message"));
//       console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
//       console.log(checkForSpam("[SPAM] How to earn fast money?"));

// -----------------------------

// Напиши функцию includes(array, value), которая делает тоже самое, 
// что и метод массива массив.includes(значение) - проверяет, есть ли 
// в массиве array значение value, возвращая true если есть и false 
// в противном случае.

// При выполнении этой задачи в теле функции includes() 
// нельзя использовать метод массив.includes(значение).

// function includes(array, value){

//         for(let i = 0; i < array.length; i += 1){

//         if(array[i] === value){
//          return true;
//         }
                       
//         } return false
//       }
//       console.log(includes([1, 2, 3, 4, 5], 3));
//       console.log(includes([1, 2, 3, 4, 5], 17));
//       console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
//       console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
//       console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
//       console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
   
// ------------------------

// function checkAge(age){
       
//         if (age >= 18){
//                 return  "You are an adult"
//         };
//         return  "You are a minor"
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// ----------------------

// const friends = ["Mango", "Ajax", "Poly", "Kiwi"];

// console.log(friends.length)
// console.log(friends)
// console.table(friends)
// console.log(friends[3])

// const lastIndex = friends.length -1;
// console.log(lastIndex)

// ---------------------

// const friends = ["Mango", "Ajax", "Poly", "Kiwi"]
// for(let i = 0; i <= friends.length - 1; i += 1){
//         friends[i] += ' is best'

//         // console.log[i];
//         // console.log(friends[i]);

// }
// console.log(friends)


// const friends = ["Mango", "Ajax", "Poly", "Kiwi"]

// for(const friend of friends){
// console.log(friend)
// }

// ----------------

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90]
 

// перебрать массив
// сделать переменную тотал для цикла
// каждый элемент приплюсовать к тотал


// let total = 0;
// for(let i = 0; i < cart.length; i += 1){
//       console.log(cart[i]) ;
// //       total = total + cart[i];
//       total += cart[i]; 
// }

// console.log(`Total: `, total)



// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90]


// for(let value of cart){
//     value =  Math.round(value + 1.1)   
// } 
// console.log(cart)


// -------------------------


// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11]

// переменная total
// перебрать масив
// на каждой этерации проверить элемент на четность
// если четный  плюсуем к total

// let total = 0;

// for(let i = 0; i < numbers.length; i += 1){
//         const number = numbers[i];
//         console.log(number);

//         if(number % 2 === 0){
//                 console.log('Четное!!!!')

//                 total += number
//         }
// }


// for(const number of numbers){
//         // console.log(number);

//         if(number % 2 ===0) {
//                 console.log('Четное!!!!')
//                 total += number;
//         }
// }



// for(const number of numbers) {
//         if(number % 2 !== 0){
//                 console.log('Эту итерацию нужно пропустить!', number);
//                 continue;
//         }

//         console.log(`${number} - четное!!!!`)
//         total += number;
// }

// console.log('Total: ', total)

// ------------------

// const logins = ['jgkjgkbygkuh', 'khfjygjhgjf', 'hhgouieyurlh', 'ilruetertm'];
// const loginToFind = 'khfjygjhgjf';

// let message = 'Пользователь ${loginToFind} не найден.';

// for(let i = 0; i < logins.length; i += 1){
//         const login = logins[i];

//         // if (login !== loginToFind){
//         //         message = `Пользователь ${loginToFind} не найден.`;
                
//         // }else {
//         //         message = `Пользователь ${loginToFind}  найден.`;
//         //         break
//         // }


//         if (login === loginToFind){
//                 message = `Пользователь ${loginToFind}  найден.`;
//                 break   
//         } 
//                 message = `Пользователь ${loginToFind} не найден.`;       
// }

// console.log(message)



// for (const login of logins){
//        console.log('Login: ', login) ;
//        console.log(`${login} === ${loginToFind}: `, login === loginToFind)

//      if(login === loginToFind){
//         console.log(`Ура, равны!!!`);
//         message = `Пользователь ${loginToFind} найден.`
//         break;
//      }
// }

// console.log(message)


// const message = logins.includes(loginToFind )
//         ? `Рользователь ${loginToFind}  найден.` 
//         : `Рользователь ${loginToFind} не найден.`

// console.log(message);

// -------------------

// function checkAge(age) {
//         if (age >= 18) { 
//           return "You are an adult";
//         } 
       
      
//        return "You are a minor"; 
//       }

//       console.log(checkAge(20));
//       console.log(checkAge(8));
//       console.log(checkAge(14));
//       console.log(checkAge(38));


// -----------------------

// function checkPassword(password){
//         const ADMIN_PASSWORD = 'jqueryismyjam'

//         if (password === ADMIN_PASSWORD){
//                 return `Welcome!`
//         }
//          return 'Access denied, wrong password!'
// }
      
//         console.log(checkPassword("mangohackzor"));
//         console.log(checkPassword("polyhax"));
//         console.log(checkPassword("jqueryismyjam"));

// --------------------------

// function checkStorage(available, ordered) {
     
//  if (ordered === 0){
//       return `Your order is empty!` 
//  } if (ordered >= available) {
//       return  `Your order is too large, not enough goods in stock!`
//  } 
//       return  `The order is accepted, our manager will contact you`
   
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// -----------------------------

// const numbers = [51, 18, 13, 24, 7, 85, 19]
// let smallesNumber = numbers[0];

//    for (const number of numbers){
        
//         if(number < smallesNumber){
//                 smallesNumber = number;        
//         }
        
//    }
//    console.log('smallesNumber: ', smallesNumber);


// -------------------

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);
// console.table(fruits);


// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0]
// const secondElement = fruits[1]
// const lastElement = fruits[3]

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// ----------------------------

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
//  let string = '';
//  for (const friend of friends) {
//        string += friend +','; 
//  }
//  string = string.slice(0, string.length - 1);
// const string = friends.join(', ')
// console.log(string)

// -----------------------

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log (fruits[1]);
// console.log (fruits[3]);

// ------------------
// const fruits = ["apple", "peach", "pear", "banana", "plum"];
// const fruitsArrayLength = (fruits.length);
// console.log(fruits.length)

// --------------------
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

// ---------------------

// function getExtremeElements(array){
//        let elements;

//      elements = [array[0], array[array.length - 1]];

//      return elements;
// }

// console.log (getExtremeElements([1,2,3,4,5]));
// console.log (getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log (getExtremeElements(["apple", "peach", "pear", "banana"]));

// -----------------------

// function splitMessage(message, delimiter){
//         let words;
//       return (message.split(delimiter));
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// ------------------------

// function calculateEngravingPrice(message, pricePerWord){
//    let word = message.split(" ");
//    const wordLength = word.split;
//    const totalPrice = word.length * pricePerWord;


//    return totalPrice
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// ----------------------

// function makeStringFromArray(array, delimiter) {
//         return string = array.join(delimiter)
         
// }

// const makeStringFromArray = (array, delimiter) => array.join(delimiter);


// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// ------------------------

// function slugify(title) {
   
//     return title.toLowerCase().split(' ').join('-')

// }

// const slugify = (title) => title.toLowerCase().split(' ').join('-');

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// ---------------------------

// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// ------------------------

// 1. Объявление параметров x, y, z
// function multiply(x, y, z) {
//         console.log(`Результат умножения равен ${x * y * z}`);
//       }
      
//       // 2. Передача аргументов
//       multiply(2, 3, 5); // Результат умножения равен 30
//       multiply(4, 8, 12); // Результат умножения равен 384
//       multiply(17, 6, 25); // Результат умножения равен 2550

// -------------------
// function count(countFrom = 0, countTo = 10, step = 1) {
//         console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
      
//         for (let i = countFrom; i <= countTo; i += step) {
//           console.log(i);
//         }
//       }
      
//       count(1, 5); // countFrom = 1, countTo = 5, step = 1
//       count(2); // countFrom = 2, countTo = 10, step = 1
//       count(); // countFrom = 0, countTo = 10, step = 1

// ------------------------

// function multiply() {
//         let total = 1;
      
//         for (const argument of arguments) {
//           total *= argument;
//         }
      
//         return total;
//       }
      
//       console.log(multiply(1, 2, 3)); //  6
//       console.log(multiply(1, 2, 3, 4)); //  24
//       console.log(multiply(1, 2, 3, 4, 5)); //  120

// ------------------------

// function withdraw(amount, balance) {
//         if (amount === 0) {
//           console.log("Для проведения операции введите сумму больше нуля");
//         } else if (amount > balance) {
//           console.log("Недостаточно средств на счету");
//         } else {
//           console.log("Операция снятия средств проведена успешно");
//         }
//       }


      
//       withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
//       withdraw(500, 300); // "Недостаточно средств на счету"
//       withdraw(100, 300); // "Операция снятия средств проведена успешно"

// -------------------------

// // ✅ Работает вызов до объявления
// multiply(1, 2, 3);

// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// // ✅ Работает вызов после объявления
// multiply(4, 5, 6);

// -------------------------
// function calcSum(numOne, numTwo, more, less){
//         let numSum = numOne + numTwo;

//         if (numSum >= 3) {
//                 more();
//         } else {
//                 less();
//         }
// }

// function showMoreMessage(){
//         console.log('Больше чем 3');

// }

// function showLessMessage(){
//         console.log('Меньше чем 3');
// }

// calcSum(1, 5, showMoreMessage, showLessMessage)

// ------------------------

// function showName(){
//         console.log('Вася!')
// }
// setTimeout(showName, 1000);
// console.log('Коля!')


// showMessage();
// function showMessage(){
//         console.log('Сообщение');
// }



// let showMessage = function(){
//         console.log('Сообщение!')
// }
// showMessage();

// ---------------------------

// const logins = ['m4ngoDoge', 'kiwidab3st', 'polyiscute', 'aj4xth3n4n']

// const findLogin = function (allLogins, loginToFind){

//         // const message = allLogins.includes(loginToFind)
//         // ? `Пользователь ${loginToFind} найден.`
//         // : `Пользователь ${loginToFind} не найден.`

//         // return message;


//         return message = allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден.`
//         : `Пользователь ${loginToFind} не найден.`;

         

//         // for (const login of allLogins) {
//         //         if(login === loginToFind){
//         //                 return `Пользователь ${loginToFind} найден.`;
//         //         }
//         // }

//         // return `Пользователь ${loginToFind} не найден.`;
// }
 
//      console.log(findLogin(logins, 'avocod3r'));
//      console.log(findLogin(logins, 'kiwidab3st'));
//      console.log(findLogin(logins, 'jam4l')); 
//      console.log(findLogin(logins, 'polyiscute'));

// -------------------------
// -----Напиши функцию findSmallestNumber(numbers) для поиска
// ---- самого маленького числа в массиве.


// const findSmallestNumber = function (numbers) {
//         let smallestNumber = numbers[0];

//         for (const number of numbers){
//                 if (number < smallestNumber){
//                         smallestNumber = number;
//                 }
//         }

//         return smallestNumber;
// }

// console.log(findSmallestNumber([3, 8, 12, -2, 15]));
// console.log(findSmallestNumber([100, 54, 8, 12, 47]));
// console.log(findSmallestNumber([7, 21, 84, 15, 4]));

// ------------------------


// const genres = ["Jazz", "Blues"];
// genres.push("Rock'n'Roll")

// console.log(genres.length)

// ---------------

// const fruits = ['apple', 'lemon', 'chery', 'strawberry', 'banan']
// // for (let i = 0; i < fruits.length; i+=1) {
// //     console.log(`${i+1} : ${fruits[i]}`);
// // }
// for(const fruit of fruits){
//         console.log(fruit)
// }

// ------------------------

// const numbers = [2, 17, 94, 1, -20, -50, 23, 37];

// let minNumber = 0;
// for(const number of numbers){
//         if(number < minNumber){
//                 minNumber = number
//         }
// }
// console.log(minNumber)

// let minNumber = numbers[0];

// for (let i = 0; i < numbers.length; i+=1) {
//        if (numbers[i] < minNumber) {
//         minNumber = numbers[i];
//        }
        
//        }
//        console.log(minNumber)

// ---------------------------

// const genres = ["Jazz", "Blues", "Rock`n`Roll", "Country", "Reggy"];

// let longestWord = genres[0];

// for (const genre of genres){
//         if (genre.length > longestWord.length) {
//                 longestWord = genre;
//         }
// }

// console.log(longestWord)

// let shortlesWord = genres[0];

// for (const genre of genres){
//         if (genre.length < shortlesWord.length) {
//                 shortlesWord = genre;
//         }
// }

// console.log(shortlesWord)

// -----------------------

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// // for (let i = 0; i < salaries.length; i+=1) {

// //         total += salaries[i]
        
// // }
// // console.log(total)

// for (const salary of salaries) {
//         total += salary
// }

// console.log(total)

// ----------------

// const managerSalaries = [1000, 1500, 2500, 4000, 5000];
// const developersSalaries = [18000, 15000, 4000, 5000];

// let total = 0;

// for (const salary of managerSalaries) {
//         total += salary
// }

// for (const salary of developersSalaries) {
//         total += salary
// }
// console.log(total)

// const allSalaries = managerSalaries.concat(developersSalaries)
// let total = 0;

// for (const salary of allSalaries) {
//      total += salary;   
// }
// console.log(total);

// ----------------------

// Напиши скрипт дляя обчислення площі прямокутника зі сторонами
// значення яких зберігаються в змінних значеннях у вигляді рядка.
// Значення гарантовано розділені пробілом.

// const values = '8 11';

// const sidesArr = values.split(' ');

// // console.log(sidesArr);

// const area = Number(sidesArr[0]) * Number(sidesArr[1]);

// console.log(area);

// -----------------------

//  Напиши скрипт, який виводить у консоль ім'я та телефон користувача.
// У змінних names і phones зберігаються рядки імен та телефонних
// номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob, William, Solomon, Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(', ');
// const phonesArr = phones.split(',');

// // console.log(namesArr)
// // console.log(phonesArr)

// for (let i = 0; i < namesArr.length; i+=1) {
//         console.log(`${namesArr[i]} - ${phonesArr[i]}`)
// }

// ---------------------

// Напиши скрипт, який розвертає рядок(зворотній порядок букв)
// та виводить її в консоль.


// const string = 'Welcome to the future!';

// const strToArr = string.split('');

// const reverseStrToArr = strToArr.reverse();

// const reverseString = reverseStrToArr.join('');
// console.log(reverseString);

// -----------------------

// У нас є масив співробітників, відсортуйте його, щоб
// співробітники не повторювалися.

// const employees = ['Dennis', 'Dennis', 'Show', 'Watkins', 'Watkins','Ray'];

// const filteredEmployees = [];

// for (let i = 0; i < employees.length; i++) {
//         // console.log(employees[i]);
//         console.log(employees[i], 'index', i);
//         console.log(employees[i], 'indexOf', employees.indexOf(employees[i]));
//         console.log('------------');

//         if (i===employees.indexOf(employees[i])) {
//                 filteredEmployees.push(employees[i])
//         }
//         console.log(filteredEmployees);
// }

// -------------------

// Співробітник Show звільнився, видаліть його з масиву.
const employees = ['Dennis', 'Dennis', 'Show', 'Watkins', 'Watkins','Ray'];
const index = employees.indexOf('Show');
employees.splice(index, 1);
console.log(employees)