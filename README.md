# nodeJs-and-server-side-javascript

What is node.js?
Node is not a language it is an open source runtime environment created by Ryan Dahl in 2009. Dahl took the code on the browser (Chrome's V8 engine) and repackaged it to make it work server-side. It is cross-platform and works on Chakra and SpiderMonkey engines as well.

While node it is based on JavaScript, it is not a language but a cross-platform environment. It also runs different API’s for HTTP requests, file systems, streams, child-processes to render server-side data/payloads/information. It is easy to install and with node package manager(npm) offers access to a plethora of open source packages to add to apps/ projects.

The fluid data flow client-to server, with node, express and associated npm packages, is due to the fact that node is based on JavaScript. It is, like JS, a single-thread, non-blocking system in runtime.

It is therefore good for apps with a high volume of short messages in real-time operations (chat-bots, facial recognition, conferencing, gaming, e-commerce) that need real-time runners between the front end javascript code and the backend database. (Trello, googledocs, DropBox use node.js).

It is more scalable than Rails (Ruby) which can not shuffle around data quickly due to the “thick” application layer - ruby to ruby-on-rails.

Node is largely used to limit the languages that a team uses to JavaScript, hence making teams cross-functional - this is not possible if the backend is run on php, Scala, java and other non-js languages.

The key way to use node is with common.js and the require function - this method imports a module or file as an object into another file. Data files created in javascript can be imported with the require method into express and then used for routing API calls.

Node & Express are not good for CPU heavy applications.

Node Documentation [https://nodejs.org/en/docs/guides/getting-started-guide/]

Good articles to read to understand how and why you would use Node.js as the backend server

Netgurus guide [https://www.netguru.com/blog/use-node-js-backend] a good pdf that can be downloaded is on the website
Why use Node - Medium blog [https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e]
