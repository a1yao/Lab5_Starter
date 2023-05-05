// expose.js


window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  const mainImg = document.querySelector("section > img");
  const mainAudio = document.querySelector("audio");
  const volumeIcon = document.querySelector("div > img");

  const dropDown = document.querySelector("select");
  const slider = document.querySelector("input");
  const playButton = document.querySelector("button");

  var sound;


  dropDown.addEventListener("input", updateImg);
  slider.addEventListener("input", updateVolume);
  playButton.addEventListener("click", playSound);

  function updateImg(e) {
    mainImg.src = "assets/images/" + e.target.value + ".svg";
    mainAudio.src = "assets/audio/" + e.target.value + ".mp3";
    sound = e.target.value;
  }

  function updateVolume(e) {
    mainAudio.volume = e.target.value/100;
    if(e.target.value == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    }
    else if(e.target.value < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    }
    else if(e.target.value < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  }

  function playSound() {
    mainAudio.play();
    console.log(sound);
    if(sound == "party-horn") {
      jsConfetti.addConfetti();
    }
    
  }
}