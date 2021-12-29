/* [ STYLES ] */

console.log("Hello world!");
/* card component */
const cards = document.querySelectorAll(".card__content");
console.log("CARDS", cards);

if (cards) {
  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      event.currentTarget.classList.toggle("flipped");
    });
  });
}

/* [ SCRIPTS ] */
