var kmDaPercorrere = prompt("Quanti km devi percorrere?");
var age = prompt("Quanti anni hai?");

var costoBiglietto = kmDaPercorrere * 0.21;
if (age < 18) || (age === 18) {
    var bigliettoScontato = costoBiglietto * 0.8;
} else
document.getElementById("costo").innerHTML = bigliettoScontato;