// script.js
const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon dioxide"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue whale", "Kangaroo"],
        correctAnswer: "Blue whale"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
    showNextButton();
}

function showQuestion() {
    const questionTextElement = document.getElementById("question-text");
    questionTextElement.textContent = questions[currentQuestionIndex].question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showNextButton() {
    document.getElementById("next-button").style.display = "block";
}

function showResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    const resultTextElement = document.getElementById("result-text");
    resultTextElement.textContent = `You scored ${score} out of ${questions.length}!`;
}

function hideResult() {
    document.getElementById("result-container").style.display = "none";
}

function nextQuestion() {
    hideResult();
    showNextButton();
    showQuestion();
}

startQuiz();
