

var mistakesCount = document.querySelector(".mistakes-count")
var keyboard = document.querySelector(".keyboard")
var start = document.querySelector(".start")
var keyLetters = document.querySelectorAll(".key")
var animals = ['CAT', 'ELEPHANT', 'DOLPHIN', "SQUIRREL", "ZEBRA" ]
var fruits = [ "APPLE", "BLUEBERRY", "MANDARIN", "PINEAPPLE", "POMEGRANATE", "WATERMELON" ]
var countries = [ "INDIA", "ENGLAND", "CANADA", "SWITZERLAND", "EGYPT", "ALGERIA" ]
var animalButton = document.querySelector(".animals")
var fruitsButton = document.querySelector(".fruits")
var countriesButton = document.querySelector(".countries")
var newGame = document.querySelectorAll(".newgame")
const letters = document.querySelector(".letters")
var splittedString = ""
var mistakes = 1
var corrects = []



window.document.addEventListener('DOMContentLoaded', () => {
    let shuffledAnimals = shuffle(animals)
    let shuffledFruits = shuffle(fruits)
    let shuffledCountries = shuffle(countries)
    var splittedAnimalsString = shuffledAnimals[0].split("")
    var splittedFruitsString = shuffledFruits[0].split("")
    var splittedCountriesString = shuffledCountries[0].split("")
    // Animal Button
    animalButton.addEventListener("click", (e) => {
        splittedString = splittedAnimalsString
        beginTheGame()
        console.log(splittedString)
        if(letters.querySelector('*')) {
            e.preventDefault()
        }else {
            for(let i = 1; i <= splittedAnimalsString.length; i++) {
                let element = document.createElement("p")
                element.classList.add("letter")
                letters.appendChild(element)
            }
        }
    })
    // Countries Button
    countriesButton.addEventListener("click", (e) => {
        splittedString = splittedCountriesString
        beginTheGame()
        console.log(splittedString)
        if(letters.querySelector('*')) {
            e.preventDefault()
        }else {
            for(let i = 1; i <= splittedCountriesString.length; i++) {
                let element = document.createElement("p")
                element.classList.add("letter")
                letters.appendChild(element)
            }
        }
    })
    // Fruits Button
    fruitsButton.addEventListener("click", (e) => {
        splittedString = splittedFruitsString
        beginTheGame()
        console.log(splittedString)
        if(letters.querySelector('*')) {
            e.preventDefault()
        }else {
            for(let i = 1; i <= splittedFruitsString.length; i++) {
                let element = document.createElement("p")
                element.classList.add("letter")
                letters.appendChild(element)
            }
        }
    })
    newGame.forEach(e=>e.addEventListener('click', () => location.reload()))
    keyLetters.forEach(key => {
        key.addEventListener('click', e => {
            if(splittedString.includes(key.textContent) && splittedString !== "" && !corrects.includes(key.textContent)) {
                for(let i = 0; i < splittedString.length; i++) {
                    if(splittedString[i] === key.textContent) {
                        letters.children[i].textContent = splittedString[i]
                        corrects.push(letters.children[i].textContent)
                        letters.children[i].style.backgroundColor = "#05860553"
                        key.style.backgroundColor = "#8181818c"
                    }
                }
                corrects.length >= splittedString.length ? winTheGame() : console.log(false)
                console.log(corrects)
            }else {
                e.preventDefault()
                corrects.includes(key.textContent)? console.log(false)
                : mistakes===5? loseTheGame(): mistakesCount.innerHTML = mistakes++
                document.querySelectorAll(".letter").forEach((letter => {
                    letter.classList.add("vibrate")
                }))
                setTimeout(() => {document.querySelectorAll(".letter").forEach((letter => {
                    letter.classList.remove("vibrate")
                }))}, 90)
            }
        })
    })

})

// shuffle code
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// victory
function winTheGame() {
    document.querySelector(".win").style.display = "flex"
    keyboard.style.display = "none"
    letters.style.display = "none"
    mistakesCount.style.display = "none"

}

// Defeat
function loseTheGame() {
    document.querySelector(".lose").style.display = "flex"
    keyboard.style.display = "none"
    letters.style.display = "none"
    mistakesCount.style.display = "none"

}


// starting
function beginTheGame() {
    start.style.display = "none"
    keyboard.style.margin = "0"
    keyboard.style.opacity = "1"
    letters.style.opacity = "1"
    mistakesCount.style.opacity = "1"
    mistakesCount.style.margin = "0"
}











// shuffle
// const shuffledChildren = shuffle(children)
// // Clear the parent container
// while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
// }
// // Append the shuffled elements
// shuffledChildren.forEach(child => parent.appendChild(child));