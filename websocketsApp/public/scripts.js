const socket = io.connect("http://localhost:5000");
socket.on("message", (data) => {
  console.log(data);
  socket.emit("another event", {
    userReply: "The socket test in progress",
  });
});
