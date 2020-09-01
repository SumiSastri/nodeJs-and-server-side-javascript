// STEP 1 set up routes and check on PostMan - export and import into server
const abcRoutes = (app) => {
  app
    .route("/api-abc")
    .get((req, res) => res.send("/api-abc GET request successful!"))

    .post((req, res) => res.send("/api-abc CReate-POST end-point successful!"));

  app
    .route("/api-abc/:abcId")
    // test on postman with /api-abc/123
    .put((req, res) =>
      res.send("/api-abc/:abcId Update-PUT request successful!")
    )

    .delete((req, res) =>
      res.send("/api-abc/:abcId Delete-DELETE request successful!")
    );
};

module.exports = abcRoutes;
