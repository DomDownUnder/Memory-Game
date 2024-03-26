const pictures = [
    "./img/tile-britney.jpeg",
    "./img/tile-cher.jpeg",
    "./img/tile-gaga.jpeg",
    "./img/tile-nicki.jpeg",
    "./img/tile-tina.jpeg",
    "./img/tile-whitney.jpeg"
];

const tilePlaceholder = document.getElementById("tile-placeholder");

for (let picture of pictures) {
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", picture);
    imgElement.setAttribute("width", "200px");
    tilePlaceholder.appendChild(imgElement);
}
