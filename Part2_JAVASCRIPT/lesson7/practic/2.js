//
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// //
// function Car(model, producer, graduationYear, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.graduationYear = graduationYear;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.drive = function drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function info() {
//         for (let key of this) {
//             if (typeof this[key] !== 'function'){
//                 console.log(`${key} - ${this[key]}`)}
//         }
//     }
//     this.increaseMaxSpeed = function increaseMaxSpeed (newSpeed){
//         this.maxSpeed = maxSpeed + newSpeed
//     }
//
//     this.graduationYear = function changeYear (newValue){
//         this.graduationYear = graduationYear + newValue
//     }
//     this.driver =  function addDriver(name, surname, middlename){
//         this.driver = [name, surname, middlename]
//     }
// }
// console.log(Car(23,'sdf',32,5,'dt'))

//
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// //
// class Car {
//     constructor(model, producer, graduationYear, maxSpeed, engineVolume) {
//         this.model = model;
//         this.producer = producer;
//         this.graduationYear = graduationYear;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//         this.drive = function drive() {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         }
//         this.drive = function drive() {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         }
//         this.info = function info() {
//             for (let key of this) {
//                 if (typeof this[key] !== 'function') {
//                     console.log(`${key} - ${this[key]}`)
//                 }
//             }
//         }
//         this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed) {
//             this.maxSpeed = maxSpeed + newSpeed
//         }
//
//         this.graduationYear = function changeYear(newValue) {
//             this.graduationYear = graduationYear + newValue
//         }
//         this.driver = function addDriver(name, surname, middlename) {
//             this.driver = [name, surname, middlename]
//         }
//     }
// }
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let CinderellaS = [
    new Cinderella('Petro',65,23),
    new Cinderella('Snizhana',104,43),
    new Cinderella('Katia',50,38),
    new Cinderella('Ylia',78,39),
    new Cinderella('Nastia',88,44),
    new Cinderella('Hallia',23,23),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince('Avkakiy',25, 43)
// let para = function (pri, Cin){
//     for (let CinderellasElement of Cin) {
//         if (CinderellasElement.footSize === pri.shoe){
//             return `${pri.name} your name of your love is ${CinderellasElement.name}. Hirko!!!!`
//         }
//     }
// }
// console.log(para(prince, CinderellaS))
let para2 = CinderellaS.find((item)=>item.footSize === prince.shoe)
console.log(`Your beloved is:`)
console.log(para2)


