let s = false;
let mensaje = "Introduce una letra";
while (!s) {
    let letra = prompt(mensaje);
    if (letra.toLowerCase() === "s") {
        s = true;
        console.log("Acertaste la letra!!!");
        alert("Acertaste la letra!!!");
        document.write("Acertaste la letra");
    }else{
        console.log("Fallaste, vuelve a intentarlo.");
        mensaje = "Fallaste, vuelve a intentarlo\nIntroduce una letra" ;
    }

}

cuerpo = document.querySelector("body");
cuerpo.style.color = "green";