
let valores = [];
let intentos = 0;

while (!verificaArray(valores)) {
    if (intentos > 0) {
            valores = prompt("Introduce las 3 notas separados por puntos y comas.\nEscribe solo números y que sean 3").split(";");

    }else{
            valores = prompt("Introduce las 3 notas separados por puntos y comas.").split(";");

    }

    intentos ++;
    
}



calculaNota(valores);

function calculaNota(palabra) {
     let suma = 0;
 for (let index = 0; index < palabra.length; index++) {
suma  += parseInt(palabra[index]);    
    

 }
 document.write(aprobado(suma));
}

function aprobado(suma) {
     if (suma/3 < 5) {
    return "Suspenso"
 } else {
    return "Aprobado"
 }
}

function verificaArray(array) {
    if (array.length < 3) {
        return false
    }

    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i]) || (array[i] < 0 ) || (array[i] > 10)) {
            return false;
        }
    }

    return true
}