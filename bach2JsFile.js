const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden') 
	//the toggle is used to 'toggle off' for the 'hidden class' that's in the html / css file
}

function claireNext(){
	claire.classList.toggle('hidden')
	sharleen.classList.add('hidden')
	andi.classList.add('hidden')
}

function sharleenNext(){
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
	andi.classList.add('hidden')
}
