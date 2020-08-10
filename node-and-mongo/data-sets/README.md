## What is JSON?

MongoDB is a document database, and we frequently discuss data models looking at JSON representations of documents. In addition, the MongoDB query language, and much of the administration of MongoDB, requires some level of understanding of JSON.

JSON, which is an acronym for JavaScript Object Notation, is a popular format for representing documents.When discussing MongoDB, we typically use the term JSON document to refer to such structures. But JSON object is equally correct. JSON is a widely used data format because it is both easy for humans to read and edit and easy for computers to parse and output.

JSON documents begin and end with curly braces. They're composed of fields, and each field has a key and a value. In other programming languages, JSON documents are analogous to objects, structs, maps, or dictionaries.

One big advantage of using MongoDB is that the data model used by the database closely resembles the data structures you work with in your programming language of choice.

## Why JSON?

JSON is a lightweight store of data into text so that HTTP calls can be made, parsed (interpreted) by browsers and sent back to databases. As it is a text-based format it is lightweight. It is then reconverted back into the format that the database requires. It therefore stores and transports data quickly and efficiently. Compared to XML parsing, JSON is less verbose. JSON uses less data overall so reduces cost and increases parsing speed.

The way that JavaScript is converted into JSON is to intatiate a JavaScript object to a variable. This object is then assigned to the method `JSON.parse()`. The method, parses the JavaScript object and convert this JavaScript Object (front-end, client-side language) into Java Script Obect Notation(JSON). The converted object to JSON is sent server-side: Note the syntax to convert a JS object into JSON-

`const objectName = JSON.parse ('{"name":Kodflix", "description":"some description"})'`

The backend now gets a JSON request. JSON is read and the response method used in the back-end code should convert the body of the response first into text then into JSON response with the `JSON.stringify()` method. The backend data is converted into text and intatiated to a variable that is the new response payload (data) which is text that needs to be converted back into JSON. JSON is then

`const convertToJSON = JSON.stringify({name: 'Kodflix', id: 1})`

Note the JSON vs JavaScript object syntax. JavaScript the name value pair, only if the value is a string is it in quotes, however with JSON both the name and value are in strings. JSON objects both the name and value pair are enclosed in quotes, to denote both are strings.

However, there are also similarties - curly-braces hold the values of an object, square-braces hold the values of arrays.

To visualise JSON better - add the Chrome Extension JSONView

Edureka has a good video worth watching[https://www.youtube.com/watch?v=uw_rP5bV9r0] for a more detailed understanding.

## Mongo Collections, Documents, Schemas & Models

- A Collection is namespace for all the data/ documents/ fields/ models of data in the database
- A document is next in the hierarchy and lives within a collection which holds schemas and modesl
- Schemas - define the structure of the objects in the collection
- Models - represents separate collections in the db (user model, product model, etc.)

Once connected, and having created your first cluster, you will need to create a new cluster each time you want a new database.

In MongoDB, a database serves as a namespace for collections.

Collections store individual records called documents.

This hierarchy allows us to group together records of similar items within collections, and group collections required for the same application within the same database.

We can also establish security policies that authorize users with different roles and different levels of access at the database, or collection, level.

MongoDB does not currently support authorization settings specific to individual documents.

Each database and collection combination define a namespace.

We typically reference a specific collection by expressing the name of the database, followed by a dot, followed by the name of the collection.

Compass provides information about the size of the database, the number of collections it contains, and the number of indexes on these collections.

To access a database, first click on the database, and then the collection. Now we can create our first schema.

Schemas contain **scalar values** such as strings, integers, and doubles, MongoDB supports nesting a document as the value of a field within another document.

For many applications, it's important to be able to model data, not just as a flat set of keys and values, but as hierarchical data structures that reflect the way a developer needs to work with the data in their application.

If it's appropriate to your application, you can nest documents two or more levels deep.

MongoDB's query language provides full support for filtering documents based on the values of fields in nested documents.

MongoDB is designed to provide a great deal of flexibility in modeling your data, so that you can design a schema that is performant for your application's data access patterns.

Your data model should support efficient handling of the reads and writes your application requires. In addition to nested documents, MongoDB also supports **array values** for fields.
