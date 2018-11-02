const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const questionContainer = document.querySelector('.question-container');

function appendQuestion(question) {
  questionContainer.innerHTML = question.questionText;
}

function askQuestionThen(time) {
  question = questions[0];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(question);
    }, time)
  });
}

function removeQuestion() {
  return new Promise((resolve, reject) => {
    questionContainer.innerHTML = '';
    resolve(); 
  })
}

function askQuestionThenRemoveQuestion(time) {
  questionContainer.innerHTML = question.questionText;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      questionContainer.innerHTML = '';
      resolve();
    }, time);
  })
}

function trueAndFalseButtons() {
  let trueBtn = document.querySelector('.green');
  let falseBtn = document.querySelector('.red');
  return [trueBtn, falseBtn];
}

function toggleTrueAndFalseButtons() {
  const btns = document.getElementsByClassName('btn');
  for (let btn of btns) {
    btn.classList.toggle('hide');
  } 
}

function displayQuestionOnClick() {
  
}