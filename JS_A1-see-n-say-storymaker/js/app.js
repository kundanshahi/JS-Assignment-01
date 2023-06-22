// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables */
const synth = window.speechSynthesis;
const speakButton = document.getElementById('speakButton');
const randomButtons = [
    document.getElementById('randomButton1'),
    document.getElementById('randomButton2'),
    document.getElementById('randomButton3'),
    document.getElementById('randomButton4'),
    document.getElementById('randomButton5')
];
const speakRandomButton = document.getElementById('speakRandomButton');
const resetButton = document.getElementById('resetButton');
const outputContainer = document.getElementById('outputContainer');

let textToSpeak = '';

/* Arrays for random phrases */
const nouns = ['cat', 'dog', 'book', 'car', 'tree'];
const verbs = ['runs', 'jumps', 'reads', 'drives', 'climbs'];
const adjectives = ['beautiful', 'fast', 'big', 'green', 'happy'];
const places = ['beach', 'park', 'city', 'forest', 'mountain'];

/* Functions */
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function generateRandomPhrase() {
    const noun = nouns[getRandomIndex(nouns)];
    const verb = verbs[getRandomIndex(verbs)];
    const adjective = adjectives[getRandomIndex(adjectives)];
    const place = places[getRandomIndex(places)];
    const phrase = `${noun} ${verb} ${adjective} ${noun} ${place}`;
    return phrase;
}

function speakNow(string) {
    const utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

function generateAndSpeakRandomPhrase() {
    const randomPhrase = generateRandomPhrase();
    textToSpeak += randomPhrase + ' ';
    outputContainer.innerText += randomPhrase + ' ';
    speakNow(randomPhrase);
}

function reset() {
    textToSpeak = '';
    outputContainer.innerText = '';
}

/* Event Listeners */
speakButton.addEventListener('click', function() {
    speakNow(textToSpeak);
});

randomButtons.forEach(function(button) {
    button.addEventListener('click', generateAndSpeakRandomPhrase);
});

speakRandomButton.addEventListener('click', function() {
    generateAndSpeakRandomPhrase();
});

resetButton.addEventListener('click', function() {
    reset();
});
