//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector('h1').addEventListener('click', ageCheck)
let paragraph = document.querySelector('p')

// FINAL SOLUTION:

function ageCheck(){
    let driversAge = Number(document.querySelector('input').value)

    if(driversAge < 16) {
        paragraph.innerText = ("you can not drive")
    }else if(driversAge < 18){
        paragraph.innerText = ("cant hate from outside the club, because they cant even get in")
    }else if(driversAge < 21){
        paragraph.innerText = ("ya not drink")
    }else if(driversAge < 25){
        paragraph.innerText = ("you can not rent cars affordably")
    }else if(driversAge < 30){
        paragraph.innerText = ("You can not rent fancy cars affordably")
    }else if(driversAge = 30 || driversAge > 30 ){
        paragraph.innerText =("Nothing left to look forward to BUT 100 devs baby!")
    }else{
        paragraph.innerText = ("Its okaaayyyyy")
    };
}
