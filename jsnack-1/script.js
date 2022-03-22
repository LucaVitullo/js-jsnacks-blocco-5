//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchine=[
    {
        varietà: 'gialla',
        peso: 1, 
        lunghezza: 10,
    },
    {
        varietà: 'verde',
        peso: 2,
        lunghezza: 15,
    },
    {
        varietà: 'rossa',
        peso:3,
        lunghezza: 17,
    },
    {
        varietà: 'viola',
        peso: 4, 
        lunghezza: 18,
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
        peso:10,
        lunghezza: 24,
    },
];

    let somma=0;

    for(let i=0; i < zucchine.lenght;i++){
        const elemento = zucchine[i].peso;
        somma += elemento;

        console.log(i)
    }
    console.log(somma)


