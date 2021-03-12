for (var index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll("button")[index].addEventListener("click", function ClickOn() {
        var innerHTML = this.innerHTML;
        buttonPopUp(innerHTML);
        switch (innerHTML) {
            case 'w':
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case 'a':
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case 's':
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case 'd':
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case 'j':
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case 'k':
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case 'l':
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            default: console.log(innerHTML);
                break;
        }
    });
}

document.addEventListener("keydown", function (event) {
    var innerHTML = event.key;
    buttonPopUp(innerHTML);
    switch (innerHTML) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(innerHTML);
            break;
    }
});

function buttonPopUp(address) {
    document.querySelector("." + address).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + address).classList.remove("pressed");
    }, 100);
}