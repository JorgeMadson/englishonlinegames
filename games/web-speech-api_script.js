var synth = window.speechSynthesis;

var inputTxt = document.querySelector('.txt');
var voices = [];

voices = synth.getVoices().sort(function (a, b) {
  const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
  if (aname < bname) return -1;
  else if (aname == bname) return 0;
  else return +1;
});

var englishAmericaVoice = 22;

function speak(params) {
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }
  if (params.value !== '') {
    var utterThis = new SpeechSynthesisUtterance(params.value);
    utterThis.onend = function (event) {
      console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
    }
    utterThis.voice = voices[englishAmericaVoice];
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
  }
}