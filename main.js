let playerScore = 0
let compScore = 0
const choices = ["rock", "paper", "scissors"]

function GetComputerChoice(){
    const num = Math.floor(Math.random() * 10) % 3
    return choices[num]
}

function GetHumanChoice(){
    let choice = window.prompt("Your Choice?").toLowerCase()
    while (!(choices.includes(choice))){
        choice = window.prompt("Your Choice?").toLowerCase()
    }
    return choice
}

function Result(x, y){
    if (x == y) {
        return "Round is a tie"
    }

    switch(x){
        case "rock":
            if (y == "paper"){
                playerScore += 1
                return "You won the round"
            }
            else {
                compScore += 1
                return "Computer won the round"
            }

        case "paper":
            if (y == "scissors"){
                playerScore += 1
                return "You won the round"
            }

            else {
                compScore += 1
                return "Computer won the round"
            }

        case "scissors":
            if (y == "rock"){
                playerScore += 1
                return "You won the round"
            }

            else {
                compScore += 1
                return "Computer won the round"
            }

    }
}

function PlayRound(){
    const compChoice = GetComputerChoice()
    const yourChoice = GetHumanChoice()

    console.log(`Computer Choice is ${compChoice}`)
    console.log(`Your Choice is ${yourChoice}`)

    console.log(Result(compChoice, yourChoice)) 
}

for (let i = 0; i < 5; i++){
    PlayRound()
}

const winner = playerScore > compScore ? "You" : "Computer"
console.log(`${winner} won the game`)