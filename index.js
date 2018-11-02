const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;



function appendQuestion(question){
  let questionContainer = document.querySelector('.question-container');
  questionContainer.innerHTML = question.questionText;
}

function askQuestionThen(time){
  question = questions[0];
  appendQuestion(question);
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(question), time})
  })
}

function removeQuestion(question){
  return new Promise(()=>{
    let questionContainer = document.querySelector('.question-container');
    toggleTrueAndFalseButtons();
    questionContainer.innerHTML = '';
  })
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons(){
  let trueBtn = document.querySelector(".green");
  let falseBtn = document.querySelector(".red");
  return [trueBtn, falseBtn];
}

function toggleTrueAndFalseButtons(){
  let booleanBtns = trueAndFalseButtons();
  booleanBtns.forEach((btn)=>{ btn.classList.toggle("hide") });
}

function displayQuestionOnClick(){
  let askBtn = document.querySelector('a')
  return askBtn.addEventListener('click', () => {
    // debugger;
      toggleTrueAndFalseButtons();
      askQuestionThenRemoveQuestion(5000);
  })
}
