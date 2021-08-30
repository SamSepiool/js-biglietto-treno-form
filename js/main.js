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

       


        // ticket_box visibile
        document.getElementById("biglietto").classList.add("open");
    }

)


