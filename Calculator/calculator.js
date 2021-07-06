const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
    var num1 = parseFloat(req.body.height);
    var num2 = parseFloat(req.body.weight);

    var result = num2 / (num1 * num1);

    res.send("The answer is " + result);
});

app.listen(3000, function () {
    console.log("Server is working on port 3000.");
});