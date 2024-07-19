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