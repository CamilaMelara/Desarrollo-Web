// Inicializando referencia de botones con métodos actuales
const buttonAgregarPagina = document.querySelector("#idAgregarPagina");
const buttonMenu = document.querySelector("#idAgregarMenu");
const buttonTitulo = document.querySelector("#idAgregarTitulo");
const buttonParrafo = document.querySelector("#idAgregarParrafo");

const pagina = document.querySelector("#idPagina");

buttonAgregarPagina.onclick = function () {
    const contenedorVerificando = document.querySelector("#idDivPage");

    if (!contenedorVerificando) {
        // Creando el contenedor de la página
        const contenedor = document.createElement("div");
        contenedor.setAttribute("id", "idDivPage");
        contenedor.setAttribute("class", "container");
        contenedor.setAttribute(
            "style",
            "border:solid 1px black; height:500px; overflow: scroll; overflow-x: hidden;"
        );

        pagina.appendChild(contenedor);
    } else {
        alert("Ya se agregó el contenedor de la página");
    }
};

buttonMenu.onclick = function () {
    // Verificando que exista el contenedor de la página
    const contenedor = document.querySelector("#idDivPage");

    if (contenedor) {
        // Verificando que exista el menú
        const menuVerificar = document.querySelectorAll("#idDivPage > header");

        if (menuVerificar.length == 0) {
            // Clonando el menú principal de nuestra página
            // Para luego crearlo en la nueva página
            const menu = document.querySelector("header").cloneNode(true);
            contenedor.appendChild(menu);
        } else {
            alert("Ya ha sido agregado el menú");
        }
    } else {
        alert("Primero debe agregar un contenedor de página");
    }
};

buttonTitulo.onclick = function () {
    // Verificando que exista el contenedor de la pagina
    const contenedor = document.querySelector("#idDivPage");

    // Verificando que exista el menu
    const menu = document.querySelectorAll("#idDivPage > header");

    if (contenedor) {
        if (menu.length > 0) {
            let titulo = prompt("Agregue el titulo de la pagina");

            if (titulo != "" && titulo != null) {
                const h1 = document.createElement("h1");
                // Agregando clases de Bootstrap
                h1.setAttribute("class", "display-5 text-center fw-bold py-4 my-4");
                h1.innerHTML = titulo;

                contenedor.appendChild(h1);
            } else {
                alert("No se ha registrado ningun titulo, por favor ingrese informacion");
            }
        } else {
            alert("Debe agregar un menu primero");
        }
    } else {
        alert("Primero debe agregar un contenedor de pagina");
    }
}

buttonParrafo.onclick = function () {
    // Verificando que exista el contenedor de la pagina
    const contenedor = document.querySelector("#idDivPage");

    // Verificando que exista el menu
    const menu = document.querySelectorAll("#idDivPage > header");

    if (contenedor) {
        if (menu.length > 0) {
            let texto = prompt("Agregue un parrafo a su pagina web");

            if (texto != "" && texto != null) {
                const parrafo = document.createElement("p");
                // Agregando clases de Bootstrap
                parrafo.setAttribute("class", "lead mb-4 py-4");
                parrafo.innerHTML = texto;
                // Creando parrafo como hijo del contenedor
                contenedor.appendChild(parrafo);
            } else {
                alert("No se ha registrado ningún parrafo, por favor ingrese informacion");
            }
        } else {
            alert("Debe agregar un menu primero");
        }
    } else {
        alert("Primero debe agregar un contenedor de pagina");
    }
}
