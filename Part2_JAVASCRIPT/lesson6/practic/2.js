// // - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
// //
// //
// let cleaner = N => {
//     return N.replaceAll('..',' ').replaceAll('---',' ').replaceAll('__',' ')
// }
// console.log(cleaner(n3))

// //     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let randomizer = length => {
//     let NEW = []
//     for (let i = 0; i < length; i++) {
//     NEW[i] = Math.floor(Math.random()*100)
//     }
//     return NEW
// }
// console.log(randomizer(5))

// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//
// let randomizer = length => {
//     let NEW = []
//     for (let i = 0; i < length; i++) {
//     NEW[i] = Math.floor(Math.random()*100)
//     }
//     return NEW.sort()
// }
// console.log(randomizer(5))

// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//
// let randomizer = length => {
//     let NEW = []
//     for (let i = 0; i < length; i++) {
//     NEW[i] = Math.floor(Math.random()*100)
//     }
//     return NEW.filter(value => {return value % 2 === 0})
// }
// console.log(randomizer(5))

// // - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let randomizer = length => {
//     let new1 = []
//     for (let i = 0; i < length; i++) {
//     new1[i] = Math.floor(Math.random()*100)
//     }
//     let new2 = new1.map(number => {return `${number}`
//     }
// )
//     return new2
// }
// console.log(randomizer(5))

// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let sortNums = (numbers, direction) =>{
//     if (direction === 'up') {
//         return numbers.sort((a, b) => a - b)}
// if (direction === 'down') {
//     return numbers.sort((a, b) => b - a)}
//     else {
//         return('Error, enter up/down!')}
// }
// console.log(sortNums([11,21,3], 'up'))


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// // -- відсортувати його за спаданням за monthDuration
//
// let sortMonthDuration = (arr, direction) =>{
// if (direction === 'down') {
//     return arr.sort((a, b) => b.monthDuration - a.monthDuration)}
//     else {
//         return('Error, enter down!')}
// }
// console.log(sortMonthDuration(coursesAndDurationArray, 'down'))


// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let Filter = coursesAndDurationArray.filter((value) => {
//     return value.monthDuration > 5;
// });
// console.log(Filter)


