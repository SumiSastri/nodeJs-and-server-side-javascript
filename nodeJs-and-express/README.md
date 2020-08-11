## Scaffolding

- Initialising cloned files `npm -init -y`
- Project dependencies `npm install express nodemon socket.io cors body-parser -S`
- Dev dependencies `npm install --save-dev nodemon babel-cli babel-preset-env babel-preset-stage-0`
- Presets for babel `.babelrc` [touch .babelrc] in root folder (dot files like dot babelrc/ dotenv are hidden)

```
{
  "presets": ["env", "stage-0"]
}
```

- Scripts in package.json - (index.js if that is what your Express server is called - make sure you have the right file path to your Express server)

```

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./server.js --exec babel-node -e js",
    "debug": "DEBUG=express:* nodemon ./server.js --exec babel-node -e js"
  },

```

- Test your server is up and running - `npm run start`

Introduction:

Statistics show that close to 80% of online web applications aren't secured or easily hackable. Therefore, security is always a concern for everyone building applications with Node.js. Following a set of best practices becomes crucial when you work with this library.

To follow best practices with Node.js, there are several resources to help you determine if your application is unsecured and what potential threats lurk.

Go to OWASP first, which is a great resource for threat and cyber security information. It is called the Open Web Application Security Project, or OWASP, and includes a big community and many resources available to you. There is a social media area and join the Facebook group. There are many social networks that you can actually follow OWASP.

Then if you want to get more information on any kind of attacks by name, go to the reference area. So you can go right here in the Attacks section, and then scroll and find the actual attacks. So, for example, if we wanna take a look at HTTP Response Splitting, you have this here.

You will find Server-Side Injection, you have the information here, so if you wanna click on that one, you can find more information about what is the attack, what are the risk factors, and some examples of code. Now let's go back to the main page, and if you'd like to get actual solutions or code snippets on several security threats, add to the Code Snippets area. So, this is right below the Attacks here. So you can click on Code Snippets, and then go again by category. So Memory leak, you can click on that. And then get some examples of code. So let's go back again to the main page.

There is a Vulnerability section to read on potential areas where your application might be vulnerable to threats. So you can scroll again to the left, in the reference area, and then find the Vulnerabilities here. And then again it goes by sub-categories. You can find whatever is the area that you want to get more information on, and then click on it.

Finally visit the Nodejs Goat Project, specifically for this course. So let's go back to the main page. And then do a search under node. Then it's the second link here: OWASP Node js Goat Project. This is a project focused on securing node js, specifically, and it's constantly updated with the latest information on threats and how you can improve your application against those threats. So this site is full of resources to get you started and help you in your research. So make sure to subscribe to their mailing list to get the latest information on security threats.

OWASP's list of the top 10 threats on the web and Node. If you wanna scroll down you can take a look at all the actual threats, and then what are the documentation around them. So if you click on the Injection it gives you a lot of details about this specific attack, how to prevent it, what are the applications that are vulnerable and so on so forth. So this is a good resource to get started on your security exploration. So you have broken authentication, sensitive data exposure, and so on so forth. So there is a lot of stuff here but the top 10 threats are listed here with all the references that you need to explore them. So this particular resource is across all kinds of web projects. So always go there first.

But for node specifically, let me show you a great resource to apply syntax best practices around node.js. So go to nodegoat.herokuapp.com, and once you get to this page click on Tutorial Guide:Learn OWASP Top 10. And then you're gonna have specific things related to node.js here. So the same approach again. So you're gonna have the actual threat, what it is, what are the attack mechanics, and how can you prevent this type of attack and with code examples. So this is a very good resource along with the top 10 to get started. So whenever you have any doubts or you really want to make sure that your application is really well protected against any threats, go through those resources in detail and then take a look at all the information including the source code to make sure that you are well protected. So as you explore further OWASP and when working with node.js, these resources are great for assessing your security vulnerabilities and please do use them.

**Cross-site scripting attacks** is when a malicious script is injected into a trusted site, for example, add Javascript code into an unsuspecting input in a form, and then use this to use all kinds of no good. Some example of attacks have been pulling data from cookies, session tokens, and all kinds of sensitive information. For a demo an example of cross-site scripting security issue. So go to www.google.com/about/appsecurity/learning/xss and a general search of
"web app node security learning" for more results and options to learn. If you can write a JavaScript `<script></script>` tag in an input field - for example if we were to do script and then alert, Hello, and then close out the script, and I get an alert, this is cross-site scripting, so basically what we just did, we included inside of our form, some type of script, and this is dangerous. So this is one of the top threats to your application because if a developer doesn't pay attention to this type of issue, it is in most case the easiest to hack.

To prevent this type of attack, you need to validate your data both on the server, and on the client, so when you have a form, make sure the data is sanitized or validated properly. Also make sure to implement output and coding, so HTTP cookie flag, and CSV in your application, and you have many examples how to do this in OWASP and a Node-Goat project.

**A Cross Site Request Forgery, or CSRF attack** forces a logged on victim's browser to send a forged HTTP request, which could include the victim's session to a vulnerable web application. So how do you prevent this kind of attack? It is by adding CSRF protection to all your API endpoints, and you can do this with the csurf package, so let me demonstrate a quick example of how you'd implement csurf with your API endpoints.

Go to github.com/expressjs/csurf and once you're on that page, scroll down until you see the code example, so you could scroll all the way down to the example here, so basically, the first thing you would need to do is include cookieParser, so you need cookieParser in order to use csurf, and obviously, these are ES5 and below kind of imports, so you would do something like import cookieParser from cookieParser, and import csrf from csurf, and then use them into your actual application, so the way you would do this is then create a const, and do csrfProtection, and then pass the option through, and then you'd be able to add this to your API endpoints, so basically, once you create your API endpoints, so for example, in this case here, it's an API endpoint called form, so when someone is actually typing form at the end of your URL, then it would actually go through the csrfProtection, and make sure that this is a fully protected, again, cross site request forgery. So this is as simple as it gets and this is how you would go about setting up CSRF protection inside of your API endpoints.

## Denial of Service attack

DoS is basically an attack that renders your needed service, such as client, server or application, unavailable to your users. An attacker can achieve this by manipulating the network code, or exploit vulnerabilities of your service. In most cases, the hacker overwhelms the server of requests, therefore shutting it down. They often use techniques such as creating too much data on your database, creating a loop mechanism, lock customer accounts, or failure to release specific resources, all through code exploit.

A good example for Node.js specifically is the use of complicated regular expressions to render the service unavailable for a while, or hang indefinitely. So to prevent this type of attack, you want to make sure all your inputs and forms are properly sanitized and validated, and that you have mechanisms in place to prevent looping instructions, or the creation of multiple objects, or data on your database. Also, it is a good idea to avoid writing your own regular expressions. Make sure you use a package like validator.js or the safe-regex package in Node to prevent any regular expressions threats.

**Rate limiting against DoS attacks**

DoS attacks will typically overwhelm your servers with requests, until your server's IO is overloaded, and therefore, shuts itself down. This can be prevented by eliminating the number of requests in a specific amount of time. And this can be prevented from an Express middleware called Express Rate Limit. There is also a module called Rate Limiter, but it has a Redis dependency. So if you're not a fan of adding extra packages when not needed, then use the Express one.

Express Rate Limit module `npm install express-rate-limit`.

The first thing we need to do is import RateLimit from 'express-rate-limit'. And now, we can use it in our code.

So, let's go ahead and do an example. So, we'll do Rate limit setup. And the way you actually set up the rate limit, you do a variable. So, we'll call this variable limiter, with a new RateLimit, which is a function that takes options here. And then, we'll add the options. So, the first one is windowsMs, and we'll do 15 minutes. So, the way to do 15 minutes, you do 15 times 60 times 1000. So, this is milliseconds times the number of seconds in a minute and times the number of minute. So, this equals two, 15 minutes. Then, what we'll do is the max. So, the number of requests per IP in that time limit. So within that 15 minutes, we can only do 100 requests. So, we'll just type a note here.

So, limit of number of request per IP. And I did do a comma there, so we're good. And then, delayMS, to basically disable delay. So up until we get to those limits, we don't have any delay. Otherwise, we could actually do a delay if we wanted to. So we could do, for example, 1000 milliseconds per request. But we don't wanna do that. So, this disables delays. Perfect! So, this is basically how it works. We just set a rate limit in our application here. So basically, just to summarize what we just did, we actually inserted a rate limit. So, every 15 minutes we can only do 100 requests per IP, which will not shut down the server, unless you have a really, really low-end, hardware server. But in most cases, that's not gonna be an issue. Or you could just change those values to match whatever type of server you have. But with this type of rate limit, you are preventing any DOS attack, or at least, minimizing the impact of a DOS attack if someone is trying to make many IP requests to your server, and therefore, rendering you server useless.

**Server-Side Injection** is the activity of injecting untrusted data into the server as part of a command or a query. With this injected code the attacker can trick the server to do all sorts of no good. The attacker typically will use eval, set timeout, set interval, and function methods to process malicious code. For example, an attacker could inject a do while conditional into an eval function, therefore rendering the server useless by using 100% of its resources. Leveraging eval's weaknesses, the attacker could also insert commands to read the content of a response call to a known server and therefore be able to pull user data.

To minimize service-side injections, you wanna do the following: Always validate and sanitize user input as we've mentioned many times in this course. Never use eval, setTimeout, and setInterval and function to parse user input. Use JSON.parse when you need to parse user input. Or for type conversion, use the safer parse methods, like parse integer, parse-float for example. Include use strict in your code. So these are best practices to minimize injections. Make sure you do them.

## Data handling with type and validation

- When handling data on your server the best first line of defense is to do validation and type assertion. This way, the data sent is already sanitized to be of a certain type and you avoid sending dangerous scripts to the server. Let me demonstrate. So go into the project and open the folder called models and then click on crmModel. And this is where we actually define the type of our schema. So right now if you take a look at firstName, lastName, email, company, phone, and created_date we expect a type. So we expect a type of String, String, and email for String and then Number for phone and then we expect a type Date for the created_date. So if we pass a number to firstName, right there and then it's gonna break. So we're not gonna be able to pass a number to String or a string to the Number here. So this is one of the first thing you need to do. So when you define your schema, make sure you define a type for each of your properties inside of your object that you are passing and sending to the server.

Now the second thing you could do is use further validation with a **library called validator.js**, so we validate the data further when you send it to the server. So not only we can expect an actual type, but what exactly we expect. So no more than a specific number of characters or for the email we expect of type email and so on and so forth.

So let's go into the actual site where we have validator. So you can go to github.com/chriso/validator.js. And if you scroll down here, it's very easy to get validator up and running inside of your server. So you import validator from validator. And then inside of your data, you simply use validator.isEmail and then pass the value or pass the variable that holds the value. So in this case we'd pass, for example, email inside of this particular validation here. So if we put this into practice in our application here, it would be in the controllers. So if we click on the folder controller, and then open up crmController, then what we do is when we add new data to the server, we would sort of do an if statement or a conditional statement. If it doesn't meet this requirements, then do not pass the data to the server.

Otherwise, if it meets the requirements then you can go ahead and save that new contact to the server. So it'd go something like this. So right below your new contact here, you would do something like this where you would write an if statement, something like that where if, validator.isEmail, and then pass all the new contacts so the new contact body it would have, newContact.email. So it would have an email inside of that object. So if that is not an email then, well actually in this case it would be if this is an email, then run the code below. In this case, run the code below. And then otherwise, do something of console.log something like not an email or whatever is the error message.

So basically what we would need to do is wrap this particular saving of data inside of our server inside of an if statement and the run conditional statements to validate that whatever the data is inside is of particular type. So there is an email and so on and so forth and then you can save it.

So that's how how you would actually validate further. And you can even go as far as actually validate more and put more conditionals yourself, so write your own code. So contact email needs to have that many characters and so on and so forth. So this is how you would actually run some validation before you actually save it in the controller. So you wanna make sure you have these parameters inside of your application to make sure that whatever you're sending to your database is something that is safe, is not going to be injecting malicious code.

### Use prepared statements for SQL/NoSQL

A prepared statement is basically the use of a template in your code with empty values when making queries to the server, and then as the command is executed, the empty values are replaced with the data needed to fulfill the query. The beauty of most of today's tools for querying databases is that they already include them, so if you are using Mongoose for MongoDB, or Sequelize to query SQL databases, you've got this area covered already, so the general guideline here is to use those tools, like we're doing in our application, and if you're not, you'll thank me both from a security perspective or a development perspective, as they make querying and setting up your server with the database much easier. If you would like more information on the subject, for Mongo development, go to this webpage, mongoosejs.com and on this page, you'll find more information about how to set it up, what it saves you, and so on, so forth. And if you prefer developing with SQL, then use Sequelize, which you can find more information on this site which is docs.sequelizejs.com and then again, similar to Mongoose, you'll see how easy it is to set it up and what it saves you and what are the commands you can use to query your database.

### Set proper HTTP headers with Helmet

- Helmet is a great package that automatically adds 12 http security headers to your application with a few simple lines.

Documentation: helmetjs.github.io

- Helmet is a great package that automatically adds 12 http security headers to your application with a few simple lines.

Documentation: helmetjs.github.io

The basic set-up gives you by default

```
app.use(helmet.contentSecurityPolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

```

In your server folder `npm install helmet` and use it in Express like any other middleware with Express `app.use()` method after you import the library.

If you don't see it in your package JSON, that means you're running a Legacy version of npm, and you need to do dash dash save.

If you wanna use any of the other ones, all you have to do is do is use the prop extension - eg. helmet.nocache

### Encrypt user data and session management

Another strong recommendation for properly securing your Node.js application is to encrypt your user data across all communication channels. So when your server and client are exchanging data, use Node.js packages like Crypto. Crypto allows you to encrypt your sensitive data with several methods to create hash data with secret words and hash algorithms. By having the proper secret and algorithm on the application and the server, you can encrypt and decrypt sensitive data, so if anyone intercepts your data, you minimize the possibility they can decipher your data.

Documentation: https://nodejs.org/api/crypto.html
On npm https://www.npmjs.com/package/crypto-js
Go to nodejs.org\api\crypto.html-crypto_crypto, and once you get to this page you'll see what kind of set up you need to actually use Crypto. So for example, you import Crypto here and then you set up your secret. So you'll create your hash word here by using Crypto with the algorithm, and then this is the word that you want, and then you digest it. And if you console log this hash, it will print something like this. So if you want to decipher this on the other hand, you need to have the secret and the hash algorithm and you'll be able to do that. So make sure you use Crypto whenever you have communications in between server and client and you want to make sure that nobody intercepts your data when you're making transactions in between the server and the client. Also, always make sure you properly manage your sessions. If you leave sensitive data in the browser's local storage, it is another potential security issue. So go to developer.mozilla.org \em-us\docs\web\api \window\localStorage. So you want to make sure you use session storage over local storage, so when your user leaves your application the data related to it is cleared in your client. Because if you use local storage the data stays in the client, and then anyone can actually go into your browser or your client and actually read the information. So all sensitive data or user data should be stored in session storage.

## Use secure HTTPS protocol

What is the HTTPS protocol? It is basically the same Hypertext Transfer Protocol that we've been using to browse the web but secure. It allows to transfer the webpages you view in a secure manner. It means the communications between your browser and the website is encrypted. As of late, most browsers will indicate when an application or website isn't using the more secure HTTPS protocol and therefore, advises users against using your site or application. So it is strongly recommended you use it. In fact, in some cases, the browser will even prevent the site from being loaded into your browser if it isn't using HTTPS.

So how do you make sure your website or application is using the secure protocol? By making sure the domain you're using has an SSL certificate. Most domain-selling entity offers SSL certificate nowadays and if yours isn't, you can get one for free from Let's Encrypt and then install it on your server. The way it works, you get the certificate from the entity, then follow the instructions on your server ISP to install the certificate.

All cloud or server providers have a different way to install their certificates but in most cases, it is done automatically as you register the certificate. Whoever your provider is, look into the documentation for more information on the subject.

## Use cookie attributes

Cookie attributes determine the proper use of cookie sessions. With these types of attributes you have better control over how your cookie sessions are used and where. Let's explore a few attributes that can be set in cookies and then introduce what packages can be used to set them in your application.

When you create a cookie, you have a few options or attributes you can add. For example, you can set secure. This is an attribute that will only send a cookie if the request is over HTTPS. You can also set HttpOnly, which means you can prevent the cookie from being accessed by JavaScript.

You can also define the cookie's scope by defining which domain can access it and even be more specific with the actual path to access it. If you'd like to set a persistent cookie, you can also set the expire date with the expiry attribute. So now let's explore a few packages you can use to set your cookies. The first one is the base cookies package that comes with JavaScript.

Go to github.com/pillarjs/cookies and take a look at the documentation OR github.com/expressjs/cookie-session and this is the one that I would suggest you use. But this one has a lot less setup to do in order to use it.
