const express = require("express");
import favicon from "serve-favicon";
const { dirname } = require("path");
const app = express();
const port = 3000;

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Vanilla server listening at http://localhost:${port}`)
);
