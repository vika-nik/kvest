const startButton = document.querySelector("#start-button");
const startScreen = document.querySelector("#start-screen");
const questionScreen = document.querySelector("#question-screen");

startButton.addEventListener("click", function() {
    startScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");
});

const answers = document.querySelectorAll("#question-screen button");
let currentQuestion = 1;
const wrongScreen = document.querySelector("#wrong-screen");
const retryButton = document.querySelector("#retry-button");

answers[0].addEventListener("click", function() {
    currentQuestion = 1;
    questionScreen.classList.add("hidden");
    wrongScreen.classList.remove("hidden");
});
answers[1].addEventListener("click", function() {
    currentQuestion = 1;
    questionScreen.classList.add("hidden");
    wrongScreen.classList.remove("hidden");
});
retryButton.addEventListener("click", function() {
    wrongScreen.classList.add("hidden");

    if (currentQuestion === 1) {
        questionScreen.classList.remove("hidden");
    } else if (currentQuestion === 2) {
        question2Screen.classList.remove("hidden");
    } else if (currentQuestion === 3) {
        question3Screen.classList.remove("hidden");
    }
});
answers[2].addEventListener("click", function() {
    questionScreen.classList.add("hidden");
    correctScreen.classList.remove("hidden");
});

const correctScreen = document.querySelector("#correct-screen");
const nextButton = document.querySelector("#next-button");
const question2Screen = document.querySelector("#question2-screen");
const answers2 = document.querySelectorAll("#question2-screen button");
const nextButton2 = document.querySelector("#next-button-2");
const question3Screen = document.querySelector("#question3-screen");
const answers3 = document.querySelectorAll("#question3-screen button");
const finalScreen = document.querySelector("#final-screen");


answers[2].addEventListener("click", function() {
    questionScreen.classList.add("hidden");
    correctScreen.classList.remove("hidden");

    nextButton.classList.remove("hidden");
    nextButton2.classList.add("hidden");
});
nextButton.addEventListener("click", function() {
    correctScreen.classList.add("hidden");
    question2Screen.classList.remove("hidden");
});
nextButton2.addEventListener("click", function() {
    correctScreen.classList.add("hidden");
    question3Screen.classList.remove("hidden");
});
answers2[0].addEventListener("click", function() {
    currentQuestion = 2;
    question2Screen.classList.add("hidden");
    wrongScreen.classList.remove("hidden");
});
answers2[1].addEventListener("click", function() {
    currentQuestion = 2;
    question2Screen.classList.add("hidden");
    wrongScreen.classList.remove("hidden");
});
answers2[2].addEventListener("click", function() {
    question2Screen.classList.add("hidden");
    correctScreen.classList.remove("hidden");

    nextButton.classList.add("hidden");
    nextButton2.classList.remove("hidden");
});
answers3[0].addEventListener("click", function() {
    currentQuestion = 3;
    question3Screen.classList.add("hidden");
    wrongScreen.classList.remove("hidden");
});
answers3[2].addEventListener("click", function() {
    currentQuestion = 3;
    question3Screen.classList.add("hidden");
    wrongScreen.classList.remove("hidden");
});
answers3[1].addEventListener("click", function() {
    question3Screen.classList.add("hidden");
    finalScreen.classList.remove("hidden");
});