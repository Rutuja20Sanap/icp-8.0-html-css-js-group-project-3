
document.addEventListener("DOMContentLoaded", () => {
    // Random Quiz Suggestion
    const quizzes = [
        {name: "English Quiz", link: "../pages/educational-quizz.html"},
        {name: "Games and Fun Quiz", link: "../pages/game.html"},
        {name: "Math Quiz", link: "../pages/educational-quizz.html"},
        {name: "Geographic Quiz", link: "../pages/gk-quizz.html"},
        {name: "Fun and Thematic Quiz", link: "../pages/fun-quizz.html"},
        {name: "GK Quiz", link: "../pages/gk-quizz.html"}
    ];

    function suggestRandomQuiz() {
        const randomIndex = Math.floor(Math.random() * quizzes.length);
        const randomQuiz = quizzes[randomIndex];
        const suggestionBox = document.getElementById("random-quiz-suggestion");
        suggestionBox.innerHTML = `How about trying our <a href="${randomQuiz.link}" class="random-quiz-link">${randomQuiz.name}</a>?`;
    }

    suggestRandomQuiz();

    // Greeting Message
    function getGreetingMessage() {
        const hour = new Date().getHours();
        if (hour < 12) {
            return "Good Morning!";
        } else if (hour < 18) {
            return "Good Afternoon!";
        } else {
            return "Good Evening!";
        }
    }

    const greetingMessage = getGreetingMessage();
    document.getElementById("greeting-message").innerText = greetingMessage;
});

