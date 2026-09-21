function gameWord() {
  let word = "abcdefghijklmnopqrstuvwxyz";
  const judgeKey = (key) => {
    if (key === word[0]) {
      return true;
    } else {
      return false;
    }
  }
  const updateWord = () => {
    word = word.slice(1, word.length);
    
  }
  const inputKey = (key) => {
    if (judgeKey(key)) {
      updateWord();
    }
  }
  const getWord = () => word;
  return {getWord, inputKey};
}
function gameController() {
  const playGame = () => {
    const game = gameWord();
    const printWord = () => {
      console.log(game.getWord());
    }
    printWord();
    document.addEventListener('keydown', (event) => {
      game.inputKey(event.key);
      printWord();
    });
  }
  return { playGame };
}

gameController().playGame();





// document.addEventListener('keydown', (event) => {
//   if (event.key === str[0]) {
//     str = str.slice(1, str.length);
//   }
//   console.log(str);
// });

// let str = "abcdefghijklmnopqrstuvwxyz";

// console.log(str);