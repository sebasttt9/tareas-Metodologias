'Use Strict';
//funcion sin parametros y sin retorno
function hola(){
    alert ("Ingresando");
 
}
saludo()


//funcion con parametros sin valor retorno
function suma(n1,n2){
    let result = n1 + n2;
    alert ("Resultado "+ result);
    suma(4, 7);
}
//funcion sin parametros y valor de retorno
function resta (a, b){
    return a - b;
}
let resultresta = resta (9,6);
alert ("Resultado "+ resultresta);

//Funcion con parametros sin valor retorno
function Arearesult (base,altura){
    let area = base * altura;
    return area;
}
let BaseA = 6;
let AlturaA = 7;
let result = Arearesult(BaseA,AlturaA );
alert  ("Area total "+Arearesult)
