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
