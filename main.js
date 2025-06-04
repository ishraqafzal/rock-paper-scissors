const choices = ["rock", "paper", "scissors"]

const playerScoreCard = document.querySelectorAll(".scores")[0]
const compScoreCard = document.querySelectorAll(".scores")[1]

let playerScore = parseInt(playerScoreCard.textContent)
console.log(playerScoreCard)
let compScore = parseInt(compScoreCard.textContent)
console.log(compScoreCard)

const msgUI = document.getElementById("msg")


function GetComputerChoice(){
    const num = Math.floor(Math.random() * 10) % 3
    return choices[num]
}

/*function GetHumanChoice(){
    let choice = window.prompt("Your Choice?").toLowerCase()
    while (!(choices.includes(choice))){
        choice = window.prompt("Your Choice?").toLowerCase()
    }
    return choice
}*/

function Result(x, y){
    if (x == y) {
        return "Round is a tie"
    }

    switch(x){
        case "rock":
            if (y == "paper"){
                playerScore += 1
                playerScoreCard.innerText = playerScore
                return "You won the round"
            }
            else {
                compScore += 1
                compScoreCard.innerText = compScore
                return "Computer won the round"
            }

        case "paper":
            if (y == "scissors"){
                playerScore += 1
                playerScoreCard.innerText = playerScore
                return "You won the round"
            }

            else {
                compScore += 1
                compScoreCard.innerText = compScore
                return "Computer won the round"
            }

        case "scissors":
            if (y == "rock"){
                playerScore += 1
                playerScoreCard.innerText = playerScore
                return "You won the round"
            }

            else {
                compScore += 1
                compScoreCard.innerText = compScore
                return "Computer won the round"
            }

    }
}

function PlayRound(button){
    const compChoice = GetComputerChoice()
    const yourChoice = button.innerText.toLowerCase()

    const str1 = `Computer Choice is ${compChoice}`
    const str2 = `Your Choice is ${yourChoice}`

    const msg = Result(compChoice, yourChoice)
    document.getElementById("msg").innerText = str1 + "\n" + str2 + "\n" + msg 
}

/*for (let i = 0; i < 5; i++){
    PlayRound()
}*/

const buttons = document.querySelectorAll(".btn")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        PlayRound(button)
        CheckWinner()
    })
})

function CheckWinner(){
    if (playerScore == 5 || compScore == 5) {
        winner = playerScore > compScore ? "YOU" : "COMPUTER"
        msgUI.textContent += `${winner} WON THE GAME!!!`
    }
}