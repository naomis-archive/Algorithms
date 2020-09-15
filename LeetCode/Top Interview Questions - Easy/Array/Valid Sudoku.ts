function isValidSudoku(board: string[][]): boolean {
  return (
    checkNum(board[0]) &&
    checkNum(board[1]) &&
    checkNum(board[2]) &&
    checkNum(board[3]) &&
    checkNum(board[4]) &&
    checkNum(board[5]) &&
    checkNum(board[6]) &&
    checkNum(board[7]) &&
    checkNum(board[8]) &&
    checkNum(column(board, 1)) &&
    checkNum(column(board, 2)) &&
    checkNum(column(board, 3)) &&
    checkNum(column(board, 4)) &&
    checkNum(column(board, 5)) &&
    checkNum(column(board, 6)) &&
    checkNum(column(board, 7)) &&
    checkNum(column(board, 8)) &&
    checkNum(column(board, 9)) &&
    checkNum(grid(board, 1, 1)) &&
    checkNum(grid(board, 1, 2)) &&
    checkNum(grid(board, 1, 3)) &&
    checkNum(grid(board, 2, 1)) &&
    checkNum(grid(board, 2, 2)) &&
    checkNum(grid(board, 2, 3)) &&
    checkNum(grid(board, 3, 1)) &&
    checkNum(grid(board, 3, 2)) &&
    checkNum(grid(board, 3, 3))
  );
}

function checkNum(set: string[]): boolean {
  for (let i = 1; i < 10; i++) {
    if (set.indexOf(i.toString()) !== set.lastIndexOf(i.toString()))
      return false;
  }
  return true;
}

function column(set: string[][], col: number) {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push(set[i][col - 1]);
  }
  return arr;
}

function grid(set: string[][], col: number, row: number) {
  let arr = [];
  let coltarg = (col - 1) * 3;
  let rowtarg = (row - 1) * 3;
  for (let i = coltarg; i < coltarg + 3; i++) {
    for (let j = rowtarg; j < rowtarg + 3; j++) {
      arr.push(set[j][i]);
    }
  }
  return arr;
}
