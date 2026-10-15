/**
 * Dado un array que contiene cadenas de caracteres, escribe una función que utilice el método filter() para generar un nuevo array que contenga únicamente las cadenas que no tengan ninguna vocal con tilde (á, é, í, ó, ú).

El array original debe mantenerse sin modificaciones.

Por ejemplo, si el array contiene:

["casa", "árbol", "camión", "ordenador", "música", "perro"]
el resultado deberá ser:

["casa", "ordenador", "perro"]
 */

const LETRAS = ["á", "é", "í", "ó", "ú"];

const array = ["casa", "árbol", "camión", "ordenador", "música", "perro"];
const filtrado = [];
const filtradoDos = array.filter(palabra => {
    let tieneAcento = false;

    for (const letra of palabra) {
        if (LETRAS.includes(letra)) {
            tieneAcento = true;
        }
    }

    return !tieneAcento;
});

array.forEach(palabra => {

    let tieneacento = false;
    [...palabra].forEach(letra => {
        if (LETRAS.includes(letra)) {
            tieneacento = true;
        }
    });
    if (!tieneacento) {
        filtrado.push(palabra);

    }
})

const entrada = document.getElementById("entrada");
const pentrada = document.createElement("p");
pentrada.textContent = array;
entrada.appendChild(pentrada);
const salida = document.getElementById("salida");
const psalida = document.createElement("p");
psalida.textContent = filtrado;
salida.appendChild(psalida);
const salida2 = document.getElementById("salidafilter");
const psalida2 = document.createElement("p");
psalida2.textContent = filtradoDos;
salida2.appendChild(psalida2);