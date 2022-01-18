let turnCount = 0;

let gameBoard = document.getElementById("board");

let cells = document.querySelectorAll(".row > div");
console.log(cells);

let result = document.querySelector(".displayResult");

for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked, { once: true });
}
function cellClicked() {
    if (turnCount % 2 == 0) {
        event.target.textContent = "X";
    } else {
        event.target.textContent = "O";
    }
    turnCount++;

    if (cells[0].textContent == "X" && cells[1].textContent == "X" && cells[2].textContent == "X") {
        result.textContent = "X Wins!";
    } else if (cells[3].textContent == "X" && cells[4].textContent == "X" && cells[5].textContent == "X") {
        result.textContent = "X Wins!";
    } else if (cells[6].textContent == "X" && cells[7].textContent == "X" && cells[8].textContent == "X") {
        result.textContent = "X Wins!";
    } else if (cells[0].textContent == "X" && cells[3].textContent == "X" && cells[6].textContent == "X") {
        result.textContent = "X Wins!";
    } else if (cells[1].textContent == "X" && cells[4].textContent == "X" && cells[7].textContent == "X") {
        result.textContent = "X Wins!";
    } else if (cells[2].textContent == "X" && cells[5].textContent == "X" && cells[8].textContent == "X") {
        result.textContent = "X Wins!";
    } else if (cells[0].textContent == "X" && cells[4].textContent == "X" && cells[8].textContent == "X") {
        result.textContent = "X Wins!";
    } else if (cells[2].textContent == "X" && cells[4].textContent == "X" && cells[6].textContent == "X") {
        result.textContent = "X Wins!";
    } else if (cells[0].textContent == "O" && cells[1].textContent == "O" && cells[2].textContent == "O") {
        result.textContent = "O Wins!";
    } else if (cells[3].textContent == "O" && cells[4].textContent == "O" && cells[5].textContent == "O") {
        result.textContent = "O Wins!";
    } else if (cells[6].textContent == "O" && cells[7].textContent == "O" && cells[8].textContent == "O") {
        result.textContent = "O Wins!";
    } else if (cells[0].textContent == "O" && cells[3].textContent == "O" && cells[6].textContent == "O") {
        result.textContent = "O Wins!";
    } else if (cells[1].textContent == "O" && cells[4].textContent == "O" && cells[7].textContent == "O") {
        result.textContent = "O Wins!";
    } else if (cells[2].textContent == "O" && cells[5].textContent == "O" && cells[8].textContent == "O") {
        result.textContent = "O Wins!";
    } else if (cells[0].textContent == "O" && cells[4].textContent == "O" && cells[8].textContent == "O") {
        result.textContent = "O Wins!";
    } else if (cells[2].textContent == "O" && cells[4].textContent == "O" && cells[6].textContent == "O") {
        result.textContent = "O Wins!";
    } else if ((cells[0].textContent == "X" || cells[0].textContent == "O") &&
        (cells[1].textContent == "X" || cells[1].textContent == "O") &&
        (cells[2].textContent == "X" || cells[2].textContent == "O") &&
        (cells[3].textContent == "X" || cells[3].textContent == "O") &&
        (cells[4].textContent == "X" || cells[4].textContent == "O") &&
        (cells[5].textContent == "X" || cells[5].textContent == "O") &&
        (cells[6].textContent == "X" || cells[6].textContent == "O") &&
        (cells[7].textContent == "X" || cells[7].textContent == "O") &&
        (cells[8].textContent == "X" || cells[8].textContent == "O")) {
        result.textContent = "It's a Draw!";
    }
    
    if (result.textContent != "") {
        result.classList.add("tracking-in-contract-bck-top");
    }
}


gameBoard.addEventListener("click", resetGame)

function resetGame() {
    if (result.textContent === "X Wins!") {
        document.getElementById("board").onclick = function () { finalClick() };
    } else if (result.textContent === "O Wins!") {
        document.getElementById("board").onclick = function () { finalClick() };
    } else if (result.textContent === "It's a Draw!") {
        document.getElementById("board").onclick = function () { finalClick() };
    }
}

function finalClick() {
    window.location.reload("Reset");
}