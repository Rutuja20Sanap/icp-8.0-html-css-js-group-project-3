let score = 0;
let totalQuestions = 15;
let answeredQuestions = 0;

const allQuestions = [
    document.getElementById('question1'),
    document.getElementById('question2'),
    document.getElementById('question3'),
    document.getElementById('question4'),
    document.getElementById('question5'),
    document.getElementById('question6'),
    document.getElementById('question7'),
    document.getElementById('question8'),
    document.getElementById('question9'),
    document.getElementById('question10'),
    document.getElementById('question11'),
    document.getElementById('question12'),
    document.getElementById('question13'),
    document.getElementById('question14'),
    document.getElementById('question15')
];

const sectionTitles = ["Simple Questions", "Medium Questions", "Hard Questions"];

let currentQuestionIndex = 0;

function showInitialQuestion() {
    updateSectionTitle();
    allQuestions.forEach((question, qIndex) => {
        if (qIndex === 0) {
            question.style.display = 'block';
        } else {
            question.style.display = 'none';
        }
    });

    document.getElementById('certificate-input').style.display = 'none';

    document.getElementById('next-button').style.display = 'inline-block';
    document.getElementById('prev-button').style.display = 'none';
    document.getElementById('finish-button').style.display = 'none';
}

function showQuestion(questionIndex) {
    updateSectionTitle();
    allQuestions.forEach((question, qIndex) => {
        if (qIndex === questionIndex) {
            question.style.display = 'block';
        } else {
            question.style.display = 'none';
        }
    });

    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    const finishButton = document.getElementById('finish-button');

    if (questionIndex === 0) {
        nextButton.style.display = 'inline-block';
        prevButton.style.display = 'none';
        finishButton.style.display = 'none';
    } else if (questionIndex === allQuestions.length - 1) {
        nextButton.style.display = 'none';
        prevButton.style.display = 'inline-block';
        finishButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        prevButton.style.display = 'inline-block';
        finishButton.style.display = 'none';
    }
}

function navigateQuestion(direction) {
    if (checkAnswer(`question${currentQuestionIndex + 1}`, `quiz-form${currentQuestionIndex + 1}`)) {
        currentQuestionIndex += direction;

        if (currentQuestionIndex < 0) {
            currentQuestionIndex = 0;
        } else if (currentQuestionIndex >= allQuestions.length) {
            currentQuestionIndex = allQuestions.length - 1;
        }

        showQuestion(currentQuestionIndex);
    } else {
        alert('Please select an answer before proceeding.');
    }
}

function updateSectionTitle() {
    const sectionTitle = document.getElementById('section-title');
    if (currentQuestionIndex < 5) {
        sectionTitle.innerText = sectionTitles[0];
    } else if (currentQuestionIndex < 10) {
        sectionTitle.innerText = sectionTitles[1];
    } else {
        sectionTitle.innerText = sectionTitles[2];
    }
}

function checkAnswer(questionId, formId) {
    const questionDiv = document.getElementById(questionId);
    const correctAnswer = questionDiv.getAttribute('data-correct');
    const form = document.getElementById(formId);
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
            score++;
        }
        answeredQuestions++;
        return true;
    } else {
        return false;   
    }
}

function showFinalScore() {
    allQuestions.forEach((question, index) => {
        checkAnswer(`question${index + 1}`, `quiz-form${index + 1}`);
    });

    // Hide all questions
    allQuestions.forEach(question => {
        question.style.display = 'none';
    });

    document.getElementById('section-title').style.display = 'none';
    document.getElementById('certificate-input').style.display = 'inline-block';
    document.getElementById('Quiz-container').style.display = 'none';

    // Show the final score section and update content
    const scoreContainer = document.getElementById('final-score-container');
    const scoreContent = document.getElementById('score-container');
    const scoreLine = document.getElementById('score-line');

    scoreContainer.classList.remove('hide');
    scoreContainer.classList.add('show');
    
    scoreContent.innerText = `Your final score is: ${score} out of ${totalQuestions}`;
    
    if (score < 8) {
        scoreLine.innerText = `Your score: ${score}/${totalQuestions}\nOoh, not quite! Don't worry, you can always take the quiz and try again!`;
    } else if (score >= 8 && score < 13) {
        scoreLine.innerText = `Your score: ${score}/${totalQuestions}\nVery good! You love your emojis, no doubt about that! We bet you can get a perfect score, though - why not try again and see?`;
    } else {
        scoreLine.innerText = `Your score: ${score}/${totalQuestions}\nPerfect - you're totally in touch with your emotions! You're definitely the emoji expert in your friend group!`;
    }

    // Show the certificate section
    const certificateSection = document.getElementById('certificate');
    certificateSection.classList.add('show');
    certificateSection.classList.remove('hide');

    // Hide the navigation buttons
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('prev-button').style.display = 'none';
    document.getElementById('finish-button').style.display = 'none';
}

function generateCertificate() {
    const name = document.getElementById('inputName').value;
    const date = document.getElementById('inputDate').value;

    document.getElementById('childName').innerText = name;
    document.getElementById('date').innerText = date;
}

document.getElementById('next-button').addEventListener('click', () => navigateQuestion(1));
document.getElementById('prev-button').addEventListener('click', () => navigateQuestion(-1));
document.getElementById('finish-button').addEventListener('click', showFinalScore);

showInitialQuestion();
