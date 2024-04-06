// Array of image sources for the Memory game cards
const pictureSrcs = [
  "../../img/tile-britney.jpeg",
  "../../img/tile-cher.jpeg",
  "../../img/tile-gaga.jpeg",
  "../../img/tile-nicki.jpeg",
  "../../img/tile-tina.jpeg",
  "../../img/tile-whitney.jpeg",
  "../../img/tile-alicia.jpeg",
  "../../img/tile-celine.jpeg",
  "../../img/tile-dolly.jpeg",
  "../../img/tile-janet.jpeg",
  "../../img/tile-kylie.jpeg",
  "../../img/tile-michelle.jpeg",
];

const timeToFlipCard = 1500; // milliseconds

// Create a deck with 2 copies of each card
const deck = [];
for (let i = 0; i < pictureSrcs.length; i++) {
  deck.push(pictureSrcs[i]);
  deck.push(pictureSrcs[i]);
}

// Shuffle the deck 50 times
for (let i = 0; i < 50; i++) {
  let randomA = Math.random(); //creating a random number between 0 & 1
  randomA = randomA * deck.length; //turning the random number into between 0 & length
  randomA = Math.floor(randomA); //deleting behind the .
  let randomB = Math.random();
  randomB = randomB * deck.length;
  randomB = Math.floor(randomB);
  [deck[randomA], deck[randomB]] = [deck[randomB], deck[randomA]]; //swapping A & B in deck
}

// Render every tile in the deck
const gridElement = document.getElementById("grid");
for (let i = 0; i < deck.length; i++) {
  // Create a Memory card element
  const memoryCardEl = document.createElement("div");
  memoryCardEl.className = "memory-card";

  // Create an inner div for the Memory card
  const memoryCardInnerEl = document.createElement("div");
  memoryCardInnerEl.className = "memory-card-inner";
  memoryCardInnerEl.dataset.frontSrc = deck[i];

  // Create an image element for the front face of the card
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", deck[i]);
  imgElement.className = "front-face";

  // Create an image element for the back face of the card
  const backFaceElement = document.createElement("img");
  backFaceElement.setAttribute("src", "../../img/tile-microphone.jpeg");
  backFaceElement.className = "back-face";

  // Append the back face and front face elements to the memory card inner div
  memoryCardInnerEl.appendChild(backFaceElement);
  memoryCardInnerEl.appendChild(imgElement);

  // Append the Memory card inner div to the Memory card element
  memoryCardEl.appendChild(memoryCardInnerEl);

  // Append the Memory card element to the grid element
  gridElement.appendChild(memoryCardEl);
}

// Initialize variables for the game logic
let preventClick = false;
let firstCard = null;
let matchCount = 0;
let maxMatchCount = 0;

// Get all Memory cards
const cards = document.querySelectorAll(".memory-card-inner");

// Get elements for displaying match count and max match count
const scoreCount = document.getElementById("match_count");
const maxMatchCountEl = document.getElementById("max_match_count");

// Calculate the maximum number of matches
maxMatchCount = cards.length / 2;

// Display the maximum match count
maxMatchCount.innerText = maxMatchCount;

// Add click event listeners to each Memory card
for (let i = 0; i < cards.length; i++) {
  const currentCard = cards[i];
  currentCard.addEventListener("click", () => {
    if (
      firstCard !== currentCard &&
      preventClick !== true &&
      currentCard.dataset.keepOpen !== "true"
    ) {
      // Prevent to click on a card
      currentCard.classList.toggle("is-flipped");
      if (firstCard === null) {
        firstCard = currentCard;
      } else {
        if (currentCard.dataset.frontSrc === firstCard.dataset.frontSrc) {
          // A match was made
          currentCard.dataset.keepOpen = true;
          firstCard.dataset.keepOpen = true;
          firstCard = null;
          // The Match Count is being updated after every match that was made
          matchCount = matchCount + 1;
          // Get the Match Count Element and updating it inner text
          scoreCount.innerText = matchCount;
          checkAllPairsFound();
        } else {
          preventClick = true;
          setTimeout(() => {
            firstCard.classList.toggle("is-flipped");
            currentCard.classList.toggle("is-flipped");
            firstCard = null;
            preventClick = false;
          }, timeToFlipCard);
        }
      }
    }
  });
}

// Add a time out, so the last card revealed can be seen
function checkAllPairsFound() {
  if (matchCount === maxMatchCount) {
    setTimeout(() => {
      removeMemoryCards();
    }, timeToFlipCard);
  }
}

// Remove all the cards and open up the congratulations message
function removeMemoryCards() {
  gridElement.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "Congratulations - you won!";
  h1.className = "congratulations-message";
  gridElement.appendChild(h1);
}
