
document.addEventListener('DOMContentLoaded', () => {
    const longitud = 100;
    const aleatorios = [];
    for (let i = 0; i < longitud; i++) {
        aleatorios.push(Math.floor(Math.random() * 1000));
    }
    let lista = document.createElement("ul");
    lista.className = "lista";


    for (const aleatorio of aleatorios) {
        aleatorio % 2 === 0 ? console.log(aleatorio) : console.log();
        if (aleatorio % 2 === 0) {
            const item = document.createElement("li");
            item.textContent = aleatorio;
            lista.appendChild(item);

        }
    }
    document.body.appendChild(lista);
});
