// Array para almacenar los Pokémon capturados
const pokedex = [];

// Variable para el nivel del entrenador
let nivelEntrenador = 1;

// Variable para la experiencia del entrenador
let experienciaEntrenador = 0;

// Función principal para iniciar el simulador
function iniciarSimulador() {
    let opcion;
    do {
        opcion = prompt(
            "Bienvenido a tu Pokédex!\n" +
            "1. Registrar Pokémon\n" +
            "2. Consultar Pokédex\n" +
            "3. Ver nivel de entrenador\n" +
            "4. Salir\n" +
            "Elige una opción (1-4):"
        );

        switch (opcion) {
            case "1":
                registrarPokemon();
                break;
            case "2":
                consultarPokedex();
                break;
            case "3":
                verNivelEntrenador();
                break;
            case "4":
                alert("Gracias por usar tu Pokédex. ¡Hasta la próxima!");
                break;
            default:
                alert("Opción no válida. Por favor, elige una opción del 1 al 4.");
        }
    } while (opcion !== "4");
}

// Función para registrar un nuevo Pokémon
function registrarPokemon() {
    const nombre = prompt("Ingresa el nombre del Pokémon capturado:");
    const tipo = prompt("Ingresa el tipo del Pokémon (por ejemplo: Fuego, Agua, Planta):");

    if (nombre && tipo) {
        const pokemon = {
            nombre: nombre,
            tipo: tipo
        };
        pokedex.push(pokemon);
        alert(`¡${nombre} ha sido registrado en tu Pokédex!`);
        ganarExperiencia(10);
    } else {
        alert("Debes ingresar tanto el nombre como el tipo del Pokémon.");
    }
}

// Función para consultar la Pokédex
function consultarPokedex() {
    if (pokedex.length === 0) {
        alert("Tu Pokédex está vacía. ¡Ve a capturar algunos Pokémon!");
    } else {
        let listaPokemon = "Pokémon registrados:\n\n";
        for (let i = 0; i < pokedex.length; i++) {
            listaPokemon += `${i + 1}. ${pokedex[i].nombre} (Tipo: ${pokedex[i].tipo})\n`;
        }
        alert(listaPokemon);
        console.log(listaPokemon);
    }
}

// Función para ver el nivel del entrenador
function verNivelEntrenador() {
    alert(`Eres un entrenador de nivel ${nivelEntrenador}\nExperiencia actual: ${experienciaEntrenador}`);
}

// Función para ganar experiencia y subir de nivel
function ganarExperiencia(cantidad) {
    experienciaEntrenador += cantidad;
    if (experienciaEntrenador >= nivelEntrenador * 50) {
        nivelEntrenador++;
        alert(`¡Felicidades! Has subido al nivel ${nivelEntrenador}`);
    }
}