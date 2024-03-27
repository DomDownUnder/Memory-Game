const pictures = [
    "./img/tile-britney.jpeg",
    "./img/tile-cher.jpeg",
    "./img/tile-gaga.jpeg",
    "./img/tile-nicki.jpeg",
    "./img/tile-tina.jpeg",
    "./img/tile-whitney.jpeg"
];

const clickedDivas = [];

const clickedDivaHandler = (diva, divaData) => {
    divaData.push(diva);
    console.log(clickedDivas);
}


const tilePlaceholder = document.getElementById("tile-placeholder");

for (let picture of pictures) {
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", picture);
    imgElement.setAttribute("width", "200px");
    imgElement.addEventListener("click", function(event) {
        event.preventDefault();
        // clickedDivas.push(picture);
        // console.log(clickedDivas);

        clickedDivaHandler(picture, clickedDivas);
    });

    tilePlaceholder.appendChild(imgElement);
}

function startGame() {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
}

// const cards = document.querySelectorAll(".memory-card");
// cards.forEach(card => {
//     card.addEventListener("click", () => {
//         card.classList.toggle("is-flipped");
//     });
// });

const cards = document.querySelectorAll(".memory-card-test");
cards.forEach(card => {
    card.addEventListener("click", () => {
        // card.classList.add("is-flipped");
        card.classList.toggle("is-flipped-test");
        // console.log(card)
    });
});
