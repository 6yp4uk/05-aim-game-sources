const startBtn = document.querySelector('#start')
const screen = document.querySelectorAll('.screen')
const timelist = document.querySelector('#time-list')
const timegame = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let scope = 0
const colors = ['red','orange','elloy','green','blue','indigo','violet']
startBtn.addEventListener('click', (event)=> {
    event.preventDefault()
    screen[0].classList.add('up')
})


timelist.addEventListener('click', event => 
{
    if (event.target.classList.contains
    ('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')){
        scope++
        event.target.remove()
        createrandomCircle()

    }
})

function startGame(){
    createrandomCircle()
    screen[1].classList.add('up')
    setInterval(decreaseTime, 1000)
    setTime(time)
}

function decreaseTime (){
    if (time === 0){
        finishGame()
    }
    else{
        let current = --time
        if (current <10){
            current = `0${current}`
    }
    setTime(current)
    }
    
}

function setTime(t){
    timegame.innerHTML = `00:${t}`
}

function finishGame(){
    timegame.parentNode.remove()
    board.innerHTML = `<h1> Счет игры : ${scope}</h1>`
}
function createrandomCircle(){
    const circle = document.createElement('div')
    const size = getsizeRandom(10, 60)
    const {height, width} = board.getBoundingClientRect()
    const x = getsizeRandom(0, width - size)
    const y = getsizeRandom(0, height - size)
    const colorcrcl = getColor(circle)
    circle.classList.add('circle')
    circle.style.background = colorcrcl
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    
    board.append(circle)

}

function getsizeRandom (min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function getColor(){
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}