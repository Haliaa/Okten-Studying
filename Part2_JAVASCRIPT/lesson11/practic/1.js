// // -створити форму з інпутами для name та age.
// //     При відправці форми записати об'єкт в localstorage
// //
// let firstForm = document.forms[0]
// firstForm.onsubmit = function (e){
//     e.preventDefault()
//     let nameInput = e.target.name.value
//     let ageInput = e.target.age.value
//     localStorage.setItem('nameInput', JSON.stringify({nameInput, ageInput}))
// }


// // -створити форму з інпутами для model,type та volume автівки.
// //     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
//
//
// let secondForm = document.forms[1]
// secondForm.onsubmit = function (e){
//     e.preventDefault()
//     let modelInput = e.target.model.value
//     let typeInput = e.target.type.value
//     let volumeInput = e.target.volume.value
//     let arr = {modelInput, typeInput, volumeInput}
//     localStorage.setItem('arr', JSON.stringify(arr))
// }



