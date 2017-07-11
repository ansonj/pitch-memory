var audioContext = new (window.AudioContext || window.webkitAudioContext)();

var oscillator;

function audio_start(hertz) {
    oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.connect(audioContext.destination);

    audio_change(hertz);

    oscillator.start();
}

function audio_change(hertz) {
    oscillator.frequency.value = hertz;
}

function audio_stop() {
    oscillator.stop();
}
