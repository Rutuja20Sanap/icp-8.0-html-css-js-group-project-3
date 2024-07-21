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

function resetAlphabetsGame() {
  document.getElementById('textInput').value = '';
  document.getElementById('alphabetCountInput').value = '';
  document.getElementById('result1').innerText = '';
}