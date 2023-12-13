const paper = document.querySelector('#paper-el');
const rock = document.querySelector('#rock-el');
const scissor = document.querySelector('#scissor-el');
const choice = ['imgs/rock.svg','imgs/Paper.svg','imgs/Scissors.svg']
const score = document.querySelector('#score-el')
const pcEl = document.querySelector('#pc-el')
const wonEl = document.querySelector("#won-el")
paper.addEventListener('click',paperClick)
rock.addEventListener('click',rockClick)
scissor.addEventListener('click',scissorClick)

function rockClick(){
    let randomNum = Math.floor(Math.random()*3)
    pcEl.src = choice[randomNum]
    if (randomNum == 2){
        wonEl.textContent = "You Won"
        score.textContent = parseInt(score.textContent) + 1
        // console.log(score)
      }else if (randomNum == 1){
        wonEl.textContent = "You Lost"
        score.textContent = parseInt(score.textContent) - 1
        
      }else{

        wonEl.textContent = "Tie"

      }
}
function paperClick(){
    let randomNum = Math.floor(Math.random()*3)
    pcEl.src = choice[randomNum]
    if (randomNum == 0){
        wonEl.textContent = "You Won"
        score.textContent = parseInt(score.textContent) + 1
      }else if (randomNum == 2){
        wonEl.textContent = "You Lost"
        score.textContent = parseInt(score.textContent) - 1
      }else{
        
        wonEl.textContent = "Tie"

      }
}
function scissorClick(){
    let randomNum = Math.floor(Math.random()*3)
    pcEl.src = choice[randomNum]
    if (randomNum == 1){
        wonEl.textContent = "You Won"
        score.textContent = parseInt(score.textContent) + 1
      }else if (randomNum == 0){
        wonEl.textContent = "You Lost"
        score.textContent = parseInt(score.textContent) - 1
      }else{
        
        wonEl.textContent = "Tie"

      }
}