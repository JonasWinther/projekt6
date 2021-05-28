var launch = document.getElementById("modalLaunch");

var closeBtn = document.getElementById("clsLaunch");

var yes = document.getElementById("launchYes");

var no = document.getElementById("launchNo");

var underCon = document.getElementById("underCon");

var ret = document.getElementById("return");

var view2 = document.getElementById("hideview");

window.onclick = function (event) {
  if (event.target == launch) {
    launch.style.display = "none";
  }
};

closeBtn.onclick = function () {
  launch.style.display = "none";
};

function openLaunch(title) {
  document.querySelector("#launchName").innerHTML = title;

  launch.style.display = "block";
}

yes.onclick = function () {
  launch.style.display = "none";
  underCon.style.display = "grid";
  view2.style.display = "none";
};

no.onclick = function () {
  launch.style.display = "none";
};

ret.onclick = function () {
  underCon.style.display = "none";
  view2.style.display = "block";
};
