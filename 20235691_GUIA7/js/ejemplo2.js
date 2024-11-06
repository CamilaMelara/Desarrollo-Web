// Obteniendo la referencia de los elementos por medio de arreglos asociativos
// Utilizando el atributo name de cada elemento
const formulario = document.forms["frmRegistro"];
const button = formulario.elements["btnRegistro"];

// Creando modal con Bootstrap
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// Obteniendo la referencia del cuerpo del modal para imprimir el resultado
const bodyModal = document.getElementById("idBodyModal");

// Función para recorrer el formulario y contar los tipos de entrada
const recorrerFormulario = function () {
    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect = 0;
    let totFile = 0;
    let totPass = 0;
    let totEmail = 0;

    // Recorriendo elementos del formulario
    let elementos = formulario.elements;
    let totalElementos = elementos.length;

    for (let index = 0; index < totalElementos; index++) {
        // Accediendo a cada elemento del formulario
        let elemento = elementos[index];
        let tipoElemento = elemento.type;
        let tipoNode = elemento.nodeName;

        // Contabilizando tipos de input
        if (tipoElemento == "text" && tipoNode == "INPUT") {
            console.log(elemento);
            totText++;
        } else if (tipoElemento == "password" && tipoNode == "INPUT") {
            console.log(elemento);
            totPass++;
        } else if (tipoElemento == "radio" && tipoNode == "INPUT") {
            console.log(elemento);
            totRadio++;
        } else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
            console.log(elemento);
            totCheck++;
        } else if (tipoElemento == "file" && tipoNode == "INPUT") {
            console.log(elemento);
            totFile++;
        } else if (tipoElemento == "date" && tipoNode == "INPUT") {
            console.log(elemento);
            totDate++;
        } else if (tipoElemento == "email" && tipoNode == "INPUT") {
            console.log(elemento);
            totEmail++;
        } else if (tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++;
        }
    }

    // Mostrando el resultado en el modal
    let resultado = `
    Total de input [type="text"] = ${totText}<br>
    Total de input [type="password"] = ${totPass}<br>
    Total de input [type="radio"] = ${totRadio}<br>
    Total de input [type="checkbox"] = ${totCheck}<br>
    Total de input [type="date"] = ${totDate}<br>
    Total de input [type="email"] = ${totEmail}<br>
    Total de select = ${totSelect}<br>
    `;

    bodyModal.innerHTML = resultado;

    // Mostrar el modal de Bootstrap
    modal.show();
};

// Agregando evento al botón
button.onclick = () => {
    recorrerFormulario();
};
