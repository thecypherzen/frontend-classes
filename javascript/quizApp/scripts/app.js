import { quizQuestions } from "./questions.js";
import { renderCurrentQuestion } from "./ui.js";

const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");

previousBtn.addEventListener("click", (event) => {
  event.preventDefault();
  quizQuestions.previous();
  renderCurrentQuestion(quizQuestions.current(), quizQuestions.count);
});

nextBtn.addEventListener("click", (event) => {
  event.preventDefault();
  quizQuestions.next();
  renderCurrentQuestion(quizQuestions.current(), quizQuestions.count);
});

renderCurrentQuestion(quizQuestions.current(), quizQuestions.count);
