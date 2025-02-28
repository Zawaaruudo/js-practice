const cardValues = [
  'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E' // Add card values here
];

const cardsContainer = document.querySelector('.cards-container');
let flippedCards = [];

// Function to shuffle the card values
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Function to create and display the cards
const createCards = () => {
  shuffle(cardValues);
  cardValues.forEach(value => {
    const card = document.createElement('div');
    card.classList.add('card');

    const frontFace = document.createElement('div');
    frontFace.classList.add('front-face');
    frontFace.textContent = value; // Set card value

    const backFace = document.createElement('div');
    backFace.classList.add('back-face');

    card.appendChild(frontFace);
    card.appendChild(backFace);
    cardsContainer.appendChild(card);

    card.addEventListener('click', () => {
      flipCard(card);
    });
  });
};

// Function to handle card flip
const flipCard = (card) => {
  if (flippedCards.includes(card) || flippedCards.length === 2) return;

  card.classList.add('flip');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    checkForMatch();
  }
};

// Function to check if two flipped cards match
const checkForMatch = () => {
  const [firstCard, secondCard] = flippedCards;

  const firstCardValue = firstCard.querySelector('.front-face').textContent;
  const secondCardValue = secondCard.querySelector('.front-face').textContent;

  if (firstCardValue === secondCardValue) {
    // Match found, keep them flipped
    flippedCards = []; // Reset for the next round
  } else {
    // No match, flip them back after a short delay
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      flippedCards = []; // Reset for the next round
    }, 1000); // Adjust delay as needed
  }
};
// card-flip.js
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  // Array of emojis to choose from
  const emojis = ['⭐', '🌟', '🌈', '🍀', '🎉', '🎈', '🚀', '🌼', '🍕', '🎶'];

  // Function to get a random emoji
  const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  };

  cards.forEach(card => {
    const frontFace = card.querySelector('.front-face');

    // Set the initial emoji to star
    frontFace.textContent = '⭐';

    card.addEventListener('click', () => {
      // Check if the card is already flipped
      if (!card.classList.contains('flipped')) {
        // Change the front face to a random emoji when flipped
        frontFace.textContent = getRandomEmoji(); // Set the random emoji
      }

      // Toggle the flipped class
      card.classList.toggle('flipped');
    });
  });
});


// Initialize the game
createCards();
