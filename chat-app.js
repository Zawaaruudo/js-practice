// Create WebSocket connection
const socket = new WebSocket('ws://localhost:8080');  // Connect to WebSocket server


// When connected to the WebSocket server
socket.onopen = () => {
  console.log('Connected to the server');
};

// When receiving a message from the server
socket.onmessage = (event) => {
  const messages = document.getElementById('messages');
  const newMessage = document.createElement('li');
  newMessage.textContent = event.data;  // Display the message
  messages.appendChild(newMessage);
};

// Handle form submission to send a message to the server
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const messageInput = document.getElementById('message');
  const message = messageInput.value;  // Get the message from the input field
  socket.send(message);  // Send message to the server
  messageInput.value = '';  // Clear the input field
});

