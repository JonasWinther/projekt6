var azi = document.getElementById("azi");

var ele = document.getElementById("ele");

function azimuth() {
  if (azi.style.backgroundColor === "rgb(255, 255, 255)") {
    azi.style.backgroundColor = "#0d76bd";
    ele.style.backgroundColor = "#ffffff";
  } else {
    azi.style.backgroundColor = "#ffffff";
    ele.style.backgroundColor = "#ffffff";
  }
}

function elevation() {
  if (ele.style.backgroundColor === "rgb(255, 255, 255)") {
    ele.style.backgroundColor = "#0d76bd";
    azi.style.backgroundColor = "#ffffff";
  } else {
    ele.style.backgroundColor = "#ffffff";
    azi.style.backgroundColor = "#ffffff";
  }
}
