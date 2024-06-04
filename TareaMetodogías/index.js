"use strict";
 // Código Mayor o menor de edad
  let edad = prompt("Ingrese su edad: ");

   if (edad >= 18)
   { alert("Es mayor de edad"); 
} 
else { alert("Eres menor de edad"); }

// Código Número mayor
  let a = Number(prompt("Ingrese un valor ")); 
  let b = Number(prompt("Ingrese otro valor ")); 
  if (a < b)
  {
     alert("El numero mayor es " + b);
 }
 else { alert("El numero mayor es " + a); } 
 
 // Código Par o Impar
 function esPar(numero){
    return numero % 2 === 0;
 }

 let numero = Number (prompt("Ingreasr Valor y determinar si es Par o Impar"));
 if (esPar(numero)){
    alert ("El número" + numero + "Es par");
 }
 else {(alert("El número" + numero + "Es impar"))
 }

 // Código divisible por 5 y no divisible
 let numero1 = prompt("Ingrese el número para verificar si es divisible por 5: ");
 numero1 = parseInt(numero1);
 if(numero1 % 5 === 0){
    alert("El numero es divisible por 5");
}else {
alert("El numero no es divisible por 5");
}
