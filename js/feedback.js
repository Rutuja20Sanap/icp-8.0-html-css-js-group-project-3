
function Light(active) {
    for (let i = 1; i <= 4; i++) {
        const lightElement = document.getElementById('img' + i);
        if (i <= active) {
            lightElement.src = '../images/feedback-signin/star-color.png';
        } else {
            lightElement.src = '../images/feedback-signin/star.png';
        }
    }
  
}

function Submit() {

    const element = document.getElementById('text-area');
    const textShow = document.getElementById('review-text');
    const messageShow = document.getElementById('msg-show');
    const star = document.getElementById("img1")
    const rev = document.getElementById("review-1");

    const inputBoxx = document.getElementById("input-boxx")
    const nameReview = document.getElementById("name-review");
    

    if(element.value == 0 || inputBoxx.value==0)
    {
        messageShow.innerText = 'Please Fillled All Input Fields';
        messageShow.style.color = 'red';
        rev.style.display = 'none';
    }
    else{
        messageShow.innerText = 'Thank You For Your Feedback🙂';
        messageShow.style.color = 'green';
        rev.style.display = 'block';
    }
     
    textShow.innerText = element.value;
    element.value = " ";

    nameReview.innerText = inputBoxx.value;
    inputBoxx.value = " ";

    
    
   
     
}

function Mouse() {
    const ele = document.getElementById("blink");
   ele.src = '../images/feedback-signin/star-color.png'; 
}

function Over() {
    const ele = document.getElementById("blink");
    ele.src = '../images/feedback-signin/star.png';
}