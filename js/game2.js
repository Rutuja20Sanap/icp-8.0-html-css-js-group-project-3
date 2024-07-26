let boxes = document.querySelectorAll(".box2");
let msgContainer = document.querySelector(".msg-container");

let turno = true;
let turn = 0;

let winPattern= [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

function resetGAme() {
    turno = true;  
    enableBoxes();
    msgContainer.classList.add("hide");
  }

boxes.forEach(function (box2) {
    box2.addEventListener("click", function () {
      console.log("click the box");
  
      if (turno) {
        box2.innerText = "o";
        turno = false;
      } else {
        box2.innerText = "x";
        turno = true;
      }
      box2.disabled = true;
  
      checkWinner();
    });
  });

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
  function showWinner(winner) {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    
    disableBoxes();
  }
  function disableBoxes() {
    for (let box of boxes) {
      box.disabled = true;
    }
  }
  function enableBoxes() {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  }
  
