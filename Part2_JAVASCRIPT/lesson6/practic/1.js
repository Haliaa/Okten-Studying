// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let arr = ['hello world', 'lorem ipsum', 'javascript is cool']
// arr.forEach(value => {
//     console.log(value.length);
// })

// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let arr = ['hello world', 'lorem ipsum', 'javascript is cool']
// arr.forEach(value => {
//     console.log(value.toUpperCase());
// })

// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let arr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
// arr.forEach(value => {
//     console.log(value.toLowerCase());
// })

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let st = str.replace(' ','').split(' ')
// let s = st.pop(st.pop(st.pop()))
// let S = st.join(' ')
// console.log(S)

// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// stringToArray(str);
//
// let stringToArray = arrr => {
//     let newArr = arrr.split(' ')
//     console.log(newArr)
// }

// // - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let string = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => {
//     let st = str.split('')
//     let s = st.splice(0,length)
//     return s
// }
// console.log(delete_characters(string,7));

// // - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// //     let str = "HTML JavaScript PHP";
// // document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// //
// let Str = "HTML JavaScript PHP";
// let insert_dash = str => {
//     let st = str.toUpperCase().split(' ').join('-')
//     return st
// }
// console.log(insert_dash(Str))
//
// // - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'яке ж життя прекрасне!'
// let some = string => {
//     let divided = string.split('')
//     divided[0]=divided[0].toUpperCase()
//     let end = divided.join('')
//     return end
// }
// console.log(some(str))

// //
// // - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let Str = 'яке ж життя прекрасне!'
//
// let capitalize = str => {
//     let ready = str.split(' ').map(value=>value.charAt(0).toUpperCase()+value.slice(1)).join(' ');
//     return ready
// };
// console.log(capitalize(Str))
