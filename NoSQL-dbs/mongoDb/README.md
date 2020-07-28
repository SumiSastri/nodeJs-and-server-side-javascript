## Overview of MongoDB toolds

**MongoDB Atlas** is a platform that provides an interface to manage and deploy MongoDB across cloud providers and regions.

It was built to launch and manage your deployments for you, which simplifies the operational overhead of running a deployment.

This type of offering is called database as a service.

What that means is that Atlas helps you easily setup and manage your database from your Atlas account on the web.

There are multiple tiers of Atlas subscriptions.

The free tier allows you to experiment with the platform at no cost to you.

**Compass** provides a graphical user interface that allows you to explore the data in your database.

It is a great tool to get a quick view of the shape and state of your data, as well as test out MongoDB features as you are learning about the database and its functionality.

You can use Compass to optimize query performance and manage indexes, among other things.

The interface that you will see on your machine may differ from the one that you see in later lectures.

**Mongo Shell** which is an interactive JavaScript interface to MongoDB.

The Mongo Shell is great for playing around with all the features that the database has to offer, and really learning about MongoDB query language and functionality.

## What is Atlas?

Atlas is MongoDB's database as a service solution.

It provides functionality to set up your database in the cloud without needing to configure the fine details yourself manually using the Shell.

Atlas also handles replication, which means your database maintains redundant copies of data to increase availability.

Let's talk a little bit about how Atlas works.

Atlas users can deploy clusters, which are groups of servers that store your data.

These servers are configured in what we call a replica set, which is a cluster where each server stores the same data.

This means that each time you insert or update a document, redundant copies are stored within the set.

Using a replica set ensures that if you lose access to a server in your cluster you're not going to lose your data.

All of the servers in your cluster exist in the cloud on the cloud service provider of your choice.

## Why Atlas?

One main reason is the simplicity of setup.

Atlas manages the details of creating clusters for you, which simplifies the operational overhead of running a deployment.

The Atlas interface makes it easier to manage and deploy MongoDB across cloud providers and regions.

Atlas is also a great way to experiment with new MongoDB tools and features.

In this course, you'll connect to an existing Atlas cluster and query its data.

You'll also create your own Atlas cluster and practice inserting and updating documents in your database.

You'll learn how to connect to Atlas outside the Atlas interface using compass, which is a graphical user interface for MongoDB and the Mongo Shell.

Atlas has different pricing levels depending upon the size and usage of your database.

A free cluster is a three server replica set with 512 megabytes of storage.

Free tier clusters never expire.

Under the free tier, you'll have access to a subset of Atlas features like Charts and Stitch, which we'll discuss later in this lesson.

If you're learning how to use MongoDB or creating a small scale application, the free tier is a great option for storing your data.

The main Atlas page shows all of your clusters.

We can take a look at the data in our cluster using the Data Explorer by clicking the collections button.

Here, we can see all of the documents within our databases and search for specific documents.

Atlas also integrates with several MongoDB services.

You can use the Atlas interface to connect your cluster with MongoDB Stitch.

Stitch is a serverless platform that makes it easier to use MongoDB and your web in mobile applications.

The Charts feature allows you to create visual representations of your data.

Atlas also allows you to configure users with different privileges levels in your database.
