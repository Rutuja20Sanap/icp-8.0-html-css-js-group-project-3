let score = 0;
let totalQuestions = 15; 
let answeredQuestions = 0;

const allQuestions = [
    [
        document.getElementById('question1'),
        document.getElementById('question2'),
        document.getElementById('question3'),
        document.getElementById('question4'),
        document.getElementById('question5')
    ],
    [
        document.getElementById('question6'),
        document.getElementById('question7'),
        document.getElementById('question8'),
        document.getElementById('question9'),
        document.getElementById('question10')
    ],
    [
        document.getElementById('question11'),
        document.getElementById('question12'),
        document.getElementById('question13'),
        document.getElementById('question14'),
        document.getElementById('question15')
    ]
];

let currentQuestionIndexes = Array(allQuestions.length).fill(0);

function showInitialQuestions() {
    allQuestions.forEach((section, sectionIndex) => {
        section.forEach((question, questionIndex) => {
            if (questionIndex === 0) {
                question.classList.add('show');
                question.classList.remove('hide');
            } else {
                question.classList.add('hide');
                question.classList.remove('show');
            }
        });
    });
}

function showQuestion(sectionIndex, questionIndex) {
    allQuestions[sectionIndex].forEach((question, qIndex) => {
        if (qIndex === questionIndex) {
            question.classList.add('show');
            question.classList.remove('hide');
        } else {
            question.classList.add('hide');
            question.classList.remove('show');
        }
    });
}

function navigateQuestion(sectionIndex, direction) {
    currentQuestionIndexes[sectionIndex] += direction;

    if (currentQuestionIndexes[sectionIndex] < 0) {
        currentQuestionIndexes[sectionIndex] = 0;
    } else if (currentQuestionIndexes[sectionIndex] >= allQuestions[sectionIndex].length) {
        currentQuestionIndexes[sectionIndex] = allQuestions[sectionIndex].length - 1;
    }

    showQuestion(sectionIndex, currentQuestionIndexes[sectionIndex]);
}

function checkAnswer(questionId, formId, resultId, sectionIndex) {
    const questionDiv = document.getElementById(questionId);
    const correctAnswer = questionDiv.getAttribute('data-correct');
    const form = document.getElementById(formId);
    const resultElement = document.getElementById(resultId);
    let selectedAnswer;

    const radios = form.getElementsByTagName('input');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedAnswer = radios[i].value;
            break;
        }
    }
    if (selectedAnswer) {
        if (selectedAnswer === correctAnswer) {
            resultElement.innerText = "Your Answer Is Correct!";
            score += 2; 
        } else {
            resultElement.innerText = "Your Answer Is Incorrect!";
        }
        answeredQuestions++;

        if (answeredQuestions === totalQuestions) {
            showFinalScore();
        } else {
            navigateQuestion(sectionIndex, 1);
        }
    } else {
        resultElement.innerText = "Please select an answer!";
    }
}

function showFinalScore() {
    const mainContainer = document.getElementById('final-score-container');
    mainContainer.innerHTML = `
        <div class="final-score-container">
            <h1>Quiz Completed!</h1>
            <p>Your final score is: ${score} out of ${totalQuestions * 2}</p>
        </div>
    `;
}

function restartQuiz() {
    score = 0;
    answeredQuestions = 0;
    currentQuestionIndexes = Array(allQuestions.length).fill(0);
    allQuestions.forEach(section => {
        section.forEach(question => {
            question.classList.remove('show');
            question.classList.add('hide');
            const form = question.querySelector('form');
            form.reset();
            const resultElement = question.querySelector('.result');
            resultElement.innerText = "";
        });
    });
    showInitialQuestions();
}

showInitialQuestions();
