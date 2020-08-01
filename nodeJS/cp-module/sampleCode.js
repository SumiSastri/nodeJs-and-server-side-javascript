let hello = "hello world";

console.log(hello, "logs set up test for NODE");
global.console.log(hello, "logs with global object");
console.dir(hello, "logs directory");
console.info(hello, "logs info");
console.log(__dirname, "logs directory path");
console.log(__filename, "logs file name as well as directory");
