// Create the game board dynamically
const boardDiv = document.getElementById('board');
for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('click', () => makeMove(i));
    boardDiv.appendChild(cell);
}

// Select all the cells after creating them
const cells = document.querySelectorAll('.cell');

let gameBoard = Array(9).fill("");
let gameOver = false;
let round = 0;
const message = document.getElementById('message');
const aiPlayer = "O";
const currentPlayer = "X";

// Function to handle player's move
async function makeMove(cellIndex) {
    if (!cells[cellIndex]) {
        console.error("Invalid cell access:", cellIndex);
        return;
    }

    if (gameBoard[cellIndex] !== "" || gameOver) {
        return;
    }

    // Update the board for the player
    gameBoard[cellIndex] = currentPlayer;
    cells[cellIndex].textContent = "X";
    cells[cellIndex].style.color = "orange";
    round++;

    if (checkWin(gameBoard, currentPlayer)) {
        message.textContent = "You win!";
        gameOver = true;
        return;
    } else if (round >= 9) {
        message.textContent = "It's a draw!";
        gameOver = true;
        return;
    }

    // Call AI move via API
    const response = await fetch("http://127.0.0.1:5000/ai-move", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ board: gameBoard }),
    });

    const { index } = await response.json();
    console.log("AI chose index:", index);

    gameBoard[index] = aiPlayer;
    cells[index].textContent = "O";
    cells[index].style.color = "blue";
    round++;

    if (checkWin(gameBoard, aiPlayer)) {
        message.textContent = "AI wins!";
        gameOver = true;
        return;
    } else if (round >= 9) {
        message.textContent = "It's a draw!";
        gameOver = true;
        return;
    }
}

// Function to check if there's a winner
function checkWin(board, player) {
    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    return winCombinations.some(combo =>combo.every(index => board[index] === player)
    );
}

// Reset the game state
document.getElementById("reset-button").addEventListener("click", () => {
    gameBoard = Array(9).fill("");
    gameOver = false;
    round = 0;
    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.color = "";
    });
    message.textContent = "";
});
