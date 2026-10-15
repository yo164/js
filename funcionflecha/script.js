
const cuentaVo = ((cadena) => {
    let numVocales = 0;
     [...cadena].forEach((letra) => {
        if ("aeiou".includes(letra)) {
            numVocales++;
        }
    });
    return numVocales;
});

const masVo = ((cadena1, cadena2) => {
    let vocales1 = cuentaVo(cadena1);
    console.log(vocales1);
    let vocales2 = cuentaVo(cadena2);
    console.log(vocales2);
    
    if (vocales1 > vocales2) {
        return cadena1;
    }else{
        return cadena2;
    }
});



const container = document.getElementById("resultado");

const printResultado = document.createElement("p");
printResultado.textContent = masVo("en un lugar de la mancha", "de cuyo nombre no quiero acordarme");

container.appendChild(printResultado);