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

// Creates a deck with 2 copies of each card
const deck = [];
for (let i = 0; i < pictureSrcs.length; i++) {
  deck.push(pictureSrcs[i]);
  deck.push(pictureSrcs[i]);
}

// Shuffles the deck 50 times
for (let i = 0; i < 50; i++) {
  let randomA = Math.random(); //creating a random number between 0 & 1
  randomA = randomA * deck.length; //turning the random number into between 0 & length
  randomA = Math.floor(randomA); //deleting behind the .
  let randomB = Math.random();
  randomB = randomB * deck.length;
  randomB = Math.floor(randomB);
  [deck[randomA], deck[randomB]] = [deck[randomB], deck[randomA]]; //swapping A & B in deck
}

// Renders every tile in the deck
const gridElement = document.getElementById("grid");
for (let i = 0; i < deck.length; i++) {
  // Creating a Memory card element
  const memoryCardEl = document.createElement("div");
  memoryCardEl.className = "memory-card";

  // Creating an inner div for the Memory card
  const memoryCardInnerEl = document.createElement("div");
  memoryCardInnerEl.className = "memory-card-inner";
  memoryCardInnerEl.dataset.frontSrc = deck[i];

  // Creating an image element for the front face of the card
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", deck[i]);
  imgElement.className = "front-face";

  // Creating an image element for the back face of the card
  const backFaceElement = document.createElement("img");
  backFaceElement.setAttribute("src", "../../img/tile-microphone.jpeg");
  backFaceElement.className = "back-face";

  // Appending the back face and front face elements to the memory card inner div
  memoryCardInnerEl.appendChild(backFaceElement);
  memoryCardInnerEl.appendChild(imgElement);

  // Appending the Memory card inner div to the Memory card element
  memoryCardEl.appendChild(memoryCardInnerEl);

  // Appending the Memory card element to the grid element
  gridElement.appendChild(memoryCardEl);
}

// Initializing variables for the game logic
let preventClick = false;
let firstCard = null;
let matchCount = 0;
let maxMatchCount = 0;

// Getting all Memory cards
const cards = document.querySelectorAll(".memory-card-inner");

// Getting elements for displaying match count and max match count
const scoreCount = document.getElementById("match_count");
const maxMatchCountEl = document.getElementById("max_match_count");

// Calculating the maximum number of matches
maxMatchCount = cards.length / 2;

// Displaying the maximum match count
maxMatchCount.innerText = maxMatchCount;

// Adding click event listeners to each Memory card

for (let i = 0; i < cards.length; i++) {
  const currentCard = cards[i];
  currentCard.addEventListener("click", () => {
    console.log("click start", firstCard);
    console.log("current card keep open", currentCard.dataset.keepOpen);
    if (
      firstCard !== currentCard &&
      preventClick !== true &&
      currentCard.dataset.keepOpen !== "true"
    ) {
      // Preventing to click on a card
      currentCard.classList.toggle("is-flipped");
      console.log("current card frontSrc", currentCard.dataset.frontSrc);
      if (firstCard === null) {
        firstCard = currentCard;
      } else {
        console.log("first card frontSrc", firstCard.dataset.frontSrc);

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
            console.log("after timeout", firstCard);
          }, 1500);
        }
      }
    }
  });
}

function checkAllPairsFound() {
  if (matchCount === maxMatchCount) {
    removeMemoryCards();
  }
}

function removeMemoryCards() {
  gridElement.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "Congratulations - you won!";
  h1.className = "congratulations-message";
  gridElement.appendChild(h1);
}
