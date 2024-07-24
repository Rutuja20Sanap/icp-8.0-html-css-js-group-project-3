function startQuiz(quizName) {
    const userResponse = prompt(`Are you ready to start the ${quizName}?`);

    if (userResponse) {
        alert(`Great! Let's start the ${quizName}.`);

    } else {
        alert(`No worries! Take your time and start the ${quizName} when you are ready.`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const sentences = [
        "Test your English skills with fun and engaging questions!",
        "Join us for a fun-filled quiz adventure with games and laughter!",
        "Challenge your math skills with our exciting quiz!",
        "Explore the world with our fun and educational geography quiz!",
        "Discover amazing themes with our fun and engaging quiz!",
        "Expand your general knowledge with our fun and informative quiz!"
    ];
    const colors = ["red", "green", "skyblue", "orange", "black", "pink"];
    let currentSentenceIndex = 0;

    function changeSentence() {
        const sentenceElement = document.getElementById("changing-sentence");
        sentenceElement.innerText = sentences[currentSentenceIndex];
        sentenceElement.style.color = colors[currentSentenceIndex];
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    }

    setInterval(changeSentence, 3000);
    changeSentence();
});
