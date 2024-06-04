'Use Strict';

let Premio = 16;
let num;
let cont = 0;

do{ 
    cont ++;
     num = Number(prompt("Ingresar Número"))
}while(num != Premio && cont < 3);

if( cont == 3 && num != Premio){
   alert ("You Lose "+cont);
}else{
    alert ("You Win")
alert ("Atempts "+cont);
};