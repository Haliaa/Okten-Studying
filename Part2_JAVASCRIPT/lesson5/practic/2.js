// // Всі функції повинні бути описані стрілочним типом!!!!
// // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// let min3digits =(a,b,c) =>{
//    if (a<b && a<c){return a}
//    if (b<a && b<c){return b}
//    if (c<a && c<b){return c}
//    if (a === b ){if(a>c){return c}  else {return a}}
//    if (a === c ){if(a>b){return b}  else {return a}}
//    if (b === c ){if(b>a){return a}  else {return b}}
// }
// console.log(min3digits(20,20,13))//13

// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let max3digits = (a,b,c) => {
//    if (a>b && a>c){return a}
//    if (b>a && b>c){return b}
//    if (c>a && c>b){return c}
//    if (a === b ){if(a<c){return c}  else {return a}}
//    if (a === c ){if(a<b){return b}  else {return a}}
//    if (b === c ){if(b<a){return a}  else {return b}}
// }
// console.log(max3digits(20,20,13))//20

// // - створити функцію яка повертає найбільше число з масиву
//
// let maximum = arrayChecks => {
//    let max = arrayChecks[0];
//    for (let lastNumber of arrayChecks) {
//       if (max<=lastNumber){max = lastNumber}
//    }
//    return max;
// }
// console.log(maximum([2000, 200, 300, 1000]));


// // - створити функцію яка повертає найменьше число з масиву
//
// let minimum = arrayChecks => {
//    let min = arrayChecks[0];
//    for (let lastNumber of arrayChecks) {
//       if (min>=lastNumber){min = lastNumber}
//    }
//    return min;
// }
// console.log(minimum([2000, 200, 800, 200]));

// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let Suma =numbersArr => {
//    let S =numbersArr[0];
//    for (let i = 1; i < numbersArr.length; i++) {
//       let numbersArrElement = numbersArr[i];
//       S = S + numbersArrElement
//    }
//    return S
// }
//
// console.log(Suma([2, 2, 3]))//7

// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let averageNumber = numbersArr => {
//    let S =numbersArr[0];
//    let averageNum;
//    for (let i = 1; i < numbersArr.length; i++) {
//       let numbersArrElement = numbersArr[i];
//       S = S + numbersArrElement
//       averageNum = S/(numbersArr.length-1)
//    }
//    return averageNum
// }
// console.log(averageNumber([6, 2, 12,4]))//8

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let some = arrayChecks => {
//    let max = arrayChecks[0];
//    for (let lastNumber of arrayChecks) {
//       if (max <= lastNumber) {
//          max = lastNumber
//       }
//    }
//    console.log(max);
//
//    let min = arrayChecks[0];
//    for (let lastNumber of arrayChecks) {
//       if (min >= lastNumber) {
//          min = lastNumber
//       }
//    }
//    return min;
// }
//
// some([6, 2, 12, 4])//12

// // - створити функцію яка заповнює масив рандомними числами
//
// let random = sizeOfArray => {
//    let array= [];
//    for (let i = 0; i < sizeOfArray; i++) {
//       array[i] = Math.round(Math.random()*100)
//    }
//    console.log(array)
// }
// random(6)
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let randomLimit = (sizeOfArray,limit) => {
//    let array= [];
//    for (let i = 0; i < sizeOfArray; i++) {
//       array[i] = Math.round(Math.random()*limit)
//    }
//    console.log(array)
// }
// randomLimit(6,3)

// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let reverse = arr => {
//     let newArray = [];
//     for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
//         newArray[j] = arr[i];
//     }
//     console.log(newArray);
// }
// reverse([1, 2, 3, 4, 5])

