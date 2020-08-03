const cp = require("child_process");

// opens out a https request in a new tab
cp.exec("open https://github.com/SumiSastri?tab=repositories ");

// opens terminal in the same folder
cp.exec("open -a Terminal .");

// open data files in the directory
cp.exec("ls", (error, data) => {
  if (error) {
    throw error;
  } else {
    console.log("DIRECTORIES LOGGED:", data);
    // output are the readme and exec files
  }
});

// THROW AN ERROR
cp.exec("lst", (error, data) => {
  if (error) {
    throw error;
  } else {
    console.log("DIRECTORIES LOGGED WITH ERROR:", data);
    // output are the readme and exec files
  }
});

// THROW ERROR IN BASH
// cp.exec("lst", (error, data, stderr) => {console.log("STD ERR LOGGED:", error, data, stderr)}
// run node exec and then run lst error output lst: command not found

// runs node for other files
cp.exec("node sampleCode", (err, data, stderr) => {
  console.log(data);
});
