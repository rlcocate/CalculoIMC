/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

function myEventHandler() {
    "use strict" ;


}

function calcularImc()
{
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    
    //var imc = peso/Math.pow(altura,2);
    var imc = peso/(altura*altura);
    var msg = "";
    
    
    var resultado = document.getElementById("resultado");
    
    if (imc < 17)
    {
        msg = "Muito abaixo do peso";
        resultado.className = "red";
    }
    else if(imc < 18.5)
    {
        msg = "Abaixo do peso";
        resultado.className = "yellow";
    }
    else if(imc < 25)
    {
        msg = "Peso normal";
        resultado.className = "green";
    }
    else if(imc < 30)
    {
        msg = "Acima do peso";
        resultado.className = "yellow";
    }
    else if(imc < 35)
    {
        msg = "Obesidade I";
        resultado.className = "yellow";
    }
    else if(imc < 40)
    {
        msg = "Obesidade II";
        resultado.className = "red";
    }
    else
    {
        msg = "Obesidade III";
        resultado.className = "red";
    }
    
    resultado.innerHTML = msg;
}

var botao = document.getElementById("botao");
botao.onclick = function(){
    calcularImc();
}




// ...additional event handlers here...











