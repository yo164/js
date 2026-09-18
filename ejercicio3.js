


let esDia = false;

do {
    let dia = prompt("Introduce la inicial del Día de la Semana (L, M, X, J, V, S, D)").toUpperCase();
    let apertura = "";




    switch (dia) {
        case "L":
            apertura = "09:00"
            break;
        case "M":
            apertura = "10:00"
            break;
        case "X":
            apertura = "11:00"
            break;
        case "J":
            apertura = "12:00"
            break;
        case "V":
            apertura = "13:00"
            break;
        case "S":
            apertura = "14:00"
            break;
        case "D":
            apertura = "15:00"
            break;

        default:
            apertura = "Esa letra no corresponde a ningun día de la semana";

            break;
    }
    if (!apertura.includes("letra")) {
        esDia = true;
    }

    alert(apertura);
} while (!esDia);

