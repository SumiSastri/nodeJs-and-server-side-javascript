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
- The analogy is of kids in a car asking the parents when they are going to arrive every second which is what polling does
- An event based library tells you when there is an update listening to an event and then what to do, the analogy is that the parents tell the kids they will notify them when they arrive, and unless they do that, they have not arrived.
- One WebSocket library is Socket.IO that works for both the browser and for Node. The advantage of this library is that if a browser is older and does not support WebSockets, it will default back to polling and it has that functionality built in so it will always work.

How to get sockets running in a project.

1. `npm install -s socket.io`

2. Tie it up with the Express server in `server.js` and add the `http module` from node

3. Instantiate both modules in server.js

```
const server = require("http").Server(app);
const io = require("socket.io")(server);
```

change the `app.listen()` method

```
server.listen(PORT, () => console.log(`your-app listening on ${PORT}`));
```

Another variation:

```
const http = require('http').Server(app)
const io = require('socket.io')(http)
```

With the server assigned to a variable

```
const server = http.listen(5000, () => {
  console.log("your-app listening on port", server.address().port);
});
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

Everything works by events in socket. There's this event of connection, the call back determines what happens on the connection event. For the moment we are just logging the event to console to check that the call back is working. With the message event the call back is to send a message. So what we'll do is send this data.

Basically, once someone is connected we'll send a message to that person so then we're going to wait for another event. So, there's going to be another event being emitted from the client, in the index.html Whatever data we pass from that other event in the client side file `index.html`, then we'll console log that event.

5. Connect backend to the front end in `index.html`

In the HTML file, after the body tags, add 2 script files. The second script tag goes above the jQuery, the first script tag is the front-end CDN to sockets.

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

**NOTE separation of concerns does not work, if you have a separate HTML and JavaScript files**

```
const socket = io.connect("http://localhost:5000");
socket.on("message", (data) => {
  console.log(data);
  socket.emit("another event", {
    userReply: "The socket test in progress",
  });
});
```

6. Connecting front-end sockets to the backend
   Debugging:
   Stackoverflow[https://stackoverflow.com/questions/19426882/node-js-socket-io-socket-io-js-not-found]
   If you are using a VPN, you may find the sockets error is that it is looking for a local host other than what you have specified in the port.

Sometimes 1-5 work well but when you actually add socket methods the front end does not find where the sockets are stored in the file system
METHOD 1:
`npm install socket.io --save` run this command at the base location/where your index.html/ static root file is. This installs socket.io to the area in which the command is run, not globally, and, in addition, it automatically corrects/updates your package.json file so node.js knows that it is there.

Then change your source path from `'/socket.io/socket.io.js'` to `'http://' + location.hostname + ':3000/socket.io/socket.io.js'.`

METHOD 2: Is longer and is not guaranteed to work

`find ./ | grep client | grep socket.io.js`

This will give you the relative-file path you need`/websocketsApp/node_modules/socket.io-client/dist/socket.io.js` or the absolute file-path `/Users/ssbt/Documents/GitHub/node.js-and-server-side-javascript/websocketsApp/node_modules/socket.io-client/dist/socket.io.js`

Copy this into another folder to make it more discoverable - use the absolute paths they work better
`cp /Users/ssbt/Documents/GitHub/node.js-and-server-side-javascript/websocketsApp/node_modules/socket.io-client/dist/socket.io.js /Users/ssbt/Documents/GitHub/node.js-and-server-side-javascript/websocketsApp/assets/socket-files`

Change scripts `<script type="text/javascript" src="/websocketsApp/assets/sockets-files"></script>`

You need to add socket methods to the front end to listen to user inputs

`socket.on()` when the socket is open it is listening for messages
`socket.emit()` once it has received the message it can emit the message
`socket.join()` if several sockets are open you can join the open sockets

Documentation:
Emit cheatsheet[https://socket.io/docs/emit-cheatsheet/]
Server API documentation[https://socket.io/docs/server-api/]
Client API documentation [https://socket.io/docs/client-api/]
