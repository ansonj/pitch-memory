var audioContext = new (window.AudioContext || window.webkitAudioContext)();

var oscillator = audioContext.createOscillator();
oscillator.type = 'sine';
oscillator.connect(audioContext.destination);

function audio_start(hertz) {
    audio_change(hertz);
    oscillator.start();
}

function audio_change(hertz) {
    oscillator.frequency.value = hertz;
}

function audio_stop() {
    oscillator.stop();
}
