const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question){
    let container = document.querySelector(".question-container")
    container.innerText = question.questionText
}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion(){
  let container = document.querySelector(".question-container")
  container.innerText = ""
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons(){
  return document.querySelector(".true-false-list").querySelectorAll(".btn")
}

function toggleTrueAndFalseButtons(){
  buttons = document.querySelector(".true-false-list").querySelectorAll(".btn")
  buttons.forEach(function(button){
    button.classList.toggle("hide")
  })
}

function  displayQuestionOnClick(){
  let button = document.querySelector("a")
  return button.addEventListener("click", function(event){
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}
