const express = require("express");
const bodyParser = require("body-parser");
const checkDataRoute = require("./routes/data");
const removeItemRoute = require("./routes/input");
const aladdinRoute = require("./routes/aladdin");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3200;

app.use("/api", checkDataRoute);
app.use("/api", removeItemRoute);
app.use("/api", aladdinRoute);

app.get("/", (req, res) => {
  res.status(200).send("Hello world, this is the Natter Base API.");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
  });
}

module.exports = app;
