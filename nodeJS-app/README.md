## Scaffolding & access

`git clone`
`npm init -y`
`nodemon`
open HTML with live-server extension on VSCode or drag and drop file into browser

**Client side**
j-query, bootstrap, socket.io CDNs/Scripts

**Server-side**
Project dependencies
`npm install express body-parser cors dotenv mongoose socket.io`
Dev dependencies
`npm install --save-dev nodemon babel-cli babel-preset-env babel-preset-stage-0`

- Postman to check routes
- MongoDB as database

## Front-end

- HTML - A form with input elements for the message, a send button and an unordered list to display each of the messages. The main content is held in a container div. Within that two divs separate the input elements and the display of the messages in the ul tags.
- Bootstrap classes - A fluid container which makes the site responsive. Jumbotrons in Bootstrap allows you to focus or showcase specific elements, it will hold the messages. As we are using forms we can use the Bootstrap form-control class for the name of the message sender and the submit is the success class of button.

STEP 1: Add JavaScript library JQuery and functionality

- JQuery - **works as a separate file until the socket.io library is added. I had to shift it back to the main HTML section.**

Jquery sets the has the Document Ready function that takes a callback function. It
returns the document ready event will be called when the document finishes loading and all the elements in the document's DOM (document object model) are ready to be used.

To add functionality we write a function to add messages. This function takes the param of the message data - the name and the message as an object. We target the div tag in the HTML with the id of messages to use the method `.append()` to append the messages to this div when the submit button is clicked.

```
const addMessages = (messageData) => {
        $("#messages").append(
          `<h4> ${messageData.name} </h4> <p> ${messageData.message} </p>`
        );
      };
```

The submit button now takes the onclick callback, and passes the addMessages function hardcoding the data in the front end.

```
$("#send").click(() => {
          // data hardcoded front-end
          addMessages({ name: "Zee", message: "hi gang" });
        });
      });
```

STEP 2: Set up back end with Express server (see set-up in the Express section of this repo or check Express documentation).

In Express `server.js` Move the data from the front end (jQuery scripts) to the back end as a hardcoded array.

```
const messages = [
  { name: "Zee", message: "Hi gang" },
  { name: "Paraic", message: "Hey whatsup" },
];
```

Connect the front-end and the backend through the Express midware, `app.use()` method

```
app.use(express.static(__dirname));
```

Make sure your get method is working - go to the port and check data is flowing.

```
app.get("/messages", (req, res) => {
  res.send(messages);
});
```

<img src="/nodeJS-app/assets/data-client-to-server.png" alt="console data flow check" height="350"/>

Now set up your post route.

In `JQuery scripts`

Now set up the get and post routes in the front end and change the functionality of the JavaSCript function body.

The click handler must now change as we are using the button click to get and post data from the backend, not the front end. So the value of the `messageData` object now is the value of the information typed into the input element by the user. We also set up a get and a post route on the front end, getting and posting the data to our backend API endpoint `/messages`
Those functions, now are also passed to the click handler.

```
$("#send").click(() => {
    const messageData = {
      name: $("#name").val(),
      message: $("#message").val(),
    };
    postMessage(messageData);
  });
  getMessages();
});
```

<img src="/nodeJS-app/assets/data-server-to-client.png" alt="server data flow check" height="350"/>

STEP 3: Add sockets library for polling the responses back in real-time.

Follow the steps 1-5 in the sockets section to connect the sockets front-end and backend
