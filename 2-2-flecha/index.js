'Use Strict';
//Utilizando una expresión de función crear un algoritmo que reciba el año de nacimiento y devuelva la edad.
let edad =function (Birth, Year){
    return Year - Birth
} 
let age = edad(prompt("Year Of Birth"), prompt("Actual Year"));
     alert ("Your Age "+age);


//Crear una expresión de función que reciba un número ingresado y muestre la tabla de multiplicar del número ingresado.
let tabla = function(number){
    alert ("Tabla "+ number);
    for (var i =1; i <=10 ; i++){
        let result = number * i;
        alert (number + " x " + i + " = " + result);
    };
};

//CAmbio de temperatura
let a = Number ("Ingrear Temperatura");
const b = 30;
let temp = (a,b) => a+b;