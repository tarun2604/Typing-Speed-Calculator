const words = ["Apple", "Banana", "Cherry", "Dog", "Elephant", "Fruit", "Giraffe", "Happy", "Internet", "Jungle", "fcuk", "armani", "goochi", "peterengland", "dejavu", "wrong", "lamborgini", "adidas", "vanhusen", "realme.", "oneplus,samsung,mi", "oxo:", "jockey"];

const wordsElement = document.getElementById("words");
const speedElement = document.getElementById("speed");
const timerElement = document.getElementById("timer");
const inputTextElement = document.getElementById("inputText");

let currentWordIndex = 0;
let correctWords = 0;
let startTime;

function displayWord() {
    wordsElement.innerText = words[currentWordIndex];
}

function checkInput() {
    const inputText = inputTextElement.value.trim();
    const currentWord = words[currentWordIndex];

    if (inputText === currentWord) {
        correctWords++;
        inputTextElement.value = "";
        currentWordIndex++;

        if (currentWordIndex === words.length) {
            end();
        } else {
            displayWord();
        }
    }
}

function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    const remainingTime = 60 - elapsedTime;

    if (remainingTime > 0) {
        timerElement.innerText = `0:${remainingTime < 10 ? '0' : ''}${remainingTime}`;
    } else {
        end();
    }
}

function end() {
    const minutes = 1;
    const wordsPerMinute = Math.round(correctWords / minutes);

    speedElement.innerText = `Speed: ${wordsPerMinute} words per minute`;

}

function start() {
    currentWordIndex = 0;
    correctWords = 0;
    startTime = new Date().getTime();

    displayWord();
    setInterval(updateTimer, 1000);
}

window.onload = start;
