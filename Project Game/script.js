let checkbutton = document.querySelector(".btn-check");
let guess = Math.floor(Math.random() * 20) + 1;

let high_score = document.querySelector(".highscore");
let score = 20;
const score_element = document.querySelector(".score");
let highest_score;
const message_element = document.querySelector(".message");
const againbutton = document.querySelector(".again");
const number_element = document.querySelector(".number");

checkbutton.addEventListener("click", function () {
  const userinput = Number(document.querySelector(".guess").value);
  if (userinput < 1 || userinput > 20) {
    message_element.textContent = "Choose Number between 1 and 20";
    return;
  }
  if (score < 1) {
    message_element.textContent = "Game Over";
    document.body.style.backgroundColor = "red";
  } else {
    if (userinput > guess) {
      score--;
      score_element.textContent = score;
      message_element.textContent = `Too High!`;
    } else if (userinput < guess) {
      score--;
      score_element.textContent = score;
      message_element.textContent = `Too Low!`;
    } else {
      message_element.textContent = `You Won!`;
      document.body.style.backgroundColor = "green";
      highest_score = score;
      high_score.textContent = highest_score;
      number_element.textContent = guess;
    }
  }
});

againbutton.addEventListener("click", function () {
  guess = Math.floor(Math.random() * 20) + 1;
  const userinput = document.querySelector(".guess");
  userinput.value = " ";
  highest_score = score;
  score = 20;
  score_element.textContent = score;
  document.body.style.backgroundColor = "#222";
  number_element.textContent = "?";
});


