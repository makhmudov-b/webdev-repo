//jshint esversion:6
//npm i
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


mongoose.connect("mongodb+srv://admin-bekjon:besiktas1903@cluster0.m4ucl.mongodb.net/todolistDB", { useNewUrlParser: true });
const itemsScema = {
  name: String
};
const Item = mongoose.model("Item", itemsScema);

const item1 = new Item({
  name: "Welcome to todolist"
})
const item2 = new Item({
  name: "Hit + to add new elements"
})
const item3 = new Item({
  name: "Press to delete the item"
})
const itemArr = [item1, item2, item3];

const listScema = {
  name: String,
  item: [itemsScema]
};

const List = mongoose.model("List", listScema)

app.get("/", function (req, res) {

  Item.find({}, function (err, result) {

    if (result.length === 0) {
      Item.insertMany(itemArr, function (err) {
        if (err) {
          console.log("Error");
        } else {
          console.log("done!");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItems: result });
    }
  });
});

app.post("/", function (req, res) {

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  if (listName === "Today") {
    item.save();
    res.redirect("/");
  }
  else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.item.push(item);
      foundList.save();
      res.redirect("/" + listName);
    });
  }
});

app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemId, function (err) {
      if (err) {
        console.log("Error");
      } else {
        console.log("Deleted");
        res.redirect("/");
      }
    });
  } else {
    List.findOneAndUpdate({ name: listName }, { $pull: { item: { _id: checkedItemId } } }, function (err, foundList) {
      if (!err) {
        res.redirect("/" + listName);
      }
    });
  }



});

app.get("/:name", function (req, res) {
  const customName = _.capitalize(req.params.name);

  List.findOne({ name: customName }, function (err, result) {
    if (!err) {
      if (!result) {
        const list = new List({
          name: customName,
          item: itemArr
        });
        list.save();
        res.redirect("/" + customName);
      } else {
        res.render("list", { listTitle: result.name, newListItems: result.item });
      }
    }

  });


});

app.get("/about", function (req, res) {
  res.render("about");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, function () {
  console.log("Server started on port 3000");
});
