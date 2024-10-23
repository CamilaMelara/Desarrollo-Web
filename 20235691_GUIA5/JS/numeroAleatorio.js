// Generemos un número aleatorio que se encuentre en el rango del 1 al 25
const numeroAleatorio = Math.floor(Math.random() * 25) + 1;

// Creamos una constante que permite identificar el máximo de intentos
const numeroIntentos = 3;

// Guardará el número de intentos que realiza el usuario
let intentos = 1;

function generarNumeroAleatorio() {
    // Definimos una variable para impresión de mensajes
    let mensaje;

    // Utilizamos el DOM para acceder al párrafo creado
    const parrafo = document.querySelector("#idParrafo");

    // Verificamos en qué intento está el usuario
    if (intentos <= numeroIntentos) {
        let numero = parseInt(prompt("¿Qué número se ha generado? (Intento " + intentos + ")"));

        // Verificamos si el número aleatorio coincide con el ingresado por el usuario
        if (numero === numeroAleatorio) {
            mensaje = `¡Es sorprendente, pudiste adivinar el número oculto (${numeroAleatorio})! 
            Refresca la página para volver a jugar.`;
        } else if (intentos == numeroIntentos) {
            mensaje = `Su número de intentos ha terminado. 
            El número oculto era: ${numeroAleatorio}. Refresca la página para volver a jugar.`;
        } else {
            // Para indicar si los numeros que han ingresado son mayores o menores. PARTE EJERCICIO COMPLEMENTARIO
            if (numero < numeroAleatorio) {
                mensaje = `Ups. Te pasaste, el numero que buscas tiene que ser mas alto. Te quedan ${numeroIntentos - intentos} intentos.`;
            } else {
                mensaje = `Ups. Te pasaste, el numero que buscas tiene que ser mas bajo. Te quedan ${numeroIntentos - intentos} intentos.`;
            }
        }
        // Aumentamos el valor de los intentos
        intentos++;
    } else {
        mensaje = `Su número de intentos ha terminado. 
        El número oculto era: ${numeroAleatorio}. Refresca la página para volver a jugar.`;
    }

    parrafo.innerHTML = mensaje;
}

