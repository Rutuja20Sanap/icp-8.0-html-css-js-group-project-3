//show the number of que, active question and intial score
const totalQuestions = 15;
let activeQuestionIndex = 0;
let score = 0;

//All correct answer 
const correctAnswers = {
    question1: "Happiness",
    question2: "Sad",
    question3: "Angry",
    question4: "Confused",
    question5: "Relaxed",
    question6: "Embarrassment",
    question7: "Scared",
    question8: "Grumpy",
    question9: "Naughty",
    question10: "Sad,but also you are piece of poop",
    question11: "Starbucks",
    question12: "Toad in the hole",
    question13: "Pear",
    question14: "Pineapple",
    question15: "Shepards pie"
}

function showNextQuestion() {
    // Selects the current active question based on the activeQuestionIndex.
    const currentQuestion = document.querySelector(`#que${activeQuestionIndex + 1}`);
    //Selects the element with the ID certificate.
    const certificate = document.getElementById('certificate');
    if (currentQuestion) {
        currentQuestion.classList.remove('active-question');
    }//Increment the Active Question Index 
    activeQuestionIndex++;
    //Check if There Are More Questions
    if (activeQuestionIndex < totalQuestions) {
        const nextQuestion = document.querySelector(`#que${activeQuestionIndex + 1}`);
        nextQuestion.classList.add('active-question');
        certificate.classList.remove('show-certificate');
       
    } else {
        showScore();
        certificate.classList.add('show-certificate');
    }
   
}

function showPrevQuestion() {
    // Ensure that activeQuestionIndex is not less than 0
    if (activeQuestionIndex > 0) {

        // Select the current question using activeQuestionIndex to match the selectors in HTML
        const currentQuestion = document.querySelector(`#que${activeQuestionIndex + 1}`);
        if (currentQuestion) {
            currentQuestion.classList.remove('active-question');
        }

        // Decrement the activeQuestionIndex to point to the previous question
        activeQuestionIndex--;

        // Select the previous question using activeQuestionIndex to match the selectors in  HTML
        const prevQuestion = document.querySelector(`#que${activeQuestionIndex + 1}`);
        if (prevQuestion) {
            prevQuestion.classList.add('active-question');
        }
    }
}


function showScore() {
    //Hide All Questions
    document.querySelectorAll('.question').forEach(q => q.classList.remove('active-question'));
    //Show the Score Section
    const scoreSection = document.getElementById('score');
    const scorecontent = document.getElementById('scoreText');

    scoreSection.classList.add('active-question');
    //Display the User's Score
    scorecontent.innerText = `Your score: ${score}/${totalQuestions} `;
    //Display Custom Message Based on Score
    if (score < 8) {
        scorecontent.innerText = `Your score: ${score}/${totalQuestions}\n Ooh, not quite! Don't worry, you can always take the quiz and try again!`;

    } else if (score > 8 && score < 13) {
        scorecontent.innerText = `Your score: ${score}/${totalQuestions}\n Very good! You love your emojis, no doubt about that! We bet you can get a perfect score, though - why not try again and see?`;
    } else {
        scorecontent.innerText = `Your score: ${score}/${totalQuestions}\n Perfect - you're totally in touch with your emotions! You're definitely the emoji expert in your friend group! `;
    }
}

//handleAnswer which takes an event object as a parameter. 
function handleAnswer(event) {
    //Get the Selected Element
    const selected = event.target;
    //Check if the Selected Element has a Name and is Checked
    if (selected.name && selected.checked) {
        //Get the Question Number and Selected Answer
        const questionNumber = selected.name;
        const selectedAnswer = selected.value;
        // Check if the Selected Answer is Correct
        if (correctAnswers[questionNumber] === selectedAnswer) {
            score++;
        }
    }
}

document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', handleAnswer);
});

document.querySelectorAll('.nxt-btn').forEach(button => {
    button.addEventListener('click', showNextQuestion);
});

/*document.addEventListener('DOMContentLoaded', () => {
    const nextButtons = document.querySelectorAll('.nxt-btn');
    const backButtons = document.querySelectorAll('.back-btn');

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentQuestion = button.closest('.question');
            const nextQuestionId = button.getAttribute('data-next');
            const nextQuestion = document.getElementById(nextQuestionId);

            currentQuestion.classList.remove('active-question');
            nextQuestion.classList.add('active-question');
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentQuestion = button.closest('.question');
            const prevQuestionId = button.getAttribute('data-prev');
            const prevQuestion = document.getElementById(prevQuestionId);

            currentQuestion.classList.remove('active-question');
            prevQuestion.classList.add('active-question');
        });
    });
});*/

function generateCertificate() {
    //Selects the element with the ID inputname and iinput date.
    const name = document.getElementById('inputName').value;
    const date = document.getElementById('inputDate').value;
    //set the innertext of child name and date
    document.getElementById('childName').innerText = name;
    document.getElementById('date').innerText = date;

}