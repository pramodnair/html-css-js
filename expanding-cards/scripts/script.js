// All the javascript code goes here.
const cards = document.querySelectorAll(".panel");

function activateCard() {
  cards.forEach((card) => {
    // set action on click event
    card.addEventListener("click", () => {
      // de-activate previous cards
      deactivateCards();
      // activate the current card
      card.classList.add("active");
    });
  });
}

function deactivateCards() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}

activateCard();
