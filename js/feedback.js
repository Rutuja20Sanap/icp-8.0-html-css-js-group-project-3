
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
    const rev = document.getElementById("review-1");

    const inputBoxx = document.getElementById("input-boxx")
    const nameReview = document.getElementById("name-review");
    

    if(element.value == 0 || inputBoxx.value==0)
    {
        messageShow.innerText = 'Fillled form';
        messageShow.style.color = 'red';
        rev.style.display = 'none';
    }
    else{
        messageShow.innerText = 'Thank You🙂';
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