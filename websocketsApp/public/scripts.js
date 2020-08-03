// const socket = io.connect("http://localhost:5000");
const socket = io();
$("form").submit(() => {
  socket.emit("userMessage", $("#msgInputId").val());
  $("#msgInputId").val("");
  return false;
});
socket.on("userMessage", (usrMsg) => {
  $("#messages").append($("<li>").text(usrMsg));
});
