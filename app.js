const subject = ["The cat", "A dog", "My friend", "The teacher", "An artist"];
const verb = ["paints", "jumps", "reads", "writes", "sings"];
const object = ["a picture", "over the fence", "a book", "a letter", "a song"];

const display = document.getElementById("answer");

function randomWord(array) {
    return Math.floor(Math.random() * array.length);
}

function generateAnswer() {
    let answer = `${subject[randomWord(subject)]} ${verb[randomWord(verb)]} ${object[randomWord(object)]}`;
    display.innerText = answer;
}