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
    if (age && age < 14) {
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
