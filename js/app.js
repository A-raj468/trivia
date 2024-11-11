const flashcard = document.querySelector(".flashcard");
const front = document.querySelector(".front .card-text");
const back = document.querySelector(".back .card-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const categorySelect = document.getElementById("category-select");
const difficultySelect = document.getElementById("difficulty-select");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("time-left");
const getNewQuestionsBtn = document.getElementById("get-new-questions-btn");

let cards = [];
let currentCardIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
let amount = 20;

function decodeHTML(html) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = html;
    return textArea.value;
}

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

async function fetchTrivia() {
    const category = categorySelect.value !== "any" ? categorySelect.value : "";
    const difficulty = difficultySelect.value !== "any" ? difficultySelect.value : "";
    let url = `https://opentdb.com/api.php?amount=${amount}&type=multiple`;
    if (category) {
        url += `&category=${category}`;
    }
    if (difficulty) {
        url += `&difficulty=${difficulty}`;
    }
    try {
        const response = await fetch(url);
        const data = await response.json();
        cards = data.results.map(trivia => ({
            prompt: decodeHTML(trivia.question),
            answer: decodeHTML(trivia.correct_answer)
        }));
        currentCardIndex = 0;
        displayCard(currentCardIndex);
        startTimer();
    } catch (error) {
        console.error("Error fetching trivia data:", error);
        useDefaultCards();
    }
}

function useDefaultCards() {
    cards = [
        { prompt: "What is the capital of France?", answer: "Paris" },
        { prompt: "What is 2 + 2?", answer: "4" },
        { prompt: "Who wrote 'Hamlet'?", answer: "William Shakespeare" }
    ];
    currentCardIndex = 0;
    displayCard(currentCardIndex);
    startTimer();
}

function displayCard(index) {
    if (cards.length === 0) return;
    flashcard.classList.remove("flipped");
    front.textContent = cards[index].prompt;
    back.textContent = cards[index].answer;
}

function startTimer() {
    timeLeft = 30;
    timerElement.textContent = timeLeft;
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            flashcard.classList.add("flipped");
        }
    }, 1000);
}

flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
});

prevBtn.addEventListener("click", () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        displayCard(currentCardIndex);
        startTimer();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentCardIndex < cards.length - 1) {
        currentCardIndex++;
        displayCard(currentCardIndex);
        startTimer();
    }
});

getNewQuestionsBtn.addEventListener("click", () => {
    fetchTrivia();
});

async function fetchCategories() {
    const url = 'https://opentdb.com/api_category.php';
    try {
        const response = await fetch(url);
        const data = await response.json();
        const categories = data.trivia_categories;

        categorySelect.innerHTML = '';
        const defaultCategoryOption = document.createElement("option");
        defaultCategoryOption.value = "any";
        defaultCategoryOption.textContent = "Any Category";
        categorySelect.appendChild(defaultCategoryOption);

        categories.forEach(category => {
            const option = document.createElement("option");
            option.value = category.id;
            option.textContent = category.name;
            categorySelect.appendChild(option);
        });

        fetchTrivia();
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}

fetchCategories();

categorySelect.addEventListener("change", fetchTrivia);
difficultySelect.addEventListener("change", fetchTrivia);
