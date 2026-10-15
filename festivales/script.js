import { festivalesJSON } from "./festivalesjson.js";

class Festival{
    constructor(nombre, ciudad, anio, grupos){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.anio = anio;
        this.grupos = grupos;
    }

}

class Grupo{
    constructor(nombre, compania, discos){
        this.nombre = nombre;
        this.compania = compania;
        this.discos = discos;

    }
}

let discos = [];
const festival = JSON.parse(festivalesJSON);

console.log(festival);

const gruposArray = festival.Grupos;
console.log(gruposArray);
const gruposArrayNuevo = [];
gruposArray.forEach(element => {
    const grupo = new Grupo(
        element.nombre,
        element.compania,
        element.discos,
    )

    gruposArrayNuevo.push(grupo);
});

const miFesti = new Festival(
    festival.Festival,
    festival.Ciudad,
    festival.Anno,
    gruposArrayNuevo,
)

console.log(miFesti);


const container = document.getElementById("container");

discos.forEach(disco)

gruposArrayNuevo.forEach(grupo => {
    const grupoContainer = document.createElement("div");
    grupoContainer.setAttribute("class", "grupoContainer");
    grupoContainer.innerHTML = `
    <h2>${grupo.nombre}</h2>
    <p>${grupo.compania}</p>
    <p>Discografia:</p>
    `;
})




container.innerHTML = `
<h1>${miFesti.nombre}</h1>

<p>Ciudad: ${miFesti.ciudad}</p>
<p>Año: ${miFesti.anio}</p>





`;