console.log("hello")
let squaresPlayed = [];
function play(boxId, ) {
  let playerSpan = document.getElementById("player")
  let clickedBox = document.getElementById(boxId)
  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O"
    clickedBox.innerText = "X"
    squaresPlayed[boxId] = "X"
  } else {
    playerSpan.innerText = "X"
    clickedBox.innerText = "0"
    squaresPlayed[boxId] = "O"
  }
  // top row
  if (squaresPlayed[0] !== undefined && squaresPlayed[0] === squaresPlayed[1] && squaresPlayed[1] === squaresPlayed[2]) {
    alert(`${squaresPlayed[0]} Wins!!`)
  }
  //middle horizontal row
  if (squaresPlayed[3] !== undefined && squaresPlayed[3] === squaresPlayed[4] && squaresPlayed[4] === squaresPlayed[5]) {
    alert(`${squaresPlayed[4]} Wins!!`)
  }
  //bottom row
  if (squaresPlayed[6] !== undefined && squaresPlayed[6] === squaresPlayed[7] && squaresPlayed[7] === squaresPlayed[8]) {
    alert(`${squaresPlayed[6]} Wins!!`)
  }
  // back slash diagonal
  if (squaresPlayed[0] !== undefined && squaresPlayed[0] === squaresPlayed[4] && squaresPlayed[4] === squaresPlayed[8]) {
    alert(`${squaresPlayed[0]} Wins!!`)
  }
  // forward slash diagonal
  if (squaresPlayed[2] !== undefined && squaresPlayed[2] === squaresPlayed[4] && squaresPlayed[4] === squaresPlayed[6]) {
    alert(`${squaresPlayed[2]} Wins!!`)
  }
  // left column 
  if (squaresPlayed[0] !== undefined && squaresPlayed[0] === squaresPlayed[3] && squaresPlayed[3] === squaresPlayed[6]) {
    alert(`${squaresPlayed[0]} Wins!!`)
  }
  // middle column
  if (squaresPlayed[1] !== undefined && squaresPlayed[1] === squaresPlayed[4] && squaresPlayed[4] === squaresPlayed[7]) {
    alert(`${squaresPlayed[1]} Wins!!`)
  } 
  // right column 
  if (squaresPlayed[2] !== undefined && squaresPlayed[2] === squaresPlayed[5] && squaresPlayed[5] === squaresPlayed[8]) {
    alert(`${squaresPlayed[8]} Wins!!`)
  }
let boardFull = true;

for(let i = 0; i <= 8; i++){
  if (squaresPlayed[i] === undefined){
    boardFull = false;
  }
}

if (boardFull){
  alert("Cats game no winner.")
}
  console.log(squaresPlayed)
}