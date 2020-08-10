#### What is the MEAN-MERN stack?

A stack is a collection of technologies used to run an app. The MEAN stack and MERN stack are an end-to-end javascript collection of technologies used to build apps using the Mongo database and mongoose.js/ express.js as a runner, angular.js or react.js for the front-end ui-ux and node.js to connect the Mongo database to the front-end libraries.

The MEAN/MERN stack are a network of applications based on javascript that communicate through the network front-end - midware - backend fluidly. It is often a preferred option for start-ups as fewer language specialisations are required in the dev team.

- The advantages of MEAN/ MERN- (Mongo-Express-Angular (or React)-Node) stack with javascript read: [https://www.toptal.com/javascript/guide-to-full-stack-javascript-initjs] The stack has a robust architecture for small apps, and comes inbuilt with Jestfor unit testing, if you are using React. The article suggests using gulp for automated build tasks and brackets for full text coding. Server side componentization often done with Docker can be achieved with express.js or connect.js.

## Quick Overview of MongoDB tools

**MongoDB Atlas** is adatabase as service platform that provides an interface to manage and deploy MongoDB across cloud providers and regions. It was built to launch and manage your deployments for you, which simplifies the operational overhead of running a deployment.

What that means is that Atlas helps you easily setup and manage your database from your Atlas account on the web. If you're learning how to use MongoDB or creating a small scale application, the free tier is a great option for storing your data. A free cluster is a three server replica set with 512 megabytes of storage. Free tier clusters never expire. Under the free tier, you have access to a subset of Atlas features **Stitch** a serverless platform that makes it easier to use MongoDB and your web in mobile applications and **Charts** allowing you to create visual representations of your data.

**Compass** provides a graphical user interface (GUI) that allows you to explore the data in your database.

**Mongo Shell** which is an interactive JavaScript interface to MongoDB.

The Mongo Shell is great for playing around with all the features that the database has to offer, and really learning about MongoDB query language and functionality.

## What is Atlas?

Atlas is MongoDB's database as a service solution. It provides functionality to set up your database in the cloud without needing to configure the fine details yourself manually using the Shell. The main Atlas page shows all of your clusters.

Atlas also handles replication, which means your database maintains redundant copies of data to increase availability.

Atlas users can deploy clusters, which are groups of servers that store your data. These servers are configured in what we call a replica set, which is a cluster where each server stores the same data. This means that each time you insert or update a document, redundant copies are stored within the set. Using a replica set ensures that if you lose access to a server in your cluster you're not going to lose your data.

All of the servers in your cluster exist in the cloud on the cloud service provider of your choice.

## Why Atlas?

One main reason is the simplicity of setup. Atlas manages the details of creating clusters for you, which simplifies the operational overhead of running a deployment.

The Atlas interface makes it easier to manage and deploy MongoDB across cloud providers and regions. Atlas is also a great way to experiment with new MongoDB tools and features.

We can take a look at the data in our cluster using the Data Explorer by clicking the collections button. Atlas also integrates with several MongoDB services.You can use the Atlas interface to connect your cluster with MongoDB Stitch.

Atlas also allows you to configure users with different privileges levels in your database.

**What is Compass?**
It is GUI (graphical user interface) to get a quick view of the shape and state of your data, as well as test out MongoDB features as you are learning about the database and its functionality. You can use Compass to optimize query performance and manage indexes, among other things.

There has been a number of updates to Compass and the UI keeps changing, the functionality should remain the same.

See the steps below to connect your Atlas instance in the cloud to the database and use the cloud-based interface using Compass.

## Connect to MongoDB

### METHOD 1: Keeps database in the cloud

1. Create a MongodB user name and password to use the Mongo cloud [https://account.mongodb.com/account/login] Then login with your user nameand password
2. Go to project, create new project, give project a name, check project owner and click set-up project
3. Prompt to set up cluster choose free shared cluster - clusters are groups of servers that store your data. You need this for each db you set up
4. Choose server (AWS, google cloud or azure) geographic region for the cluster (one close to your region good) and choose the sandbox option for the cluster tier, choose the free forever option for student projects, click create cluster
5. The cluster will be created, it takes a little while for the servers to be configured
6. Once created click on connect to create a new user
7. You will be prompted to add IP address this is to whitelist your IP address so that when you connect your local schemas to the cloud Db they will be linked and connected (save steps 7,8 and 9 somewhere so that you can access them for the project) You need to do this for each DB and save the key for each project

DEBUGGING - IF YOU USE A VPN YOUR IP WILL CHANGE SO GO TO THE CONFIGURATION AND ADD THE NEW IP ADDRESS AND SAVE IT - SO THAT YOU CAN SEE THE OLD AND NEW IP ADDRESSES THAT YOU HAVE WHIELISTED

8. Create your user name
9. Auto-generate a password, click show and save the password - if you lose this you will not be able to connect
10. Once you have saved all of the information you may require later, click add user
11. choose a connection method - option 3 - using compass
12. Get a connection string or URI
    `mongodb+srv://<username>:<password>@cluster0.xfd8y.mongodb.net/test`
    Replace `<username>` and `<password>` with the password and username you have stored in steps 8 and 9 (Save this string as well - make sure you have taken out the placeholder greater and less than signs around the username and password these are just placeholders)
13. Should you lose your place on the MongoCloud got back to click connect,
14. Now go back to your server to connect the local app to the db - check the mongo-and-express folder for details
