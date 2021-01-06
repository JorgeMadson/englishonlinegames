const game = document.querySelector('.game-board');
game.onmousedown = function eventHandler(e) {
    if (e.target.value) {
        console.warn(`Vai falar: ${e.target.value}`);
        speak(e.target.value);
    }
};
const boxes = document.querySelectorAll('.box');
function populateBoxes() {

    for (var box of boxes) {
        box.lastChild.value = "Random words!";
    }
}

function clearBoxes() {
    for (var box of boxes) {
        box.lastChild.value = "";
    }
}