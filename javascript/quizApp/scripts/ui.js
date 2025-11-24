const uiQuestionContainer = document.getElementById("question");
const uiQuestionOptions = document.getElementById("question-options");
const QuestionOptionTemplate = document.createElement("template");
const questionSummaryContainer = document.getElementById("question-summary");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
QuestionOptionTemplate.innerHTML = ` <button class="question-option"></button> `;

export let quizIsSubmitted = false;

export function renderCurrentQuestion(question, totalQuestions) {
  if (!question) {
    return;
  }
  // set summary, question text and clear previous options
  questionSummaryContainer.innerText = `${question.number}/${totalQuestions}`;
  uiQuestionContainer.innerText = question.question;
  uiQuestionOptions.innerHTML = "";

  // update next and previous button states
  // previous btn state
  if (previousBtn && previousBtn.disabled && question.number > 1) {
    previousBtn.disabled = false;
  } else if (question.number === 1 && previousBtn) {
    previousBtn.disabled = true;
  }

  if (question.number === totalQuestions) {
    nextBtn.disabled = true;
  } else {
    if (nextBtn && nextBtn.disabled && question.number < totalQuestions) {
      nextBtn.innerText = "Next";
      nextBtn.disabled = false;
    }
  }
  if (question.optionsElements) {
    uiQuestionOptions.innerHTML = "";
    question.optionsElements.forEach((element) => {
      uiQuestionOptions.appendChild(element);
    });
    return;
  }

  // construct options
  const renderedOptions = question.options.map((value) => {
    const clone = QuestionOptionTemplate.content.cloneNode(true);
    const option = clone.querySelector("button");
    option.setAttribute("data-key", `option-${value}`);
    option.innerText = value;
    // handle option selection
    option.addEventListener("click", () => {
      updateSelectedOption(option, question);
    });
    uiQuestionOptions.appendChild(option);
    return option;
  });
  question.optionsElements = renderedOptions;
}

// Update selected option in UI
function updateSelectedOption(selectedOption, question) {
  if (quizIsSubmitted) {
    return;
  }
  const allOptions = Array.from(
    document.querySelectorAll(".question-option") || []
  );
  allOptions.forEach((option) => {
    if (selectedOption === option) {
      option.setAttribute("data-selected", "true");
    } else {
      option.setAttribute("data-selected", "false");
    }
  });
  question.isAnswered = true;
}

export function setQuizIsSubmitted(value) {
  quizIsSubmitted = value;
}

export function getQuizIsSubmitted() {
  return quizIsSubmitted;
}

export function showQuizResult({ scores, totalPossible, passMark }) {
  const uiResultScore = document.getElementById("result-score");
  const uiResultRemark = document.getElementById("result-remark");
  const resultSection = document.getElementById("result");

  if (!uiResultRemark || !uiResultScore || !resultSection) {
    return;
  }
  const percentage = Math.round((scores / totalPossible) * 1000) / 10;
  const remark = percentage >= passMark ? "Pass" : "Fail";
  uiResultScore.innerText = percentage;
  uiResultRemark.innerText = remark;
  resultSection.dataset.remark = remark.toLowerCase();
  if (resultSection.classList.contains("hidden")) {
    resultSection.classList.remove("hidden");
    resultSection.classList.add("flex");
  }
}
