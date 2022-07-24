let op1 = "Piedra";
let op2 = "Papel";
let op3 = "Tijera";


function player() {
    let selection = prompt("1, 2 o 3")
    let final;
    if (selection == 1) {
        final = "Piedra";
    } else if (selection == 2) {
        final = "Papel";
    } else if (selection == 3) {
        final = "Tijera";
    }

};

function cpu = Math.floor(Math.random() * 3)

function resultado (player, cpu) {
    if (player == op1 & cpu == op3 || player == op2 & cpu == op1 || player == op3 & cpu == op2) {
        console.log("Felicitaciones, has ganado esta ronda");
    } else if (player == op1 & cpu == op1 || player == op2 & cpu == op2 || player == op3 & cpu == op3) {
        console.log("Esto es un empate");
    } else if (player == op1 & cpu == op2 || player == op2 & cpu == op3 || player == op3 & cpu == op1){
        console.log("Lo siento, has perdido esta ronda");
    } else {
        console.log("La opción ingresada no es correcta");
    }
}

function resultado {
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

