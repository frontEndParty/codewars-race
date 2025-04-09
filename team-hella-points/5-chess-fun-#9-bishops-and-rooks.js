// this one doesn't work yet :(

function bishopsAndRooks(chessboard) {
  let count = 0;
  for (let row = 0; row < chessboard.length; row++) {
    for (let col = 0; col < chessboard[row].length; col++) {
      if (chessboard[row][col] !== 0) break;
      // check row
      for (let square = 0; square < chessboard[row].length; square++) {
        if (chessboard[row][square] === 1) break;
      }
      // check col
      for (let square = 0; square < chessboard.length; square++) {
        if (chessboard[square][col] === 1) break;
      }
      // check diag to the top left
      for (let attackRow = row; attackRow >= 0; attackRow--) {
        for (let attackCol = col; attackCol >= 0; attackCol--) {
          if (chessboard[attackRow][attackCol] === -1) break;
        }
      }
      // check diag to the top right
      for (let attackRow = row; attackRow >= 0; attackRow--) {
        for (
          let attackCol = col;
          attackCol < chessboard[row].length;
          attackCol++
        ) {
          if (chessboard[attackRow][attackCol] === -1) break;
        }
      }
      // check diag to the bottom left
      for (let attackRow = row; attackRow < chessboard.length; attackRow++) {
        for (let attackCol = col; attackCol >= 0; attackCol--) {
          if (chessboard[attackRow][attackCol] === -1) break;
        }
      }
      // check diag to the bottom right
      for (let attackRow = row; attackRow < chessboard.length; attackRow++) {
        for (
          let attackCol = col;
          attackCol < chessboard[row].length;
          attackCol++
        ) {
          if (chessboard[attackRow][attackCol] === -1) break;
        }
      }
      count++;
    }
  }

  console.log({ chessboard });
  return count;
}
