let click = document.querySelector(".click");

let list = document.querySelector(".list");

click.addEventListener("click", () => {
  console.log("dropdownaaa");
  list.classList.toggle("newlist");
});
