let boxes = document.querySelectorAll(".box");

let turno = true;

function handleClick(box) {
    console.log("click the box");
    if (turno){
        box.innerText = "o";
        turno = false;
      } else {
        box.innerText = "x";
        turno = true;
      }
    box.disabled = true;
    
    checkWinner();
  }

  let winPattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
  ];

  function checkWinner() {
    for (let pattern of winPattern) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          console.log("winner", pos1Val);
          showWinner(pos1Val);
          return true;
        }
      }
    }
  }