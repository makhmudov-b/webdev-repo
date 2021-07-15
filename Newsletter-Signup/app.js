const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();

app.use(express.static("static"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})
app.post("/", function (req, res) {
    console.log(req.body.Name);
    
})
app.listen(3000, function () {
    console.log("Localhost 3000 is working....");
})
// a88756f157e7362040ca1fb5543e197a-us6
// 9277704633