function tocaSomGrilo () {
    document.querySelector("#som_tecla_grilo").play ();
}

const listadeTeclas = document.querySelectorAll(".tecla");
listadeTeclas[4].onclick = tocaSomGrilo
