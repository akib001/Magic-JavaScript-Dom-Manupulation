const quoteBox = document.querySelector(".quote__box");
const button1 = document.querySelector(".btn_1");
const button2 = document.querySelector(".btn_2");
const button3 = document.querySelector(".btn_3");
const button4 = document.querySelector(".btn_4");

const quotesArray = [
  'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  'The way to get started is to quit talking and begin doing.',
  'If life were predictable it would cease to be life, and be without flavor.',
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  "Life is what happens when you're busy making other plans."
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

quoteBox.textContent = quotesArray[getRandomInt(3)];

const button1Handler = () => {
    quoteBox.classList = "btn_green_style quote__box";
}

const button2Handler = () => {
    quoteBox.classList = "btn_yellow_style quote__box";
}

const button3Handler = () => {
    quoteBox.classList = "btn_blue_style quote__box";
}

const button4Handler = () => {
    quoteBox.classList = "btn_red_style quote__box";
}

// Event Listeners

button1.addEventListener("click", button1Handler)
button2.addEventListener("click", button2Handler)
button3.addEventListener("click", button3Handler)
button4.addEventListener("click", button4Handler)
