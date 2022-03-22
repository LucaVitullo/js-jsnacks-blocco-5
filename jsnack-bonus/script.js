/*Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro,
 es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
 */

 const array1=['a','b','c','d','e','f','g','h','i','l'];
 const array2=[1,2,3,4,5,6,7,8,9,10];
 const array3=[];


function fondaArray(){
    for(let i =0; i < array1.length; i++){
        array3.push(array1[i]);   
        array3.push(array2[i]);   
    }
    console.log(array3);
}

fondaArray();



/*Scrivi una funzione che accetti tre argomenti: un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
 La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”*/

 const array =['b','u','o','n','g','i','o','r','n','o'];

function myFunction (array,min,max){

   let arrayVuoto=[];
    for(let i = min; i < max - min; i++){

        arrayVuoto.push(array[i]);
    }
    return arrayVuoto;

}

let arrayVuoto = myFunction(array,1,10);
console.log(arrayVuoto);

