class Game {
  constructor(){
    this.turn = 0;
    this.gameOver = false;
  }
}

class Board {
  constructor(size){
    this.size = size;
  }

  // Creates the board based on size
  constructBoard(){
    this.board = Array(this.size).fill().map(() => Array(this.size).fill(0));
  }

  // Place piece
  populateBoard(){
    for(let i = 0; i< this.size; i++){
      this.setPiecePosition(1, 0, i)
      this.setPiecePosition(-1, size - 1, i)
    }
  }

  setPiecePosition(piece, row, col){
    this.board[row][col] = piece;
  }

  removePiecePosition(row, col){
    const piece = this.board[row][col];
    this.board[row][col] = 0;

    return piece;
  }

  movePiece(oldRow, oldCol, newRow, newCol){
    const piece = this.removePiecePosition(oldRow, oldCol);
    this.setPiecePosition(piece, newRow, newCol);
  }

  getPieceAtPosition(row, col){
    return this.board[row][col];
  }
}
