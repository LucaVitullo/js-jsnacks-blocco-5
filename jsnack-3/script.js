//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

const parola= prompt('inserisci una parola');

let parolaAlContrario='';

for(let i = parola.length -1; i >=0 ; i--){

     parolaAlContrario += parola[i];
}

console.log(parolaAlContrario);


