function tocaSomGrilo () {
    document.querySelector("#som_tecla_grilo").play ();
}

document.querySelector(".tecla_grilo").onclick = tocaSomGrilo;

function tocaSomAplausos () {
    document.querySelector("#som_tecla_aplausos").play ();
}
document.querySelector(".tecla_aplausos").onclick = tocaSomAplausos;