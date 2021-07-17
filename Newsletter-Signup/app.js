const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
var https = require("https");
const app = express();

app.use(express.static("static"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})
app.post("/", function (req, res) {
    var name = req.body.Name;
    var sur = req.body.Surname;
    var mail = req.body.Mail;

    var data = {
        members: [
            {
                email_address: mail,
                status: "subscribed",
                merge_fields: {
                    FNAME: name,
                    LNAME: sur
                }

            }
        ]
    }
    const jsonData = JSON.stringify(data);

    const url = "https://us6.api.mailchimp.com/3.0/lists/9277704633";

    const options = {
        method: "POST",
        auth: "bekjan:a88756f157e7362040ca1fb5543e197a-us6"
    }

    const request = https.request(url, options, function (response) {
        if (response.statusCode === 200) {
            console.log("Never will work");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
})

app.post("/failure", function (req, res) {
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Localhost 3000 is working....");
})

// a88756f157e7362040ca1fb5543e197a-us6
//  