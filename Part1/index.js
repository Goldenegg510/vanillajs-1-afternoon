console.log("hello")
let squaresPlayed = [];
function play(boxId) {
  let playerSpan = document.getElementById("player")
  let clickedBox = document.getElementById(boxId)
  if (playerSpan.innerText === "X" && clickedBox.innerText === '') {
    playerSpan.innerText = "O"
    clickedBox.innerText = "X"
    squaresPlayed[boxId] = "X"
  } else if (clickedBox.innerText === '') {
    playerSpan.innerText = "X"
    clickedBox.innerText = "0"
    squaresPlayed[boxId] = "O"
  }
  // top row
  if (squaresPlayed[0] !== undefined && squaresPlayed[0] === squaresPlayed[1] && squaresPlayed[1] === squaresPlayed[2]) {
    alert(`${squaresPlayed[0]} Wins!!`)
    reset()
  }
  //middle horizontal row
  if (squaresPlayed[3] !== undefined && squaresPlayed[3] === squaresPlayed[4] && squaresPlayed[4] === squaresPlayed[5]) {
    alert(`${squaresPlayed[4]} Wins!!`)
    reset()
  }
  //bottom row
  if (squaresPlayed[6] !== undefined && squaresPlayed[6] === squaresPlayed[7] && squaresPlayed[7] === squaresPlayed[8]) {
    alert(`${squaresPlayed[6]} Wins!!`)
    reset()
  }
  // back slash diagonal
  if (squaresPlayed[0] !== undefined && squaresPlayed[0] === squaresPlayed[4] && squaresPlayed[4] === squaresPlayed[8]) {
    alert(`${squaresPlayed[0]} Wins!!`)
    reset()
  }
  // forward slash diagonal
  if (squaresPlayed[2] !== undefined && squaresPlayed[2] === squaresPlayed[4] && squaresPlayed[4] === squaresPlayed[6]) {
    alert(`${squaresPlayed[2]} Wins!!`)
    reset()
  }
  // left column 
  if (squaresPlayed[0] !== undefined && squaresPlayed[0] === squaresPlayed[3] && squaresPlayed[3] === squaresPlayed[6]) {
    alert(`${squaresPlayed[0]} Wins!!`)
    reset()
  }
  // middle column
  if (squaresPlayed[1] !== undefined && squaresPlayed[1] === squaresPlayed[4] && squaresPlayed[4] === squaresPlayed[7]) {
    alert(`${squaresPlayed[1]} Wins!!`)
    reset()
  }
  // right column 
  if (squaresPlayed[2] !== undefined && squaresPlayed[2] === squaresPlayed[5] && squaresPlayed[5] === squaresPlayed[8]) {
    alert(`${squaresPlayed[8]} Wins!!`)
    reset()
  }
  let boardFull = true;

  for (let i = 0; i <= 8; i++) {
    if (squaresPlayed[i] === undefined) {
      boardFull = false;
    }
  }

  if (boardFull) {
    alert("Cats game no winner.")
    reset()
  }
  console.log(squaresPlayed)
}
function reset() {
  squaresPlayed = []
  for (let i = 0; i <= 8; i++) {
    let resetSquare = document.getElementById(i)
    resetSquare.innerText = ''
  }
}