const string = 'software engineer';

check = string.__proto__;

check = string.charAt(3);

check = string.substring(0, 5);

check = string.slice(-5);

check = string.split(' ');

check = string.replace('software', 'web');

check = string.includes('engineer');

check = string.indexOf('e');

check = string.toUpperCase();

console.log(check);

//string task
const task = 'engineer';
 result = task.charAt(0).toUpperCase() + task.slice(1);
console.log(result);
//string task
const task2 = 'frontend developer';
 result2 = task2.charAt(0).toUpperCase() + task2.substring(1);
console.log(result2);

const task3 = 'backend developer';
 result3 = task3[0].toUpperCase() + task3.substring(1);
console.log(result3);
