var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

  });

}



function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("C:/Users/Prathusha/Documents/GitHub/drumkit/sounds_crash.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("C:/Users/Prathusha/Documents/GitHub/drumkit/sounds_kick-bass.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('C:/Users/Prathusha/Documents/GitHub/drumkit/sounds_snare.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('C:/Users/Prathusha/Documents/GitHub/drumkit/sounds_tom-1.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('C:/Users/Prathusha/Documents/GitHub/drumkit/sounds_tom-2.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('C:/Users/Prathusha/Documents/GitHub/drumkit/sounds_tom-3.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('C:/Users/Prathusha/Documents/GitHub/drumkit/sounds_tom-4.mp3');
      kick.play();
      break;

    default: console.log(key);

  }
}

