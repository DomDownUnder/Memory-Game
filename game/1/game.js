const pictureSrcs = [
  "/img/tile-britney.jpeg",
  "/img/tile-cher.jpeg",
  "/img/tile-gaga.jpeg",
  "/img/tile-nicki.jpeg",
  "/img/tile-tina.jpeg",
  "/img/tile-whitney.jpeg",
];

// creates a deck with 2 copies of each card
const deck = [];
for (let i = 0; i < pictureSrcs.length; i++) {
  deck.push(pictureSrcs[i]);
  deck.push(pictureSrcs[i]);
}

// Shuffle
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
  const memoryCardEl = document.createElement("div");
  memoryCardEl.className = "memory-card";

  const memoryCardInnerEl = document.createElement("div");
  memoryCardInnerEl.className = "memory-card-inner";
  memoryCardInnerEl.dataset.frontSrc = deck[i];

  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", deck[i]);
  imgElement.className = "front-face";

  const backFaceElement = document.createElement("img");
  backFaceElement.setAttribute("src", "/img/tile-microphone.jpeg");
  backFaceElement.className = "back-face";

  memoryCardInnerEl.appendChild(backFaceElement);
  memoryCardInnerEl.appendChild(imgElement);
  memoryCardEl.appendChild(memoryCardInnerEl);
  gridElement.appendChild(memoryCardEl);
}

let preventClick = false;
let firstCard = null;

const cards = document.querySelectorAll(".memory-card-inner");
cards.forEach((currentCard) => {
  currentCard.addEventListener("click", () => {
    console.log("click start", firstCard);
    console.log("current card keep open", currentCard.dataset.keepOpen);
    if (
      firstCard !== currentCard &&
      preventClick !== true &&
      currentCard.dataset.keepOpen !== "true"
    ) {
      //prevent clicking on a card
      currentCard.classList.toggle("is-flipped");
      console.log("current card frontSrc", currentCard.dataset.frontSrc);
      if (firstCard === null) {
        firstCard = currentCard;
      } else {
        console.log("first card frontSrc", firstCard.dataset.frontSrc);

        if (currentCard.dataset.frontSrc === firstCard.dataset.frontSrc) {
          //A match was made
          currentCard.dataset.keepOpen = true;
          firstCard.dataset.keepOpen = true;
          firstCard = null;
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
});
