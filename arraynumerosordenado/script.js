/**
 * Crea un array vacío llamado numeros.
Mediante un bucle, solicita al usuario que introduzca 15 números utilizando prompt().
En cada iteración, comprueba que el usuario ha introducido realmente un número:
Si introduce un valor que no es numérico, muestra un mensaje indicando que debe introducir un número y vuelve a solicitar el dato.
No se debe añadir al array ningún valor que no sea un número, por ejemplo una cadena vacía.
Añade cada número válido al array utilizando el método adecuado para añadir elementos al final de un array.
Una vez introducidos los 15 números, ordena el array de menor a mayor utilizando el método sort() 
Crea una función llamada mostrarMenor() que:
Obtenga el primer elemento del array ordenado, que será el número menor.
Obtenga la posición que ocupa ese número en el array.
Muestre los resultados mediante document.writeln() con el siguiente formato:
El menor numero es X
Su posición en el array es la X
Finalmente, llama a la función mostrarMenor() para mostrar el resultado.
Métodos y conceptos que puedes utilizar
Para realizar la actividad, utiliza los conceptos y métodos de arrays estudiados en el tema:

for
do...while
if
isNaN()
push()
sort()
indexOf()
Funciones
document.writeln()
Nota aclaratoria:
El método sort() por defecto ordena los elementos como si fueran cadenas de texto. Para ordenar correctamente números de menor a mayor deberás indicarle mediante una función cómo comparar los elementos.

Por ejemplo:

numeros.sort((a, b) => a - b);
 */

//1 crear array vacio
const limite = 15;
let numeros = [];


for (let i = 0; i < limite; i++) {
    let numero;
    let contadorIntentos = 0;
    let mensaje = `Escribe el ${i + 1}º número: `;
    do {
        if (contadorIntentos > 0) {
            mensaje = `Escribe el ${i + 1}º número: \nSolo pueden ser números, un poquito de por favor`;
        }
        numero = prompt(mensaje);
        if (isNaN) {
            contadorIntentos++;
        }
    } while (isNaN(numero));

    numeros.push(numero);
    contadorIntentos = 0;
}

for (const element of numeros) {
    document.write(element);
    document.write("<br>");


}
let ordenado = numeros.sort((a, b) => a - b);

    document.write("<br>");
    document.write("<br>");


for (const element of ordenado) {
    document.write(element);
    document.write("<br>");

}




document.write("<br>");

function mostrarMenor(array) {
    document.write("El menor número es: ", array[0]);
    document.write("<br>");
    let posicion = array.indexOf(ordenado[0]);
    document.write("Su posición en el array es la: ", posicion + 1, "ª");

}


mostrarMenor(ordenado);




