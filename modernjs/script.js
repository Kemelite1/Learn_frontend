//nesting arrays - arrays within arrays
const avengers = ['Captain America', 'Black Widow', 'Black Panther', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye'];
const justiceLeague = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Green Lantern', 'Cyborg', 'Aquaman'];
//console.log(avengers, justiceLeague);
avengers.push(justiceLeague);
//console.log(avengers);

x = avengers[7][2];
//console.log(x);

const superHeroes = [avengers, justiceLeague];
//console.log(superHeroes);

y = superHeroes[1][3];
y = superHeroes[0][0];
//console.log(y);

//concatenating arrays - combining arrays by taking all elements from one array and adding them to another array
x = avengers.concat(justiceLeague);

//spread operator - takes all elements from an array and adds them to another array
x = [...avengers, ...justiceLeague];

//flatten an array - takes an array within an array and flattens it into a single array
x = avengers.flat();
//console.log(x);

const num = [1, 2, [3, 4, 5], 6, [7, 8, 9]];
n = num.flat();
//console.log(n);

//static methods on array object - methods that are called on the array object itself
//isArray() - checks if the value is an array
x = Array.isArray(avengers);

//from() - creates a new array from an array-like object
x = Array.from('software');

//of() - creates a new array from the arguments passed to it
x = Array.of(1, 2, 3, 4, 5);
//console.log(x);

//check
const task = [1, 2, 3, 4, 5];
task.reverse();
task.push(0);
task.unshift(6)
console.log(task);

const task2 = [1, 2, 3, 4, 5];
const task3 = [5, 6, 7, 8, 9, 10];
//task2.pop();
x = task2.concat(task3);
//console.log(x);

//solution 2
const arr3 = task2.slice(0, 4).concat(task3);
//console.log(arr3);

//solution 3
const arr4 = [...task2, ...task3];
arr4.splice(4, 1);
console.log(arr4);