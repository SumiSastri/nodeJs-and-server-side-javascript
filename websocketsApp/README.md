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
