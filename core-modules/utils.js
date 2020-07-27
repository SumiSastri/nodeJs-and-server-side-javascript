const path = require("path");
const util = require("util");
const v8 = require("v8");

// DESTRUCTURING
// const {log} = require('util')
// const {getHeapStatistics} = require("v8")

util.log(path.basename(__filename));
util.log("The name of of util file log");
// OUTPUT 27 Jul 11:05:29 - utils.js
// 27 Jul 11:05:29 - The name of of util file log

util.log(v8.getHeapStatistics());
// shows us all the logs in the browser heap
