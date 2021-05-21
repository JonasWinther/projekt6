function overview() {
  var view = document.querySelector(".overview");
  var list = document.querySelector(".list");
  var headview = document.querySelector("#view");
  var headlist = document.querySelector("#mislist");

  if (view.style.display === "none") {
    view.style.display = "block";
    list.style.display = "none";
    headview.style.textDecoration = "underline";
    headlist.style.textDecoration = "none";
  }
}

function overviewlist() {
  var view = document.querySelector(".overview");
  var list = document.querySelector(".list");
  var headview = document.querySelector("#view");
  var headlist = document.querySelector("#mislist");
  let stylelist = getComputedStyle(list);

  if (stylelist.display === "none") {
    list.style.display = "block";
    view.style.display = "none";
    headlist.style.textDecoration = "underline";
    headview.style.textDecoration = "none";
  }
}
