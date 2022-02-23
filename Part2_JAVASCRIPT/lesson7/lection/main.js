

// objects,
// add fields ,
// console.log(typeof {}); // object
// let user = {
//     id: 1,
//     name: 'kokos'
// }
// console.log(user);
// user.surname = 'abrikosov';
// console.log(user);
// user['age'] = 31;
// console.log(user);


// let obj = {};
// let fields = ['id', 'name', 'surname'];
// let values = [1, 'kokos', 'abrikosov'];
//
// // for (const field of fields) {
// //     console.log(field);
// //     obj[field] = 'xxx';
// // }
// // console.log(obj);
//
// // for (let i = 0; i < values.length; i++) {
// //     obj[fields[i]] = values[i];
// //
// // }
// // console.log(obj);


// dynamic fields,
// let user = {
//     id: 100500,
//     name: 'kokos',
// }
//
// delete user.id;
// console.log(user);


// func in objects

// let u1 = {
//     name: 'vasya',
//     surname: 'pupkin',
//     greeting: function () {
//         console.log(this) // u1
//         return ` hello my name is ${this.name} and my surname is - ${this.surname}`;
//     },
//     wife: {
//         imya: 'olga',
//         vitannya: () => {
//             console.log(this); // wife -> window
//             console.log(`hello this is ${this.imya}`);
//         }
//     }
// }
//
// console.log(u1.greeting());
// u1.wife.vitannya();


// closeures!!

// function outer() {
//
//     let x = 0;
//
//     function inner() {
//         return ++x;
//     }
//
//     return inner; // 1
//
//
// }
//
// let clos = outer();
// console.log(clos());
// console.log(clos());
// console.log(clos());
// console.log(clos());
//
// console.log(outer()());


// function userCreator(name, age) {
//     let obj = {name: name, age: age}
//     let newVar = { // manipulator
//         getName: function () {
//             return obj.name
//         },
//         getAge: function () {
//             return obj.age;
//         },
//         setAge: function (age) {
//             if (age < 0 || age < obj.age) {
//                 alert('!!!!!!!!')
//             } else {
//                 obj.age = age;
//
//             }
//         },
//     };
//     return newVar;
//
// }
//
// let manipulator = userCreator('kokos', 31);
// console.log(manipulator);
// console.log(manipulator.getName());
// console.log(manipulator.getAge());
// manipulator.setAge(32);
// console.log(manipulator.getAge());


// constructors classes

// function User(id, name, skills) {
//     this['id'] = id;
//     this.name = name;
//     this.skills = skills;
//     this.greeting = function () {
//         console.log(`hello my name is ${this.name}`);
//     };
// }
//
// let user1 = new User(1, 'kokos', ['java', 'js']);
// console.log(user1)
// let user2 = new User(2, 'vasya', ['html', 'mysql', 'mongo']);
// console.log(user2);
//
// let usersarray = [user1, user2];
//
// user1.greeting();
// user2.greeting();


// class User {
//     constructor(id, name) {
//         this.name = name;
//         this.id = id;
//     }
//
//     greeting() {
//         return `hello my name is ${this.name}`
//     }
//
//
// }
//
// let user = new User(1, 'kokos');
// console.log(user);
// console.log(user.greeting());
// let user2 = new User(2, 'abrikos');
// let usersarray = [user, user2];


// class Person {
//     constructor(id, name, surname, age, skills, wife) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.skills = skills;
//         this.wife = wife;
//     }
// }
//
//
// class Wife {
//     constructor(name) {
//         this.name = name;
//     }
// }
//
//
// let person = new Person(1, 'vasya', 'pupkin', 31, ['asd', 'qwe'], new Wife('annay'));
// console.log(person);


// class Wife {
//     constructor(name) {
//         this.name = name;
//     }
// }
//
// class Person {
//     constructor(id, name, surname, age, skills, wifeName) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.skills = skills;
//         this.wife = new Wife(wifeName);
//     }
// }
//
//
// let person = new Person(1, 'vasya', 'pupkin', 31, ['asd', 'qwe'], 'anna');
// console.log(person);


class Car {

    constructor(model, power) {
        this.model = model;
        this.power = power;
    }

    drive() {
        console.log('bububububu');
    }
}

class OffroadCar extends Car {
    constructor(model, power, type) {
        super(model, power);
        this.type = type;
    }


}

let offroad = new OffroadCar('wrx', 165, 'awd');
console.log(offroad);
offroad.drive();


class MultiOffroadCar extends OffroadCar {
    constructor(model, power, type, boost) {
        super(model, power, type);
        this.boost = boost;
    }
}

let multiOffroadCar = new MultiOffroadCar();
multiOffroadCar.drive()
