
function Light(active) {
    const lightElement = document.getElementById(active);
    if (lightElement.src.includes('star-color.png')) {
        lightElement.src = '../images/feedback-signin/star.png';
    } else {
        lightElement.src = '../images/feedback-signin/star-color.png';
    }
}

function Submit() {

    const element = document.getElementById('text-area');
     const star = document.getElementById("img1")
    if(element.value == 0)
    {
        alert("Filled text area");
    }
    else{
        alert("Thank you");
    }
    
}

function Mouse() {
    const ele = document.getElementById("blink");
   ele.src = '../images/feedback-signin/star-color.png'; 
}

function Over() {
    const ele = document.getElementById("blink");
    ele.src = '../images/feedback-signin/star.png';
}