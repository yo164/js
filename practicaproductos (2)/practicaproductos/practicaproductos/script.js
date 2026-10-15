  

  const catalogo = {
      tienda: "Super Web Store",
      productos: [
        { id: 1, nombre: "Auriculares Bluetooth X200", descripcion: "Auriculares inalámbricos con cancelación parcial de ruido.", precio: 49.99, disponible: true },
        { id: 2, nombre: "Teclado mecánico TKL", descripcion: "Compacto, switches táctiles y retroiluminación RGB.", precio: 79.5, disponible: true },
        { id: 3, nombre: "Ratón ergonómico Pro", descripcion: "Diseño vertical para reducir tensión en la muñeca.", precio: 39.0, disponible: false },
        { id: 4, nombre: "Monitor 24\" 1080p", descripcion: "120Hz, panel IPS y soporte ajustable.", precio: 129.95, disponible: true },
        { id: 5, nombre: "Cable USB-C 2m", descripcion: "Carga rápida y transferencia de datos.", precio: 9.99, disponible: true }
      ],
      ventasMensuales: [120, 150, 95, 180, 160, 200]
    };

const button = document.getElementById("button");
const header = document.getElementById("header");
const productList = document.getElementById("productList");

const tituloTienda = creaElemento("h1", catalogo.tienda, "titulo", "titulo");



/**
 * Insertamos en el header el elemento titulo tienda
 * antes del elemento button
 */
header.insertBefore(tituloTienda, button);

/**
 * variable que identifica el estado de orden de los productos en pantalla 
 * ordenado de menor a mayor o desordenado
 */
let ordenado = false;

let productos = catalogo.productos;
const preciosProdu = sacaPrecios(catalogo.productos);

//carga de datos para pintar el sumary
const mayor = ordenaMenorAMayor(catalogo.ventasMensuales)[(catalogo.ventasMensuales.length-1)];
const menor = ordenaMenorAMayor(catalogo.ventasMensuales)[0];

/**
 * Añadimos los valores al array que cargará el summary
 */
let data = [];
data.push(pintaUnidades(sumaVentas(catalogo.ventasMensuales)));
data.push(pintaUnidades(mediaMensual(catalogo.ventasMensuales)));
data.push(`Mes ${normalizaNumero(mayor[0])} -- ${mayor[1]} unidades`);
data.push(`Mes ${normalizaNumero(menor[0])} -- ${menor[1]} unidades`);
data.push(pintaEuros(sumaVentas(preciosProdu)));

/**
 * renderizamos el summary con 
 */
pintaSumamry(data);

muestraProductos(productos);


button.addEventListener("click", () => {
   productList.replaceChildren(); 

    if (ordenado === false) {
         const ordenados =  ordenaProductos(productos);

   const productosOrdenados = ordenados;
   
   muestraProductos(productosOrdenados)
   button.textContent = "Desordenar";
    } else {
        ordenado = false;
           muestraProductos(productos)
           button.textContent = "Ordenar por precio: asc";

    }
  
})

/**
 * Modifica el color de la fuente de un elemento html concreto 
 * @param {string} disponibilidad 
 * @param {HTMLElement} elemento 
 */
function pintaExistencia(disponibilidad, elemento){
    if (disponibilidad === "Disponible") {
        elemento.style.color = "green";
    }else {
        elemento.style.color = "red";
    }
}

/**
 * Crea los elementos necesarios para renderizar la tarjeta de Producto
 * y los añade al DOM
 * @param {Object[]} productos 
 */
function muestraProductos(productos) {
    productos.forEach(producto => {
    const divProdu = creaElemento("div", "", "product", "product");

    const tituProdu = creaElemento("h2", producto.nombre, "tituProdu", "tituProdu");

    const descProdu = creaElemento("p", producto.descripcion, "descProdu", "descProdu");
    
    const precProdu = creaElemento("h3", `${pintaEuros(producto.precio)}`, "precProdu", "precProdu");

    const dispProdu = creaElemento("h3", escribeDisponible(producto.disponible), "dispProdu", "dispProdu");

        pintaExistencia(escribeDisponible(producto.disponible), dispProdu);



    divProdu.appendChild(tituProdu);
    divProdu.appendChild(descProdu);
    divProdu.appendChild(precProdu);
    divProdu.appendChild(dispProdu);

    productList.appendChild(divProdu);
});
}




/**
 * Crea un elemento html con la etiqueta, contenido, clase e id introducidos
 * si se quieren añadir
 * @param {string} etiqueta 
 * @param {string} contenido 
 * @param {string} clase 
 * @param {string} id 
 * @returns {HTMLElement} elemento
 */
function creaElemento(etiqueta, contenido, clase, id){
    const elemento = document.createElement(etiqueta);

    if (contenido && contenido.trim() !== "") {
        elemento.textContent = contenido;
    }
    if (clase && clase.trim() !== "") {
        elemento.className = clase;
    }
    if (id && id.trim() !== "") {
        elemento.id = id;
    }

    return elemento;
}

/**
 * 
 * @param {Object[]} productos 
 * @returns 
 */
function ordenaProductos(productos){
    ordenado = true;
    const desordenados = [];
    const productosOrdenados = [];

    productos.forEach(producto => {
        desordenados.push(producto.precio);
    });

    const ordenados = desordenados.sort((a, b) => a - b );

    ordenados.forEach(precio => {
        productos.forEach(producto => {
            if(precio === producto.precio){
                productosOrdenados.push(producto);
            }
        })
    })

    return productosOrdenados;
}

/**
 * Devuelve disponible o agotado si recibe verdadero o falso
 * @param {boolean} disponible 
 * @returns 
 */
function escribeDisponible(disponible){
    return disponible ? "Disponible" : "Agotado";
}


/**
 * Crea elementos para renderizar valores introducidos en un array
 * y los añade al DOM. Convierte los valores a string para el renderizado
 * @param {array} data 
 */
function pintaSumamry(data){
    const tabla = document.getElementById("tabla");

    const cuerpo = creaElemento("tbody", "", "cuerpotabla", "cuerpotabla" );
    
    
    const lineaCue = creaElemento("tr");

    data.forEach(dato => {
        const celdaCab = creaElemento("td", dato.toString());
        lineaCue.appendChild(celdaCab);
    });

    cuerpo.appendChild(lineaCue);
    tabla.appendChild(cuerpo);

}

/**
 * Suma todos los valores de un array introducido
 * @param {int} ventas 
 * @returns 
 */
function sumaVentas(ventas){
    return ventas.reduce((acumulador, siguiente) => {
        return acumulador += siguiente;
    }, 0);
}

/**
 * Devuelve un valor tipo string formateado a dos decimales
 * de la media del array introducido y el número de sus elementos
 * @param {array} ventas 
 * @returns 
 */
function mediaMensual(ventas){
    return normalizaDecimal((sumaVentas(ventas) / ventas.length));
}

/**
 * Devuelve un mapa ordenado de menor a mayor por sus valores 
 * teniendo como indices las posiciones del array original
 * @param {array} ventas 
 * @returns 
 */
function ordenaMenorAMayor(ventas){
    const mapa =  ventas.map((valor, indice) => [indice, valor]);
    
    return mapa.sort((a, b) => a[1] - b[1]);
}


/**
 * Obtiene los precios de los productos introducidos
 * @param {Object[]} productos 
 * @returns {array} 
 */
function sacaPrecios(productos){
    let precios = [];
    productos.forEach(producto =>{
        precios.push(producto.precio);
    } );

    return precios;
}

/**
 * Formatea la salida de las ventas 
 *  en un string para el renderizado
 * @param {int}  
 * @returns 
 */
function pintaUnidades(unidades){
    return `${unidades} unidades`;
}

/**
 * Formatea la salida de precios en un string
 * con 2 decimales y el simbolo del euro
 * @param {float}  
 * @returns 
 */
function pintaEuros(precio){
    return `${normalizaDecimal(precio)} €`;
}

/**
 * Añade uno al numero introducido
 * para normalizar indices de arrays
 * para el renderizado 
 * @param {int} numero 
 * @returns 
 */
function normalizaNumero(numero){
    return numero + 1;
}

/**
 * Formatea en string un número cualquiera
 * para que siempre salga con dos decimales
 * @param {number} numero 
 * @returns 
 */
function normalizaDecimal(numero){
    return numero.toFixed(2);
}


const cajon = document.getElementById("cajondearena");

const nuevoElemento = crearElementoInnerHtml("p", "Hola, soy un elemento de prueba creado con la funcion crearElementoInnerHtml", "", "pruebauno");
console.log(nuevoElemento);
const nuevoElemento2 = crearElementoInnerHtml("p", "Hola, soy un elemento de prueba creado con la funcion crearElementoInnerHtml", "", "pruebados");

cajon.innerHTML += nuevoElemento2;
añadeHijo(cajon, nuevoElemento);

/**
 * 
 * @param {*} etiqueta 
 * @param {*} contenido 
 * @param {*} clase 
 * @param {*} id 
 * @returns {HTMLElement}
 */
function crearElementoInnerHtml(etiqueta, contenido, clase, id){
    let elemento = `<${etiqueta}`;


    if (clase && clase.trim() !== "") {
        elemento  += ` class="${clase}"`;
    }
    if (id && id.trim() !== "") {
        elemento += ` id="${id}"`;
    }

    elemento += `>`;
    if (contenido && contenido.trim() !== "") {
        elemento += contenido;
    }
    
    
    elemento += `</${etiqueta}>`;
    return elemento;

}

function insertaAntes(padre, elementoAInsertar, elementoPosterior){
    const elementoPost = elementoPosterior;//tenemos el id ahora tenemos que sacar el html a traves del id...

    padre.innerHTML -= elementoPosterior;//le quitamos el elemento posterior

    padre.innerHTML += elementoAInsertar;
    padre.innerHTML += elementoPost;

    padre.innerHTML += "";//aqui añadimos cierre de etiqueta o lo que hayamos podido quitar 
}
function añadeHijo(elementoPadre, elementoHijo){
    return elementoPadre.innerHTML += elementoHijo;
}

/**
 * CREACIÓN DE LA WEB USANDO INNER HTML
 */

const tituloTienda2 = crearElementoInnerHtml("h1", catalogo.tienda, "titulo", "titulo2");


const header2 = document.getElementById("header2");

header2.insertBefore(tituloTienda2, button);

