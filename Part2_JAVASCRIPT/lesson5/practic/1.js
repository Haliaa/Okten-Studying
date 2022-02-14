// // Всі функції повинні бути описані стрілочним типом!!!!
// //     - створити функцію яка обчислює та повертає площу прямокутника
// let rectangleSquare = (a,b) => a*b
// console.log(rectangleSquare(4,5))//20

// // - створити функцію яка обчислює та повертає площу кола
//
// let circleSquare = (r) => Math.PI*(r**2)
// console.log(circleSquare(3))//28.274333882308138

// // - створити функцію яка обчислює та повертає площу циліндру
//
// let cylinderSquare = (r, h) => 2*Math.PI*r*h
// console.log(cylinderSquare(2,3))//37.69911184307752

// // - створити функцію яка приймає масив та виводить кожен його елемент
// let output = arr => {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// output(['love', 'sadness', 'happy', 'hatred'])


// // - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
//
// let paragraphText = text =>
// document.write(`<p>${text}</p>`)
//
// paragraphText('Текст li задати через аргумент всім однаковий')

// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let paragraphText = text =>
// document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
//
// paragraphText('Текст li')

// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let paragraphText = (text, numerosity) =>{
// document.write(`<ul>`)
//     for (let i = 0; i < numerosity; i++) {
//         document.write(`<li>${text}</li>`)
//     }
// document.write(`</ul>`)
// }
//
// paragraphText('Текст li',5)

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let list = arr => {
//     document.write(`<ol>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)}
//     document.write(`</ol>`)
// }
// list([false, 'like', 33])

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let output = (arr) => {
//     document.write(`<div>${arr.id}</div><div>${arr.name}</div><div>${arr.age}</div>`)
// }
// output({id:457, name: 'Katya', age:55})



