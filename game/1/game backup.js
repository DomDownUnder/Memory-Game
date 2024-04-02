const cards = document.querySelectorAll(".memory-card-inner");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});
