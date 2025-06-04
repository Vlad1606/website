// js/chatbot.js
let questions = [
    {
      question: "Do you feel happy?",
      options: { a: "Yes", b: "No" },
      correctAnswer: "a",
      correctResponse: "Great to hear that!",
      incorrectResponse: "I'm sorry to hear that."
    },
    {
      question: "Do you like our blog?",
      options: { a: "Yes", b: "No" },
      correctAnswer: "a",
      correctResponse: "Thank you for your feedback!",
      incorrectResponse: "We'll try to improve."
    }
  ];
  
  let currentQuestionIndex = 0;
  const chatContainer = document.getElementById("chat-container");
  const chatForm = document.getElementById("chat-form");
  const userInput = document.getElementById("user-input");
  
  function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let optionsText = Object.keys(currentQuestion.options)
      .map(key => `${key}. ${currentQuestion.options[key]}`)
      .join(' ');
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question} <br>${optionsText}`;
    chatContainer.appendChild(botMessage);
    scrollChatToBottom();
  }
  
  function scrollChatToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  
  chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let userResponse = userInput.value.trim().toLowerCase();
    if (userResponse === "") return;
    
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.innerHTML = `<strong>You:</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);
    
    let currentQuestion = questions[currentQuestionIndex];
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>Bot:</strong> `;
    if (userResponse === currentQuestion.correctAnswer) {
      botResponse.innerHTML += currentQuestion.correctResponse;
    } else {
      botResponse.innerHTML += currentQuestion.incorrectResponse;
    }
    chatContainer.appendChild(botResponse);
    
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    userInput.value = "";
    displayQuestion();
    scrollChatToBottom();
  });
  
  displayQuestion();
  