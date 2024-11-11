# Flashcard Trivia Game

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

A fun trivia game that displays questions on flashcards with a timer and scoring system. Users can answer questions, track their score, and get new trivia questions with each round.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
   1. [Prerequisites](#prerequisites)
   2. [Installation](#installation)
   3. [Usage](#usage)
5. [Game Controls](#game-controls)
6. [API Usage](#api-usage)
7. [Customization](#customization)
8. [License](#license)

## Introduction

This project is a Flashcard Trivia Game that allows users to answer trivia questions in a card-flipping style format. The game includes:

- A timer to challenge players.
- A scoring system to keep track of correct answers.
- The ability to fetch new sets of trivia questions.
- Category and difficulty selection.

## Features

- **Dynamic Question Fetching**: Questions are fetched from the [Open Trivia Database API](https://opentdb.com/).
- **Timer**: Each question has a 30-second countdown timer to answer.
- **Scoring System**: Users earn points for correct answers.
- **Categories & Difficulty**: Players can choose the category and difficulty of the questions.
- **Card Flip Animation**: Each question is displayed on a flashcard that flips to reveal the answer.
- **New Questions**: A button that lets users fetch new trivia questions.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling for the page and flashcards.
- **JavaScript**: Handles user interactions, timers, API calls, and game logic.
- **Open Trivia Database API**: Provides trivia questions and categories.

## Getting Started

Follow these instructions to run the Flashcard Trivia Game locally.

### Prerequisites

Before you begin, make sure you have the following installed:

- A modern web browser (Chrome, Firefox, etc.)
- An internet connection (for fetching questions and categories)

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/flashcard-trivia-game.git
   ```
2. Navigate to the project directory:

```bash
cd flashcard-trivia-game
```

### Usage

1. Open the `index.html` file in your browser to start playing the game.
2. Select a category and difficulty (optional).
3. Click on the "Get New Questions" button to fetch trivia questions.
4. Answer the questions within the 30-second timer by flipping the flashcard.
5. The game tracks your score as you progress through the questions.

## Game Controls

- **Prev Button**: Navigate to the previous question.
- **Next Button**: Navigate to the next question.
- **Get New Questions**: Fetch a new set of trivia questions based on the selected category and difficulty.
- **Flashcard Click**: Flip the card to reveal the answer.

## API Usage

The trivia questions are fetched from the [Open Trivia Database API](https://opentdb.com/api_config.php). The game supports the following API features:

- **Categories**: Users can choose from a wide range of trivia categories.
- **Difficulty**: Choose between "Easy", "Medium", or "Hard" difficulty.
- **Question Types**: The game uses "multiple" type questions (multiple-choice questions).

To fetch new questions, the API call used is:

```javascript
fetch(
  `https://opentdb.com/api.php?amount=${amount}&type=multiple&category=${category}&difficulty=${difficulty}`,
);
```

### Available Parameters:

- `amount`: The number of questions to fetch.
- `category`: The category of questions (optional).
- `difficulty`: The difficulty of the questions ("easy", "medium", or "hard").

## Customization

To customize the game, you can modify the following:

- **Category and Difficulty**: The game uses a dropdown to select category and difficulty, but you can change the available options in the code.
- **Styling**: You can update the styles.css file to modify the appearance of the flashcards, buttons, and layout.
- **Timer Duration**: By default, the timer is set to 30 seconds per question. You can change this duration in the `app.js` file by modifying the `timeLeft` variable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to contribute to the project by opening issues or submitting pull requests.
