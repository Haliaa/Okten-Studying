// 1) Напишіть код, який :
// // a) додає клас з назвою групи, елементу з ід main_header
// let mainHeader = document.getElementById('main_header');
// mainHeader.classList.add('class1')
// console.log(mainHeader);

// b) робить шириниу елементу ul 400px
// let ul = document.getElementsByTagName('ul');
// console.log(ul);
//     ul[0].style.boxSizing = 'border-box';
//     ul[0].style.width = '400px';

// // c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.body.getElementsByClassName('linkList')
// for (const linkListElement of linkList) {
//     linkListElement.style.width = '50%'
// }

// // d) отримує текст який зберігається в елементі з класом listElement2
// let linkList = document.body.getElementsByClassName('linkList')
// let text = linkList[1].innerText
// console.log(text)

// // e) отримує всі елементи li та змінює ім колір фону на сірий
// let liList = document.body.getElementsByTagName('li')
// for (const liListElement of liList) {
//     liListElement.style.background = 'grey'
// }
// console.log(liList)

// // f) отримує всі елементи 'a' та додає їм клас anchor
//
// let aList = document.body.getElementsByTagName('a')
// for (const aListElement of aList) {
//     aListElement.classList.add('anchor')
// }
// console.log(aList)

// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//
// let aList = document.body.getElementsByTagName('a')
// for (const aListElement of aList) {
//     if(aListElement .innerText === 'link3'){aListElement.style.fontSize = '40px'}
// }

// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// let aList = document.body.getElementsByTagName('a')
// for (const aListElement of aList) {
//     let innerText = aListElement.innerText
//     aListElement.classList.add(`element_${innerText}`)
// }

// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let fon = prompt('Enter background color:')
// let list = document.body.getElementsByClassName('sub-header')
// for (const listElement of list) {
//     listElement.style.background = `${fon}`
// }
// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//
// let fon = prompt('Enter background color:')
// let list = document.body.getElementsByClassName('sub-header')
// for (const listElement of list) {
//     if (listElement.innerText === 'content 2 segment'){
//         listElement.style.background = `${fon}`
//     }
// }
// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let list = document.getElementsByClassName('content_1')
// list[0].innerText = prompt('Enter text:')

// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
//
// let list = document.body.getElementsByClassName('text2')
// list[0].innerText = 'dec-2021'



