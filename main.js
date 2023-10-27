document.getElementById("btn").addEventListener("click", btnClicked);
//set button

let answer = document.getElementById("answer");
answer.style.color = "green";
//set the color of answer

function btnClicked() {
  let question = document.getElementById("input-in").value;
  //question input
  
  if (question === "Does a magic 8 ball actually work?") {
    answer.innerHTML = "How dare you doubt me!";
  } else if (question === "Is JavaScript awesome?") {
    answer.innerHTML = "Of course!";
  } else if (question === "") {
    answer.innerHTML = "Please ask a question...";
  } //certain types of questions
  else {
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.2) {
      answer.innerHTML = "Without a Doubt.";
    } else if (randNum < 0.4) {
      answer.innerHTML = "As I see it,yes.";
    } else if (randNum < 0.6) {
      answer.innerHTML = "Concentrate and ask again.";
    } else if (randNum < 0.8) {
      answer.innerHTML = "Don't count on it.";
    } else {
      answer.innerHTML = "Outlook not so good.";
    }
  } // random answers
}
