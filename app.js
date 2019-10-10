const express = require("express");
const bodyParser = require("body-parser"); 

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 6000;

app.listen(port, ()=>{
  console.log(`Server up and running on port ${port}`)
})