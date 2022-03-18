// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//https://jsonplaceholder.typicode.com/posts?userId=1
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(posts => {
        let postsBlock = document.getElementsByClassName('posts')[0];
        for (const post of posts) {
            let div = document.createElement('div');
            div.innerHTML = `*** POST    ${post.id} ***<br>
            userId: ${post.userId}<br>
            title: ${post.title}<br>
            body: ${post.body}<br>`;
            let button = document.createElement('button')
            button.innerHTML = 'check comments'
            div.append(button)
            document.body.append(div);
            button.onclick= function (){
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(data => data.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if(post.id===comment.postId){
                                let postComments = document.createElement('div');
                                postComments.classList.add('cardComments');
                                postComments.innerHTML = `
                                      <h5>ID: ${comment.id}
                                        Name: ${comment.name}
                                        Email: ${comment.email}
                                        Body: ${comment.body}</h5>
                                        `;
                                div.appendChild(postComments)
                                console.log(comment)
                            }
                            button.disabled = true;
                        }
                    })
            }
        }
    })















