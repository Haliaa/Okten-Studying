// let menuItems = [
//     'project',
//     'cooperation',
//     'branches'
// ]
// for (const item of menuItems){
//     console.log(item)
//                         //project
//                         //cooperation
//                         //branches
// }
// for (const menuItem of menuItems) {     //iter- шаблон для створення 'for of'
//
// }
// let x=0;
// console.log(++x)
// for (let i = 0; i < menuItems.length; i++) {        //itar
//     const menuItem = menuItems[i];
//
// }
// for (let i = menuItems.length - 1; i >= 0; i--) {       //reverse itar
//     const menuItem = menuItems[i];
//
// }
// let person = {name:'Masha', age:30, status:'married'}
// for (let fieldName in person) {
//     console.log(fieldName, person[fieldName])       //name Masha
//                                                     // age 30
//                                                     // status married
// }
// let family = [
//     ['katia', 'ilya'],
//     ['max', 'den'],
//     ['oleg', 'bartok']
// ]
// for (let familyElement of family) {//iter
//     console.log(familyElement)
//     for (const eachName of familyElement) {
//         console.log(eachName)
//     }
// }
// for (let i = 0; i < family.length; i++) {
//     const familyElement = family[i];
//     console.log(familyElement)
//     for (let j = 0; j < familyElement.length; j++) {         //Interpretation_1
//         const eachName = familyElement[j];
//         console.log(eachName)
//     }
// }
// for (let i = 0; i < family.length; i++) {
//     for (let j = 0; j < family[i].length; j++) {                //Interpretation_2
//         console.log(family[i][j])
//     }
// }
// let i = 0;
// while (i < family.length) {
//     console.log(family[i])           //while
//     i++
// }

// do {
//     console.log('ka')           //всеодно 1-раз виведе 'ka'
// }
// while (false)


