

const getUsersData = function (user){
    fetch(`https://jsonplaceholder.typicode.com/users/${user}`).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    });
}

getUsersData('1');

// arrow function
const getUserData = (user) => {

    fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
    .then(response => response.json())
    .then(data => console.log(data));


}
getUserData('2');
