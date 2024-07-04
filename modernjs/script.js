//Array - special type of object and a data structure that can hold more than one value at a time
//Array is a list of items

//Array literal
const Avengers = ['Hulk', 'Ironman', 'Captain America', 'Doctor Strange', 'Black Panther',  'Thor', 'Spiderman', 'Antman', 'Black Widow', 'Hawkeye', 'Captain Marvel'];
console.log(Avengers);
//length of array
console.log(Avengers.length);

result = `My favourite Avenger is ${Avengers[2]}`;
result = `My favourite Avengers are ${Avengers[1]}, ${Avengers[2]}, and ${Avengers[4]}`;
console.log(result);

//Array constructor
const clubs = new Array('Real Madrid', 'Barcelona', 'Manchester United', 'Liverpool', 'Bayern Munich', 'Chelsea', 'Arsenal', 'Manchester City', 'Juventus', 'AC Milan');
data = `My favourite football club is ${clubs[2]}`;
clubs[1] = 'Paris Saint Germain';
//clubs.length = 5;
console.log(clubs);
console.log(data);

//Array methods
//push() - adds an element to the end of the array
clubs.push('Inter Milan');
//pop() - removes the last element from the array
clubs.pop();
//unshift() - adds an element to the beginning of the array
clubs.unshift('Atletico Madrid');
//shift() - removes the first element from the array
clubs.shift();
//splice() - removes or replaces an element in the array
clubs.splice(2, 1, 'Borussia Dortmund');
//sort() - sorts the elements in the array
clubs.sort();
//reverse() - reverses the order of the elements in the array
clubs.reverse();
//concat() - combines two or more arrays
const newClubs = ['Napoli', 'Roma', 'Lazio'];
const allClubs = clubs.concat(newClubs);
console.log(allClubs);
//join() - converts the array into a string
const stringClubs = clubs.join(', ');
console.log(stringClubs);
//includes() - checks if an element is present in the array
console.log(clubs.includes('Real Madrid'));
//slice() - extracts a portion of the array
const sliceClubs = clubs.slice(0, 5).reverse().toString().toUpperCase();
console.log(sliceClubs);
console.log(clubs);
