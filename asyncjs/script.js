let stock = {
    fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']

};


let order = (fruit_name, call_production) => {

    setTimeout(() => {
        console.log(`${stock.fruits[fruit_name]} was selected`);

        call_production();

    }, 2000);

};

let production = () => {
    setTimeout(() => {
        console.log('production started');

        setTimeout(() => {
            console.log('the fruit has been chopped');

            setTimeout(() => {
                console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`);

                setTimeout(() => {
                    console.log('the machine was started');
                    setTimeout(() => {
                        console.log(`${stock.holder[1]} was selected`);
                        setTimeout(() => {
                            console.log(`${stock.toppings[0]} was added`);
                            setTimeout(() => {
                                console.log('ice cream was served');
                            }, 2000);
                        }, 3000);

                    }, 2000);
                },2000)
            }, 1000);

        }, 2000);

    }, 0000);
};
order(3, production);