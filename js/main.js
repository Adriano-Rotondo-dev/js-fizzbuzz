/* Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero
 e per i multipli di 5 stampi Buzz. 
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda: 
- Come faccio a sapere se un numero è divisibile per?
- Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
- scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
- proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

/* Instructions
- Creo un Ciclo For
- inizializzo la variabile "i" con un valore = 1 
- setto la condizione i < 100 
- setto l'incremento i++
- stampo il risultato per verificarne il funzionamento
- setto il modulo % 3 == 0 , al quale associo la stampa di "Fizz" per ottenerla solo sui multipli di 3
- setto il modulo % 5 == 0 , al quale associo la stampa di "Buzz" per ottenerla solo sui multipli di 5
- setto la condizione per cui ai numeri multipli di 3 e 5 sia associata la stampa "FizzBuzz"
*/

//Creo il For Loop e ne stampo il risultato in console

/*
    for(let i = 1; i <= 100; i++ ){
        console.log( i );

        - Setto il modulo % 3 == 0 e inserisco l'istruzione di stampa se divisibile per 3
        if ( i % 3 == 0 ) {
            console.log( i, " multiplo di 3");
        }
        - Setto il modulo % 5 == 0 e inserisco l'istruzione di stampa se divisibile per 5 
        else if ( i % 5 == 0 ) {
            console.log( i, "multiplo di 5");
            
        }
    }
*/

// verificato il funzionamento del programma
// lo riscrivo inserendo le informazioni richieste sui multipli di 3 e i multipli di 5

//Inizio For Loop
for (let i = 1; i <= 100; i++) {
    // inserisco la condizione per cui ai numeri multipli sia di 3 che di 5 sia associata la stampa "FizzBuzz"
    if (i % 3 == 0 && i % 5 == 0) { // inizializzo la condizione per i numeri multipli di entrambi
        console.log(i, "FizzBuzz") // stampa del FizzBuzz sui numeri multipli sia di 3 che di 5 
    }
    // inserisco la condizione del modulo % 3
    else if (i % 3 == 0) {  // inizializzo la condizione del modulo % 3 per la verifica dei multipli di 3
        console.log(i, "Fizz") // stampa Fizz sui multipli di 3
    }
    // inserisco la condizione del modulo % 5     
    else if (i % 5 == 0) {  // inizializzo la condizione del modulo % 5 per la verifica dei multipli di 5
        console.log(i, "Buzz")
    } // stampa del Buzz sui multipli di 5
    else {
        console.log(i) // stampa il numero non multiplo di 3 e/o 5
    }
} 