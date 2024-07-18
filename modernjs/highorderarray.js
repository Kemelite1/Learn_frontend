//high order array method - take in a function as an argument(callback function) 
//we can pass a variable for each item in that array.
//forEach - loops through(does not return anything) & do something specific for each item in the array.
 const socials = ['Twitter', 'Facebook', 'Instagram', 'Github'];
 socials.forEach((social, index) => {
    console.log(index, social);
});

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];
companies.forEach((company) => {
    //console.log(company.name);
});


//filter - filter through the array & return a new array based on a condition. it does not modify the original array. it returns a new arr
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const adult = ages.filter(age => age >= 18);
//console.log(adult);

const retailCompanies = companies.filter(company => company.category === 'Retail');
const earlyCompanies = companies.filter(company => company.start >= 1980 && company.end <= 2005);
const longCompanies = companies.filter(company => (company.end - company.start) >= 10);
//console.log(longCompanies);

//map - loops through and creates a new array from the original array. it modifies the original array.
const companyNames = companies.map(company => company.name);
//const companyInfo = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
const companyInfo = companies.map(company => {
    return {
        name: company.name,
        category: company.category,
        start: company.start

    }
});
//console.log(companyInfo);

//chain map methods together
const squareAges = ages.map(age => Math.sqrt(age)).map(age => age * 2);
const numbers = [1, 2, 3, 4, 5];
const doubleAndMultiply = numbers.map((num) => num + num).map((num) => num * 2); 
//console.log(doubleAndMultiply); //[2, 4, 6, 8, 10] - [4, 8, 12, 16, 20]

//chain different methods
const evenNumbers = numbers.filter((number) => number % 2 === 0).map((number) => number * 2);
//console.log(evenNumbers);


//reduce - loops through and does something to produce a result. it modifies the original array.
const ageSum = ages.reduce((total, age) => total + age, 0); //0 is the initial value of the total
//console.log(ageSum);

//total years for all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
//console.log(totalYears);

const shoppingCart = [
  { id: 1, name: "Body Fantasies", price: 5000 },
  { id: 2, name: "Peak Milk", price: 3000 },
  { id: 3, name: "Cocoa Butter", price: 2700 },
];
const totalCost = shoppingCart.reduce((total, product) => total + product.price, 0);
//console.log(totalCost);


//combine methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age, 0);


//find - finds a specific item in the array. it returns the first item that matches the condition.
const findCompany = companies.find(company => company.name === 'Company Four');
//every - checks if every item in the array matches the condition. it returns a boolean.
const isEveryAdult = ages.every(age => age >= 18);
//some - checks if at least one item in the array matches the condition. it returns a boolean.
const isSomeAdult = ages.some(age => age >= 18);
//sort - sorts the array based on a condition. it modifies the original array.
const sortedCompanies = companies.sort((a, b) => a.start - b.start);
//console.log(sortedCompanies);

//sort ages
const sortAges = ages.sort((a, b) => a - b);

const people = [
    { FirstName: 'Betty', lastName: 'Butter', email: 'betty@gmail.com', phone: '222-222-222', age: 20 },
    { FirstName: 'John', lastName: 'Smith', email: 'smith@email.com', phone: '333-333-333', age: 25 },
    { FirstName: 'Michael', lastName: 'Scofield', email: 'scofiled@gmail.com', phone: '444-444-444', age: 40 },
    { FirstName: 'Sheldon', lastName: 'Cooper', email: 'shelly@yahoo.com', phone: '555-555-555', age: 19 },
    { FirstName: 'Ragnar', lastName: 'Lothbrok', email: 'ragnar@gmail.com', phone: '666-666-666', age: 50 },
    { FirstName: 'Steve', lastName: 'Rogers', email: 'steve@yahoo.com', phone: '777-777-777', age: 35 }
]

const youngPeople = people.filter((person) => person.age <= 25).map((person) => {
    return {
        name: `${person.FirstName} ${person.lastName}`,
        email: person.email
    }
})
//console.log(youngPeople);

//add all the positive numbers in the array and return the sum
const numbers2 = [2, -30, 50, 20, -12, -9, 7];
const positiveNums = numbers2.filter((num) => num > 0).reduce((total, num) => total + num, 0)
//console.log(positiveNums);

//capitalize the first letter of each word
const words = ['engineer', 'developer', 'generator', 'money'];
const capitalizedWords = words.map((word) => word[0].toUpperCase() + word.slice(1));
//console.log(capitalizedWords);

//count the number of vowels in a string
const vowels = ['a', 'e', 'i', 'o', 'u'];
const countVowels = (str) => {
    let count = 0;
    const strArr = str.split('');
    for (let char of strArr) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};



