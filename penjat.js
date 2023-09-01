                // Variables Globals
                var endevinades = [];
                var fallades = ["_","_","_","_","_","_","_"];
                var vides = 7;
                
                // Relació entre paraules y pistes.
                var paraules = ["fetge", "forca", " jujtges", "mengen", "penjat", "quinta", "setze"];
                var pistes = ["A la quinta forca",
                "A ca un penjat, no hi anomenis cordes",
                "Setze jutges d'un jutjat mengen fetge d'un penjat"];
                var paraulespistes = [1,2,0,2,2,2,1,0,1];
               
               // Escull una de les paraules aleatoriament
                var aleatori = Math.floor(Math.random() * paraules.length);
                var paraula = paraules[aleatori];
                var pista = pistes[paraulespistes[aleatori]];
               
                // Posará guions baixos segons les lletres que contengui la paraula escollida
                for (var i = 0; i < paraula.length; i++) { 
                    endevinades[i] = "_";
                }
                
                
                function Comprovar(){
                var lletra = document.getElementById("lletra").value;
                document.getElementById("lletra").value = "";

                // Mostra la pista sengons la paraula escollida
                var indexParaula = paraules.indexOf(paraula);
                var indexPista = paraulespistes[indexParaula];
                var pistaActual = pistes[indexPista];
                window.alert("Pista: " + pistaActual);

                // No compta les paraules fallades ja utilitzades
                if (fallades.includes(lletra)) {
                  window.alert ("Ja has utilitzat aquesta lletra");
                  return;
                  
                var pos = paraula.indexOf(lletra);
                
                if (pos > -1) {
                
                    //Sustitució de guió per lletra correcta
                    for (var i = pos; i < paraula.length; i++) {
                        if (paraula[i]== lletra){
                            endevinades[i]= lletra;
                        }
                    }
                  
                    window.alert('lletra' + " has encertat ");
                    document.getElementById("palabra").innerHTML = endevinades;
                    document.getElementById("miau").play ();
                  
                    if (endevinades.indexOf("_") == -1 ) {
                        document.body.style.backgroundImage = "escenario_party.png";
                        window.alert("has guanyat");
                    }
                }
                
                else {
                    
                    fallades[7 - vides] = letra;
                    document.getElementById("resultat").innerHTML = fallades;

                    vides = vides - 1;
                    document.getElementById("vides").innerHTML = vides;
                    if (vides == 6){
                        document.getElementById("ahorcado_6").hidden = false;
                    } else if (vides == 5){ 
                         document.getElementById("ahorcado_5").hidden = false;
                         document.getElementById("ahorcado_6").hidden = true;   
                    } else if (vides == 4){
                         document.getElementById("ahorcado_4").hidden = false;
                         document.getElementById("ahorcado_5").hidden = true; 
                    } else if (vides == 3){
                         document.getElementById("ahorcado_3").hidden = false;
                         document.getElementById("ahorcado_4").hidden = true; 
                    } else if (vides == 2){
                         document.getElementById("ahorcado_2").hidden = false;
                         document.getElementById("ahorcado_3").hidden = true; 
                    } else if (vides == 1){
                         document.getElementById("ahorcado_1").hidden = false;
                         document.getElementById("ahorcado_2").hidden = true; 
                    } else if (vides == 0){
                         document.getElementById("ahorcado_0").hidden = false;
                         document.getElementById("ahorcado_1").hidden = true; 
                    }
                    document.getElementById("boom_cloud").play();
                    } 
                    if (vides == 0){
                    document.body.style.backgroundImage = "escenario_cementario.png";
                    window.alert("has perdut");
                    }
                }
                
                function AmagaImg(){
                    document.getElementById("ahorcado_6").hidden = true;
                    document.getElementById("ahorcado_5").hidden = true;
                    document.getElementById("ahorcado_4").hidden = true;
                    document.getElementById("ahorcado_3").hidden = true;
                    document.getElementById("ahorcado_2").hidden = true;
                    document.getElementById("ahorcado_1").hidden = true;
                    document.getElementById("ahorcado_0").hidden = true;
                }
                
                function AmagaAud (){
                }




