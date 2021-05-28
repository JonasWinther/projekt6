let span = document.getElementsByClassName("arrow");
let card = document.getElementsByClassName("card");
let card_page = Math.ceil(card.length / 4);
let l = 0;
let movePer = 23;
let maxMove = 203;
// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  movePer = 339;
  maxMove = 504;
}

let right_mover = () => {
  l = l + movePer;
  if (card == 1) {
    l = 0;
  }
  for (const i of card) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
  }
};
let left_mover = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of card) {
    if (card_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};
span[1].onclick = () => {
  right_mover();
};
span[0].onclick = () => {
  left_mover();
};
