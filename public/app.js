const words = [
  { word: "apple", correct: "תפוח", options: ["תפוח", "כיסא", "דלת", "חולצה"] },
  { word: "chair", correct: "כיסא", options: ["מחשב", "כיסא", "חתול", "כלב"] },
  { word: "door", correct: "דלת", options: ["שולחן", "אופניים", "דלת", "ארון"] },
  { word: "shirt", correct: "חולצה", options: ["חולצה", "מראה", "ספר", "מיטה"] }
];

let currentQuestion = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  
  const question = words[currentQuestion];
  questionElement.textContent = `What is the meaning of "${question.word}"?`;

  optionsElement.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selected) {
  const question = words[currentQuestion];
  if (selected === question.correct) {
    alert("Correct!");
  } else {
    alert(`Wrong! The correct answer was "${question.correct}".`);
  }
  
  currentQuestion = (currentQuestion + 1) % words.length;
  loadQuestion();
}

window.onload = loadQuestion;
