// Selectors

const container = document.querySelector(".container");
const text = document.querySelector(".text");
const button = document.querySelector(".button");

// Data
function getData() {
  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((data) => (text.innerHTML = data.quote));
}

// button
button.addEventListener("click", getData);
