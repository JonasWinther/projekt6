function openTab(item) {
  var cards = document.querySelector(`#${item}Card`);
  var tabs = document.querySelector(`#${item}Tab`);

  if (cards.style.display === "none") {
    cards.style.display = "block";
    tabs.style.display = "none";
  } else {
    cards.style.display = "none";
    tabs.style.display = "block";
  }
}
