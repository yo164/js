/*import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Introduce la edad: ', (dato) => {
  

  console.log(`El tramo de edad es: ${calculaEdad(dato)}`);
  
 
  rl.close();
});*/

let edad;
let mensaje = "Introduce tu edad: ";
do {
    edad = parseInt(prompt(mensaje));
    if (!isNaN(edad)) {
        console.log(`Juan tiene ${edad} años y por lo tanto es: ${calculaEdad(edad)}`);
        document.write(`Juan tiene ${edad} años y por lo tanto es: ${calculaEdad(edad)}`);
    } else {
        mensaje = "Debes introducir un número entero positivo.";
    }
} while (isNaN(edad));



function calculaEdad(dato) {
    if (dato <= 12) {
        return "Niño"
    } else if (dato > 12 && dato <= 17) {
        return "Adolescente"
    } else if (dato > 17 && dato <= 64) {
        return "Trabajador"
    } else {
        return "Jubilado"
    }
}

cuerpo = document.querySelector("body");
cuerpo.style.color = "green";
cuerpo.style.fontWeight = "bold";