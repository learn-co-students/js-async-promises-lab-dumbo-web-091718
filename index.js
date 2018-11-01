const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

let qDiv=document.querySelector('.question-container')

function appendQuestion(question){
  qDiv.innerHTML=question.questionText
}

function askQuestionThen(time){
  question=questions[0]
  appendQuestion(question)
  return new Promise((resolve) =>{
    setTimeout(()=>{
      resolve(question)
    },time)
  })
}

function removeQuestion(){
  return new Promise(function(){
    qDiv.innerHTML=""
  })
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons(){
   let btns= document.querySelector('.true-false-list').querySelectorAll('.btn')
  btns[0].innerHTML="TRUE"
  btns[1].innerHTML="FALSE"
  return btns
}

function toggleTrueAndFalseButtons() {
  let t = trueAndFalseButtons()

  t.forEach(function(e) {
    e.classList.toggle("hide")
  
  })
}

function displayQuestionOnClick(){
  let btn=document.querySelector('a')
  btn.addEventListener('click',function(){
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}
