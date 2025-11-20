const uiQuestionContainer = document.getElementById("question");
const uiQuestionOptions = document.getElementById("question-options");
const QuestionOptionTemplate = document.createElement("template");
const questionSummaryContainer = document.getElementById("question-summary");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
QuestionOptionTemplate.innerHTML = ` <button class="question-option"></button> `;

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
    nextBtn.innerText = "Quiz Completed";
    nextBtn.disabled = true;
  } else {
    if (nextBtn && nextBtn.disabled && question.number < totalQuestions) {
      nextBtn.innerText = "Next";
      nextBtn.disabled = false;
    }
  }

  // construct options
  question.options.forEach((value) => {
    const clone = QuestionOptionTemplate.content.cloneNode(true);
    const option = clone.querySelector("button");
    option.setAttribute("data-key", `option-${value}`);
    option.innerText = value;
    // handle option selection
    option.addEventListener("click", () => {
      updateSelectedOption(option);
    });
    uiQuestionOptions.appendChild(option);
  });
}

// Update selected option in UI
function updateSelectedOption(selectedOption) {
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
}
