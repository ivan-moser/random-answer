# RANDOM ANSWER PROJECT
A simple vanilla js based app, that return a random answare
## Description
Experimenting the DOM Manipulation, i have coded this very simple app,
with the only one goal: to modify a string in the DOM with a random path of words.
This project take just a few minuts to code, is very simple but it gives the foundaments for the DOM Manipulation.

![image](https://github.com/user-attachments/assets/4a09e689-8ba2-439e-8b80-b1260caf1f0e)

## Concepts
To code this, I have used just two functions, the first one is the randomWord(), taht just one paramether, an array:

```javascript
function randomWord(array) {
    return Math.floor(Math.random() * array.length);
}
```

The goal of this function is very simple: it takes an array as argument, and return a random index of it.

The second function is the generateAnswer(), a function with no return value that is connectet to the onclick event in HTML button.

```javascript
function generateAnswer() {
    let answer = `${subject[randomWord(subject)]} ${verb[randomWord(verb)]} ${object[randomWord(object)]}`;
    display.innerText = answer;
}
```

This one, just create a variable with a [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), that construct the answer using the randomWord() for each of the arrays.

