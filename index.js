let cards=[]
let sum=0
let hasblackjack = false
let isalive = false
let message=" "
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl =  document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
    head: "Per",
    cash: 176
}
playerEl.textContent= player.head+ ": $" + player.cash

function randomcard(){
     // if 11-13 -> return 10
     let randomNumer = Math.floor( Math.random()*13 ) + 1
     if (randomNumer > 10) {
         return 10
     } else if (randomNumer === 1) {
         return 11
     } else {
         return randomNumer
     }
}
function start(){
    isalive=true
    let firstcard = randomcard()
let secondcard = randomcard()
 sum = firstcard + secondcard
 cards = [firstcard,secondcard]
    rendergame()
}

function rendergame(){
if (sum <21) {
    message="Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message="Wohoo! You've got Blackjack! 🥳"
    hasblackjack=true
} else if (sum > 21) {
    message="You're out of the game! 😭"
    isalive=false 
}
messageEl.textContent = message
sumEl.textContent = "SUM:" + sum
cardsEl.textContent = "Cards: " 
for(i=0;i<cards.length;i++){
    cardsEl.textContent += cards[i] + "  "
}
}

function newcards(){
    if (isalive === true && hasblackjack === false){
    let newcard = randomcard()
    sum+= newcard
    cards.push(newcard)
    rendergame()}
}