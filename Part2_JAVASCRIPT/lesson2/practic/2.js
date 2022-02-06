// // TASK_1: Користувач вводить або має два числа.
// // Потрібно знайти та вивести максимальне число з тих двох .
// // Також потрібно врахувати коли введені рівні числа.
// let digit1 = prompt('Please, enter 1-st number:')
// let digit2 = prompt('Please, enter 2-nd number:')
//
//
// if (digit1 > digit2) {
//     console.log('1-st number = ' + digit1 + '\n2-nd number = ' + digit2 + '\nMAX number = ' + digit1)
// } else if (digit1 < digit2) {
//     console.log('1-st number = ' + digit1 + '\n2-nd number = ' + digit2 + '\nMAX number = ' + digit2)
// } else if (digit1 === digit2) {
//     console.log('1-st number = ' + digit1 + '\n2-nd number = ' + digit2 + '\nMAX number = ' + digit2+`\n(The numbers are equal)`)
// } else {
//     console.log('Error! Try to reload the page.')
// }

// // TASK_2: У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// // Користувач вводить номер квартири просто в змінні або через prompt('') .
// // Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let flat = prompt('Please, enter apartment number')
// console.log('apartment number = ' + flat)
//
// if (flat > 0 && flat < 21) {
//     console.log(`Дана квартира знаходиться в 1-ому під'їзді`)
// } else if (flat> 20 && flat < 49) {
//     console.log(`Дана квартира знаходиться в 2-ому під'їзді`)
// } else if (flat > 48 && flat < 91) {
//     console.log(`Дана квартира знаходиться в 4-ому під'їзді`)
// } else {
//     console.log('Error! Wrong apartment number')
// }

//
// // TASK_3: Ми маємо змінну number в яку користувач задає числове значення,
// // якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
// let number = prompt('Enter a number: ')
// number === '10' ? console.log('ВІРНО'):console.log('НЕВІРНО')



// // TASK_4: Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// // Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// // Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let temperature = prompt(`Чи ми йдемо сьогодні в OKTEN на навчання?\n  Введіть температуру (Цельсія) = `)
// if(temperature>=10 && temperature<=22){
//     console.log('ми йдемо ВЧИТИСЯ')}else {
//     console.log('сидимо вдома і вчимося ОНЛАЙН')}


// TASK_5: За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let numeric = prompt('Please, enter the number (1-5) = ')
switch (numeric){
    case '1':
        console.log('ВІТАЄМО!!! Ваш приз: Авто!')
        break;
    case '2':
        console.log('ВІТАЄМО!!! Ваш приз: Мото!')
        break;
    case '3':
        console.log('ВІТАЄМО!!! Ваш приз: Телефон!')
        break;
    case '4':
        console.log('ВІТАЄМО!!! Ваш приз: Чипси!')
        break;
    case '5':
        console.log('ВІТАЄМО!!! Ваш приз: Подорож на Мальдіви, удвох!')
        break;
    default:
        console.log('число не вірне ...')
        break;
}




