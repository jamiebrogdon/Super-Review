// *Variables*
// Create a variable and console log the value
let newVar = 'cat'
console.log(newVar)

// Create a variable, add 10 to it, and alert the value
let numberVariable = 10
alert(numberVariable += 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subNums(num1, num2, num3, num4){
    let subtractIt = num1 - num2 - num3 - num4
    alert(subtractIt)
}

// Create a function that divides one number by another and returns the remainder
function divisionNum(n1, n2){
    let newNumba = n1 % n2
    return newNumba
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function isThisJumanji(number1, number2){
    let theSum = number1 + number2
    if(theSum > 50){
        alert('JUMANJIIIIIII')
    }else{
        alert("you aighttttt")
    }
};

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiNums(numb1, numb2, numb3){
    let multiplyIt = numb1 * numb2 * numb3
    if(multiplyIt % 3 === 0){
        alert('ZEBRA!!!')
    }else{
        alert('Not a Zebra!')
    }
};

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNumber(word, number){
    let theActualNum = Number(number)
    for(let i = 1; i < theActualNum; i++)
        console.log(word)
}
