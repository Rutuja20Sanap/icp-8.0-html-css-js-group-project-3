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