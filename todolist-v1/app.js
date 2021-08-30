//npm init
//npm i express body-parser
//npm i ejs
//no node_modules
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["Read book", "Finish Chapter", "Eat food"];
let workItems = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("css"));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    //res.sendFile(__dirname + "/index.html")
    //to connect to html file
    const today = new Date();
    let curDay = today.getDay();
    let day = "";
    //res.write()

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    day = today.toLocaleDateString("en-US", options);
    //res.send()
    res.render("list", { listTitle: day, newListItem: items });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");

    } else {
        items.push(item);
        res.redirect('/');
    }


});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItem: workItems });
});

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})
app.get("/about",function(req, res){
    res.render("about");
})
//nodemon app.js
app.listen(3000, function () {
    console.log("It is working well!");
});