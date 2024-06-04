'Use Strict';

let TotalKm = prompt ("Ingresar el Kilometraje");

let PrecioporKm = 0.25;

let Arranque = 0.55

let Valor = (PrecioporKm * TotalKm) + Arranque;

if (Valor <1.5) {
    Valor = 1.5;
}

alert(Valor);
