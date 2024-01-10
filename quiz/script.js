const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale"
    }
  
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
  
    questionElement.textContent = quizQuestions[currentQuestion].question;
    optionsElement.innerHTML = "";
  
    quizQuestions[currentQuestion].options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedAnswer) {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      score++;
    }
  
    if (currentQuestion < quizQuestions.length - 1) {
      currentQuestion++;
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <button onclick="resetQuiz()">Try Again</button>
    `;
  }
  
  function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
  }
  
  loadQuestion();