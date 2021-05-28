function overview() {
  var view = document.querySelector(".overview");
  var liste = document.querySelector(".mislist");
  var headview = document.querySelector("#view");
  var headlist = document.querySelector("#mislist");

  if (view.style.display === "none") {
    view.style.display = "block";
    liste.style.display = "none";
    headview.style.textDecoration = "underline";
    headlist.style.textDecoration = "none";
  }
}

function overviewlist() {
  var view = document.querySelector(".overview");
  var liste2 = document.querySelector(".mislist");
  var headview = document.querySelector("#view");
  var headlist = document.querySelector("#mislist");
  let stylelist = getComputedStyle(liste2);

  if (stylelist.display === "none") {
    liste2.style.display = "block";
    view.style.display = "none";
    headlist.style.textDecoration = "underline";
    headview.style.textDecoration = "none";
  }
}
