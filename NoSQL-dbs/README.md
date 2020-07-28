Not Structured Query Language - NoSQL

What is a Structured Query Language?
SQL dbs are used when data is stored in a structured format. Object classes, which represent the items that will go into those structured tables, must also be designed. It can be considered like an automatic car where a lot of design work is pre-built. This can be costly, but on the pro-side easier to use.

What is NoSQL
NoSQL, on the other hand, is the absence of that structure. It is more like a manual car where data is put into collections without paying much attention to the structure. As a result, there's less up-front design work - you configure the db more to your own needs than to a pre-fab structure. Again there are pros and cons to both datamodesl.

MongoDb - cloud based

1. Create a MongodB user name and password to use the Mongo cloud
2. Go to project, create new project, give project a name, check project owner and click set-up project
3. Prompt to set up cluster choose free shared cluster - clusters are groups of servers that store your data.
4. Choose server (AWS, google cloud or azure) geographic region for the cluster (one close to your region good) and choose the sandbox option for the cluster tier, choose the free forever option for student projects, click create cluster
5. The cluster will be created, it takes a little while for the servers to be configured
6. Once created click on connect to create a new user
7. You will be prompted to add IP address this is to whitelist your IP address so that when you connect your local schemas to the cloud Db they will be linked and connected (save steps 7,8 and 9 somewhere so that you can access them for the project)
8. Create your user name
9. Auto-generate a password, click show and save the password - if you lose this you will not be able to connect
10. Once you have saved all of the information you may require later, click add user
11. choose a connection method - option 3 - using compass
12. Get a connection string or URI
    `mongodb+srv://<username>:<password>@cluster0.xfd8y.mongodb.net/test`
    Replace `<username>` and `<password>` with the password and username you have stored in steps 8 and 9 (Save this string as well - make sure you have taken out the placeholder greater and less than signs around the username and password these are just placeholders)
13. Should you lose your place on the MongoCloud got back to click connect,
14. Now go back to your server to connect the local app to the db
