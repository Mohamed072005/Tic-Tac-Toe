const rectNumber = 3;
const winCondition = 3;
const gridContainer = document.getElementById('grid-table');
const pageSize = document.getElementById('main');
if(rectNumber >= 15){
    pageSize.classList.add('pageForBigSize');
}else{
    pageSize.classList.add('pageForNormalSize');
}
gridContainer.classList.add('grid', `grid-cols-[repeat(${rectNumber},_0fr)]`, `grid-rows-[repeat(${rectNumber},_0fr)]`);
const player1 = {
    icon: 'X',
    iconColor: 'text-red-500',
};
const player2 = {
    icon: 'O',
    iconColor: 'text-blue-500',
};
let whichPlayer = 1;
let board = Array(rectNumber * rectNumber).fill(null); // Track board state

playBoard(rectNumber);

function playBoard(rectNumber) {
    for (let i = 0; i < rectNumber * rectNumber; i++) {
        const rect = document.createElement('div');
        rect.classList.add('rect', 'border-2', 'border-gray-700');
        rect.setAttribute('id', i);
        gridContainer.appendChild(rect);

        rect.addEventListener('click', function () {
            // let elementId = document.getElementById(`${this.id}`);            
            if (!board[i]) { // Only allow moves on empty spaces
                const currentPlayer = whichPlayer ? player1 : player2;
                makeXorY(currentPlayer, rect);
                board[i] = currentPlayer.icon; // Track the player's move
                if (checkWin(i)) {
                    Swal.fire(`Player ${whichPlayer ? '1 (X)' : '2 (O)'} wins!`);
                    resetGame();
                } else {
                    whichPlayer = 1 - whichPlayer; // Switch player
                }
            }
        });
    }
}

function makeXorY(player, rect) {
    const XorY = document.createElement('span');
    XorY.textContent = player.icon;
    XorY.classList.add('text-2xl', 'font-bold', player.iconColor);
    rect.appendChild(XorY);
}

// Check for a win condition
function checkWin(index) {
    const playerIcon = board[index];
    const row = Math.floor(index / rectNumber);
    const col = index % rectNumber;
    
    // Check horizontally, vertically, and both diagonals
    return (
        checkDirection(row, col, 0, 1, playerIcon) ||  // Horizontal
        checkDirection(row, col, 1, 0, playerIcon) ||  // Vertical
        checkDirection(row, col, 1, 1, playerIcon) ||  // Diagonal down-right
        checkDirection(row, col, 1, -1, playerIcon)    // Diagonal up-right
    );
}

// Check a specific direction for win condition
function checkDirection(row, col, rowDir, colDir, playerIcon) {
    let count = 1;

    for (let i = 1; i < winCondition; i++) {
        const newRow = row + i * rowDir;
        const newCol = col + i * colDir;
        if (newRow >= 0 && newRow < rectNumber && newCol >= 0 && newCol < rectNumber && board[newRow * rectNumber + newCol] === playerIcon) {
            count++;
        } else {
            break;
        }
    }

    for (let i = 1; i < winCondition; i++) {
        const newRow = row - i * rowDir;
        const newCol = col - i * colDir;
        if (newRow >= 0 && newRow < rectNumber && newCol >= 0 && newCol < rectNumber && board[newRow * rectNumber + newCol] === playerIcon) {
            count++;
        } else {
            break;
        }
    }

    return count >= winCondition;
}

// Reset the game
function resetGame() {
    board.fill(null);
    gridContainer.innerHTML = '';
    playBoard(rectNumber);
}
