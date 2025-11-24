import { quizQuestions } from "./questions.js";
import {
  setQuizIsSubmitted,
  renderCurrentQuestion,
  showQuizResult,
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
  setQuizIsSubmitted(true);
  submitBtn.disabled = true;
  showQuizResult(result);
}

/**
 * markQuizSubmission
 *
 */
function markQuizSubmission(quizQuestions) {
  console.log("marking quiz");
  const allQuestions = quizQuestions.all();
  console.log(allQuestions[0]);
  let scores = 0,
    totalPossible = 0;
  allQuestions.forEach((question) => {
    totalPossible += question.marks;
    scores += markSingleQuestion(question);
  });
  return { scores, totalPossible, passMark: PASS_MARK }; // { scores: scores, totalPossible: totalPossible}
}

function markSingleQuestion(question) {
  let score = 0;
  if (question.optionsElements) {
    const correctOption = question.optionsElements.filter((el) => {
      const value = el.dataset.key.replace("option-", "");
      return value === question.answer;
    });
    question.optionsElements.forEach((el) => {
      if (el.dataset.selected === "true" && el === correctOption[0]) {
        score = question.marks;
      }
    });
  }
  return score;
}

renderCurrentQuestion(quizQuestions.current(), quizQuestions.count);
