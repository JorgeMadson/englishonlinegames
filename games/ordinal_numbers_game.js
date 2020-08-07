"use strict";
let counter = 1;
const turnQuantity = 3;
function startGame() {
    document.getElementById("jogo").innerHTML = injectQuestion();
    counter++;
    const intervalCode = setInterval(() => {
        document.getElementById("jogo").innerHTML = injectQuestion();
        counter++;
        if (counter > turnQuantity) {
            clearInterval(intervalCode)
            gameOver()
        }
    }, 3000);

}
function injectQuestion() {
    const firstNumber = getRandomIntInclusive(1, 25);
    let secondNumber = getRandomIntInclusive(1, 25);

    while (firstNumber == secondNumber)
        secondNumber = getRandomIntInclusive(1, 25);

    const rightNumber = getRandomIntInclusive(firstNumber, secondNumber);
    //TODO:Get a number that is not in the rightNumber range
    const wrongNumber = getRandomIntInclusive(1, 25);

    console.table(rightNumber, wrongNumber);
    return `<p>${numbersList[counter].ordinalSpelled} of ${turnQuantity} turns</p>
    <p>Between <strong>${firstNumber}</strong> and <strong>${secondNumber}</strong> </p>
    <input type="radio" name="firstQuestion" id="${rightNumber}" value="${rightNumber}">
    <label for="${rightNumber}">${numbersList[rightNumber].ordinalSpelled}</label>
    <input type="radio" name="firstQuestion" id="${wrongNumber}" value="${wrongNumber}">
    <label for="${wrongNumber}">${numbersList[wrongNumber].ordinalSpelled}</label>`;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameOver() {
    counter = 1;
    document.getElementById("jogo").innerHTML = `
    <p>Well done!</p>
    <p>Your score is ${NaN}</p>
    <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_4uTjNk.json"  background="transparent"  speed="1"  style="width: 100%; height: 300px;"  loop  autoplay></lottie-player>
    <p></p>
    <button class="button" onclick="startGame();">Play again</button>
    `;
}

const numbersList = [
    { cardinal: 0, cardinalSpelled: '0', ordinal: '0', ordinalSpelled: '0' },

    { cardinal: 1, cardinalSpelled: 'One', ordinal: '1st', ordinalSpelled: 'First' },

    { cardinal: 2, cardinalSpelled: 'Two', ordinal: '2nd', ordinalSpelled: 'Second' },

    { cardinal: 3, cardinalSpelled: 'Three', ordinal: '3rd', ordinalSpelled: 'Third' },

    { cardinal: 4, cardinalSpelled: 'Four', ordinal: '4th', ordinalSpelled: 'Fourth' },

    { cardinal: 5, cardinalSpelled: 'Five', ordinal: '5th', ordinalSpelled: 'Fifth' },

    { cardinal: 6, cardinalSpelled: 'Six', ordinal: '6th', ordinalSpelled: 'Sixth' },

    { cardinal: 7, cardinalSpelled: 'Seven', ordinal: '7th', ordinalSpelled: 'Seventh' },

    { cardinal: 8, cardinalSpelled: 'Eight', ordinal: '8th', ordinalSpelled: 'Eighth' },

    { cardinal: 9, cardinalSpelled: 'Nine', ordinal: '9th', ordinalSpelled: 'Ninth' },

    { cardinal: 10, cardinalSpelled: 'Ten', ordinal: '10th', ordinalSpelled: 'Tenth' },

    { cardinal: 11, cardinalSpelled: 'Eleven', ordinal: '11th', ordinalSpelled: 'Eleventh' },

    { cardinal: 12, cardinalSpelled: 'Twelve', ordinal: '12th', ordinalSpelled: 'Twelfth' },

    { cardinal: 13, cardinalSpelled: 'Thirteen', ordinal: '13th', ordinalSpelled: 'Thirteenth' },

    { cardinal: 14, cardinalSpelled: 'Fourteen', ordinal: '14th', ordinalSpelled: 'Fourteenth' },

    { cardinal: 15, cardinalSpelled: 'Fifteen', ordinal: '15th', ordinalSpelled: 'Fifteenth' },

    { cardinal: 16, cardinalSpelled: 'Sixteen', ordinal: '16th', ordinalSpelled: 'Sixteenth' },

    { cardinal: 17, cardinalSpelled: 'Seventeen', ordinal: '17th', ordinalSpelled: 'Seventeenth' },

    { cardinal: 18, cardinalSpelled: 'Eighteen', ordinal: '18th', ordinalSpelled: 'Eighteenth' },

    { cardinal: 19, cardinalSpelled: 'Nineteen', ordinal: '19th', ordinalSpelled: 'Nineteenth' },

    { cardinal: 20, cardinalSpelled: 'Twenty', ordinal: '20th', ordinalSpelled: 'Twentieth' },

    { cardinal: 21, cardinalSpelled: 'Twenty one', ordinal: '21st', ordinalSpelled: 'Twenty-first' },

    { cardinal: 22, cardinalSpelled: 'Twenty two', ordinal: '22nd', ordinalSpelled: 'Twenty-second' },

    { cardinal: 23, cardinalSpelled: 'Twenty three', ordinal: '23rd', ordinalSpelled: 'Twenty-third' },

    { cardinal: 24, cardinalSpelled: 'Twenty four', ordinal: '24th', ordinalSpelled: 'Twenty-fourth' },

    { cardinal: 25, cardinalSpelled: 'Twenty five', ordinal: '25th', ordinalSpelled: 'Twenty-fifth' },

    // { cardinal : …, cardinalSpelled: '…', ordinal: '…', ordinalSpelled: '…'},

    { cardinal: 30, cardinalSpelled: 'Thirty', ordinal: '30th', ordinalSpelled: 'Thirtieth' },

    { cardinal: 31, cardinalSpelled: 'Thirty one', ordinal: '31st', ordinalSpelled: 'Thirty-first' },

    { cardinal: 32, cardinalSpelled: 'Thirty two', ordinal: '32nd', ordinalSpelled: 'Thirty-second' },

    { cardinal: 33, cardinalSpelled: 'Thirty three', ordinal: '33rd', ordinalSpelled: 'Thirty-third' },

    { cardinal: 34, cardinalSpelled: 'Thirty four', ordinal: '34th', ordinalSpelled: 'Thirty-fourth' },

    // { cardinal : …, cardinalSpelled: '…', ordinal: '…', ordinalSpelled: '…'},

    { cardinal: 40, cardinalSpelled: 'Forty', ordinal: '40th', ordinalSpelled: 'Fortieth' },

    { cardinal: 50, cardinalSpelled: 'Fifty', ordinal: '50th', ordinalSpelled: 'Fiftieth' },

    { cardinal: 60, cardinalSpelled: 'Sixty', ordinal: '60th', ordinalSpelled: 'Sixtieth' },

    { cardinal: 70, cardinalSpelled: 'Seventy', ordinal: '70th', ordinalSpelled: 'Seventieth' },

    { cardinal: 80, cardinalSpelled: 'Eighty', ordinal: '80th', ordinalSpelled: 'Eightieth' },

    { cardinal: 90, cardinalSpelled: 'Ninety', ordinal: '90th', ordinalSpelled: 'Ninetieth' },

    { cardinal: 100, cardinalSpelled: 'One hundred', ordinal: '100th', ordinalSpelled: 'Hundredth' },

    // { cardinal : …, cardinalSpelled: '…', ordinal: '…', ordinalSpelled: '…'},

    { cardinal: 1000, cardinalSpelled: 'One thousand', ordinal: '1000th', ordinalSpelled: 'Thousandth' },
];