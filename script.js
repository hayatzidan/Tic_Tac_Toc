//   Declare a variable to keep track of the current background color state
//    let isPink = true;

//    function changeBackgroundcolor() {
    //  Toggle the state
    //   isPink = !isPink;
    //  Check the current state and toggle the background color accordingly
    //   if (isPink) {
        //  document.body.style.backgroundColor = "white";
    //   } else {
    //      document.body.style.backgroundColor = "pink";
    //  }
//   isPink ? 
//       document.body.style.backgroundColor = "white" 
//    :  document.body.style.backgroundColor = "pink";

//    }
// variable
//   let variable = true;

//   function ToggleVarible() {

//       variable = !variable;
    
// ternary condition
// if the following variable is true
//   variable ? 
// do this
    // document.body.style.backgroundColor = "red"
// else do this
//   :  document.body.style.backgroundColor = "black";

//     if(variable == true) {
//         document.body.style.backgroundColor = "red";

//     }else {
//         document.body.style.backgroundColor = "black";
//      }

        // console.log(`variable is now:  ${variable}`);
//   }

//   document.getElementById('ToggleButton').addEventListener('click', ToggleVarible);

const gridItems = document.querySelectorAll('.grid-item');
const status = document.getElementById('status');
const restartButton = document.getElementById('restart');

let currentPlayer = 'X';
let gameBoard = Array(9).fill(null);
let gameActive = true;

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const [a, b, c] of winPatterns) {
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }

    return gameBoard.includes(null) ? null : 'T'; // T for Tie
};

const handleClick = (e) => {
    const index = e.target.dataset.index;

    if (gameBoard[index] || !gameActive) return;

    gameBoard[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    const winner = checkWinner();
    
    if (winner) {
        gameActive = false;
        if (winner === 'T') {
            status.textContent = "It's a Tie!";
        } else {
            status.textContent = `Player ${winner} wins!`;
        }
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.textContent = `Player ${currentPlayer}'s turn`;
    }
};

const restartGame = () => {
    gameBoard = Array(9).fill(null);
    gameActive = true;
    currentPlayer = 'X';
    status.textContent = `Player ${currentPlayer}'s turn`;
    gridItems.forEach(item => item.textContent = '');
};

gridItems.forEach(item => item.addEventListener('click', handleClick));
restartButton.addEventListener('click', restartGame);
