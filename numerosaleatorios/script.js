
document.addEventListener('DOMContentLoaded', () => {
    const longitud = 100;
    const aleatorios = [];
    for (let i = 0; i < longitud; i++) {
        aleatorios.push(Math.floor(Math.random() * 1000));
    }
    let rigodon = document.createElement("ul");
    rigodon.className = "lista";


    for (const aleatorio of aleatorios) {
        aleatorio % 2 === 0 ? console.log(aleatorio) : console.log();
        if (aleatorio % 2 === 0) {
            const tico = document.createElement("li");
            tico.textContent = aleatorio;
            rigodon.appendChild(tico);

        }
    }
    document.body.appendChild(rigodon);
});
