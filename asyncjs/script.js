//synchronous

console.log(' i');

console.log(' am');

console.log(' a');

console.log(' synchronous');

console.log(' script');

console.log(' file');

//asynchronous
console.log(' i');

setTimeout(() => {
    console.log(' am now');
}, 4000);

console.log(' a');
console.log(' asynchronous');
console.log(' script');
console.log(' file');


