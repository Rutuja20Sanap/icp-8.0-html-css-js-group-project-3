const questions = [
    {
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "O2", "CO2", "H2"],
        correctAnswer: "H2O"
    }];

let currentQuestionIndex = 0;
let score = 0;
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const resultContainer = document.getElementById('result-container');
const quizContainer = document.getElementById('quiz-container');
const scoreEl = document.getElementById('score');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    choicesEl.innerHTML = '';

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => selectAnswer(button, choice);
        choicesEl.appendChild(button);
    });
    prevButton.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    nextButton.style.display = 'inline-block';
}
function selectAnswer(button, selectedChoice) {
    const currentQuestion = questions[currentQuestionIndex];
    const allButtons = choicesEl.querySelectorAll('button');
    allButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === currentQuestion.correctAnswer) {
            btn.classList.add('correct');
        } else if (btn.textContent === selectedChoice) {
            btn.classList.add('incorrect');
        }
    });
    button.classList.add('selected');
    if (selectedChoice === currentQuestion.correctAnswer) {
        score++;
    }
    nextButton.style.display = 'block';
}
loadQuestion();