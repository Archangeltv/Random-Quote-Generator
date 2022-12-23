const adviceCount = document.querySelector(".adviceCount"),
  quote = document.querySelector(".quote"),
  human = document.querySelector(".author"),
  button = document.querySelector(".img");

const api_url = "https://zenquotes.io/api/quotes/";
randomQuote();

function randomQuote() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const randomNumber = Math.floor(Math.random() * 1600);
      quote.innerHTML = `" ${data[randomNumber].text} "`;
      human.innerHTML = `- - ${data[randomNumber].author}`;
      adviceCount.innerHTML = `# ${randomNumber}`;
      console.log(randomNumber);
      console.log(data);
    });
}

button.onclick = () => {
  randomQuote();
};
