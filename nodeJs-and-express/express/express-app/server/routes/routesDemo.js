// users [
//     {
//       "id": 1,
//       "first_name": "Crystie",
//       "last_name": "Lehrian",
//       "email": "clehrian0@nasa.gov",
//       "gender": "Female"
//     },

// GET request  - first arg endpoint, 2nd arg callback of request & response
// Request is for the data from the URL end point - api prefix is a good naming convention to identify server-side routes, client-side routes do not get data- they just identify a page link where the data will be used

app.get("/api-users", (req, res) => {
  res.send("your users route is working");
});

// POST request - first arg end point, 2nd arg callback of req/ resp
// Req is for the data from the URL end point the response is how to modify that data in the request body

app.post("/api-users", (req, res) => {
  res.send("your users route has been updated and is working");
});
// the request.body is a method that extracts the props of the body property puts it into response with the body-parser
app.post("/api-users", (req, res) => {
  res.send(
    `your users has been updated and is working ${request.body.first_name}`
  );
});

// url or route parameters - the endpoint is different so we need to access the information using the url parameters -  method request.params.nameofprop()
app.get("/api-users/:email", (req, res) => {
  res.send(
    `your users route has been updated and is working ${request.params.email}`
  );
});
