const express = require("express");
const bodyParser = require("body-parser"); 
const checkDataRoute = require("./routes/data")


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 6000;

app.use("/api", checkDataRoute)

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Natter Base API.");
});

app.listen(port, ()=>{
  console.log(`Server up and running on port ${port}`)
})