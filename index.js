var cells = document.querySelectorAll('[data-cell]');
var cellVal = [];
var count1 = 0;
var count2 = 0;
var count3 = 0;
var a = 0;
var circleTurn;
cells.forEach(function (value) {
    cellVal[a] = value;
    a++;
});
var winComb = [
    [cellVal[0], cellVal[1], cellVal[2]],
    [cellVal[3], cellVal[4], cellVal[5]],
    [cellVal[6], cellVal[7], cellVal[8]],
    [cellVal[0], cellVal[3], cellVal[6]],
    [cellVal[1], cellVal[4], cellVal[7]],
    [cellVal[2], cellVal[5], cellVal[8]],
    [cellVal[0], cellVal[4], cellVal[8]],
    [cellVal[2], cellVal[4], cellVal[6]]
];
var result = document.getElementById("winningMessage");
//start the game
var startGame = function () {
    circleTurn = false;
    cells.forEach(function (cell) {
        cell.addEventListener('click', handleClick, { once: true });
    });
};
startGame();
function handleClick(e) {
    var cell = e.target;
    circleTurn ? (cell.textContent = "O") : (cell.textContent = "X");
    swapTurns();
    winGame();
    DrawGame();
    stopGame();
}
//swapping the turns
var swapTurns = function () {
    circleTurn = !circleTurn;
};
//check if there's any winner
var winGame = function () {
    for (var i = 0; i < 8; i++) {
        if ((winComb[i][0].textContent == "X") && (winComb[i][1].textContent == "X") && (winComb[i][2].textContent == "X")) {
            console.log("X won");
            if (count2 == 0) {
                result.textContent = "X has won";
            }
            count1++;
        }
        else if ((winComb[i][0].textContent == "O") && (winComb[i][1].textContent == "O") && (winComb[i][2].textContent == "O")) {
            console.log("O won");
            if (count1 == 0) {
                result.textContent = "O has won";
            }
            count2++;
        }
    }
};
//check if the game is drawn
var DrawGame = function () {
    count3 = 0;
    cells.forEach(function (cell) {
        if (cell.textContent == "") {
            count3++;
        }
    });
    if (count1 == 0 && count2 == 0 && count3 == 0) {
        result.textContent = "Draw";
        console.log("draw");
    }
};
//stop the game
var stopGame = function () {
    if (count1 > 0 || count2 > 0) {
        cells.forEach(function (cell) {
            cell.removeEventListener('click', handleClick);
        });
    }
};
