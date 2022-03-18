// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
let form = document.getElementsByTagName('form')[0]
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(posts => {
    let row = document.createElement('div');
    row.classList.add('row');
    for (const post of posts) {
        let divCard = document.createElement('div');
        divCard.classList.add('post');
        divCard.innerHTML = `
                <h3>ID: ${post.id}</h3>
                <hr>
                <h4>userId: ${post.userId}<br><br>
                    Title: ${post.title}</h4><br>
                <h5>Body: ${post.body}</h5>`
        row.appendChild(divCard);
        document.body.appendChild(row);}
    } )

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// let form = document.getElementsByTagName('form')[1]
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(data => data.json())
//     .then(coments => {
//     let row = document.createElement('div');
//     row.classList.add('row');
//     for (const comment of coments) {
//         let divCard = document.createElement('div');
//         divCard.classList.add('post');
//         divCard.innerHTML = `
//                 <h3>ID: ${comment.id}</h3>
//                 <hr>
//                 <h4>postId: ${comment.postId}</h4><br>
//                     <h5>Title: ${comment.name}<br>
//                     Email: ${comment.email}</h5>
//                 <h5>Body: ${comment.body}</h5>`
//         row.appendChild(divCard);
//         document.body.appendChild(row);}
//     } )