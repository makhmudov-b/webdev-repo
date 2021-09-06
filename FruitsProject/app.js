const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitScema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name specified"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const people = new mongoose.Schema({
  age: Number,
  name: String,
  favouriteFruit: fruitScema
})
const People = mongoose.model("People", people);



const Fruit = mongoose.model("Fruit", fruitScema);

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 9,
//   review: "Good"
// })

// const kiwi = new Fruit({
//   name: "kiwi",
//   rating: 7,
//   review: "Good"
// })

const banana = new Fruit({
  name: "banana",
  rating: 7,
  review: "Good"
})

// banana.save();

const pip = new People({
  age: 37,
  name: "John",
})

// pip.save();

// Fruit.insertMany([kiwi, pineapple], function(err){
//    if(err){
//      console.log("There is an error");
    
//    }
//    else{
//      console.log("Succesfully added");
//    }
// })
// fruit.save();

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  }
  else {
    fruits.forEach(function (item) {
      console.log(item.name);
    })
  }
})

// Fruit.deleteMany({ name: "pineapple" }, function (err) {
//   if (err) {
//     console.log("(");
//   } else {
//     console.log(")");
//   }
// });

// Fruit.updateOne({ name: "banana" }, { _id: "613509a531e582a8e65e2665" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesful update the document");
//   }
// });