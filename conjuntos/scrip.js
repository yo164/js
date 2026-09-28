document.addEventListener('DOMContentLoaded', () => {

    const array1 = [12, 12, 12, 14];
    const array2 = [11, 11, 13, 15];
    const array3 = ["i", "]", "kK", "I"];
    const array4 = array1.concat(array2).concat(array3);


    for (const element of array4) {
        console.log(element);
        document.write(element);
        document.write("<br>");

    }

    document.write("<br>");

    const conjunto = new Set();

    for (const elemento of array4) {
        conjunto.add(elemento);
    }
    for (const element of conjunto) {
        console.log(element);
        document.write(element + "<br>");

    }
});
/**
 * Hay 9 elementos, por que se eliminan duplicados en los conjuntos
 * En los conjuntos se respeta el orden de inserción
 */