let cajonDeManzanas = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

//Contar la cantidad de valores true dentro del array

// if (contador) {
//     contador = true;
//     return contador++
// }

// console.log(contador)

let contador = 0

for(let i = 0; i <= cajonDeManzanas.length; i++){
    if (cajonDeManzanas[i]) {
        contador++
    }
}

console.log(contador)
