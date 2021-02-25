var pics = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var ran = Math.floor(Math.random() * 6);
document.querySelector("img.img1").setAttribute("src", pics[ran]);

var ran2 = Math.floor(Math.random() * 6);
document.querySelector("img.img2").setAttribute("src", pics[ran2]);

if (ran > ran2) {
    document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
}
else if (ran < ran2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector(".container h1").innerHTML = "Draw!";
}
