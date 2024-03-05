//--- Easy
//create a variable and assign it a number
let easyVar = 10

//minus 10 from that number
easyVar = easyVar - 10

//print that number to the console
console.log(easyVar)

//--- Medium
//create a variable that holds a value from the input
let NewVar = Number(document.querySelector('#danceDanceRevolution').value)

//add 25 to that number
NewVar += 25

//alert that number
alert(NewVar)

//--- Hard
//create a variable that holds the h1
let headingVar = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
headingVar.addEventListener.document.querySelector('click', addTwoNums)

function addTwoNums(){
    console.log(easyVar + NewVar)
}
