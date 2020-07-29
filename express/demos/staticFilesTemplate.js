const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("home route working");
});

const server = http.listen(PORT, () =>
  console.log(`your-app listening on ${PORT}`)
);
