//variablerne defineres ud fra deres ID i HTML'et
var createPage = document.getElementById("createPage");

var cancelCreate = document.getElementById("createCancel");

var create = document.getElementById("create");

var closeCreate = document.getElementById("clsCreate");

//funktionen openCreate() aktiveres ved klik på create knappen i HTML'et. Den sætter create sidens display til "block".
function openCreate() {
  createPage.style.display = "block";
}

//Funktionen udløses når der trykkes på Cancel knappen på create siden. Funktionen sætter create sidens display til "none", så den "lukker" create siden igen.
cancelCreate.onclick = function () {
  createPage.style.display = "none";
};

//create knappen udløser funktionen, som i realiteten skulle lave en ny mission, men i dette tilfælde sætter create sidens display til "none", så den "lukker" create siden igen.
//Da vi blot bruger create siden til at vise designet, for hvordan det ville se ud.
create.onclick = function () {
  createPage.style.display = "none";
};

//Samme funktion som cancel knappen, dette er dog bare luk knappen oppe i hjørnet af create siden.
closeCreate.onclick = function () {
  createPage.style.display = "none";
};

//funktionen aktiveres ved tryk på vinduet og sammenligner det ramte element med create siden. Hvis der trykkes uden for create siden, vil den sætte create sidens display til "none".
window.onclick = function (event) {
  if (event.target == createPage) {
    createPage.style.display = "none";
  }
};
