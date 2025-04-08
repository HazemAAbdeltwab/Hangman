# 🎮 Hangman Game

A fun and interactive browser-based **Hangman game** built using **HTML**, **CSS**, and **Vanilla JavaScript**. The game selects a random word from various categories and challenges the player to guess it, one letter at a time.

---

## 🌟 Features

- Random word selection from multiple categories:
  - Country
  - Artist
  - Animal
  - Color
- Visual hangman drawing that progresses with each wrong guess
- Displays category hint for each word
- Handles spaces in words (e.g., multi-word names)
- Win and loss states with styled pop-up messages
- Simple reload on game end for a fresh round

---

## 🛠 Technologies Used

- **HTML** – Markup structure
- **CSS** – Styling and responsive layout
- **JavaScript** – Game logic and DOM manipulation

---

## 🧠 How It Works

1. A random category and word are chosen on page load.
2. The player selects letters by clicking on them.
3. Correct guesses reveal the letter in the word.
4. Incorrect guesses incrementally draw parts of the hangman.
5. The game ends when:
   - All letters are guessed correctly (win).
   - 3 incorrect guesses are made (lose).
6. A message is displayed, and the game reloads on click.

---
