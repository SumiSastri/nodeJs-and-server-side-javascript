## Why sockets?

- To access the excercise files `npm init -y`

- This section on the sockets library is brief and covers how sockets have been used as both the projects in this repo use sockets.

- Node send requests from the client or browser to Node, but not in the reverse. So when we send a message from the server to the backend the console will log the result.

```
{ name: 'Josie', message: 'Bonjour' }
{ name: 'Josie', message: 'Bonjour' }
{ name: 'Josie', message: 'Bonjour' }
```

- Node can not notify the browser/ user that the message has been updated in a live-chat app
- The only way to achieve this behavior with HTTP requests is to do something called polling. With polling, every few seconds we send an HTTP request to check for updates
- One WebSocket library is Socket.IO that works for both the browser and for Node. The advantage of this library is that if a browser is older and does not support WebSockets, it will default back to polling and it has that functionality built in so it will always work, even if it's not as efficient with older browsers.

How to get sockets running in a project.

1. `npm install -s socket.io`

2. Tie it up with the Express server in `server.js` and add the `http module` from node

3. Instantiate both modules in server.js

```
const server = require('http').Server(app);
const io = require('socket.io')(http)
```

change the `app.listen()` method

```
server.listen(PORT, () => console.log(`your-app listening on ${PORT}`));
```

4. Use the socket.io method with an event listener in server.js, the method takes the event "connection" as the first argument, this opens the socket, and we can check if a user is connected. The next method `socket.emit()` actually relays the message as an object, as the socket is on, we continue with the method `socket.on()` which listens to the next event, in this we pass the data that is coming back from the client-side.

```
io.on('connection', (socket) => {
console.log('user connected');
socket.emit('message', { socketTestMessage: 'testing socket - hello 1,2,3 testing, testing...'});
socket.on('another event', (data) => {
console.log(data);
})
})
```

Everything works by events in socket, so, there's this event of connection when this event of connection happens then do this other event which is called message and send a message. So what we'll do is send this data. Basically, once someone is connected we'll send a message to that person so then we're going to wait for another event. So, there's going to be another event being emitted from the client, in the index.html Whatever data we pass from that other event in the client side file `index.html`, then we'll console log that event.

5. Connect backend to the front end in `index.html`

In the HTML file, after the body tags, add 2 script files.

```
<script src="/socket.io/socket.io.js"></script>
  <script>
    const socket = io.connect("http://localhost:5000");
    socket.on("message", (data) => {
      console.log(data);
      socket.emit("another event", {
        userReply: "The socket test worked, proceed",
      });
    });
  </script>
```

In the front end console and the back end console you will see the responses.

**NOTE separation of concerns does not work, if you have a separate HTML and JavaScript file**

- This method needs some research as it is not working.
  If you place the `<script src="/socket.io/socket.io.js"></script> <script src="scripts.js" charset="utf-8"></script>` in the HTML body, there is no connection and you get a 404 error
- debug option from stack overflow
  `<script src="http://127.0.0.1:5500/socket.io/socket.io.js"></script>`
- In the JavaScript files if you add the instantion of the socket library and import it as above into your HTML it does not work

```
const socket = io.connect("http://localhost:5000");
socket.on("message", (data) => {
  console.log(data);
  socket.emit("another event", {
    userReply: "The socket test in progress",
  });
});

```

- debug options also did not work - connect to IP`const socket = io.connect("http://127.0.0.1:5500/")` or use the http node module `const socket = io(http)`

6. Adding style-sheets and libraries
