'Use Strict';
// declarar y asignar variable i
let i = 0;

let t = Number(prompt("Ingrese el número de vueltas"));  

while ( i < t){

    alert ("Número de Vueltas " + (Number(i)+1));

    
    i = i + 1; //i++; 
// Invertir el orden para no agregar en el alert + (Number(i)+1);
// i = i+1;
// alert ("Número de Vueltas" + (Number(i)+1));
}