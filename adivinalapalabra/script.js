/**
 * Adivina la palabra
Crea una función llamada adivina() que permita comprobar qué letras de una palabra secreta han sido acertadas.

La palabra secreta estará establecida previamente por el programador. La función recibirá un número variable de letras mediante el operador rest (...).

Puedes solicitar al usuario las letras que desea probar mediante un prompt(). Las letras se introducirán separadas por comas.

La función deberá recorrer la palabra secreta y mostrar en pantalla:

La letra correspondiente cuando esa letra se encuentre entre las letras proporcionadas a la función.
Un guion - cuando la letra no se encuentre entre las letras proporcionadas.
Ejemplo:

Si la palabra secreta es:

sargento
y se realiza la siguiente llamada:

adivina('a', 'e', 'i', 'o', 'u', 'd', 'n');
la salida deberá ser:

-a--en-o
Para recoger las letras recibidas, utiliza el operador rest (...):

function adivina(...letras) {
    // ...
}
De esta forma, todos los argumentos proporcionados en la llamada se almacenan en el array letras.

Nota: Para comprobar si una letra está entre las letras recibidas, puedes utilizar el método includes() de los arrays. Este método devuelve true si el elemento indicado se encuentra en el array y false si no se encuentra.

Por ejemplo:

let letras = ['a', 'e', 'i', 'o'];

console.log(letras.includes('e')); // true
console.log(letras.includes('x')); // false
Nota2: Fíjate en la estructura de datos que devuelve el método split(','). ¿Qué tipo de estructura obtienes después de dividir la cadena?
 */

const PALABRA = "sargento";

const letrasIntroducidas = prompt("Introduce letras separadas por comas");

//const arrayletrasintroducidas = letrasIntroducidas.split(",");

const acierto = adivina(...letrasIntroducidas);
console.log(acierto);

function adivina(...palabra){
    let salida = "";
    

    [...PALABRA].forEach(letra => {
        if (palabra.includes(letra)) {
            salida += letra;
        }else{
            salida += "-";
        }
    });

   return salida;

  
}

const answerContainer = document.getElementById("respuesta");

const answer = document.createElement("p");
answer.textContent = acierto;

answerContainer.appendChild(answer);



