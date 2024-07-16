//for loop
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the current iteration and continue with the next one
    
    }
    if (i === 8) {
        break; // Break out of the loop entirely(terminates the loop)
    
    }
    console.log(i);
}

//nested for loop
for (let i = 0; i <= 10; i++) {
    console.log('Number ' + i);

    for (let j = 0; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


//loop through an array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
for (let i = 0; i < cars.length; i++) {
    if (i === 2) {
        console.log(cars[i] + ' This is the finest');

    } else {
        console.log(cars[i]);
    }
}

//while loop
let i = 0;
while (i <= 10) {
    console.log('Number ' + i);
    i++;
}

//nested while loop
let j = 1;
while (j <= 10) {
    console.log('Number ' + j);
    let k = 1;
    while (k <= 10) {
        console.log(`${j} * ${k} = ${j * k}`);
        k++;
    }
    j++;
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 ){
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else{
        console.log(i);
    }
}

//for of loop
const cars2 = ['Ford', 'Chevy', 'Honda', 'Toyota'];
for (let car of cars2) {
    console.log(car);
}

//for in loop - to loop through object values
const user = {
    name: 'Sheldon Cooper',
    age: 40
};
for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}