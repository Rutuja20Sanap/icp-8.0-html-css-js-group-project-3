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
  