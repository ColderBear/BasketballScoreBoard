let score = 0;
let Gscore = 0;

let display = document.getElementById("score")
let Gdisplay = document.getElementById("guest-score")

display.textContent = score
Gdisplay.textContent = Gscore

function addOne () {
    score +=1
    display.textContent = score
}


function addTwo () {
    score +=2
    display.textContent = score
}


function addThree () {
    score +=3
    display.textContent = score
}

function GstAddOne(){
    Gscore +=1
    Gdisplay.textContent = Gscore
}
    
function GstAddTwo(){
    Gscore +=2
    Gdisplay.textContent = Gscore
}

function GstAddThree(){
    Gscore +=3
    Gdisplay.textContent = Gscore
}

function reset() {
    Gscore = 0
    score = 0
    Gdisplay.textContent = Gscore
    display.textContent = score
    
}