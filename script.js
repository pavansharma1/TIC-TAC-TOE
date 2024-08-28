const gameBoard = document.querySelector('.game-board');
const cells = document.querySelectorAll('.cell');
const turnElement = document.getElementById('turn');
const winnerElement = document.getElementById('winner');

let turn = 'X';
let winner = null;
let board = ['', '', '', '', '', '', '', '', ''];

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (winner || board[index] !== '') return;
    board[index] = turn;
    cell.textContent = turn;
    turn = turn === 'X' ? 'O' : 'X';
    turnElement.textContent = `Turn: ${turn}`;
    checkWinner();
  });
});

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    if (
      board[combination[0]] !== '' &&
      board[combination[0]] === board[combination[1]] &&
      board[combination[0]] === board[combination[2]]
    ) {
      winner = board[combination[0]];
      winnerElement.textContent = `Winner: ${winner}`;
      return;
    }
  }

  if (!board.includes('')) {
    winnerElement.textContent = 'Draw!';
  }
}