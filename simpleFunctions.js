//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNums(num1, num2){
    let difference = num1 - num2
    alert(difference)
};

subTwoNums(10, 5)


//create a function that divides three numbers and console logs the quotient
function divideThreeNums(number1, number2, number3){
    console.log (number1 / number2 / number3)
};

divideThreeNums(12, 4, 3)


//create a function that multiplys three numbers and returns the product
function multiplyThreeNums(n1, n2, n3){
    return n1 * n2 * n3
};
// below is a way to 'store' the results from the function multiplyThreeNums
// when using return, it 'disappears', so this is a way to store it using a variable & console log when calling the function
let returnTheNum = multiplyThreeNums(5, 10, 2)
console.log(returnTheNum)


//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function mathFunction(numbero1, numbero2, numbero3){
    newNum = ((numbero1 + numbero2) % numbero3)
}

mathFunction(10, 15, 20)
console.log(newNum)


//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. 
//If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
//If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function mathEquation(numb1, numb2, numb3, numb4){
    let firstTwoNums = (numb1 + numb2);
    if(firstTwoNums > 100){
        return (firstTwoNums + (numb3 + numb4));
    }else if(firstTwoNums < 100){
        return (numb3 - numb4);
    }else if(firstTwoNums == 100)
        return (numb4 / (numb1 * numb2 * numb3))
    };
