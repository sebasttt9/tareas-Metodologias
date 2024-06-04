'Use Strict';

let Totaltarifa1 = prompt ("Ingresar Tarifa Dia");

let Totaltarifa2 = prompt ("Ingresar Tarifa Noche");

let Arranque = 0.55;

let PrecioporKm = 0.29;


let ValorDía = (PrecioporKm  *  Totaltarifa1) + Arranque;

let ValorNoche = (PrecioporKm  * Totaltarifa2) + Arranque;

if (ValorDía <1.50){
    ValorDía = 1.50;
}

if (ValorNoche <1.75){
    ValorNoche = 1.75;
}

alert ("Total Tarifa Día  "        +  ValorDía);
alert ("Total Tarifa Noche  "        +   ValorNoche);