const cardArray = [
    {
        name: 'fries',
        img:  'imgs/fries-memgame.png',
    },
    {
        name: 'cheeseburger',
        img:  'imgs/cheeseburger-memgame.png',
    },
    {
        name: 'hotdog',
        img:  'imgs/hotdog-memgame.png',
    },
    {
        name: 'ice-cream',
        img:  'imgs/ice-cream-memgame.png',
    },
    {
        name: 'milkshake',
        img:  'imgs/milkshake-memgame.png',
    },
    {
        name: 'pizza',
        img:  'imgs/pizza-memgame.png',
    },
    {
        name: 'fries',
        img:  'imgs/fries-memgame.png',
    },
    {
        name: 'cheeseburger',
        img:  'imgs/cheeseburger-memgame.png',
    },
    {
        name: 'hotdog',
        img:  'imgs/hotdog-memgame.png',
    },
    {
        name: 'ice-cream',
        img:  'imgs/ice-cream-memgame.png',
    },
    {
        name: 'milkshake',
        img:  'imgs/milkshake-memgame.png',
    },
    {
        name: 'pizza',
        img:  'imgs/pizza-memgame.png',
    }
  
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (i = 0; i < cardArray.length; i++){
    const card = document.createElement("img")
    card.setAttribute('src', 'imgs/blank-memgame.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.append(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if(optionOneId == optionTwoId){
        console.log('You clicked the same card!')
    }

    if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'imgs/white-memgame.png')
        cards[optionTwoId].setAttribute('src', 'imgs/white-memgame.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {  
        cards[optionOneId].setAttribute('src', 'imgs/blank-memgame.png')
        cards[optionTwoId].setAttribute('src', 'imgs/blank-memgame.png')
    }

    cardsChosen = []
    cardsChosenIds = []
}



function flipCard () {
const cardId = this.getAttribute('data-id') 
cardsChosen.push(cardArray[cardId].name)
cardsChosenIds.push(cardId)

console.log(cardsChosen, cardsChosenIds)
this.setAttribute('src', cardArray[cardId].img)
if(cardsChosen.length === 2){
    setTimeout(checkMatch, 500)
}
}