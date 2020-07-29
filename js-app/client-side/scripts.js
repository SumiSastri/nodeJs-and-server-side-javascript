// sets up jquery
$(() => {
  $("#send").click(() => {
    // sets input value to what user types - adds the name and message to html tags via the ids
    var message = { name: $("#name").val(), message: $("#message").val() };
    postMessage(message);
  });
  getMessages();
});

function addMessages(message) {
  // lists messages
  $("#messages").append(
    `<h4> ${message.name} </h4> <p> ${message.message} </p>`
  );
}

function getMessages() {
  // gets messages from messages route
  $.get("http://localhost:5000/messages", (data) => {
    console.log(data);
    data.forEach(addMessages);
    // data.map(addMessages);
  });
}

function postMessage(message) {
  $.post("http://localhost:5000/messages", message);
}
