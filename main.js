// global variables

var mantras = [
"Breathing in, I send myself love.Breathing out, I send love to someone else who needs it",
"Don’t let yesterday take up too much of today",
"Every day is a second chance",
"Tell the truth and love everyone",
"I am free from sadness",
"I am enough",
"In the beginning it is you, in the middle it is you and in the end it is you",
"I love myself",
"I am present now",
"Inhale the future, exhale the past",
"This too shall pass",
"Yesterday is not today",
"The only constant is change",
"Onward and upward",
"I am the sky, the rest is weather"
];

var affirmations = [
"I forgive myself and set myself free",
"I believe I can be all that I want to be",
"I am in the process of becoming the best version of myself",
"I have the freedom & power to create the life I desire",
"I choose to be kind to myself and love myself unconditionally",
"My possibilities are endless",
"I am worthy of my dreams",
"I am enough",
"I deserve to be healthy and feel good",
"I am full of energy and vitality and my mind is calm and peaceful",
"Every day I am getting healthier and stronger",
"I honor my body by trusting the signals that it sends me",
"I manifest perfect health by making smart choices"
];

var currentMessage = "";
var radioSelected = undefined;


// HTML target variables


// OPTION #1
var radioAffirm = document.getElementById("#affirmation");
var radioMantra = document.getElementById("#mantra");

// OPTION #2
var radioInput = document.querySelectorAll("input");


var receiveMessageButton = document.querySelector("#receive-message-button");
var meditationIcon = document.querySelector("#meditation-button");
var messageDisplay = document.querySelector(".message-display");


// event listeners

receiveMessageButton.addEventListener("click", getRandomMessage);


// !!!TEST ZONE!!!
console.log(radioInput);
console.log(radioInput.length);


// event handler functions

// OPTION #1
// conditional to test for Boolean 'checked' value of both radio elements, targeted separately by id
function getRandomMessage() {
  if (radioAffirm.checked) {
    currentMessage = affirmations[getRandomIndex(affirmations)];
    console.log("AFFIRMATION TIME");
  } else if (radioMantra.checked) {
    currentMessage = mantras[getRandomIndex(mantras)];
    console.log("MANTRA TIME");
  }
//


// OPTION #2
// conditional iterating through input array (length of 2 radio buttons), executing on Boolean 'checked' value
  for (var i = 0; i < radioInput.length; i++) {
    if (radioInput[i].checked) {
      radioSelected = radioInput[i].value;
    }
  }
  if (radioSelected.value === "affirmation") {
    currentMessage = affirmations[getRandomIndex(affirmations)];
    console.log("AFFIRMATION TIME");
  } else {
    currentMessage = mantras[getRandomIndex(mantras)];
    console.log("MANTRA TIME");
  }
//

  displayMessage(currentMessage);
}


// helper functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayMessage(message) {
  messageDisplay.innerText = currentMessage;
  messageDisplay.classList.remove(".hidden");
  meditationIcon.classList.add(".hidden");
}