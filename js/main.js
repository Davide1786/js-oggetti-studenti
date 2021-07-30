// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(),
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Buon lavoro, vi ricordo che oggi avrete ancora la possibilità di aprire dei ticket per problematiche relative a questo esercizio :)


let inserimentoDati = 

   {
      'insNome' : prompt("Inserisci il tuo nome"),
      'insCognome' : prompt("Inserisci il tuo cognome"),
      'insEta' : parseInt(prompt("Inserisci la tua età"))
   }
;
console.log(inserimentoDati);


const studente = {
   'nome': 'Davide',
   'cognome': 'Napolitano',
   'eta': 35
}

for(const key in studente) 
{
   console.log(studente[key]);
}

const studenti = 
[
   {
      'nome': 'Piotr',
      'cognome': 'Zieliński',
      'eta': 27
   },
   
   {
      'nome': 'Lorenzo',
      'cognome': 'Insigne',
      'eta': 30
   },
   
   {
      'nome': 'Kalidou',
      'cognome': 'Koulibaly',
      'eta': 30
   }
];
studenti.push(inserimentoDati)
console.log("a: " + studenti.length)


// accedo a tutti gli elementi del nostro array di classi
for (let i = 0; i < studenti.length; i++){
   console.log(studenti[i]);
// accedo a tutti gli elementi figli delle classi
   for (let key in studenti[i]){
      console.log(key + " : " + studenti[i][key]);
   }
}



