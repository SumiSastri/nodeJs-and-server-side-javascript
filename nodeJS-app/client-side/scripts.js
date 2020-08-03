const socket = io.connect("http://localhost:5000");
socket.on("message", (data) => {
  console.log(data);
  socket.emit("another event", { userReply: "The socket test worked" });
});

$(() => {
  $("#send").click(() => {
    var message = { name: $("#name").val(), message: $("#message").val() };
    postMessage(message);
  });
  getMessages();
});

socket.on("message", addMessage);

function addMessage(message) {
  $("#messages").append(
    `<h4> ${message.name} </h4> <p> ${message.message} </p>`
  );
}

function getMessages() {
  $.get("http://localhost:5000/messages", (data) => {
    data.forEach(addMessage);
  });
}

function postMessage(message) {
  $.post("http://localhost:5000/messages", message);
}
