// TASK_1: Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = Math.floor(Math.random() * 60)
console.log('TASK_1. time:' + time)

if (time >= 0 && time < 15) {
    console.log('Година попадає до 1-ої чверті')
} else if (time >= 15 && time < 30) {
    console.log('Година попадає до 2-ої чверті')
} else if (time >= 30 && time < 45) {
    console.log('Година попадає до 3-ої чверті')
} else if (time >= 45 && time < 60) {
    console.log('Година попадає до 4-ої чверті')
} else {
    console.log('Error! Please, reload the page.')
}

// TASK_2: У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = Math.floor(Math.random() * 32)
console.log('\n\nTASK_2. day:' + day)

if (day > 0 && day < 11) {
    console.log('День попадає до 1-ої декади місяця')
} else if (day >= 11 && day < 21) {
    console.log('День попадає до 2-ої декади місяця')
} else if (day >= 21 && day < 32) {
    console.log('День попадає до 3-ої декади місяця')
} else if (day >= 45 && day < 60) {
    console.log('День попадає до 4-ої декади місяця')
} else {
    console.log('Error! Please, reload the page.')
}


// TASK_3: У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = prompt('test =')
console.log('\n\nTASK_3. test = ' + test)

// Interpretation_1
// if (test === 'true') {
//     console.log('Вірно')
// } else {
//     console.log('Неправильно')
// }

// Interpretation_2
test === 'true' ? console.log('Вірно'): console.log('Неправильно')


// TASK_4: Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = prompt('a =')
console.log('\n\nTASK_4. a = ' + a)
a === '0' ? console.log('Вірно'): console.log('Невірно')
if(a){
    a = '-3' ? console.log('При а = -3: Невірно'): console.log('При а = -3: Вірно')
    a = '0' ? console.log('При а = 0: Вірно'): console.log('При а = 0: Невірно')
    a = '1' ? console.log('При а = 1: Невірно'): console.log('При а = 1: Вірно')
}


// TASK_5: Скласти розклад на тиждень за домопоги switch. Користувач вводить
// порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let SequenceNumber = prompt('Please, enter the sequence number of the day:\nMonday = 1\nTuesday = 2\nWednesday = 3\nThursday = 4\nFriday = 5')
switch (SequenceNumber){
    case '1':
        console.log('Timetable: Monday\n9:00 - Handwriting\n10:00 - Phonics\n11:00 - Maths\n12:00 - Reading\n13:00 - PE')
        break;
    case '2':
        console.log('Timetable: Tuesday\n9:00 - Music\n10:00 - Geography\n11:00 - Maths\n12:00 - Drawing')
        break;
    case '3':
        console.log('Timetable: Wednesday\n9:00 - PSHE\n10:00 - Physics\n11:00 - German\n12:00 - French\n13:00 - English')
        break;
    case '4':
        console.log('Timetable: Thursday\n9:00 - Reading\n10:00 - Physics\n11:00 - German\n12:00 - French\n13:00 - Spanish')
        break;
    case '5':
        console.log('Timetable: Friday\n9:00 - Literacy\n10:00 - Psychology\n11:00 - Dance\n12:00 - PE\n13:00 - Reading')
        break;
}


// TASK_6: Потрібно визначити Високосний рік чи ні.
// Високосні роки діляться націло на 4.
let Year = prompt('Please, enter year')

if (Year % 4) {
    console.log('\n\nTASK_6.\nРік:'+Year+'\nНЕ високосний рік')
} else {
    console.log('\n\nTASK_6.\nРік:'+Year+'\nВисокосний рік')
}


// TASK_6: Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let Nazva = prompt('Яка «офіційна» назва JavaScript?')
if(Nazva === 'ECMAScript'){
    alert('Правильно!')}
else {
    alert('Не знаєте? ECMAScript!')}


