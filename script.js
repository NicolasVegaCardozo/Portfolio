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

