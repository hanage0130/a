const container = document.querySelector(".container");

let word = "abcdefghijklmnopqrstuvwxyz";

function updateDisplay() {
  container.textContent = word;
};

document.addEventListener('keydown', (event) => {
  if (event.key === word[0]) {
    word = word.slice(1, word.length)
  }
  updateDisplay();
});

updateDisplay();