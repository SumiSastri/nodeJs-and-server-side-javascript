Security - high level checks

- validation of type and requirements with a typeguard, type-interface
- validation libraries such as validator.js
- using an ORM such as mongoose with some of these built in
- using a HTTP runner like axios with security built in
- never use eval, setTimeout, and setInterval and function to parse user input. Use JSON.parse when you need to parse user input
- don't write your own regex
- using body-parser - makes it more difficult to access data and information
- using libraries such as Helmet - protects http calls
- preventing Denial of Service attacks with rate limits and library express-rate-limiter
- using session cookies to access API-end points
- using HTTPS not HTTP - secure site certification can be bought or free
- encrypting and authenticating front-end form data with libraries such as Bcrypt/ Crypto or using 2-factor authentication, multi-factor authentication
- using prepared statements (CRUD calls for data in routes and controllers)
- check node packages for security - audit security, update packages, remove unused packages
- prevent forged HTTP requests add csrf protection to each API endpoint - use a library like csurf (CSRF stands for Cross Site Request Forgery)
- use cookie-parsers - like body-parser parses cookies and ensures authentic HTTP requests
- prevent cross-site-scripting (cookies, session tokens are the vulnerabilities)

OWASP & Node-Goat project
Test with Snyk, Burp,
