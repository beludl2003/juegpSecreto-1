//variables

let numeroSecreto = 6;
let numeroDeUsuario = prompt("me indicas un numero del 1 y 10 por favor:");

console.log(numeroDeUsuario);
/*
este código realiza la comparación
*/

if (numeroDeUsuario == numeroSecreto) {
	//acertamos fue verdadera la condición
alert(`acertaste, el numero es: ${numeroDeUsuario}`);
	} else {
		//la condición no se cumplio
	alert("lo siento no se cumplio la condición");
	}