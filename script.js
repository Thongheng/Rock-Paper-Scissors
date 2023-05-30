// create an object to store computer and player score 
const totalscore = {
    playerScores: 0,
    computerScore: 0
}

// get computer choice randomly 
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * choice.length)
    return choice[random].toLowerCase()
}
console.log(getComputerChoice())

// find the winner 
function result(playerChoice, computerChoice) {
    let point
    if (playerChoice == computerChoice) {
        point = 0
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        point = 1
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        point = 1
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        point = 1
    } else {
        point = -1
    }
    return point
}
// this one has function to update DOM 
function showResult(score, playerChoice, computerChoice) {
    const Hands_pla = document.getElementById('hand-pla')
    const Hands_com = document.getElementById('hand-com')

    const Result = document.getElementById('result')
    const Point = document.getElementById('score')
    // show sign
    let com,pla
    if(playerChoice=='rock'){
        pla = '✊'
    } else if (playerChoice=='paper'){
        pla = '🤚'
    } else {
        pla = '✌'
    }
    if(computerChoice=='rock'){
        com = '✊'
    } else if (computerChoice=='paper'){
        com = '🤚'
    } else {
        com = '✌'
    }
    
    // update score to DOM to show win or lose
    if (score == 1) {
        Result.innerText = 'You Win'
    } else if (score == -1) {
        Result.innerText = 'You lose'
    } else {
        Result.innerText = 'draw'
    }
    // show choice of both compuer and player
    Hands_pla.innerText = `Player : ${playerChoice} ${pla}`
    Hands_com.innerText = `Computer : ${computerChoice} ${com}`
    //show point 
    Point.innerText = `Player Score : ${totalscore['playerScores']}`
}
function Click_active(playerChoice) {
    const computer = getComputerChoice()
    const allresult = result(playerChoice, computer)
    // the score is initially 0 and when player win it will add up by 1 and store in object total score
    totalscore['playerScores'] += allresult
    showResult(allresult, playerChoice, computer)
}
function endgame() {
const Hands_pla = document.getElementById('hand-pla')
    const Hands_com = document.getElementById('hand-com')    
    const Result = document.getElementById('result')
    const Point = document.getElementById('score')
     Hands_pla.innerText = ''
    Hands_com.innerText = ''
    Result.innerHTML = ''
    Point.innerHTML = ''
    totalscore[playerScores] = 0
    totalscore[computerScore] = 0
}

function playGame(totalscore) {
    const button = document.querySelectorAll('.rps')
    button.forEach(btn => {
        btn.onclick = () => Click_active(btn.value)
    })
    const end = document.getElementById('endgame')
    end = end.onclick = () => endgame(totalscore)
}
playGame()
