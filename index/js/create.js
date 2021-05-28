var createPage = document.getElementById("createPage");

var cancelCreate = document.getElementById("createCancel");

var create = document.getElementById("create");

var closeCreate = document.getElementById("clsCreate");

cancelCreate.onclick = function () {
  createPage.style.display = "none";
};

create.onclick = function () {
  createPage.style.display = "none";
};

closeCreate.onclick = function () {
  createPage.style.display = "none";
};

function openCreate() {
  createPage.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == createPage) {
    createPage.style.display = "none";
  }
};
