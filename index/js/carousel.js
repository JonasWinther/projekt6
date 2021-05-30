//let variabel defineres ud fra arrow class, som er classen for pilene.
let span = document.getElementsByClassName("arrow");

//let variabel defineres ud fra card class, som er classen der indeholder et enkelt kort. Alle kortene har denne class, så alle kortene påvirkes af denne.
let card = document.getElementsByClassName("card");

//let variabel defineres ud fra antallet af kort delt med 4, dermed skal der være 4 eller flere kort, før at den fungerer.
let card_page = Math.ceil(card.length / 4);

//let variabel defineres currentPos, og sættes til 0 som start parameter.
let currentPos = 0;

//let variabel defineres movePer, og bestemmer hvor meget kortene skal rykkes per gang.
let movePer = 26;

//let variabel defineres maxMove, og bestemmer hvor meget kortene maksimalt kan rykkes.
let maxMove = 203;

//Funktionen rykker kortene til højre, da den lægger den angivne movePer til currentPos.
function right_mover() {
  currentPos = currentPos + movePer;
  //for loop der itererer over alle kortene
  for (const i of card) {
    //Hvis currentPos er større end maxMove vil currentPos rykkes en gang tilbage.
    if (currentPos > maxMove) {
      currentPos = currentPos - movePer;
    }
    //De ting der ikke skal være synlige rykkes ud fra skærmen.
    i.style.left = "-" + currentPos + "%";
  }
}

//Funktionen rykker kortene til venstre, da den trækker den angivne movePer fra currentPos.
function left_mover() {
  currentPos = currentPos - movePer;
  //If statement der blokerer carousel fra at gå i negativ retning, så der ikke kan bevæges længere til venstre end første kort.
  if (currentPos <= 0) {
    currentPos = 0;
  }
  //For loop gør det samme som right_mover
  for (const i of card) {
    //Samme princip som right_mover bare modsatte vej.
    if (card_page > 1) {
      i.style.left = "-" + currentPos + "%";
    }
  }
}

//Venstre pil / første pil ([0]) sættes til at køre funktionen "left_mover" ved tryk.
span[0].onclick = function () {
  left_mover();
};

//Højre pil / anden pil ([1]) sættes til at køre funktionen "right_mover" ved tryk.
span[1].onclick = function () {
  right_mover();
};
