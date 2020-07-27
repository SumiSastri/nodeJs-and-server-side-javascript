const express = require("express");
const app = express();
const port = 3000;
// to use static files
app.use(express.static("public"));
// to change data to json
app.use(express.json());
// version of the stringify option
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/", (req, res) => {
  throw new Error();
  res.json(data);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status().send(`CHECK ERROR STACK: ${err.stack}`);
});

app.listen(port, () =>
  console.log(`Vanilla server listening at http://localhost:${port}`)
);
