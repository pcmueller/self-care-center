// global variables

var mantras = [
"I feel, I exist",
"I am a warrior, not a worrier",
"Breathing in, I send myself love \n Breathing out, I send love to someone else who needs it",
"I write my destiny",
"Yesterday is not today",
"I am calm, I am centered",
"Every day is a second chance",
"Feel the fear and do it anyway",
"Tell the truth and love everyone",
"I am free from sadness",
"I choose purpose over perfection",
"Expect nothing and appreciate everything",
"I am enough",
"In the beginning it is you, in the middle it is you, and in the end it is you",
"I love myself",
"Find a way or make a new one",
"I am present now",
"Inhale the future, exhale the past",
"This too shall pass",
"Yesterday is not today",
"I can only control myself",
"I am free from anger",
"The only constant is change",
"In myself I trust",
"You were born to be real, not to be perfect",
"Don’t say maybe if you want to say no",
"What’s meant to be will always find a way",
"I am the sky, the rest is weather"
];

var affirmations = [
"I choose curiousity over judgement",
"I forgive myself and set myself free",
"I appreciate those closest to me",
"My healing is already in progress",
"I am in the process of becoming the best version of myself",
"I have the freedom & power to create the life I desire",
"I am a vessel for love",
"I choose to be kind to myself and love myself unconditionally",
"My possibilities are endless",
"My creative potential is endless",
"I am worthy of my dreams",
"The more I give, the more I receive",
"I am unique and it is my greatest strength",
"I allow abundance into my life",
"All is well and I am safe",
"I focus on what is truly essential",
"I have all the answers within me",
"I deserve to be loved and respected",
"Time is on my side",
"I am in control of my reactions",
"Every day I am getting healthier and stronger",
"I wake up today with strength in my heart and clarity in my mind",
"My confidence inspires others",
"I honor my body by trusting the signals that it sends me",
"I choose kindness and compassion",
"I have the power to love my dreams",
"I am a magnet for miracles",
"I manifest perfect health by making smart choices"
];

var currentMessage = "";
var radioSelected = undefined;


// HTML target variables

var radioInput = document.querySelectorAll("input[name=choice]");

var receiveMessageButton = document.querySelector("#receive-message-button");
var meditationIcon = document.querySelector(".meditation-icon");
var messageDisplay = document.querySelector(".message-display");


// event listeners

receiveMessageButton.addEventListener("click", getRandomMessage);


// event handler functions

function getRandomMessage() {
  event.preventDefault();

  for (var i = 0; i < radioInput.length; i++) {
    if (radioInput[i].checked) {
      radioSelected = radioInput[i].value;
    }
  }

  if (radioSelected === "affirmation") {
    currentMessage = affirmations[getRandomIndex(affirmations)];
  } else if (radioSelected === "mantra") {
    currentMessage = mantras[getRandomIndex(mantras)];
  }
 
  if (currentMessage) {
    displayMessage(currentMessage);
  }
}
// helper functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayMessage(message) {
  messageDisplay.innerText = currentMessage;
  messageDisplay.classList.remove("hidden");
  meditationIcon.classList.add("hidden");
}