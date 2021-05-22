const jokeQuestion = document.getElementById("question");
const jokeAnswer = document.getElementById("back");
const jokeBtn = document.getElementById("joke_btn");

jokeBtn.addEventListener("click", function () {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((message) => message.json())
    .then((data) => {
      jokeQuestion.innerText = `${data.setup}`;
      console.log(data);
      jokeAnswer.innerText = `${data.punchline}`;
    });
});
