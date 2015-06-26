var socketServer = require('ws').Server,
    wss          = new socketServer({ port: 3000 });

var messages   = [];

var sendMessages = function() {
  wss.clients.forEach(function each(client) {
    client.send(JSON.stringify(messages));
  });
}

var handleMessage = function incoming(ws, chatObj) {
  message = JSON.parse(chatObj);
  messages.push({userName: message.userName, date: new Date(), text: message.text});
  sendMessages(ws);
}

var newConnection = function connection(ws) {
  sendMessages();

  ws.on('message', function(message) { handleMessage(ws, message); });
}

wss.on('connection', newConnection);