// set up sockets
const socket = io();
// sets up jquery
$(() => {
  $("#send").click(() => {
    // sets input value to what user types - adds the name and message to html tags via the ids
    let message = { name: $("#name").val(), message: $("#message").val() };
    postMessage(message);
  });
  // adds call function
  getMessages();
});

// set up socket listener
socket.on("message", addMessage);

function addMessage(message) {
  // lists messages
  $("#messages").append(
    `<h4> ${message.name} </h4> <p> ${message.message} </p>`
  );
}

function getMessages() {
  // gets messages from messages route
  $.get("http://localhost:5000/messages", (data) => {
    console.log(data);
    data.forEach(addMessage);
    // data.array.forEach((element){
    // },this)
    // data.map((element) =>{ addMessages });
  });
}

function postMessage(message) {
  $.post("http://localhost:5000/messages", message);
}
