// let a = 100; // 100
// let b = a; // 100
// b = 200; // a 100 b 200
//
//
// // {} []
// let obj1 = {name: "vasya"};
//
// let obj2 = obj1;
// console.log(obj2);
// obj2.name = 'kokos';
//
// console.log(obj2);
// console.log(obj1); // vasya


// let arr = [];
//
// function foobar() {
//     arr = [100, 20, 30];
//     return arr;
//
// }
//
// let resultArrya = foobar();
// console.log(resultArrya);


// function expression
// let calculator = function (a, b) {
//     return a + b;
// };
// console.log(calculator(10, 20));

// arrow

// let calculatorArrow = (a, b) => {return a + b};
// let calculatorArrow = (a, b) => a + b;


// let calculatorArrow = (a, b) => {
//     let result = a + b;
//     console.log(result);
//     return result;
// }
// console.log(calculatorArrow(100, 200));


// selfinvoke

// (function (args) {
//     console.log('some stuff', args);
// }('hellow'));


// callbacks
// function adsqew(a, b, fn) {
//
//     console.log(a);
//     console.log(b);
//     console.log(fn);
//     fn();
// }
//
// function hello() {
//     console.log('hello')
// }
//
// adsqew(10, 20, hello);


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
//
// console.log(users.filter(function (user) {
//     return !user.status;
// }));


// function calclulatorCallback(num1, num2, action) {
//     if (action === '+') {
//         return num1 + num2;
//     } else if (action === '-') {
//         return num1 - num2;
//     } else if (action === 'pow') {
//         return Math.pow(num1, num2);
//     } else if (action === '???') {
//         return num1 - num2 / num1;
//     }
//
// }
//
// calclulatorCallback(10, 20, '+')
// calclulatorCallback(3, 2, 'pow');
// calclulatorCallback(3, 2, '???');
// calclulatorCallback(3, 2, 'iautusdytiudghf');
// calclulatorCallback(3, 2, 'owiyiuyefdhgkfdjh');


function calculatorCallBack(a, b, fn) {
    return fn(a, b);
}


calculatorCallBack(10, 20, function (a, b) {
    return a + b
});

calculatorCallBack(3, 2, function (x, y) {
    return Math.pow(x, y);
});

calculatorCallBack(100, 200, function (foo, bar) {
    return foo - bar / foo;
});


// рекурсия

// function recursion() {
//     console.log('hello');
//     recursion();
// }

function cycle(counter) {
    console.log(counter);
    counter++; // 10

    if (counter >= 10) {
        return;
    } else {

        cycle(counter);
    }
}

cycle(0);


