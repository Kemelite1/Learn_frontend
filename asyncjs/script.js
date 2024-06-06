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

// Promise.all
const promise1 = Promise.resolve('Software Engineering');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Artificial Intelligence'));
Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));
