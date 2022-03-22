//Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine=[
    {
        varietà: 'gialla',
        peso: 1, 
        lunghezza: 10,
    },
    {
        varietà: 'verde',
        peso: 2,
        lunghezza: 14,
    },
    {
        varietà: 'rossa',
        peso:3,
        lunghezza: 13,
    },
    {
        varietà: 'viola',
        peso: 4, 
        lunghezza: 9,
    },
    {
        varietà: 'blu',
        peso: 5,
        lunghezza: 19,
    },
    {
        varietà: 'nera',
        peso:6,
        lunghezza: 20,
    },
    {
        varietà: 'arancione',
        peso: 7,
        lunghezza: 21
    },
    {
        varietà: 'grigia',
        peso: 8,
        lunghezza: 22,
    },
    {
        varietà: 'bianca',
        peso: 9,
        lunghezza: 23,
    },
    {
        varietà: 'rosa',
        peso: 10,
        lunghezza: 24,
    },
];

//creo due array vuoti
const zucchineCorte=[];
const zucchineLunghe=[];

//creo un ciclo per far misurare le lunghezze delle zucchine e dividerle negli appositi array
for(let i = 0; i < zucchine.length; i++){

    if(zucchine[i].lunghezza < 15){
        zucchineCorte.push(zucchine[i])
    }
    else if(zucchine[i].lunghezza > 15)[
        zucchineLunghe.push(zucchine[i])
    ]
}

//stampo i due array 
console.log(zucchineCorte);
console.log(zucchineLunghe);


