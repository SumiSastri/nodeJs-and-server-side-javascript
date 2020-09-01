Body parser is a server midware that changes or parses data into JSON. It is a node package that allows us to parse the JSON http request into our server and make sure that it is running properly.

Documentation [https://www.npmjs.com/package/body-parser]

A parser is needed to validate incoming data from users in the request body. They can be open to malicious attacks and all user incoming data should be validated and sanitsed before it reaches the server. That is why body-parser is now integrated into servers like Express.
For example, req.body.data.toString() may fail in multiple ways, for example the data property may not be there or may not be a string, and toString may not be a function and instead a string or other user input.

The bodyParser object populates the `req.body()` property with the parsed body when the type of the request matches the type option available at the end point, or an empty object ({}) if there was no body to parse, or the type of data is incorrect, or an error occurred.

Error handling:
