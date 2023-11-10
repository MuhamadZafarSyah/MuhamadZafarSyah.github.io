const phrases = ["Hi 👋, Welcome To My Portofolio"];

let index = 0;
const textContainer = document.getElementById("text");

function type() {
  const currentPhrase = phrases[index];
  let charIndex = 0;

  function addChar() {
    if (charIndex < currentPhrase.length) {
      textContainer.textContent += currentPhrase.charAt(charIndex);
      charIndex++;
      setTimeout(addChar, 100);
    } else {
      setTimeout(erase, 1000);
    }
  }

  function erase() {
    if (textContainer.textContent.length > 0) {
      textContainer.textContent = textContainer.textContent.slice(0, -1);
      setTimeout(erase, 50);
    } else {
      index = (index + 1) % phrases.length;
      setTimeout(type, 500);
    }
  }

  addChar();
}

type();
