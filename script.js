const snow = document.getElementById("snow")
let xPos = -5;
let yPos = 0;

function moveSnow() {
    if (xPos < 5) {
        snow.xPos+=0.01
        snow.yPos+=0.01
    }

    else {
        snow.xPos+=-5
        snow.yPos+=0
    }
}

moveSnow()