const container = document.querySelector(".container");

let str = "";
let word = document.createElement("div");
const words = ["correction","harmony","admission","equal","talkative","twin","camp","middle","candidate","facade","acid","bronze","reinforce","tire","sugar","fragrant","ballot","basic","pocket","vigorous","swear","text","coin","copper","rack","small","pain","nest","spit","sea","residence","deter","soar","win","or","differ","stay","direct","hour","old","by","admire","presentation","artificial","thesis","spite","hospital","project","recruit","discount"]
;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

for (let i = 0; i < 10; i++) {
  str += getRandomWord();
  str += " ";
}

word.classList.add("word");

function updateDisplay() {
  word.textContent = str;
  container.textContent = "";
  container.appendChild(word);
};

document.addEventListener('keydown', (event) => {
  if (event.key === str[0]) {
    str = str.slice(1, str.length)
    if (event.key === " ") {
      str += getRandomWord();
      str += " ";
    }
  }
  updateDisplay();
});

updateDisplay();