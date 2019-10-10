const express = require("express");
const bodyParser = require("body-parser");
const checkDataRoute = require("./routes/data");
const removeItemRoute = require("./routes/input");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use("/api", checkDataRoute);
app.use("/api", removeItemRoute);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Natter Base API.");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
  });
}

module.exports = app;
