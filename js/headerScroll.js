var home = document.getElementsByClassName("container principal")[0];
var sobre = document.getElementsByClassName("container secundario")[0];
var contato = document.querySelector(".footer__contato");

function rolarPara(nome){
    switch (nome) {
        case "home":
            window.scrollTo({
                behavior: "smooth",
                top: home?.getBoundingClientRect().top + window.scrollY
            });
            break;

        case "sobre":
            window.scrollTo({
                behavior: "smooth",
                top: sobre?.getBoundingClientRect().top + window.scrollY
            });
            break;

        case "contato":
            window.scrollTo({
                behavior: "smooth",
                top: contato?.getBoundingClientRect().top + window.scrollY
            });
            break;

        default:
            break;
    }
}