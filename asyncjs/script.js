const posts = [
    {title: 'Post One', body: 'Software engineering is a great career choice'},
    {title: 'Post Two', body: 'Nature is beautiful'},
];

let getPosts = () => {
    setTimeout(() => {

        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;

        });
        document.body.innerHTML = output;

    }, 1000)
};

let createPost = (post) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000)
    })
};

// createPost({title: 'Post Three', body: 'Web development and App development'})
// .then(getPosts)
// .catch(err => console.log(err));


// Async / Await

async function init(){
    await createPost({title: 'Post Three', body: 'Web development and App development'});
    getPosts();
}

init();

// Async / Await with fetch

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();