
let colores = [
    ["Naranja", "#F39C12"],
    ["Lima", "#C0F312"],
    ["Turquesa", "#12F3E5"],
    ["Rosa", "#F312AF"],
    ["Rojo", "#F31212"]
]

document.write("<br>");
document.write("<div>");
document.write("<ul>");


colores.forEach(element => {
    document.write("<li>");
    element.forEach(ele => {
        document.write(" ");

        ele.startsWith("#") ? document.write("<strong>") : document.write("");

        document.write(ele);
        
        ele.startsWith("#") ? document.write("</strong>") : document.write("");


    });

    document.write("</li>");
    document.write("<br>");

});





document.write("</ul>");
document.write("</div>");

