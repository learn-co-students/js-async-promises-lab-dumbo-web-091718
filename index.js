const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const qContainer = document.querySelector('.question-container');
const buttons = document.querySelector('.true-false-list');

function appendQuestion() {
  qContainer.innerText = questions[0]["questionText"];
}

function askQuestionThen(time) {
  question = questions[0];

  return new Promise((resolve) => {
    setTimeout( function() {
      resolve(question)
    }, time);
  })
}

function removeQuestion() {
  return new Promise((resolve) => {
    qContainer.remove();
  })
}

function askQuestionThenRemoveQuestion(time) {

  askQuestionThen(time);

  return new Promise((resolve) => {
    setTimeout( () => {
      removeQuestion();
    }, 10000);
  })
}

function trueAndFalseButtons() {
  return [buttons.children[0], buttons.children[1]];
}

function toggleTrueAndFalseButtons() {

  trueAndFalseButtons().forEach((button) => {
    if (button.classList.contains("hide")) {
      button.classList.remove("hide");
    } else {
      button.classList.add("hide");
    }
  })
}

function displayQuestionOnClick() {
  let btn = document.querySelector('a');

  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(5000);
  })
}
