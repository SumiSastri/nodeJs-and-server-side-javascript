## Scaffolding

- Initialising cloned files `npm -init -y`
- Project dependencies `npm install express nodemon socket.io cors body-parser -S`
- Dev dependencies `npm install --save-dev nodemon babel-cli babel-preset-env babel-preset-stage-0`
- Presets for babel `.babelrc` [touch .babelrc] in root folder (dot files like dot babelrc/ dotenv are hidden)

```
{
  "presets": ["env", "stage-0"]
}
```

- Scripts in package.json - (index.js if that is what your Express server is called - make sure you have the right file path to your Express server)

```

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./server-side/server.js --exec babel-node -e js",
    "debug": "DEBUG=express:* nodemon ./server-side/server.js --exec babel-node -e js"
  },

```

- Test your server is up and running - `npm run start`

## Folder structure

Frontend/ client-side, static files in public folder.
Backend/ server-side files in server-side folder.

## Boiler plate steps for server and client

1. Set up Express server with template from `vanillaServer.js` file in folder [node-and-dbs/servers/express/demos/serverTemplate.js] or use the documentation from Express [https://expressjs.com/en/starter/hello-world.html] to build the server from scratch.

- run `npm run start` connect the server and ensure it is running.
- go to `localhost:5000` and make sure the front end is running.

2. Add html boiler plate in the public folder

- open with the LiveServer VSCode extension, ensure the front-end is working.
- add the style sheet link to Bootstrap (or whatever CSS library you are using)

3. Connect the html boiler plate file to the server, with the Express the `app.get()` method change the routing to the static files. The call back takes the absolute path name if your server is not in the root files.

```
app.get("/", (req, res) => {
  res.sendFile(
    "/Users/ssbt/Documents/GitHub/node.js-and-server-side-javascript/websocketsApp/public/index.html"
  );
});
```

- go to localhost:5000 and check if the front-end is still connected.

4. Connect sockets in the Express server. Follow steps 1-5 in the websockets folder [websockets/README.md]

5. In this app we will be using j-query, bootstrap, ajax CDN's - add these scripts to your `index.html` file.

Code base:

1. In the j-query, write the userMessage codeblock for the `element.submit()` event. The socket events `socket.emit()` waits for the user to type their message and registers it to the value of the input using the `element.value()` method

```
$("form").submit(() => {
  socket.emit("userMessage", $("#msgInputId").val());
  $("#msgInputId").val("");
  return false;
});
```

Use the `sockets.on()` method used and append the message to an <li> tag in the j-query

```
socket.on("message", (usrMsg) => {
        $("#messages").append($("<li>").text(usrMsg));
      });
```

Mirror this in the `server.js` file using the `io.on()` method - io methods representing the server socket. The socket method represents the user socket.

```
io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("message", (usrMsg) => {
    console.log(`user message: ${usrMsg}`);
    io.emit("message", usrMsg);
  });
```

2. Connect and disconnect users

In the j-query script, use the connect event to track when the user is connected to the server

```
socket.on('connect', () => {
        // uses the connect event
        socket.emit('message', 'socket-on: user connected');
      })
```

on the server-side remove the test code and use the disconnect event

```
socket.on("disconnect", () => {
   // uses the disconnect event
   console.log("socket-off: user disconnected");
   io.emit("message", "io-server: user disconnected");
 });
```

Test this works with 2 instances of the app - open the app in another tab and write a message for 2 users and check that this works in the terminal.

3. Create namespaces
   Namespaces are internal routes to separate rooms/ conversations using the `io.of()` method, which takes the argument of the internal route - it means that this server is dedicated to the internal user - the Head Teacher in this app.

To set the name space up, you need to add the namespace and assign it to a variable.

`const headTeacher = io.of("/headTeacher");`

The namespace is no longer io, so we change the code to:-

```
headTeacher.on("connection", (socket) => {
  console.log("user connected");
  socket.on("message", (usrMsg) => {
    console.log(`user message: ${usrMsg}`);
    headTeacher.emit("message", usrMsg);
  });

  socket.on("disconnect", () => {
    // using the disconnect event
    console.log("socket-off: user disconnected");
    headTeacher.emit("message", "io-server: user disconnected");
  });
});
```

The code is changed to reflect that this io - or server - has been reassigned to the Head Teacher who can use this name space to create rooms for teachers, pupils and parents. We change all instances of io to headTeacher from this code that we have updated above.

```
io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("message", (usrMsg) => {
    console.log(`user message: ${usrMsg}`);
    io.emit("message", usrMsg);
  });

  socket.on("disconnect", () => {
    // using the disconnect event
    console.log("socket-off: user disconnected");
    io.emit("message", "io-server: user disconnected");
  });
});
```

In the `index.html` file the assignment of io to a socket
`const socket = io()` is also reassigned to the Head via an internal route to connect the backend and front end socket instances `const socket = io('/headTeacher')`

4. Create rooms

- Each room needs it own html boiler plate
- An anchor-tag for routing to each of these pages
- A name space

- In the scripts section of the HTML you need to assign the variable to the name of the room
- In the message input you need to pass room as a variable as well as the message
- In sockets you need to use the "join" listener and on connection add the room
