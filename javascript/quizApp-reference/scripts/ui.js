const uiQuestionContainer = document.getElementById("question");
const uiQuestionOptions = document.getElementById("question-options");
const questionSummaryContainer = document.getElementById("question-summary");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");

// Question Option Template
const QuestionOptionTemplate = document.createElement("template");
QuestionOptionTemplate.innerHTML = ` <button class="question-option"></button> `;

const renderedQuestions = {};

let quizSubmitted = false;

export function renderCurrentQuestion(question, questions) {
  if (!question) {
    return;
  }
  // set summary, question text and clear previous options
  questionSummaryContainer.innerText = `${question.number}/${questions.count}`;
  uiQuestionContainer.innerText = question.question;
  uiQuestionOptions.innerHTML = "";

  // update next and previous button states
  // previous btn state
  if (previousBtn && previousBtn.disabled && question.number > 1) {
    previousBtn.disabled = false;
  } else if (question.number === 1 && previousBtn) {
    previousBtn.disabled = true;
  }

  if (question.number === questions.count) {
    nextBtn.disabled = true;
  } else {
    if (nextBtn && nextBtn.disabled && question.number < questions.count) {
      nextBtn.disabled = false;
    }
  }

  // render previously selected options if exists
  if (renderedQuestions[question.number]?.optionsElements) {
    renderedQuestions[question.number].optionsElements.forEach((el) => {
      uiQuestionOptions.appendChild(el);
    });
    renderExplanation(question);
    return;
  }

  // construct options
  const optionsElements = question.options.map((value) => {
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
  question.optionsElements = optionsElements;
  renderedQuestions[question.number] = question;
  if (getQuizSubmitted()) {
    if (!question.isMarked) {
      markQuestion(question);
    }
    renderExplanation(question);
  }
}

// Update selected option in UI
function updateSelectedOption(selectedOption, question) {
  // do nothing if quiz is submitted
  if (quizSubmitted) {
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

// validate all questions are answered
export function validateQuizCompleted(questionsObj) {
  const allQuestions = questionsObj.all();
  const questionsCount = questionsObj.count;
  const answeredQuestionsCount = allQuestions.filter(
    (q) => q.isAnswered
  ).length;
  if (answeredQuestionsCount < questionsCount) {
    const confimResponse = window.confirm(
      `\nYou have answered ${answeredQuestionsCount} out of ${questionsCount} questions.\n Are you sure you want to submit?`
    );
    return confimResponse;
  }
  return window.confirm("\nAre you sure you want to submit?\n");
}

// mark the quiz
export function markQuiz(questionsObj) {
  const allQuestions = questionsObj.all();
  console.log("marking quiz", "questions:", allQuestions);
  let totalScore = 0,
    totalPossible = 0;
  allQuestions.forEach((question) => {
    totalScore += markQuestion(question);
    totalPossible += question.marks;
  });
  return { totalScore, totalPossible };
}

function markQuestion(question) {
  let correctOption,
    score = 0;
  if (question.optionsElements) {
    // update options as correct or wrong
    question.optionsElements.forEach((option) => {
      const value = option.dataset.key.replace("option-", "");
      option.dataset.iscorrect = "false";
      if (value === question.answer) {
        option.dataset.isanswer = "true";
        correctOption = option;
      }
    });
    // get the selected option
    const selectedOption = question.optionsElements.find((option) => {
      return option.dataset.selected === "true";
    });
    if (!selectedOption) {
      if (!renderExplanation.called) {
        renderExplanation(question);
      }
      return score;
    }
    if (selectedOption === correctOption) {
      selectedOption.dataset.iscorrect = "true";
      score = question.marks;
    }
    question.isMarked = true;
  } else {
    question.isMarked = false;
  }
  renderExplanation(question);
  return score;
}

export function setQuizSubmitted(value) {
  quizSubmitted = value;
}

export function getQuizSubmitted() {
  return quizSubmitted;
}

export function toggleClassesOn(el, toInsert, toRemove) {
  if (!el) return;
  if (el.classList.contains(toInsert)) {
    el.classList.remove(toInsert);
    el.classList.add(toRemove);
  } else {
    el.classList.remove(toRemove);
    el.classList.add(toInsert);
  }
}

function showElement(el, classVisible = "block", classHidden = "hidden") {
  if (!el) return;
  if (el.classList.contains(classHidden)) {
    el.classList.remove(classHidden);
    el.classList.add(classVisible);
  }
}

export function showQuizResult({ totalScore, totalPossible, passMark }) {
  const uiResultScore = document.getElementById("result-score");
  const uiResultRemark = document.getElementById("result-remark");
  const uiResultSection = document.getElementById("result");

  if (!uiResultSection || !uiResultScore || !uiResultRemark) {
    return;
  }
  const calculatedScore =
    Math.round((totalScore / totalPossible) * 10000) / 100;
  uiResultScore.innerText = calculatedScore;
  if (calculatedScore >= passMark) {
    uiResultRemark.innerText = "Pass";
    uiResultSection.dataset.remark = "pass";
  } else {
    uiResultRemark.innerText = "Fail";
    uiResultSection.dataset.remark = "fail";
  }
  toggleClassesOn(uiResultSection, "flex", "hidden");
}

export function renderExplanation(question) {
  const explanation = document.getElementById("explanation");
  const explanationToggle = document.getElementById("explanation-toggle");
  const explanationMsg = explanation.querySelector("#explanation-message");
  // handle non-existent elements
  if (!explanation || !explanationToggle || !explanationMsg) return;
  // insert explanation for element and show
  explanationMsg.innerText = question.explanation;
  if (!renderExplanation.called) {
    explanationToggle.addEventListener("click", () => {
      toggleClassesOn(explanationMsg, "hidden", "block");
    });
  }
  showElement(explanation);
  renderExplanation.called = true;
}
