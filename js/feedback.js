
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

// function Submit() {
//     const element = document.getElementById('text-area');
//     const textShow = document.getElementById('review-text');
//     const messageShow = document.getElementById('msg-show');
//     const star = document.getElementById("img1")
//     const rev = document.getElementById("review-1");

//     const inputBoxx = document.getElementById("input-boxx")
//     const nameReview = document.getElementById("name-review");
    

//     if(element.value == 0 || inputBoxx.value==0)
//     {
//         messageShow.innerText = 'Please Fillled All Input Fields';
//         messageShow.style.color = 'red';
//         rev.style.display = 'none';
//     }
//     else{
//         messageShow.innerText = 'Thank You For Your Feedback🙂';
//         messageShow.style.color = 'green';
//         rev.style.display = 'block';
//     }
     
//     textShow.innerText = element.value;
//     element.value = " ";

//     nameReview.innerText = inputBoxx.value;
//     inputBoxx.value = " ";
// }

function Mouse() {
    const ele = document.getElementById("blink");
   ele.src = '../images/feedback-signin/star-color.png'; 
}

function Over() {
    const ele = document.getElementById("blink");
    ele.src = '../images/feedback-signin/star.png';
}



let reviewListName = [];
let reviewListMsg = [];

const reviewBox = document.getElementById("review-Box");

const reviewNameItemsLS = localStorage.getItem("reviewListName");
const reviewMsgItemsLS = localStorage.getItem("reviewListMsg");

if(reviewNameItemsLS){
    reviewListName = JSON.parse(reviewNameItemsLS);
    reviewListMsg = JSON.parse(reviewMsgItemsLS);
    loadList();
}

function addReview(){
    const inputName = document.getElementById("input-Name");
    const name = inputName.value;
    const inputMsg = document.getElementById("input-Msg");
    const msg = inputMsg.value;

    if (name) {
        reviewListName.push(name);
        reviewListMsg.push(msg);

        localStorage.setItem("reviewListName", JSON.stringify(reviewListName));
        localStorage.setItem("reviewListMsg", JSON.stringify(reviewListMsg));

        inputName.value = "";
        inputMsg.value = "";
        loadList();
    }
    else {
        alert("Please enter name");
    }
}

function loadList() {
    reviewBox.innerHTML = "";

    for (let i = 0; i < reviewListName.length; i++) {
        let name = reviewListName[i];
        let msg = reviewListMsg[i];
        reviewBox.innerHTML = reviewBox.innerHTML + `<div class="review-container-1">
                    <img src="../images/feedback-signin/icons8-quotes-48.png" alt="" class="icon-img-size">
                    <p id="review-text">${msg}</p>
                    <img src="../images/feedback-signin/piyush phoooo.png" alt="" class="person-image">
                    <p id="name-review">${name}</p>
                </div>`;
    }
}