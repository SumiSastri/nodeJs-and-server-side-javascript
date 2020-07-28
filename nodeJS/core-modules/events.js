const events = require("events");
// intantiate
const emitter = new events.EventEmitter();

// emitter.emit method
emitter.on("customEvent", (message, user) => {
  console.log(` LOGS ${user}: ${message}`);
});
//
emitter.emit("customEvent", "Hello World", "Admin");
emitter.emit("customEvent", "The test worked", "User1");

// method process.stdin.on()
process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "exit") {
    emitter.emit(
      "customEvent",
      "You have exit from current process",
      "process"
    );
    process.exit();
  }
  emitter.emit("customEvent", input, "TERMINAL LOG:");
});
