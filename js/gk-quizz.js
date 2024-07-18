function Quiz1() {
    const correctAnswer = "A";
    const form = document.getElementById('quiz-form1');
    const resultElement = document.getElementById('Result1');
    let selectedAnswer;

    const radios = form.elements['q1'];
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

function Quiz2() {
    const correctAnswer = "60";
    const form = document.getElementById('quiz-form2');
    const resultElement = document.getElementById('Result2');
    let selectedAnswer;

    const radios = form.elements['q2'];
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

function Quiz3() {
    const correctAnswer = "C";
    const form = document.getElementById('quiz-form3');
    const resultElement = document.getElementById('Result3');
    let selectedAnswer;

    const radios = form.elements['q3'];
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

function Quiz4() {
    const correctAnswer = "D";
    const form = document.getElementById('quiz-form4');
    const resultElement = document.getElementById('Result4');
    let selectedAnswer;

    const radios = form.elements['q4'];
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
