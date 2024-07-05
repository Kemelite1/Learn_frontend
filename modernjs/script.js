//naming objects
//if the value and variable have the same name, you can use the short hand notation to name them
const name = 'Trevor';
const age = 20;
const person = {
    name,
    age
};
//console.log(person);

//destructuring objects
const user = {
    id: 1,
    firstName: 'Trevor',
    userName: 'job22',
    city: 'New York',
    favoriteFood: 'Jollof Rice',
    favoriteMovie: 'The Shawshank Redemption',
    countriesVisited: {
        country1: 'France',
        country2: 'Germany',
        country3: 'Italy'
    }

    }

const { firstName: fullName, userName, countriesVisited: { country1} } = user;
console.log(fullName, userName, country1);

//destructuring arrays
const numbers = [1, 2, 3, 4, 5];
const [first, second, third, ...rest] = numbers;
console.log(first, second, third, rest);