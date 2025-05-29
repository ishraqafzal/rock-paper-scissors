
function GetComputerChoice(){
    const choices = ["rock", "paper", "scissors"]
    const num = Math.floor(Math.random() * 10) % 3
    return choices[num]
}

function GetHumanChoice(){
    const choice = window.prompt("Your Choice?")
    return choice
}

function Result(x, y){
    if (x == y) {
        return "It is a tie"
    }

    switch(x){
        case "rock":
            if (y == "paper"){
                return "You Won"
            }

            else {
                return "Computer Won"
            }
        case "paper":
                if (y == "scissors"){
                return "You Won"
            }

            else {
                return "Computer Won"
            }
        case "scissors":
                if (y == "rock"){
                return "You Won"
            }

            else {
                return "Computer Won"
            }

    }
}


const compChoice = GetComputerChoice()
const yourChoice = GetHumanChoice()

console.log(`Computer Choice is ${compChoice}`)
console.log(`Your Choice is ${yourChoice}`)

console.log(Result(compChoice, yourChoice))