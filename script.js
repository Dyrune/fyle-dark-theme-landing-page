document.addEventListener("DOMContentLoaded", function() {
    var hb = document.querySelector(".hb");
    var cluz = document.querySelector(".cluz");
    var menuDrop = document.querySelector(".ah");

    hb.addEventListener("click", function() {
        menuDrop.style.display = "flex";
        cluz.style.display = "inline";
        hb.style.display = "none";
    });

    cluz.addEventListener("click", function() {
        hb.style.display = "block";
        cluz.style.display = "none";
        menuDrop.style.display = "none";
    });
});