//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

function consoleLog21(){
    for (let i = 1; i <= 21; i++){
        document.querySelector('h2').innerText += ' 21'
        // += is used to continue to add the 21 to the dom, as opposed to just one time printed which would happen if we used  =
    }
}

consoleLog21()
