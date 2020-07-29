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
2. tie it up with the Express server in `server.js` and add the `http module` from node

3. Instantiate both modules

```
const http = require('http').Server(app)
const io = require('socket.io')(http)
```

4. Use the socket.io method with an event listener

```
io.on('connection', (socket) => {
    console.log('a user connected')
})
```

5. Connect backend and front end in index.html
   In the head section add the script tag, under the bootstrap CDN
   `<script src="/socket.io/socket.io.js"></script>`

6. In the JavaScript files connect the HTML to the JavaScript files in the j-query library
   right at the top before the library instantion, add `const socket = io()` to connect the instance of the libary. Now, for the message to communicate to the server, in the function where we have declared the message add the node listener to the socket after we call the `getMessages()` function `socket.on('message', addMessage)`

7. Connect the listners of node in the express `app.listen()`, change the method to the node `http.listen()`

and at the bottom of the tags, after line five, well add a new tag, and set src to /socket.io/socket.io.js, and now let's check out webpage for any errors. So, I'll refresh and we can see that we are getting an error and we're unable to find the Socket.IO JavaScript file we included. The problem is that we can't directly serve our backend with just Express any longer. We will use the Node HTTP server so that way both Express and Socket.IO will be running. So, inside our server.js, we can do that by replacing our existing listen code on line 25 with http.listen instead. Let's save that and give it another try in our browser, so I'll refresh, we're no longer getting an error, and if we look at the Network tab, we can see we're getting the Socket.IO JavaScript file. Next let's go down to the script element in our HTTP file and initialize Socket.IO. So, at the top of our tag, we'll create a variable called socket and we'll set it to io. This initialization will also try to make a connection to the Socket.IO server at the same URL that the current page is being hosted on. Let's set up a callback for the socket connection event that will let us know whenever a new user connects, so let's save this and then go into our server.js file, and below our post messages, we'll add io.on and we'll check for the connection event, and we'll supply a function that takes in a socket. And for now, let's console.log a user connected, let's save that. Let's open up our Terminal and go to our nodemon, then let's refresh our page. And now, back in nodemon, we can see that a Socket.IO connection has successfully been made from the browser since we're getting a message in the connection event and we can see a user connected in our Console. Next let's look at how to create the message event to update all of the clients at once.
