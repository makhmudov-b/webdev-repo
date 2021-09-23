const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true });


const newScema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", newScema);

app.route("/articles")
    .get(function (req, res) {
        Article.find(function (err, found) {
            if (!err) {
                res.send(found);
            }
            else {
                res.send(err);
            }
        });
    })
    .post(function (req, res) {
        const message = new Article({
            title: req.body.title,
            content: req.body.content
        });
        message.save(function (err) {
            if (!err) {
                res.send("Success");
            } else {
                res.send("Error found" + err);
            }
        });
    })
    .delete(function (req, res) {
        Article.deleteMany(function (err) {
            if (!err) {
                res.send("Successfully deleted");
            } else {
                res.send("Error occured");
            }
        });
    });
//separate///////////////////////////////////////////////////////////////////////////////////////////////
app.route("/articles/:artTitle")
    .get(function (req, res) {
        Article.findOne({ title: req.params.artTitle }, function (err, found) {
            if (found) {
                res.send(found);
            } else {
                res.send("Not found");
            }

        });
    })
    .put(function (req, res) {
        Article.updateOne(
            { title: req.params.artTitle },
            { title: req.body.title, content: req.body.content },
            { overwrite: true },
            function (err) {
                if (!err) {
                    res.send("Updated successfully");
                }
            }
        );
    })
    .patch(function (req, res) {
        Article.updateOne(
            { title: req.params.artTitle },
            { $set: req.body },
            function (err) {
                if (!err) {
                    res.send("Updated successfully");
                }
            }
        );
    })
    .delete(function (req, res) {
        Article.deleteOne(
            { title: req.params.artTitle },
            function (err) {
                if (!err) {
                    res.send("Deleted!");
                }
            }
        );
    });

app.listen(3000, function () {
    console.log("Server is running...");
});