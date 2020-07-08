// // -- створити об'єкт (не меньше 5ти властивостей) який описує
// // - собаку
// // - людину
// // - автомобіль
// // - квартиру
// // - книгу
// const obj = {
//     dog: {
//         name: 'Rem',
//         color: ['black', 'orange'],
//         dogBreed: 'Rottweiler',
//         age: 1.5,
//         gender: 'boy'
//     },
//     human: {
//         name: 'Ruslan',
//         age: 25,
//         gender: 'man',
//         height: 175,
//         bodyType: 'Thin'
//     },
//     car: {
//         manufacturer: 'Honda',
//         model: 'Acord',
//         age: 15,
//         engine: 2.2,
//         color: 'black'
//     },
//     apartment: {
//         rooms: 3,
//         adress: 'Kiev',
//         floor: 7,
//         balcony: true,
//         boiler: true,
//     },
//     book: {
//         name: 'Clean Code',
//         description: `Навіть поганий програмний код може працювати. 
//         Однак якщо код не є «чистим», це завжди буде заважати розвитку проекту і компанії-розробника, 
//         віднімаючи значні ресурси на його підтримку і «приборкання». Ця книга присвячена хорошому програмуванню. 
//         У ній повно реальних прикладів коду. Прочитавши книгу, ви дізнаєтеся багато нового про коди. 
//         Більш того, ви навчитеся відрізняти хороший код від поганого. 
//         Ви дізнаєтеся, як писати хороший код і як перетворити поганий код у хороший.`,
//         author: 'Robert Martin',
//         language: 'ua',
//         numberOfPages: 448,
//     }
// };

// // -- Створити масив та вивести його в консоль:
// // - з 5 собак
// // - 3 5 людей
// // - з 5 автомобілів
// const arr = [];
// for (const key in obj) {
//     if (key == 'dog' || key == 'human' || key == 'car') {
//         for (let index = 0; index < 5; index++) {
//             const element = obj[key];
//             arr.push(element);
//         }
//     }
// }
// console.log(arr);

// // -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// // - будинок
// // - водій
// // - іграшку
// // - стіл
// // - сумка
// const obj1 = {
//     house: {
//         adress: 'Kiev',
//         floor: 7,
//         park: false,
//         balcony: true,
//         boiler: true,
//     },
//     driver: {
//         name: 'Ruslan',
//         age: 25,
//         gender: 'man',
//         height: 175,
//         bodyType: 'Thin'
//     },
//     toys: [
//         {
//             manufacturer: 'Leggo',
//             model: 'Star Wars',
//             age: 3,
//             color: 'black',
//             state: 'good'
//         },
//         {
//             manufacturer: 'Leggo',
//             model: 'Bionic',
//             age: 3,
//             color: 'silver',
//             state: 'good'
//         }
//     ],
//     desk: {
//         name: 'Clio',
//         height: 80,
//         widht: 75,
//         length: 100,
//         color: 'red',
//     },
//     handbag: {
//         name: 'Clean Code',
//         made: 'Italy',
//         size: `21x15x9.5`,
//         author: 'D&G',
//         color: 'yellow',
//     }
// };


// // Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
//             ];
            
// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
// // const andrStatus = users.reverse()[3].status;
// // console.log(andrStatus);

// // - статус Максима
// const mStatus = users[4].status;
// console.log(mStatus);

// // - ім'я передостаннього об'єкту
// const last = users[users.length - 2].name;
// console.log(last);

// // - ім'я третього об'єкта
// const b = users[2].name;
// console.log(b);

// // - вік Олега
// const o = users[6].age;
// console.log(o);

// // - вік Олі
// const ol = users[3].age;
// console.log(ol);

// // - вік + ім'я 5го об'єкта
// const ols1 = users[4].age;
// const ols2 = users[4].name ;
// console.log(ols1, ols2);

// // - вік + сатус Анни
// const ols3 = users[5].age;
// const ols4 = users[5].status;
// console.log(ols3, ols4);

// // Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!









// // -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// // -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // - отримує текст з параграфа з id "content"
// const el = document.getElementById('content').textContent;
// console.log(el);

// // - отримує текст з блоку з id "rules"
// const ele = document.getElementById('rules').textContent;
// console.log(ele);

// // - замініть текст параграфа з id 'content' на будь-який інший
// const elem = document.getElementById('content');
// elem.innerText = 'замініть текст параграфа з id content на будь-який інший';
// console.log(elem.textContent);

// // - замініть текст параграфа з id 'rules' на будь-який інший
// const eleme = document.getElementById('rules');
// eleme.innerText = 'замініть текст параграфа з id rules на будь-який інший'
// console.log(eleme.textContent);

// // - змініть кожному елементу колір фону на червоний
// const t = document.getElementsByClassName('fc_rules')
// for (let index = 0; index < t.length; index++) {
//     const element = t[index];
//     element.style.background = 'red';

// // - змініть кожному елементу колір тексту на синій
//     element.style.color = 'blue';
// }

// // - отримати весь список класів елемента з id=rules і вивести їх в console.log
// const elemen = document.getElementById('rules');
// console.log(elemen.classList);
// // - отримати всі елементи з класом fc_rules
// const bc = document.getElementsByClassName('fc_rules')
// console.log(bc);

// // - поміняти колір тексту у всіх елементів fc_rules на червоний
// const tc = document.getElementsByClassName('fc_rules')
// for (let index = 0; index < tc.length; index++) {
//     const element = tc[index];
//     element.style.background = 'white';
//     element.style.color = 'red';
// }
// ====================
// ====================
// ====================












// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// const mainHeader = document.getElementById('main_header');
// mainHeader.style.color = 'red';

// // -- робить шириниу елементу ul 400 пікселів
// const ul = document.getElementsByTagName('ul')[0];
// ul.style.width = '400px';

// // -- робить шириниу всіх елементів з класом linkList шириною 50%
// const linkList = document.getElementsByClassName('linkList');
// for (let index = 0; index < linkList.length; index++) {
//     const element = linkList[index];
//     element.style.width = '50%';
// }

// // -- отримує текст який зберігається в елементі з класом listElement2
// const listElement2 = document.querySelector('.listElement2');
// console.log(listElement2.textContent)

// // -- отримує всі елементи li та змінює ім колір фону на сірий
// const linkListT = document.getElementsByTagName('li');
// for (let index = 0; index < linkListT.length; index++) {
//     const element = linkListT[index];
//     element.style.background = 'silver';
// }

// // -- отримує всі елементи 'a' та додає їм клас anchor
// const a = document.getElementsByTagName('a');
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     element.classList.add('anchor');
// }

// // -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// const a2 = document.getElementsByTagName('a');
// for (let index = 0; index < a2.length; index++) {
//     const element = a2[index];
//     if(element.textContent == 'link3') element.style.fontSize = '40px';
// }

// // -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// const a3 = document.getElementsByTagName('a');
// for (let index = 0; index < a3.length; index++) {
//     const element = a3[index];
//     element.classList.add(`element_${element.textContent}`);
// }

// // -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const b = prompt('Фон');
// const a4 = document.getElementsByClassName('sub-header');
// for (let index = 0; index < a4.length; index++) {
//     const element = a4[index];
//     element.style.background = b;
// // -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment. 
// // Колір отримати з prompt()
//     const inOf = element.textContent.indexOf('content 2');
//     if(inOf !== -1) element.style.color = prompt('color');
// // -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     const inOf1 = element.textContent.indexOf('content 1');
//     if(inOf1 !== -1) element.innerHTML = prompt('елемент з класом content_1 заміняє тест на довільний');
// }

// // -- отримати елементи p та змінити їм paddin на довільне значення
// const p = document.getElementsByTagName('p');
// for (let index = 0; index < p.length; index++) {
//     const element = p[index];
//     element.style.padding = '10px';
// // -- отримати елементи з класом text2 та змінити їм текст на довільне значення
//     const inOf1 = element.className.indexOf('text2');
//     if(inOf1 !== -1) element.innerHTML = 'отримати елементи з класом text2 та змінити їм текст на довільне значення';
// }
