**What is the front-end (client-side)?**

The front end (client side) is based on three key languages - HTML (hyper-text-markup-language, CSS (Cascading Style Sheets) and JavaScript. JavaScript is a browser-based language that needs its host - HTML to operate its code blocks(algorithms).

Today front-end browsers are in many client devices - phone, tablet, computer screen, wrist watch. It mainly refers to the user interface with a web/mobile application.

**What is the backend (server-side)?**
Backend refers to the data, logic that the user does not see. This data is stored on non-client side devices - the cloud, physical servers and other remote devices that are not linked to front-end client-side devices (phones, tablets, computers, wristwatches, etc.)

In the front end data that have limited security risks are stored - cookies/ authentication codes, etc. User data - personal details of users, IP-protected code-bases, etc., are stored securely in non-client devices like servers or local storage in the backend. When there is data that needs to be stored securely and when there are CPU-heavy data (videos, image-manipulation, etc.) is better stored on the backend.

#### How do the front-end and back-end communicate? Client-Server API communication

HTTP (hyper-text-transfer-protocol) is the protocol, standards or rules that connect the front-end(client-side) to the back-end (server-side). HTTPS (hyper-text-transfer-protocol-secure) - encrypts the client-service request-response for enhanced security. This is done via an encryptation layer using SSL (secure sockets layer) or TLS (Transport Layer Security)

HTTP & HTTPS enable documents to be transported to and from browsers and back-end databases. It is the basis of data-exchange on the web. The browser (client) sends a request to the server (where documents are hosted) and the server sends a response. The request-response pattern (which is based on a set of rules, standards or protocols) is the language of communicaton between client (browser, front-end) and server (back-end, databases).

The backend (server side) depends on API's to run HTTP requests from databases that are written in a plurality of languages (PHP, Scala, Go-Lang, Python). Client requests are with three key languages - HTML,CSS and JavaScript. For these languages to be understood by the front-end (client-side).

The process of converting the data in javascript from a backend database in a language that is not javascript is done through JSON - javascript object notation.

#### What is the JavaScript event-loop?

Node and express provide an event-driven architecture for apps and projects. An event is a series of occurences driven by changes on the frontend. Events build up in the task queue and are executed by parsers (both in the front-end and back-end).

As javascript is a single-threaded non-blocking code base, it is able to deal with multiple tasks on the task queue driven by events.

For more detail on the event-loop, MDN documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop]

#### What is Ajax and async JavaScript?

Ajax was created by google to allow you to make a get request (client-side) which is sent to back-end servers. The server sends back a response but instead of loading everything at the same time, a code block is run on load, and assigns only those elements that need to be re-rendered) without reloading the page whole page while data (or the payload) is sent in the background. It is a combination of tools and is mainly accessed via the global `fetch`method in browsers.

React does not have its own in-built AJAX library.

Most server-side code is parsed synchronously - which means each thread executes one function before going on to the next. JavaScript uses a single thread asynchronously to handle several front end requests at the same time.

These requests are sent as an event queue to the server side. JavaScript methods such as call back functions, promises, etc, allows the front-end call stack (requests in an event-queue) to handle all these requests and return in the response from the server side back to the client the elements that can be rendered quickly first while others that need more time to send the data later.

Async javascript is used extensively in connecting the backend to front-end user interfaces and forms and important part in joining up the stack. It is specifically used for single-page-applications.

Some other async methods are `setState({]})` event handlers `onClick.()` and `setTimeOUt.()` are some other examples.

For more on async javascript, callbacks, promises and recursion checkout Gray's Kodiri videos [https://www.youtube.com/watch?v=pX74\_\_nD48I][https://www.youtube.com/watch?v=f5xd1jnhkp8] [https://www.youtube.com/watch?v=PlhmNNNyYyogit]

#### ES-6 call-backs vs. Promises

A call back is executed when one function calls another function. Map,filter and reduce are call-back functions. There is a synchronous nested functionality where one code block has to run before the other can be executed and can lead to what was known as "call-back-hell" or "the pyramid-of-doom". It was also dependent on several conditional statements

Promises serve the same purpose as call-backs were created in ES-6 to solve the call-back-hell problem with using the constructor method that takes two params - resolve and reject - the promise gets executed with a series of .then blocks that results in the promise ending with three states:-

- Fulfilled
- Rejected
- Pending

Promises take 2 arguments `return new Promise (resolve, reject)` followed by`.then()` blocks

#### ES-8 Async Await

Async await is built on top of promises - it makes promises look like synchronous code. As JavaScript is now used both in the back-end and front-end, it helps server-side and client-side developers understand the code base. There are two key words `async` and `await` it is syntactic sugar over promises.

#### SOAP vs. REST?

SOAP is an acryonym for Simple Object Access Protocol while REST is an acryonynm for Representational State Transfer (REST). Both are Application Protocol Interfaces that enter into the cycle of calling, posting, updating and deleting data during the client-server request-response cyle is also called the CRUD cycle - Create, Read, Update, Delete.

API's call the data from the database, posts this data on the web-page, updates the data that it receives from the front-end, sends it back to the backend and saves it or if it is not needed the data is deleted.

SOAP, initially created by Microsoft, is a more rigid way of accessing databases. SOAP relies on XML calls while REST on JSON. SOAP works better with legacy systems such as the Distributed Component Object Model (DCOM) and Common Object Request Broker Architecture (CORBA).

SOAP is a more rigid system that is intolerant of errors. However, SOAP processes can be automated and can be used with STMP (simple mail transfer protocol) as well as HTTP, which means data can be transfered not just to the web but via electronic mail systems.

REST is light-weight becuase of JSON and JavaScript developers prefer REST to SOAP as a significant amount of code needs ot be written to transform XML data.

In the CRUD cycle, REST has only four easy to memorise methods that describe everything that the API call does - get, post, put and delete.

The methods represent the current state of the object - that is where the name Representational State Transfer (REST) gets it's name and in what state (or payload/data) it is in during transit from client to server.

It is therefore an architectural style for communicating between client-server. It is a state-less model as the payloads are merely a representation of state at calltime.

There is no choice between using SOAP or REST as it is already pre-defined as an architectural service and you have to use the system that the API creator requires.

Some sites, like Amazon, support both.

A good blog to read [https://smartbear.com/blog/test-and-monitor/understanding-soap-and-rest-basics/] and a little more technical version [https://www.soapui.org/learn/api/soap-vs-rest-api.html]

Restful-React - As React defines itself as a front-end library, it allows users to figure out what works best for the app - this provides building blocks and flexiblity it also means that there are no protocols to follow, it does not prescribe how REST API's should be created.

Read More on API's and MVC [https://www.codecademy.com/articles/what-is-rest][https://www.codecademy.com/articles/mvc]
