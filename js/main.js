// Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

var btnGenera = document.getElementById('genera');
var btnAnnulla = document.getElementById('annulla');

btnGenera.addEventListener("click",
    function() {
        var nome = document.getElementById("nome_cognome").value;
        var km = parseInt( document.getElementById("km").value );
        var fasciaEta = document.getElementById("fascia").value;
        
        // calcolo biglietto
        var prezzoBiglietto = km * 0.21;
        if (fasciaEta == "minorenne") {
            prezzoBiglietto = prezzoBiglietto - ( (prezzoBiglietto / 100) * 20 );
            console.log(prezzoBiglietto);
        } else if (fasciaEta == "over") {
            prezzoBiglietto = prezzoBiglietto - ( (prezzoBiglietto / 100) * 40 );
            console.log(prezzoBiglietto);
        }

        // stampare dati biglietto su html
        document.getElementById('nome_passeggero').innerHTML = nome;
        if ( fasciaEta == "minorenne" ) {
            document.getElementById('offerta').innerHTML = "Sconto minorenni";
        } else if ( fasciaEta == "over" ) {
            document.getElementById('offerta').innerHTML = "Sconto silver";

        } else {
            document.getElementById('offerta').innerHTML = "Biglietto Standard"
        }
        // carrozza e codice cp
        document.getElementById('carrozza').innerHTML = Math.floor( Math.random() * 10) + 1;
        document.getElementById('cp').innerHTML = Math.floor( Math.random() * ( 99999 - 90000 ) ) + 90000;
        // stampa prezzo
        document.getElementById('totale').innerHTML = prezzoBiglietto.toFixed(2) + " €";

        // ticket_box visibile
        document.getElementById("biglietto").classList.add("open");
    }

)

btnAnnulla.addEventListener("click",

    function() {
        // ticket_box non visibile
        document.getElementById("biglietto").classList.remove("open");

        // reset campi
        document.getElementById("nome_cognome").value = "";
        document.getElementById("km").value = "";
        document.getElementById("fascia").value = "";
        
    }

)


