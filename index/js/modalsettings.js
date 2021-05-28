var modal = document.getElementById("modalSet");

var closebtn = document.getElementsByClassName("closemodal")[0];

var cancel = document.getElementById("cancel");

var save = document.getElementById("save");

function openModal(
  title,
  location = "Odense",
  operator = "Jonas Winther",
  date = new Date().toString()
) {
  document.querySelector("#missionName").innerHTML = title;
  document.querySelector("#missionLoca").innerHTML = location;
  document.querySelector("#missionOper").innerHTML = operator;
  document.querySelector("#missionDate").innerHTML = date;

  modal.style.display = "block";
}

closebtn.onclick = function () {
  modal.style.display = "none";
};

cancel.onclick = function () {
  modal.style.display = "none";
};

save.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var conn = document.getElementById("connected");

var disconn = document.getElementById("disconnected");

function disconnect() {
  disconn.style.display = "block";
  conn.style.display = "none";
}

function connect() {
  conn.style.display = "block";
  disconn.style.display = "none";
}

var azi = document.getElementById("azi");

var ele = document.getElementById("ele");

var incre = document.getElementById("incre");

var decre = document.getElementById("decre");

var co = document.getElementById("co");

var cross = document.getElementById("cross");

var alter = document.getElementById("alter");

function alternating() {
  console.log(alter.style.backgroundColor);
  if (alter.style.backgroundColor === "rgb(255, 255, 255)") {
    alter.style.backgroundColor = "#0d76bd";
  } else {
    alter.style.backgroundColor = "#ffffff";
  }
}

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

function increasing() {
  if (incre.style.backgroundColor === "rgb(255, 255, 255)") {
    incre.style.backgroundColor = "#0d76bd";
    decre.style.backgroundColor = "#ffffff";
  } else {
    incre.style.backgroundColor = "#ffffff";
    decre.style.backgroundColor = "#ffffff";
  }
}

function decreasing() {
  if (decre.style.backgroundColor === "rgb(255, 255, 255)") {
    decre.style.backgroundColor = "#0d76bd";
    incre.style.backgroundColor = "#ffffff";
  } else {
    decre.style.backgroundColor = "#ffffff";
    incre.style.backgroundColor = "#ffffff";
  }
}

function coclick() {
  if (co.style.backgroundColor === "rgb(255, 255, 255)") {
    co.style.backgroundColor = "#0d76bd";
    cross.style.backgroundColor = "#ffffff";
  } else {
    co.style.backgroundColor = "#ffffff";
    cross.style.backgroundColor = "#ffffff";
  }
}

function crossclick() {
  if (cross.style.backgroundColor === "rgb(255, 255, 255)") {
    cross.style.backgroundColor = "#0d76bd";
    co.style.backgroundColor = "#ffffff";
  } else {
    cross.style.backgroundColor = "#ffffff";
    co.style.backgroundColor = "#ffffff";
  }
}

var misinformation = document.getElementById("misinformation");

var misinform = document.getElementById("mish2");

var droneinformation = document.getElementById("droneinformation");

var droneinform = document.getElementById("droneh2");

var calibrationinformation = document.getElementById("calibrationinfo");

var caliinform = document.getElementById("calih2");

function misinfo() {
  if (misinform.style.backgroundColor === "rgb(255, 255, 255)") {
    misinformation.style.display = "grid";
    droneinformation.style.display = "none";
    calibrationinformation.style.display = "none";
    misinform.style.backgroundColor = "#ffffff";
    misinform.style.color = "#0d76bd";
    droneinform.style.backgroundColor = "#0d76bd";
    droneinform.style.color = "#ffffff";
    caliinform.style.backgroundColor = "#0d76bd";
    caliinform.style.color = "#ffffff";
  } else {
    misinformation.style.display = "grid";
    droneinformation.style.display = "none";
    calibrationinformation.style.display = "none";
    misinform.style.backgroundColor = "#ffffff";
    misinform.style.color = "#0d76bd";
    droneinform.style.backgroundColor = "#0d76bd";
    droneinform.style.color = "#ffffff";
    caliinform.style.backgroundColor = "#0d76bd";
    caliinform.style.color = "#ffffff";
  }
}

function droneinfo() {
  if (droneinform.style.backgroundColor === "rgb(255, 255, 255)") {
    misinformation.style.display = "none";
    droneinformation.style.display = "grid";
    calibrationinformation.style.display = "none";
    misinform.style.backgroundColor = "#0d76bd";
    misinform.style.color = "#ffffff";
    droneinform.style.backgroundColor = "#ffffff";
    droneinform.style.color = "#0d76bd";
    caliinform.style.backgroundColor = "#0d76bd";
    caliinform.style.color = "#ffffff";
  } else {
    console.log("else halloooooo");
    misinformation.style.display = "none";
    droneinformation.style.display = "grid";
    calibrationinformation.style.display = "none";
    misinform.style.backgroundColor = "#0d76bd";
    misinform.style.color = "#ffffff";
    droneinform.style.backgroundColor = "#ffffff";
    droneinform.style.color = "#0d76bd";
    caliinform.style.backgroundColor = "#0d76bd";
    caliinform.style.color = "#ffffff";
  }
}

function calibrations() {
  if (droneinform.style.backgroundColor === "rgb(255, 255, 255)") {
    misinformation.style.display = "none";
    droneinformation.style.display = "none";
    calibrationinformation.style.display = "grid";
    misinform.style.backgroundColor = "#0d76bd";
    misinform.style.color = "#ffffff";
    droneinform.style.backgroundColor = "#0d76bd";
    droneinform.style.color = "#ffffff";
    caliinform.style.backgroundColor = "#ffffff";
    caliinform.style.color = "#0d76bd";
  } else {
    console.log("else halloooooo");
    misinformation.style.display = "none";
    droneinformation.style.display = "none";
    calibrationinformation.style.display = "grid";
    misinform.style.backgroundColor = "#0d76bd";
    misinform.style.color = "#ffffff";
    droneinform.style.backgroundColor = "#0d76bd";
    droneinform.style.color = "#ffffff";
    caliinform.style.backgroundColor = "#ffffff";
    caliinform.style.color = "#0d76bd";
  }
}
