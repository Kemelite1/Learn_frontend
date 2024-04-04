let personArr = ['Anita', 90, true]

//adding and removing items
personArr.push('London')
personArr.unshift('New York')
personArr.pop()
personArr.shift()
console.log(personArr)


for (let i = 10; i < 101; i += 10) {
    console.log(i)
}

let airbnbCastle = {
    name: 'Castle Lacasa',
    location: 'London',
    price: 500,
    rating: 4.5,
    wifi: true,
    images: ['img/kitchen.png', 'img/balcony.png'],
    welcomeGuest: function () {
        console.log('Welcome to the castle!')
    }
}

console.log(airbnbCastle.images);
console.log(airbnbCastle.welcomeGuest());

let personobj = {
    name: 'Trevor Job',
    age: 100,
    country: 'Nigeria',
    city: 'Lagos',
    logData: function(){
        console.log(`${this.name} is ${this.age} years old and lives in ${this.city}, ${this.country}.`);
        return this; //return this to allow chaining of methods
    }
    }
personobj.logData();