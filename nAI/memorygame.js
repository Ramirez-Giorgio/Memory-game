let carte = [10,6,1,4,7,2,8,5,9,3,1,3,2,10,4,7,9,5,6,8];//i numeri nelle carte 10 coppie

let primacarta = "";//numero della prima e seconda carta inizializzati
let seccarta = "";
let firstButton;//quando clicco il primo bottone si salva 
let secondButton;//questo per il secondo bottone
let blocco = 0;        
let clickCounter = 0;  
let coppieTrovate = 0;

let game = document.getElementById("game"); //mi collego al html
let clicksSpan = document.getElementById("clicks");//stessa cosa per vedere i clicl

for (let i = 0; i < carte.length; i++) {
    let btn = document.createElement("button");//creo il bottne
    btn.innerHTML = "?";

    btn.onclick = function () {//aggiunge l'evento(funzione)
        if (blocco == 1 || btn.innerHTML != "?") {
            return;//nessuna carta veine scoperta se ho gia cliccato 2 volte e 2 carte sono scoperte
        }
        btn.innerHTML = carte[i];//metto il numero nella carta
        clickCounter +=1;
        clicksSpan.innerHTML = clickCounter;
        if (clickCounter == 1) {//scoper il numero della prima carta
            primacarta = btn.innerHTML;
            firstButton = btn;
        } 
        else if (clickCounter == 2) {//scoper il numero della seconda carta
            seccarta = btn.innerHTML;
            secondButton = btn;
            blocco = 1;
            if (primacarta == seccarta) {
                coppieTrovate+=1;
                resetCoppia(); 
                if (coppieTrovate == 10) {
                    alert("Gioco finito:)");//alert finale
                }
            } 
            else {
                setTimeout(function () {
                    firstButton.innerHTML = "?";//rigira le carte
                    secondButton.innerHTML = "?";
                    resetCoppia();
                }, 800);
            }
        }
    };
    game.appendChild(btn);
}

function resetCoppia() {//resetto il contatore
    clickCounter = 0;
    clicksSpan.innerHTML = clickCounter;
    blocco = 0;
}
