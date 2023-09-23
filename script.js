const dateCon = document.getElementById('date')
const timeCon = document.getElementById('time')
const clock = document.querySelector('.main')

function initialize() {
    let time = new Date()
    let currentTime = time.toLocaleTimeString()
    let currentDate = time.toLocaleDateString()
    
    dateCon.textContent = currentDate
    timeCon.textContent = currentTime
}

setInterval(initialize, 1000)

function changeBg() {
    clock.classList.add('bg-dark')
    setTimeout(function(){
        clock.classList.remove('bg-dark')
    }, 3000)
}
setTimeout(changeBg, 3000)

