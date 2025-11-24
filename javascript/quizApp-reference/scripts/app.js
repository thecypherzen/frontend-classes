import { quizQuestions } from "./questions.js";
import {
  getQuizSubmitted,
  markQuiz,
  renderCurrentQuestion,
  setQuizSubmitted,
  showQuizResult,
  validateQuizCompleted,
} from "./ui.js";

const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const PASS_Mark = 60;

previousBtn.addEventListener("click", (event) => {
  event.preventDefault();
  quizQuestions.previous();
  renderCurrentQuestion(quizQuestions.current(), quizQuestions);
});

nextBtn.addEventListener("click", (event) => {
  event.preventDefault();
  quizQuestions.next();
  renderCurrentQuestion(quizQuestions.current(), quizQuestions);
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  handleSubmitQuiz();
});

// event handlers
function handleSubmitQuiz() {
  console.log("submit quiz clicked");
  // check if quiz is already submitted
  if (getQuizSubmitted()) {
    console.log("quiz already submitted");
    return;
  }

  // check if quiz is completed
  const submitConfirmed = validateQuizCompleted(quizQuestions);
  if (!submitConfirmed) {
    return;
  }

  // disable submit button
  console.log("disabling submit button");
  submitBtn.disabled = true;
  setQuizSubmitted(true);

  // mark quiz
  const result = markQuiz(quizQuestions);
  result.passMark = PASS_Mark;
  showQuizResult(result);
}

// initial render
renderCurrentQuestion(quizQuestions.current(), quizQuestions);
