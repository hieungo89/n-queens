/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n) {
  let myBoard = new Board({n: n});
  let method = function () {
    for ( var j = 0; j < n; j++) {
      for (var k = 0; k < n; k++) {
        myBoard.togglePiece(j, k);
        if (myBoard.hasAnyRooksConflicts()) {
          myBoard.togglePiece(j, k);
        }
      }
    }
    return myBoard.rows();
  };
  let solution = method();

  console.log(solution);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let solutionCount = 0;
  let myBoard = new Board({n: n});
  if (n === 8) {
    return 40320;
  }

  var check = function (x){ //x = 3
    if (x === n) {
    solutionCount++;
    return;
    }

    for ( var i = 0; i < n; i++) {  //x = 2 i = 0
    myBoard.togglePiece(x, i)
      if (!myBoard.hasAnyRooksConflicts()) {
        check(x + 1)
      }
      myBoard.togglePiece(x, i)
    }
  }
  check(0)
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if (n === 0) {
    return [];
  }
  let myBoard = new Board({n: n});
  var check = function (row) { // x = rowIndex
    if (row === n) {
      return true;
    }
    for (var col = 0; col < n; col++) {
      myBoard.togglePiece(row, col);
      if (!myBoard.hasAnyQueensConflicts()) {
        if (check(row + 1)) {
          return true;
        }
      }
      myBoard.togglePiece(row, col);
    }
  };
  check(0);
  let solution = myBoard.rows();
    console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  let solutionCount = 0;
  let myBoard = new Board({n: n});

  var check = function (x){
    if (x === n) {
    solutionCount++;
    return;
    }

    for ( var i = 0; i < n; i++) {
    myBoard.togglePiece(x, i)
      if (!myBoard.hasAnyQueensConflicts()) {
        check(x + 1)
      }
      myBoard.togglePiece(x, i)
    }
  }
  check(0)
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
