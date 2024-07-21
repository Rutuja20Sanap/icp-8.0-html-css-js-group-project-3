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