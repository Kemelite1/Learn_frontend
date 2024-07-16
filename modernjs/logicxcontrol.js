//if statements
if (true) {
    console.log("It's true");
}

const x = 10;
const y = 20;
if (x > y) {
    console.log("x is greater than y");
} else {
    console.log("x is not greater than y");
}

//else if
const day = new Date();
const hour = day.getHours();
if (hour < 12) {
    console.log("It's Morning");
} else if (hour === 12) {
    console.log("It's Afternoon");
} else {
    console.log("It's Evening");
}

//nested if statements
if (hour >= 18) {
    console.log('Good Evening');
    if (hour === 18) {
        console.log('Eat Dinner!');
    }
} else if (hour === 12) {
    console.log('Good Afternoon');
} else {
    console.log('Good Morning');
}

//logical operators
const a = true;
const b = false;
if (a && b) {
    console.log('Both a and b are true');
} else {
    console.log('At least one of a or b is false');
}

if (a || b) {
    console.log('At least one of a or b is true');
} else {
    console.log('Both a and b are false');
}

if (!a) {
    console.log('a is false');
} else {
    console.log('a is true');
}

//ternary operator
const age = 18;
age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

//switch statements
const color = 'red';
switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

