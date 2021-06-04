const express = require("express");

const app = express();

app.get("/", function (request, response) {
    response.send("<h1>Hello</h1>");
});

app.get("/next", function (request, res) {
    res.send("<h2><em>Wellcome to the next page!</em></h2>");
});

app.get("/next/last", function (request, response) {
    response.send("<h1></it>Just experimenting</it></h1>");
});


app.listen(3000, function () {
    console.log("It is working!");
});