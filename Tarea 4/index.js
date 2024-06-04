'Use Strict';

let totalKms = prompt("Ingrese el kilometraje");

let precioporKm;  //Declaracion

precioporKm = 0.25; // Asignacion

let arranque = 0.55;

let valor = (precioporKm*totalKms) + arranque;

alert (valor);