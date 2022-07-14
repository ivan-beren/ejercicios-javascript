let opcion1 = "Piedra";
let opcion2 = "Papel";
let opcion3 = "Tijera";

function condicion = 


let player = function () {
};

let cpu = function () {
    
};

let resultado = function {
    if (player == "piedra" & cpu == "tijera" || player == "papel" & cpu == "piedra" || player == "tijera" & cpu == "papel") {
        console.log("Felicitaciones, has ganado esta ronda");
    } else if (player == "piedra" & cpu == "piedra" || player == "papel" & cpu == "papel" || player == "tijera" & cpu == "tijera") {
        console.log("Esto es un empate");
    } else if (player == "piedra" & cpu == "papel" || player == "papel" & cpu == "tijera" || player == "tijera" & cpu == "piedra"){
        console.log("Lo siento, has perdido esta ronda");
    } else {
        console.log("La opción ingresada no es correcta");
    }
}

let eleccionmaquina = function (tipo) {
    if (tipo == opcion1) {
        console.log("Has elegido " + opcion1);
    } else if (tipo == opcion2) {
        colsole.log("Has elegido " + opcion2);
    } else if (tipo == opcion3) {
        colsole.log("Has elegido " + opcion3);
    }
}

