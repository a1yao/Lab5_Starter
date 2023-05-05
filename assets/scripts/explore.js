// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  let voices = [];

  const textArea = document.querySelector("textarea");
  const dropDown = document.querySelector("select");
  const talkButton = document.querySelector("button");
  const smiley = document.querySelector("img");

  var utterance;


  setTimeout(() => {
    voices = synth.getVoices();
    let voice;
  
    for(let i = 0; i < voices.length; i++) {
      let newOption = new Option(voices[i].name, i);
      dropDown.add(newOption, undefined);
    }

    textArea.addEventListener("change", (event) => {
        utterance = new SpeechSynthesisUtterance(event.target.value);
        utterance.voice = voice;
    });

    dropDown.addEventListener("input", (event) => {
        voice = voices[event.target.value];
        utterance.voice = voice;
    })

    talkButton.addEventListener("click", () => {
        synth.speak(utterance);
        smiley.src = "assets/images/smiling-open.png";
    })


    setInterval(() => {
        if(synth.speaking == false) {
            smiley.src = "assets/images/smiling.png";
        }
    }, 0);
    

}, 50);


}