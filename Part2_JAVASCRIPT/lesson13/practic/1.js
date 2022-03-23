//////setTimeout

// console.log('my PERFECT YESTERDAY was like:');
// setTimeout(() => {
//     let counter = 1
//     console.log(counter, 'I woke up.');
//     setTimeout(() => {
//         counter++
//         console.log(counter, 'Smiled.');
//         setTimeout(() => {
//             counter++
//             console.log(counter, 'Cooked breakfast.')
//             setTimeout(() => {
//                 counter++
//                 console.log(counter,'Ate a breakfast.');
//                 setTimeout(() => {
//                     counter++
//                     console.log(counter, 'Went to sleep.')
//                     console.log('♥♥♥')
//                 },1000)
//             },1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

//////Promise

// new Promise((resolve, reject) => {
// let counter = 0
//     setTimeout(()=>{
//         console.log(counter,'my PERFECT YESTERDAY was like:')
//         counter++
//         resolve(counter)
//     },1000)
// })
//     .then((counter) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 console.log(counter, 'I woke up.')
//                 counter++
//                 resolve(counter)
//             },1000)
//         })
//     })
//     .then((counter) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 console.log(counter, 'Smiled.')
//                 counter++
//                 resolve(counter)
//             },1000)
//         })
//     })
//     .then((counter) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 console.log(counter, 'Cooked breakfast.')
//                 counter++
//                 resolve(counter)
//             },1000)
//         })
//     })
//     .then((counter) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 console.log(counter, 'Ate a breakfast.')
//                 counter++
//                 resolve(counter)
//             },1000)
//         })
//     })
//     .then((counter) => {
//         new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 console.log(counter, 'Went to sleep.')
//                 console.log('♥♥♥')
//                 counter++
//                 if (counter>3){
//                     reject('eRRRor')
//                 }
//                 resolve(counter)
//             },1000)
//         })
//     })
//     .catch(reason => console.log(reason))




//////Promise-function
// function timeOutFn (counter){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(counter, 'step' )
//             counter++
//             resolve(counter)
//         },1000)
//     })
// }
// timeOutFn(0)
//     .then(value => timeOutFn(value))
//     .then(value => timeOutFn(value))