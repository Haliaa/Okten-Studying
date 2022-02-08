// //--створити масив з:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
// let Array = [
//     [5, 8, 9, 0, 6],
//     ['do', 'mi', 'ni', 'kan', 'ska'],
//     ['republic', 55, true, undefined, 123]
// ]
// for (let i = 0; i < Array.length; i++) {
//     for (let j = 0; j < Array[i].length; j++) {
//         console.log(Array[i][j])
//     }
// }
// //Створити пустий масив. Наповнити його будь-якими значеннями
// // звертаючись до конкретного індексу. Вивести в консоль
//
// let Array1 = [
// ]
// Array1[0]='do'
// Array1[1]='mi'
// Array1[2]='ni'
// Array1[3]='ka'
// Array1[4]='ns'
// Array1[5]='ka'
// Array1[6]='republic'
//
// console.log(Array1)
//
// //- За допомогою циклу for і document.write()
// // вивести 10 блоків div c довільним текстом всередині
// let menuItems = [
//     'project',
//     'cooperation',
//     'branches',
//     'branches',
//     'branches',
//     'branches',
//     'branches',
//     'branches',
//     'branches',
//     'branches'
// ]
// for (const item of menuItems){
//     document.write(`<div>${item}</div>`)
//                         //project
//                         //cooperation
//                         //branches
// }
// //- За допомогою циклу for і document.write() вивести 10
// // блоків div c довільним текстом і індексом всередині
// let menus = [
//     'project',
//     'cooperation',
//     'branches',
//     'branches',
//     'branches',
//     'branches',
//     'branches',
//     'branches',
//     'branches',
//     'branches'
// ]
// for (let i = 0; i < menus.length; i++) {
//     const menu = menus[i];
//     ""
//     document.write(`<div>${i}   ${menu}</div>`)
// }

// // За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let family = ['adsfa','sfsfs',7687, true,'adsfa','sfsfs',7687, true,'adsfa','sfsfs',7687, true,'adsfa','sfsfs',7687, true,'adsfa','sfsfs',7687, true]
// let i = 0;
// while (i < family.length) {
//     document.write(`<h1>${family[i]}</h1>`)           //while
//     i++
// }

// // За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let family = ['adsfa','sfsfs',7687, true,'adsfa','sfsfs',7687, true,'adsfa','sfsfs',7687, true,'adsfa','sfsfs',7687, true,'adsfa','sfsfs',7687, true]
// let i = 0;
// while (i < family.length) {
//     document.write(`<h1>${i}     ${family[i]}</h1>`)           //while
//     i++
// }

// // Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let family = ['adsfa','sfsfs',7687, true,'adsfa','sfsfs',7687, true,'adsfa','sfsfs']
// let i = 0;
// while (i < family.length) {
//     document.write(`<h1>${i}     ${family[i]}</h1>`)           //while
//     i++
// }
//
// // Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let family = ['adsfa','sfsfs','adsfa','sfsfs', 'adsfa','sfsfs','adsfa','sfsfs','adsfa','sfsfs']
// let i = 0;
// while (i < family.length) {
//     document.write(family[i])           //while
//     i++
// }

// // Створити масив з 10 елементів числового, стірчковогоі булевого типу.
// // За допомогою if та typeof вивести тільки булеві елементи
//
// let family = ['adsfa','sfsfs',7687, true, false,'sfsfs',7687, true,'adsfa','sfsfs']
//
// for (let i = 0; i < family.length; i++) {
//     const familyElement = family[i];
//     if((typeof(familyElement)) === 'boolean'){
//         document.write('<br>'+familyElement)
//     }
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// let family = ['adsfa','sfsfs',7687, true, false,'sfsfs',31337687, true,'adsfa','sfsfs']
//
// for (let i = 0; i < family.length; i++) {
//     const familyElement = family[i];
//     if((typeof(familyElement)) === 'number'){
//         document.write('<br>'+familyElement)
//     }
// }

// //  Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let family = ['adsfa','sfsfs',7687, true, false,'sfsfs',3133, 7687, true,'adsfa','sfsfs']
//
// for (let i = 0; i < family.length; i++) {
//     const familyElement = family[i];
//     if((typeof(familyElement)) === 'string'){
//         document.write('<br>'+familyElement)
//     }
// }

// //  Створити порожній масив. Наповнити його 10 елементами (різними за типами) через
// //  звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let family = []
// family[0]='d'
// family[1]='o'
// family[2]='m'
// family[3]='i'
// family[4]='n'
// family[5]='i'
// family[6]='k'
// family[7]='a'
// for (let i = 0; i < family.length; i++) {
//     console.log(family[i])
// }

// // Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний
// // // номер кроку через console.log та document.write
// // for (let i = 0; i < 10; i++) {
// //     console.log(i)
// //     document.write(i)
// // }


// // Створити цикл for на 100 ітерацій з кроком 1.
// // Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i)
//     document.write(i)
// }
// // Створити цикл for на 100 ітерацій з кроком 2.
// // Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i=i+2) {
//     console.log(i)
//     document.write(i)
// }
// Створити цикл for на 100 ітерацій. Вивести
// тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i=i+2) {
//     console.log(i)
//     document.write(i)
// }

// // Створити цикл for на 100 ітерацій. Вивести тільки непарні
// // кроки. через console.log + document.write
// for (let i = 1; i <= 100; i=i+2) {
//     console.log(i)
//     document.write(i)
// }



