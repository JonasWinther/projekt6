//variablerne defineres ud fra deres ID i HTML'en. Dermed kan de bruges til at ændre style senere.
var launch = document.getElementById("modalLaunch");

var closeBtn = document.getElementById("clsLaunch");

var yes = document.getElementById("launchYes");

var no = document.getElementById("launchNo");

var underCon = document.getElementById("underCon");

var ret = document.getElementById("return");

var view2 = document.getElementById("hideview");

//funktionen aktiveres ved tryk på vinduet og sammenligner det ramte element med launch modal. Hvis der trykkes uden for launch modal, vil den sætte launch modals display til "none".
window.onclick = function (event) {
  if (event.target == launch) {
    launch.style.display = "none";
  }
};

//ved tryk på variablen vil funktionen sætte launch modals display til "none".
closeBtn.onclick = function () {
  launch.style.display = "none";
};

//openLaunch findes på alle launch knapperne på kortene i HTML'et. Ved tryk på launch læser den hvilket kort det, givet ud fra den title der er angivet på kortets funktion.
//Der vil dermed blive åbnet et launch modal, som spørger om man vil launche den mission som man har trykket på.
function openLaunch(title) {
  document.querySelector("#launchName").innerHTML = title;

  launch.style.display = "block";
}

//Yes knappen udløser denne funktion, som ved tryk skjuler launch modal samt overview siden, og fremviser "under contruction" siden, som den opsætter i grid.
yes.onclick = function () {
  launch.style.display = "none";
  underCon.style.display = "grid";
  view2.style.display = "none";
};

//No knappen udløser denne funktion, som sætter launch modals display til "none".
no.onclick = function () {
  launch.style.display = "none";
};

//Return knappen på "under construction" siden udløser funktionen, og sætter launch modals display til "none", og sætter "overview" sidens display til "block".
ret.onclick = function () {
  underCon.style.display = "none";
  view2.style.display = "block";
};
