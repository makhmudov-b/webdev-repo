const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})
app.post("/", function (req, res) {
    const query = req.body.cityName;
    const appid = "c6c0f1db9aaf2f4ecc937258c81fbfe8#";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + units + "&appid=" + appid;

    https.get(url, function (response) {
        response.on("data", function (info) {
            const weatherData = JSON.parse(info)
            const desc = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const image = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>The temperature in " + query + " is " + weatherData.main.temp + " degrees</h1>");
            res.write("<h1><em>The description:" + desc + "</h1></em>");
            res.write("<img src =" + image + ">");
        })
    })
})


app.listen(3000, function () {
    console.log("Port 3000 is used...");
})

// git add .
// git commit
// git push heroku master
