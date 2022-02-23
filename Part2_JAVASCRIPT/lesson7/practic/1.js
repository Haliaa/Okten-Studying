// // // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// //
// function User (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this['email'] = email;
//     this['phone'] = phone;
// }
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let UserArray = [
//     new User(10 ,'Andriy', 'VCB', 'DTSRTDXH', 4534546),
//     new User(2 ,'ghdhy', 'VCB', 'DTSRTDXH', 4534546),
//     new User(3 ,'Anddhtfhiy', 'VCB', 'DTSRTDXH', 4534546),
//     new User(4 ,'Andrfyjhfyjy', 'VCB', 'DTSRTDXH', 4534546),
//     new User(7 ,'Anthrtfiy', 'VCB', 'DTSRTDXH', 4534546),
//     new User(6 ,'Adiy', 'VCB', 'DTSRTDXH', 4534546),
//     new User(5 ,'sady', 'VCB', 'DTSRTDXH', 4534546),
//     new User(8 ,'thbf', 'VCB', 'DTSRTDXH', 4534546),
//     new User(9 ,'sv', 'VCB', 'DTSRTDXH', 4534546),
//     new User(1 ,'bfbiy', 'VCB', 'DTSRTDXH', 4534546),
// ]
// // console.log(UserArray)
// //
// // // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// //
// //     let filteredUser= UserArray.filter(function (item){
// //         if(item.id%2===0){
// //             return item
// //         }
// //     })
// // console.log(filteredUser)
//
// // // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// // let sortUser = UserArray.sort((a,b)=>{return a.id-b.id})
// // console.log(sortUser)
//
//
// // // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// //
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// // // створити пустий масив, наповнити його 10 об'єктами Client
// //
// let client = [
//     new Client(13, 'FDGD','fghfhf', 'dfgfh', 564656, ['potatoes','onion']),
//     new Client(23, 'FDGD','fghfhf', 'dfgfh', 564656, ['tomatoes','roe','paprika']),
//     new Client(33, 'FDGD','fghfhf', 'dfgfh', 564656, ['wheels','lights','belt']),
//     new Client(43, 'FDGD','fghfhf', 'dfgfh', 564656, ['mirror','brake pads','brake disk']),
//     new Client(53, 'FDGD','fghfhf', 'dfgfh', 564656, ['forward glass']),
//     new Client(63, 'FDGD','fghfhf', 'dfgfh', 564656, ['helmet','ski googles']),
//     new Client(73, 'FDGD','fghfhf', 'dfgfh', 564656, ['dcs','rwfrf','fef',675,'jgh']),
//     new Client(83, 'FDGD','fghfhf', 'dfgfh', 564656, ['kar',4]),
//     new Client(93, 'FDGD','fghfhf', 'dfgfh', 564656, ['ski boots','train']),
//     new Client(103, 'FDGD','fghfhf', 'dfgfh', 564656, ['bisysle','car','plane']),
//     new Client(113, 'FDGD','fghfhf', 'dfgfh', 564656, ['hand','leg','foot','head','ear','hair','nouse'])
// ]
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let clientSorted = client.sort(function (item1,item2){return item1.order.length-item2.order.length})
// console.log(clientSorted)
//
//
//
//
//
//
//
