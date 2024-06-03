// callback
let first = (call_second) => {
    console.log(' first step done. calling second step');
    call_second();
};

let second = () => {
    console.log(' a callback');
};
first(second);

let stock = {
    fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']

};


let order = (fruit_name, liquid_name, call_production) => {

    setTimeout(() => {
        console.log(`${stock.fruits[fruit_name]} and ${stock.liquid[liquid_name]} was selected`);

        call_production();
    }, 2000);

};

let production = () => {
    setTimeout(() => {
        console.log('production started');

    }, 0000);
};
order(3, 1, production);