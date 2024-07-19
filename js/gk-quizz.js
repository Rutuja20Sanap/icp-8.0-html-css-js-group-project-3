function checkAnswer(questionId, formId, resultId) {
    const questionDiv = document.getElementById(questionId);
    const correctAnswer = questionDiv.getAttribute('data-correct');
    const form = document.getElementById(formId);
    const resultElement = document.getElementById(resultId);
    let selectedAnswer;

    const radios = form.querySelectorAll('input[type="radio"]');
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
