const questions = [
    {
        question: "What is 5 + 3?",
        choices: ["6", "7", "8", "9"],
        correctAnswer: "8"
    },
    {
        question: "What is the opposite of 'hot'?",
        choices: ["cold", "warm", "cool", "heat"],
        correctAnswer: "cold"
    },
    {
        question: "What is the value of 9 - 4?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: "5"
    },
    {
        question: "Which one is a noun?",
        choices: ["quickly", "run", "apple", "blue"],
        correctAnswer: "apple"
    },
    {
        question: "What is the next number after 15?",
        choices: ["14", "16", "17", "18"],
        correctAnswer: "16"
    },
    {
        question: "What is 7 x 6?",
        choices: ["42", "48", "36", "56"],
        correctAnswer: "42"
    },
    {
        question: "Which word is an adjective?",
        choices: ["happy", "jump", "quickly", "and"],
        correctAnswer: "happy"
    },
    {
        question: "What is the perimeter of a square with side length 5?",
        choices: ["10", "15", "20", "25"],
        correctAnswer: "20"
    },
    {
        question: "Which sentence is in past tense?",
        choices: ["She will go to the store.", "She is going to the store.", "She went to the store.", "She goes to the store."],
        correctAnswer: "She went to the store."
    },
    {
        question: "What is 50 ÷ 5?",
        choices: ["5", "10", "15", "20"],
        correctAnswer: "10"
    },
    {
        question: "What is the square root of 81?",
        choices: ["7", "8", "9", "10"],
        correctAnswer: "9"
    },
    {
        question: "What is 12 x 7?",
        choices: ["72", "84", "96", "108"],
        correctAnswer: "84"
    },
    {
        question: "Solve for x: 2x + 3 = 7",
        choices: ["1", "2", "3", "4"],
        correctAnswer: "2"
    },
    {
        question: "Identify the adverb in the sentence: 'She quickly ran to the store.'",
        choices: ["She", "quickly", "ran", "store"],
        correctAnswer: "quickly"
    }
];

let currentQuestionIndex = 0;
let score = 0;
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const resultContainer = document.getElementById('result-container');
const quizContainer = document.querySelector('.quizz-container'); // Corrected selector
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

    prevButton.style.display = 'inline-block';
    nextButton.style.display = 'inline-block';

    if (currentQuestionIndex === 0) {
        prevButton.style.display = 'none';
    }
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

    if (selectedChoice === currentQuestion.correctAnswer) {
        score++;
    }

    nextButton.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreEl.textContent = `${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    loadQuestion();
}

loadQuestion();

function toggleTheme() {
    const body = document.getElementById('body');
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
    }
}

    document.getElementById('menu-open').addEventListener('click', function() {
        document.getElementById('sidebar').classList.add('open');
    });

    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('open');
    });