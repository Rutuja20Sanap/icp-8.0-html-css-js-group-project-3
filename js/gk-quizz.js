let currentQuestionIndex = 0;
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


function showQuestion(index) {
    allQuestions.forEach((section, sectionIndex) => {
        section.forEach((question, questionIndex) => {
            if (questionIndex === index) {
                question.classList.add('show');
                question.classList.remove('hide');
            } else {
                question.classList.add('hide');
                question.classList.remove('show');
            }
        });
    });
}

function navigateQuestion(direction) {
    currentQuestionIndex += direction;

    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    } else if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = questions.length - 1;
    }

    showQuestion(currentQuestionIndex);
}


function checkAnswer(questionId, formId, resultId) {
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

    if (selectedAnswer === correctAnswer) {
        resultElement.innerText = "Your Answer Is Correct!";
    } else {
        resultElement.innerText = "Your Answer Is Incorrect!";
    }
}

// Initial setup to show the first question
showQuestion(currentQuestionIndex);
