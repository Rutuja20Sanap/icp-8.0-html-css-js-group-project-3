
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
    const textShow = document.getElementById('review-text');
    const messageShow = document.getElementById('msg-show');
    const star = document.getElementById("img1")
    if(element.value == 0)
    {
        messageShow.innerText = 'Fillled form';
    }
    else{
        messageShow.innerText = 'Thank You🙂';
    }
     
    textShow.innerText = element.value;
    element.value = " ";

     
}

function Mouse() {
    const ele = document.getElementById("blink");
   ele.src = '../images/feedback-signin/star-color.png'; 
}

function Over() {
    const ele = document.getElementById("blink");
    ele.src = '../images/feedback-signin/star.png';
}