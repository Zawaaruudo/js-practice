const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('A user connected');

  ws.on('message', (message) => {
    const textMessage = message.toString(); // Convert Buffer to string
    console.log('Received message:', textMessage);

    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(textMessage); // Send the message as a string
      }
    });
  });

  ws.on('close', () => {
    console.log('A user disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
