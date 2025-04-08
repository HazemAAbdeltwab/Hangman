const letters = "abcdefghijklmnopqrstuvwxyz";
let letterArray = Array.from(letters);
let lettersContainer = document.querySelector(".the-letter");
letterArray.forEach((letter) => {
  let span = document.createElement("span");
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});

const words = {
  country: [
    "Oman",
    "Palestine",
    "Qatar",
    "Saudi",
    "Bahrain",
    "Yemen",
    "Kuwait",
    "Iraq",
    "Jordan",
    "Lebanon",
    "Syria",
    "Egypt",
  ],
  artist: ["Elissa", "Adel Emam"],
  animal: [
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
  ],
  color: ["red", "blue", "gray", "white", "black", "green", "yellow"],
};

let allkeys = Object.keys(words);
let randomkeynumber = Math.floor(Math.random() * allkeys.length);
let randomkeyname = allkeys[randomkeynumber];
let randomkeyvalue = words[randomkeyname];
document.querySelector(".container .game-info .category span").innerHTML =
  randomkeyname;
let randomvaluenummber = Math.floor(Math.random() * randomkeyvalue.length);
let randomvaluename = randomkeyvalue[randomvaluenummber];
console.log(randomvaluename);
let letterguess = document.querySelector(".the-letter-guess");
let answerword = Array.from(randomvaluename);
console.log(answerword);

answerword.forEach((letter) => {
  let emptyspan = document.createElement("span");
  if (letter === " ") {
    emptyspan.className = "white-span";
  }
  letterguess.appendChild(emptyspan);
});

theGuessSpan = document.querySelectorAll(".the-letter-guess span");
let theWrondCounter = 0;
let theDraw = document.querySelector(".hangman-draw");
document.addEventListener("click", (e) => {
  let theStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let clickedLetter = e.target.innerHTML.toLowerCase();
    console.log(clickedLetter);
    let theChosenWord = Array.from(randomvaluename.toLowerCase());
    theChosenWord.forEach((wordLetter, wordindex) => {
      if (clickedLetter === wordLetter.toLowerCase()) {
        theStatus = true;
        theGuessSpan.forEach((span, spanindex) => {
          if (wordindex === spanindex && theStatus) {
            span.innerHTML = clickedLetter;
          }
        });
      }
    });
    checkGuessedWord();
    if (theStatus !== true) {
      theWrondCounter++;
      console.log(theWrondCounter);
      theDraw.classList.add(`wrong-${theWrondCounter}`);
      if (theWrondCounter === 3) {
        endGame();
        lettersContainer.classList.add("finished");
      }
    }
  }
});

function endGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `the game is over and the word was ${randomvaluename}`
  );
  div.className = "popUp";
  div.appendChild(divText);
  document.body.appendChild(div);

  document.addEventListener("click", () => {
    location.reload();
  });
}
function checkGuessedWord() {
  const guessedWord = Array.from(theGuessSpan, (span) =>
    span.innerHTML.toLowerCase()
  ).join("");
  if (guessedWord === randomvaluename.toLowerCase()) {
    // Display success message
    showSuccessMessage();
  }
}
function showSuccessMessage() {
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `Congratulations! You guessed the word correctly: ${randomvaluename}`
  );
  div.className = "popUp";
  div.appendChild(divText);
  document.body.appendChild(div);

  // Reload the page after the message is dismissed
  document.addEventListener("click", () => {
    location.reload();
  });
}
