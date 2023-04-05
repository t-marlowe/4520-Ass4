document.addEventListener('DOMContentLoaded', () => {
  const quote = document.querySelector('.quote');
  const characters = quote.querySelectorAll('span');

  characters.forEach((char, index) => {
    char.style.setProperty('--char-index', index);
  });
});

function applyEmotion(emotion) {
  const quote = document.querySelector('.quote');

  if (emotion === 'happy') {
    quote.className = 'quote happy';
  } else if (emotion === 'sad') {
    quote.className = 'quote sad';
  } else if (emotion === 'angry') {
    quote.className = 'quote angry';
  } else if (emotion === 'reset') {
    quote.className = 'quote';
  }
}

/* Source for animation delay */
/* https://stackoverflow.com/questions/28989708/is-it-possible-to-use-the-nth-child-value-as-a-parameter-in-a-property-and-how/51601269#51601269 */

const revealButton = document.getElementById('reveal-button');
const hiddenTextWords = document.querySelectorAll('.hidden-text-word');

revealButton.addEventListener('click', () => {
  hiddenTextWords.forEach((word, index) => {
    setTimeout(() => {
      word.style.opacity = 1;
      setTimeout(() => {
        word.style.opacity = 0;
      }, 6000);
    }, index * 400);
  });
});

// https://developer.mozilla.org/en-US/docs/Web/Performance/CSS_JavaScript_animation_performance