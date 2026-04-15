var modal = document.getElementById("modalLogin");
var btn = document.getElementById("botaoLogin");
var span = document.getElementsByClassName("fechar")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};