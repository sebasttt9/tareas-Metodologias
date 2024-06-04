'Use Strict';
//1.declarando la funcion
function mostrarmensaje(){
    alert ("Hola");
}
//2.Llamar a la funcion
//mostrarmensaje();

function mostrarmensajeconnombre(nombre){
    alert ("Hola "+nombre);
    }

    mostrarmensajeconnombre("Alfonso");

function generarfrase(){
    return "Hola mundo";
}

alert (generarfrase ()); // Necesario el alert


function sumarnums (a,b){
    let result = a + b;
    return result;
}
alert (sumarnums (3,2));