
let personas = new Map();

personas.set("12345678A", "Ana");
personas.set("23456789B", "Luis");
personas.set("34567890C", "María");
personas.set("45678901D", "Carlos");
personas.set("56789012E", "Laura");
personas.set("67890123F", "Javier");
personas.set("78901234G", "Sofía");
personas.set("89012345H", "Pablo");
personas.set("90123456I", "Elena");
personas.set("01234567J", "David");


function mostrarPersonas() {
    for (let [dni, nombre] of personas) {
        console.log("DNI: " + dni + " - Nombre: " + nombre);
        document.write("DNI: " + dni + " - Nombre: " + nombre);
        document.write("<br>");
    }
}



console.log("Datos iniciales:");
document.write("Datos iniciales:")
document.write("<br>");
mostrarPersonas();


personas.set("34567890C", "Marta");

console.log("Datos después de modificar la tercera persona:");
document.write("Datos después de modificar la tercera persona:");
document.write("<br>");

mostrarPersonas();
