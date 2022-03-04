const età = prompt('iserisci età: ');
let km = parseFloat(prompt('inserisci km da percorrere: ')).toFixed(2);
let prezzo = 0.21;

switch (true) {
    case età < 18:
        prezzo = prezzo * km - (prezzo * km * 0.20);
        document.getElementById('ticket_price').innerText = 'Il prezzo del biglietto scontato per Under 18 è di euro' + ' ' + prezzo.toFixed(2);
        break;

    case età >= 65:
        prezzo = prezzo * km - (prezzo * km * 0.40);
        document.getElementById('ticket_price').innerText = 'Il prezzo del biglietto scontato per over  65 è di euro' + ' ' + prezzo.toFixed(2);
        break;
    default:
        prezzo = prezzo * km;
        document.getElementById('ticket_price').innerText = 'Il prezzo del biglietto è di euro: ' + ' ' + prezzo.toFixed(2);
}

