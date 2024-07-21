function enabledark(){
    const mainbody = document.getElementById("main-body")
    mainbody.classList.remove("bg-light")
    mainbody.classList.add("bg-dark")

  }
  function enablelight(){
    const mainbody = document.getElementById("main-body")
    mainbody.classList.remove("bg-dark")
    mainbody.classList.add("bg-light")

  }
  function checkEligibility() {
    const age = document.getElementById('age').value;
    if (age && age < 16) {
      alert('You are eligible to play.');
        document.getElementById('games').style.display = 'block';
        initializeTrafficSignal();
        initializeGuessNumber();
    } else {
        alert('You are not eligible to play the games.');
    }
}
function countAlphabets() {
  const text = document.getElementById('textInput').value;
  const alphabetsCount = text.replace(/[^a-zA-Z]/g, '').length;
  const userAnswer = parseInt(document.getElementById('alphabetCountInput').value, 10);

  if (userAnswer === alphabetsCount) {
      document.getElementById('result1').innerText = 'Correct!';
  } else {
      document.getElementById('result1').innerText = `Wrong! There are ${alphabetsCount} alphabets.`;
  }
}
function countWords() {
  const sentence = document.getElementById('sentenceInput').value;
  const wordsCount = sentence.trim().split(/\s+/).length;
  const userAnswer = parseInt(document.getElementById('wordCountInput').value, 10);

  if (userAnswer === wordsCount) {
      document.getElementById('result2').innerText = 'Correct!';
  } else {
      document.getElementById('result2').innerText = `Wrong! There are ${wordsCount} words.`;
  }
}
function initializeTrafficSignal() {
  const colors = ['red', 'green', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById('signal').style.backgroundColor = randomColor;
}

function chooseSignal(color) {
  const signalColor = document.getElementById('signal').style.backgroundColor;

  if (color === signalColor) {
      document.getElementById('result3').innerText = `Correct! The signal is ${signalColor}.`;
  } else {
      document.getElementById('result3').innerText = `Wrong! The signal is ${signalColor}.`;
  }
}
function initializeGuessNumber() {
  const numberOptions = document.getElementById('numberOptions');
  numberOptions.innerHTML = '';

  const randomNumber = Math.floor(Math.random() * 10) + 1;
  window.correctNumber = randomNumber;

  for (let i = 1; i <= 10; i++) {
      const button = document.createElement('button');
      button.innerText = i;
      button.onclick = function () {
          guessNumber(i);
      };
      numberOptions.appendChild(button);
  }
}

function guessNumber(userGuess) {
  if (userGuess === window.correctNumber) {
      document.getElementById('result4').innerText = `Correct! The number was ${window.correctNumber}.`;
  } else {
      document.getElementById('result4').innerText = `Wrong! The number was ${window.correctNumber}. Try again!`;
  }
}

function resetAlphabetsGame() {
  document.getElementById('textInput').value = '';
  document.getElementById('alphabetCountInput').value = '';
  document.getElementById('result1').innerText = '';
}
function resetWordsGame() {
  document.getElementById('sentenceInput').value = '';
  document.getElementById('wordCountInput').value = '';
  document.getElementById('result2').innerText = '';
}
function resetSignalGame() {
  initializeTrafficSignal();
  document.getElementById('result3').innerText = '';
}

function resetGuessNumberGame() {
  initializeGuessNumber();
  document.getElementById('result4').innerText = '';
}
