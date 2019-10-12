// Write your javascript here
var data = [];

data = [{question: "How are you?", answer:"I am good."},
        {question: "How is job?", answer:"Great!"},
        {question: "What are your doing this weekend?", answer:"Travelling Outside"}]


function pickRandomNumber(){
     return (Math.floor(Math.random()*((data.length-1)+1)));
   
}
function pickRandomQuestion(){
     return (data[pickRandomNumber()]);
  
}
const randomQuestion = pickRandomQuestion();


const h1var = document.createElement('h1');
h1var.id = "title";
h1var.innerHTML = "Mocha Tests";

document.body.append(h1var);

const divVar = document.createElement('div');
divVar.id = "card";

document.body.append(divVar)

const pVar = document.createElement('p');
pVar.id = "question";
pVar.innerHTML = randomQuestion.question;

const parent2 = document.getElementById("card");
parent2.append(pVar)

function showAnswer(){
 
 const ansVar = document.getElementById("answer");
 ansVar.innerHTML = randomQuestion.answer;
 console.log(ansVar.innerHTML)

}

const btnEle = document.createElement('button');
btnEle.id = "showAnswer";
btnEle.innerText = "Show Answer!";
document.body.append(btnEle);

const btnEvent = document.getElementById("showAnswer");

btnEle.setAttribute("onClick", "showAnswer()");

console.log(btnEvent)



