'Use Strict';

//declarando función
function validateField(isVisible,SHOW,hide){
    if (isVisible) {
            SHOW();
        }else{
            hide();
        }
}

//expresion de función
let SHOWFIELD = function(){
    alert ("Campo Visible");
}

//función flecha
let hidefield = () => alert ("Campo Oculto");

validateField (true, SHOWFIELD, hidefield); //-->callbacks function