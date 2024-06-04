'use strict';

// Crear la funcion sumar;
let suma=function(a,b){
    suma= a + b;
    alert("Resultado" + suma) 
}
//funcion resta 
let resta = (a, b) => a - b; 

//Funcion Calc

function calc(op,fnSum , fnRest) {
let number1 = Number(prompt("Ingrese el primer numero: "));
let number2 = Number(prompt("Ingrese el segundo numero: "));
    if (op === "Suma"){
    fnSum(number1, number2);
    }else{

    alert (fnRest(number1, number2));
}
 
}
//Llamado funcion
    calc ("Suma",suma, resta);