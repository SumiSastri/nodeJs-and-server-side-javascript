require("./node_modules/dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const abcRoutes = require("./api-abcRoutes-config");

app.use(cors());
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

import abcRoutes from "./api-abcRoutes-config";
abcRoutes(app);

app.get("/", (req, res) => {
  res.send("your app is working");
});

const dBurl = process.env.DB_CONNECTION;
mongoose.connect(
  dBurl,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (!error) {
      console.log("mongo-db connection working");
    } else {
      console.log("check mongo-db connection", error);
    }
  }
);
mongoose.Promise = global.Promise;

app.listen(PORT, () => console.log(`chat-app listening on ${PORT}`));
