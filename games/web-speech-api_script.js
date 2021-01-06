// get from https://github.com/mdn/web-speech-api
// https://mdn.github.io/web-speech-api/speak-easy-synthesis/

var synth = window.speechSynthesis;

function speak(params) {
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    synth.cancel();
    return;
  }
  if (params !== '') {
    var utterThis = new SpeechSynthesisUtterance(params);
    utterThis.onend = function (event) {
      console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
    }
    console.log(`Speaking: ${utterThis.text}`);
    synth.speak(utterThis);
  }
}