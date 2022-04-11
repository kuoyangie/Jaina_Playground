const userScore_Span = document.getElementById("jaina-score");
const next_button = document.getElementById("next");
const next_pagebt = document.getElementById("next-page");
const question_set = document.querySelector(".question > p");
const submit_button = document.getElementById("bt");
const message = document.getElementById("score");

let jaina_score = 0;
let firstNum = 0;
let secondNum = 0;
let symbol = '+';

function main(){
  next_button.addEventListener('click', function(){
      generateQuestion();
      submit_button.disabled = false;
      userScore_Span.style.color = "#bbd3f5";
      question_set.style.color = "#bbd3f5";
      message.style.color = "#bbd3f5";
      message.innerHTML = "Can you count how many marbles does little Jaina have?";
      userScore_Span.style.display = "none";
  })

  submit_button.addEventListener('click', function(){
    var input_value = document.getElementById("input").value;
    var result = returnExp(symbol, firstNum, secondNum);
    if (input_value == result){
      jaina_score++;
      userScore_Span.style.display = "block";
      userScore_Span.style.color = "#53c325";
      userScore_Span.innerHTML = 'You answered correctly ' + jaina_score + ' times!';
      submit_button.disabled = true;
      message.style.color = "#53c325";
      message.innerHTML = 'Correct!';
    }

    else {
      let wrongAnswer = 'Wrong answer! '
       + firstNum + ' ' + symbol + ' ' + secondNum + ' = ' + result + '!';
      question_set.style.color = "#ecff03";
      question_set.innerHTML = wrongAnswer;
      message.innerHTML = "Don't feel sad! Try again!";
      userScore_Span.style.display = "none";
      submit_button.disabled = true;
    }
  })
}

function generateQuestion(){
  firstNum = generateRandomNum();
  secondNum = generateRandomNum();
  symbol = generateRandomSymbol();

  if (firstNum < secondNum){
    let temp = secondNum;
    secondNum = firstNum;
    firstNum = temp;
  }

  let question = 'Question: What is ' + firstNum + ' ' + symbol + ' ' + secondNum + '?';
  question_set.innerHTML = question;
}

function generateRandomNum(){
  return Math.floor(Math.random() * 9 + 1);
}

function generateRandomSymbol(){
  const number = Math.floor(Math.random() * 2);

  if (number === 1){
    return '+';
  }
  return '-';
}

function returnExp(symbol, firstNum, secondNum) {
  if (symbol == '+') return firstNum + secondNum;
  else return firstNum - secondNum;
}
main();
