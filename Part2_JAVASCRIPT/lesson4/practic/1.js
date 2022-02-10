// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangleSquare(a, b) {
//     return a * b
// }
// console.log(rectangleSquare(3,3))//9

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circleSquare(r){
//     return Math.PI*(r**2)
// }
// console.log(circleSquare(2))//12.566..
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function cylinderSquare(h,r){
//     return 2*Math.PI*r*h
// }
//
// console.log(cylinderSquare(2,2))//25,13..

// // - створити функцію яка приймає масив та виводить кожен його елемент
//
// function arrayOutput(...arr){
//     for (let arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// arrayOutput(5,6,7,8,8,)//5,6,7,8,8

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, perferendis?'
// function paragraphCreator(T){
//     document.write(`<p>${T}</p>`)
// }
// paragraphCreator(text)

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function ulLi(textLi){
//     document.write(`<ul>`)
//     document.write(`<li>${textLi}</li>`)
//     document.write(`<li>${textLi}</li>`)
//     document.write(`<li>${textLi}</li>`)
//     document.write(`</ul>`)
//
// }
// ulLi('Lorem ipsum dolor sit amet.')

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function ulLi(textLi, quantity){
//     document.write(`<ul>`)
//     for (let i = 0; i < quantity; i++) {
//         let quantityElement = quantity[i];
//         document.write(`<li>${textLi}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ulLi('Lorem ipsum dolor sit amet.', 3)

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// function arrayOutput(...arr){
//     for (let arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
// }
// arrayOutput(5,'makdak',true,8,false,)//5,6,7,8,8

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let theseArr = [{id:444,name:'BulDog',age:35}]
// function iteratorOfArray(arr) {
//     for (const item of arr) {
//         console.log(item);
//     }
// }
// iteratorOfArray(theseArr)