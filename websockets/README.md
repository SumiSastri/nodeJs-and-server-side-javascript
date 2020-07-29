## Why sockets?

- Node send requests from the client or browser to Node. So when we fill in the message form we get

```
{ name: 'Josie', message: 'Bonjour' }
{ name: 'Josie', message: 'Bonjour' }
{ name: 'Josie', message: 'Bonjour' }
```

- Node can not notify the browser/ user that the message has been updated
- The only way to achieve this behavior with HTTP requests is to do something called polling. With polling, every few seconds we send an HTTP request to check for updates
- One WebSocket library is Socket.IO that works for both the browser and for Node. The advantage of this library is that if a browser is older and does not support WebSockets, it will default back to polling and it has that functionality built in so it will always work, even if it's not as efficient with older browsers.

1. `npm install -s socket.io`

2. Tie it up with the Express server in `server.js` and add the `http module` from node

3. Instantiate both modules in server.js

```
const http = require('http').Server(app)
const io = require('socket.io')(http)
```

debugging `const io = require("socket.io").listen(http);`

4. Use the socket.io method with an event listener in server.js

```
io.on('connection', (socket) => {
    console.log('a user connected')
})
```

5. Connect backend and front end in index.html
   In the head section add the script tag, under the bootstrap CDN
   `<script src="/socket.io/socket.io.js"></script>`
   debug option
   `<script src="http://127.0.0.1:5500/socket.io/socket.io.js"></script>`

6. In the JavaScript files connect the HTML to the JavaScript files in the j-query library
   right at the top before the library instantion, add `const socket = io()`

   debug options - connect to IP`const socket = io.connect("http://127.0.0.1:5500/")` or use the http node module `const socket = io(http)`

   to connect the instance of the libary. Now, for the message to communicate to the server, in the function where we have declared the message add the node listener to the socket after we call the `getMessages()` function `socket.on('message', addMessage)`

7. Connect the listeners of node in the express `app.listen()`, change the method to the node `http.listen()`
