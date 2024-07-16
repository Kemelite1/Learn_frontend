//Hoisting - the process of moving all the function and variable declarations to the top
// of the current scope before the code is run.

//function declaration
console.log(addDollarSign(500))
//A function declaration can be called before defined in the code

function addDollarSign(value){
    return '$' + value;
}


//function expression - a function assigned to a variable
const addPlusSign = function(value){
    return '+' + value;
};
console.log(addPlusSign(1000));
