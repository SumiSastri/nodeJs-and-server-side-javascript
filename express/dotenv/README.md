### Server side security

Documentation: [https://help.github.com/articles/ignoring-files/ ]
Additional reading:

- [http://zetcode.com/javascript/dotenv/]
- [https://dev.to/getd/how-to-manage-secrets-and-configs-using-dotenv-in-node-js-and-docker-2214]

## dotenv set up

`touch .env` to create a dotenv file for your mongodB in the backend folder

```
DB_CONNECTION=mongodb+srv://<username>:<password>@cluster0.xfd8y.mongodb.net/test
```

In terminal run command `git config --global core.excludesfile ~/.gitignore_global`

Add a gitignore file - `touch .gitignore` in the backend folder and copy and paste the files from the front-end git ignore files or this code block below, -- if there is no gitignore file on front-end add a file there too to bullet-proof the ignore files - at the end of the misc section `.env` add the file extention.

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
.env

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

To complete the dotenv set up, we need to require the `.env` module and import it `require("dotenv").config()` in the `server.js` file. This should be right at the top

TutoriaL: [https://scotch.io/courses/create-a-crud-app-with-node-and-mongodb/environment-variables]

```
require("dotenv").config()

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");


const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());

app.use(
bodyParser.urlencoded({
extended: true,
})
);

app.get("/", (req, res) => {
res.send("your app is working");
});

app.listen(PORT, () => console.log(`your-app listening on ${PORT}`));
```
