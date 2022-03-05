// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let formFirst = document.createElement('form')
// let input1_1 = document.createElement('input')
// let input1_2 = document.createElement('input')
// input1_1.name ='input1_1'
// input1_2.name ='input1_2'
// formFirst.append(input1_1, input1_2)
// document.body.append(formFirst)
//
//
// let br = document.createElement('br')
// document.body.append(br)
//
// let formSecond = document.createElement('form')
// let input2_1 = document.createElement('input')
// let input2_2 = document.createElement('input')
// input2_1.name ='input2_1'
// input2_2.name ='input2_2'
// formSecond.append(input2_1, input2_2)
// document.body.append(formSecond)
//
// let button = document.createElement('button')
// button.innerText = 'Вивести в консоль'
// document.body.append(button)
//
// button.addEventListener('click', function () {
//     console.log(document.forms[0].input1_1.value)
//     console.log(document.forms[0].input1_2.value)
//     console.log(document.forms[1].input2_1.value)
//     console.log(document.forms[1].input2_2.value)
// })


// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //  При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
// //
// let input1 = document.createElement('input')
// let input2 = document.createElement('input')
// let input3 = document.createElement('input')
//
// input1.name = 'input1'
// input2.name = 'input2'
// input3.name = 'input3'
//
// let button = document.createElement('button')
// button.innerText = 'tab to create table'
// document.body.append(input1, input2, input3, button)
//
// button.addEventListener('click', function () {
//     let tr = input1.value
//     let td = input2.value
//     let text = input3.value
//
//     function tableCreator(tr, td, inner) {
//         let table = document.createElement('table')
//         table.style.border = '5px solid red';
//
//         document.body.append(table)
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr')
//             tr.style.border = '5px solid black';
//
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td')
//                 td.style.border = '5px solid grey';
//                 td.innerText = `${inner}`
//                 tr.appendChild(td)
//                 table.appendChild(tr)
//             }
//         }
//     }
//     tableCreator(tr, td, text)
//
//     let br = document.createElement('br')
//     document.body.append(br,br)
// })

// //
// // - Сворити масив не цензурних слів.
// //     Сворити інпут текстового типу.
// //     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// // кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
// //
//
// let array = ['блять','сука','нахуй','підарас','далбайоб','курва','ахуєть','піздєц','хуйня','заєбав','уйобок','мудак','педик']
//
// let inputT = document.createElement('input')
// inputT.type = 'text'
// inputT.name = 'textInput'
// inputT.id = 'textInput'
// let button = document.createElement('button')
// button.id = 'button'
// button.innerText = 'check word'
// document.body.append( inputT, button)
// button.addEventListener('click', function (){
//     for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     if(inputT.value === arrayElement){
//         alert('Фуууу!!! Нецензурна лексика!')
//     }else{
//         console.log('Ти класна(ий)!!!')}
// }})

//
// // // - Сворити масив не цензцрних слів.
// // //     Сворити інпут текстового типу.
// // //     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// // //     Кинути алерт з попередженням у випадку якщо містить.
// // //     Перевірку робити при натисканні на кнопку
// // //
// // //
// //
// let array = ['блять','сука','нахуй','підарас','далбайоб','курва','ахуєть','піздєц','хуйня','заєбав','уйобок','мудак','педик']
//
// let inputT = document.createElement('input')
// inputT.type = 'text'
// let button = document.createElement('button')
// button.innerText = 'check word'
//
// let msg = document.createElement('p')
// msg.innerText = 'Вводьте слова та розділові знаки через пробіл та з малої літери!!!'
// document.body.append( msg, inputT, button)
// button.addEventListener('click', function (){
//     for (let i = 0; i < array.length; i++) {
//     let dividedInputT = inputT.value.split(' ')
//         for (let j = 0; j < dividedInputT.length; j++) {
//             if(dividedInputT[j] === array[i]){
//                 alert('Фуууу!!! Нецензурна лексика!')
//             } else {
//                 console.log('checked')}
//         }
//
// }})