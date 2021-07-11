const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();

app.listen(3000, function () {
    console.log("Localhost 3000 is working....");
})