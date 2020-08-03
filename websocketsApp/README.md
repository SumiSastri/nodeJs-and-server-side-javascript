## Scaffolding

`npm -init -y`
Project dependencies
`npm install express nodemon socket.io cors body-parser -S`
Dev dependencies
`npm install --save-dev nodemon babel-cli babel-preset-env babel-preset-stage-0`

Presets for babel `.babelrc` [touch .babelrc] in root folder (dot files like dot babelrc/ dotenv are hidden)

```
{
  "presets": ["env", "stage-0"]
}
```

Scripts in package.json - (index.js if that is what your Express server is called - make sure you have the right file path to your Express server)

```

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./server-side/server.js --exec babel-node -e js",
    "debug": "DEBUG=express:* nodemon ./server-side/server.js --exec babel-node -e js"
  },

```

Run nodemon and test your server is up and running.

## Folder structure

Frontend/ client-side, static files in public folder.
Backend/ server-side files in server-side folder.

## Boiler plate steps for server and client

1. Set up Express server with template from `vanillaServer.js` file in folder [node-and-dbs/servers/express/demos/serverTemplate.js], run `npm run start` connect the server and ensure it is running. Go to `localhost:5000` and make sure the front end is running.
2. Add html boiler plate in the public folder, open with the LiveServer VSCode extension, ensure the front-end is working. Add the style sheet link to Bootstrap (or whatever CSS library you are using)
3. Connect the html boiler plate file to the server - in the `app.get()` method change the routing to the static files. The call back takes the absolute path name

```
app.get("/", (req, res) => {
  res.sendFile(
    "/Users/ssbt/Documents/GitHub/node.js-and-server-side-javascript/websocketsApp/public/index.html"
  );
});
```

Go to localhost:5000 and check if the front-end is still connected.

4. Connect sockets in the Express server. Follow steps 1-5 in the websockets folder [websockets/README.md]
5. In this app we will be using j-query, bootstrap, ajax CDN's - add these scripts to your `index.html` file. The link styles for bootstrap should also be used in the css links.
