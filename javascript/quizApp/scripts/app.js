import { quizQuestions } from "./questions.js";
import {
  setQuizIsSubmitted,
  renderCurrentQuestion,
  showQuizResult,
  markQuizSubmission,
} from "./ui.js";

const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

const PASS_MARK = 55;

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

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  handleQuizSubmit(quizQuestions);
});

function handleQuizSubmit(quizQuestions) {
  const totalQuestionsCount = quizQuestions.count;
  const answeredCount = quizQuestions
    .all()
    .filter((question) => question.isAnswered).length;
  const submitConfimed =
    answeredCount < totalQuestionsCount
      ? window.confirm(
          `You've answered ${answeredCount}/${totalQuestionsCount} questions. Are you sure you want to submit?`
        )
      : window.confirm("Are you sure you want proceed?");
  if (!submitConfimed) return;

  const result = markQuizSubmission(quizQuestions);
  result.passMark = PASS_MARK;
  setQuizIsSubmitted(true);
  submitBtn.disabled = true;
  showQuizResult(result);
}

renderCurrentQuestion(quizQuestions.current(), quizQuestions.count);
