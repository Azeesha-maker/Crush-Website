const submitButton = document.getElementById("submit-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chatBox");
const welcomeMessage = document.getElementById("welcome-message");

let userName = "";
let questionIndex = 0;

const questions = [
  "What's your favorite color?",
  "What kind of music do you like?",
  "Do you have any hobbies?"
];

submitButton.addEventListener("click", handleUserInput);

function handleUserInput() {
  const inputText = userInput.value.trim();

  if (inputText !== "") {
    if (questionIndex === 0) {
      // Store user's name and greet them
      userName = inputText;
      welcomeMessage.textContent = `Hello, ${userName}! ${questions[questionIndex]}`;
      userInput.value = "";
      questionIndex++;
    } else if (questionIndex < questions.length) {
      // Display user's answer and ask the next question
      welcomeMessage.textContent = `${inputText}... Cool! ${questions[questionIndex]}`;
      userInput.value = "";
      questionIndex++;
    } else {
      // End the chat and thank the user
      welcomeMessage.textContent = `Thanks for answering all the questions, ${userName}! You're awesome!`;
      userInput.disabled = true;
      submitButton.disabled = true;
    }
  }
}

// Allow users to submit answers by pressing 'Enter' key as well
userInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    handleUserInput();
  }
});
