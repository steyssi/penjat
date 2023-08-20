                // Variables Globales
                var endevinades = [];
                var fallades = ["_","_","_","_","_","_","_"];
                var vides = 7;
                
                // Relación entre palabras y pistas.
                var paraules = ["fetge", "forca", " jujtges", "mengen", "penjat", "quinta", "setze"];
                var pistes = ["A la quinta forca",
                "A ca un penjat, no hi anomenis cordes",
                "Setze jutges d'un jutjat mengen fetge d'un penjat"];
                var paraulespistes = [1,2,0,2,2,2,1,0,1];
               
               // Escoge una de las palabras aleatoriamente
                var aleatori = Math.floor(Math.random() * paraules.length);
                var paraula = paraules[aleatori];
                var pista = pistes[paraulespistes[aleatori]];
               
                // Pondrá guiones bajos segun las letras que contenga la palabra escogida
                for (var i = 0; i < paraula.length; i++) { 
                    endevinades[i] = "_";
                }
                
                
                function Comprovar(){
                // var palabra = document.getElementById("palabra").value;
                var letra = document.getElementById("letra").value;
                document.getElementById("letra").value = "";

                
                
                if (fallades.includes(letra)) {
                  window.alert ("Ja has utilitzat aquesta lletra");
                  return;
                  
                var pos = paraula.indexOf(letra);
                 window.alert(paraula);
                if (pos > -1) {
                    /*
                    if (document.getElementById("palabra").innerHTML == "_ _ _ _ _ _ _")
                      {document.getElementById("palabra").innerHTML = "";}
                    document.getElementById("palabra").innerHTML = 
                    document.getElementById("palabra").innerHTML + letra + " ";
                    */
            
                    //Sustitución de guion por letra correcta
                    for (var i = pos; i < paraula.length; i++) {
                        if (paraula[i]== letra){
                            endevinades[i]= letra;
                        }
                    }
                    window.alert('letra' + " has encertat ");
                    document.getElementById("palabra").innerHTML = endevinades;
                    
                    document.getElementById("miau").play ();
                    if (endevinades.indexOf("_") == -1 ) {
                        document.body.style.backgroundImage = "url('img/Party.png')";
                        window.alert("has guanyat");
                    }
                }
                
                else {
                    
                    fallades[7 - vides] = letra;
                    document.getElementById("resultat").innerHTML = fallades;
                    
                    /*
                    if (document.getElementById("resultat").innerHTML == "_ _ _ _ _ _ _")
                       {document.getElementById("resultat").innerHTML = "";}
                    document.getElementById("resultat").innerHTML = 
                    document.getElementById("resultat").innerHTML + letra + " ";
                    */

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
                    document.body.style.backgroundImage = "url('img/Castle2.png')";
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




