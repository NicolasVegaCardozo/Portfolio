let menuVisible = false;

const mostrarOcultarMenu = () => {
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

const seleccionar = () => {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

const efectoHabilidades = () => {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("comunicacion");
        habilidades[4].classList.add("trabajoEnEquipo");
        habilidades[5].classList.add("creatividad");
        habilidades[6].classList.add("dedicacion");
    }
}
