const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const questionContainer = document.querySelector('.question-container');
// const questContainer = document.getElementsByClassName("question-container")
function appendQuestion(question){
   questionContainer.innerHTML = question.questionText
}


function askQuestionThen(time) {
  // console.log(time);
  let questionIdx = questions.findIndex(question => question)
    question = questions[questionIdx].questionText;
   appendQuestion(question)
   let promise = new Promise(function(resolve, reject){
     setTimeout(function(){
       resolve(question)
       console.log(question); //log
     }, time)
   })
  }
  function removeQuestion(){ //removes the question
    return promise = new Promise(function(resolve, reject){
      return questionContainer.innerHTML = '';
      resolve()
    });
  }

  function askQuestionThenRemoveQuestion(time){
    console.log(time);
    return askQuestionThen(time).then(removeQuestion)
  }



  function trueAndFalseButtons(){ //returns the collection of true and false buttons
    const red = document.querySelector('.red')
    const green = document.querySelector('.green')
    console.log(green);
    green.innerHTML = "TRUE"
    red.innerHTML =  "FALSE"
    return [red, green]
  }

  function toggleTrueAndFalseButtons(){ //it adds the hide class || removes
    let tnF = trueAndFalseButtons()
    tnF.forEach((button)=>{
        button.classList.add('hide')
    });
  }

  function displayQuestionOnClick(){
    let btn = document.querySelector('.btn')
    btn.dispatchEvent(event)
    toggleTrueAndFalseButtons();
    setTimeout(function(){
      removeQuestion()
    }, 5000)
  }
