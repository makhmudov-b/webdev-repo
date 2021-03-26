var buttonColor = ["red", "blue", "yellow", "green"];
var userClickedPattern = [];
var gamePattern = [];


gamePattern.push(randomChoosenColor);

var randomNumber = Math.round(Math.random() * 3);
var randomChoosenColor = buttonColor[randomNumber];
var audio = new Audio("sounds/" + randomChoosenColor + ".mp3");
audio.play();
$("#" + randomChoosenColor).fadeOut(100).fadeIn(100);
snd(randomChoosenColor);



$(".btn").on("click", function ClickOn() {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);

});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}