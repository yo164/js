const LIMITE = 10;

const array = [];

let palabra ; 
do {
    palabra = prompt("Introduce una palabra");
    if (palabra.trim().length !==0) {
        console.log(palabra);
        array.push(palabra);
    }
} while (palabra.trim().length !== 0);


const resultado = document.getElementById("resultado");
const lista = document.createElement("ul");
array.forEach((n) => {
    const item = document.createElement("li");
    item.textContent = n;
    lista.appendChild(item);
});

const titulopalabras = document.createElement("h2");
titulopalabras.textContent = "Lista de Palabras:";
resultado.appendChild(titulopalabras);
resultado.appendChild(lista);


const primera = document.createElement("p");

primera.textContent = array[0];

const ultima = document.createElement("p");
ultima.textContent = array[array.length - 1];

const titulo = document.createElement("h3");
titulo.textContent = "Primer elemento:";


const titulo2 = document.createElement("h3");
titulo2.textContent = "Último elemento:";

resultado.appendChild(titulo);
resultado.appendChild(primera);
resultado.appendChild(titulo2);
resultado.appendChild(ultima);

const titulo3 = document.createElement("h3");
titulo3.textContent = "Numero de Palabras:";

const numPal = array.length;
const longitud = document.createElement("p");
longitud.textContent = numPal;

resultado.appendChild(titulo3);
resultado.appendChild(longitud);

const tituloOrden = document.createElement("h3");
tituloOrden.textContent = "Palabras ordenadas Alfabeticamente:";

const listaOrdenada = document.createElement("ul");

const arrayCopia = ordenaArray(array);
arrayCopia.forEach(n => {
    const itemOrdenado = document.createElement("li");
    itemOrdenado.textContent = n;
    listaOrdenada.appendChild(itemOrdenado);
});
resultado.appendChild(tituloOrden);
resultado.appendChild(listaOrdenada);



function ordenaArray(array){
    const arrayCopiado = array;

    return arrayCopiado.sort((a, b) => a.localeCompare(b, "es"));

}