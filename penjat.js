<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Versió amb imatges & sons del penjat</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="penjat.css">
        <scrpit src="penjat.js"></scrpit>
        <script>
            function Comprovar(){
				var letra = document.getElementById("letra").value;

				var palabra = document.getElementById("palabra").value;

                if (letra >= "m"){

                    document.getElementById("resultat").innerHTML = "encert";

                }

                else {

                    document.getElementById("resultat").innerHTML = "fallat";

                }

                // var vides= document.getElementById("").value;



            }        
function AmagaImg()
        </script>
    </head>
    <body>
        <h1>Prototip Joc del Penjat</h1>
        <input id="letra" type="text"
               placeholder= "Escriu una lletra minuscula"/>
        <button onclick="Comprovar()">Comprovar</button>
        <h2>Paraula</h2>

        <div id="palabra">_ _ _ _ _ _ _

        <h2>Vides</h2>
        <div id="vides">
        <h2>Lletres</h2>
        <div id="resultat">_ _ _ _ _ _ _
        <!-- <div id="resultat">Aqui apareixera el resultat!</div> -->
        
<img src="img/ahorcado_0.png" alt=""/>
<img src="img/ahorcado_1.png" alt=""/>
<img src="img/ahorcado_2.png" alt=""/>
<img src="img/ahorcado_3.png" alt=""/>
<img src="img/ahorcado_4.png" alt=""/>
<img src="img/ahorcado_5.png" alt=""/>
<img src="img/ahorcado_6.png" alt=""/>
</body>



