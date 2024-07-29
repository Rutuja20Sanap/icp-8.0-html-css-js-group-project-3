let score = 0;
let totalQuestions = 15;
let totalMarks = 15;
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
    document.getElementById('cer-btn').style.display = 'none';
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
        console.log(`Question ${questionId} answered with ${selectedAnswer}. Correct answer is ${correctAnswer}.`);
        if (selectedAnswer === correctAnswer) {
            if (!questionDiv.getAttribute('data-scored')) { 
                score++; 
                questionDiv.setAttribute('data-scored', 'true');
            }
        }
        answeredQuestions++;
        return true;
    } else {
        console.log(`Question ${questionId} not answered.`);
        return false;
    }
}

function showFinalScore() {
    allQuestions.forEach(question => {
        question.style.display = 'none';
    });

    document.getElementById('section-title').style.display = 'none';
    document.getElementById('certificate-input').style.display = 'inline-block';
    document.getElementById('Quiz-container').style.display = 'none';
    document.getElementById('cer-btn').style.display = 'block';

    const scoreContainer = document.getElementById('final-score-container');
    const scoreContent = document.getElementById('score-container');
    const scoreLine = document.getElementById('score-line');

    scoreContainer.classList.remove('hide');
    scoreContainer.classList.add('show');
    
    scoreContent.innerText = `Your final score is: ${score} out of ${totalMarks}`;
    
    if (score < 8) {
        scoreLine.innerText = `Your score: ${score}/${totalMarks}\nOoh, not quite! Don't worry, you can always take the quiz and try again!`;
    } else if (score >= 8 && score < 13) {
        scoreLine.innerText = `Your score: ${score}/${totalMarks}\nVery good!!!`;
    } else {
        scoreLine.innerText = `Your score: ${score}/${totalMarks}\nPerfect!!!`;
    }

    const certificateSection = document.getElementById('certificate');
    certificateSection.classList.add('show');
    certificateSection.classList.remove('hide');

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
