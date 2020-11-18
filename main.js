// Chiedere all’utente il cognome
var cognome = prompt("Inserisci il tuo cognome").toUpperCase();

// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var lista = [
  "Bianchi",
  "Rossi",
  "Duzioni",
  "Balsano",
  "Verdi"
];
lista.push(cognome);
console.log(lista);

// stampa la lista ordinata alfabeticamente
lista.sort(); //viene utilizzato per ordinare alfabeticamente
for (var i = 0; i < lista.length; i++) {
  var item = lista[i];
  var listaContainer = document.getElementById('lista-container').innerHTML;
  document.getElementById('lista-container').innerHTML = listaContainer + "<li>" + item + "</li>";
}

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
var position = lista.indexOf(cognome);
i = 0;
document.getElementById('posizione').innerHTML = position + (i + 1);
