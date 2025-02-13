const snow = document.getElementById("snow")
let xPos = -5;
let yPos = 0;

function moveSnow() {
    if (xPos < 5) {
        xPos+=0.1
        yPos+=0.1
    }

    else {
        xPos = -5
        yPos = 0
    }

    snow.setAttribute('position', `${xPos} ${yPos} 0`)
    requestAnimationFrame(moveSnow)
}

moveSnow()